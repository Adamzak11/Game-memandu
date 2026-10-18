import { buildVehicle, setLightState, CAR_COLORS, VEHICLE_SPECS } from '../world/models.js';
import { forwardOf, toLocal, smoothstep, KMH } from './util.js';

// AI trafik NPC.
// - Mengikut lorong (graf lorong) dengan model Intelligent Driver Model (IDM) untuk jarak.
// - Berhenti di lampu merah, papan BERHENTI, beri laluan, dan lintasan pejalan kaki.
// - Simpang tanpa lampu menggunakan tempahan (reservation) laluan yang tidak bercanggah.
// - Tukar lorong hanya di lebuh raya, ke kanan untuk memotong dan kembali ke kiri.
// State: FOLLOW_LANE, APPROACH_STOP, BRAKE, WAIT, TURN, CHANGE_LANE, RECOVER

const PARAMS = {
  car: { a: 1.8, b: 2.4, T: 1.4, s0: 2.5 },
  hatch: { a: 1.8, b: 2.4, T: 1.4, s0: 2.5 },
  motorcycle: { a: 2.2, b: 2.6, T: 1.2, s0: 2.0 },
  lorry: { a: 0.9, b: 2.0, T: 1.9, s0: 3.5 },
  bus: { a: 1.0, b: 2.0, T: 1.8, s0: 3.5 }
};

let NPC_ID = 1;

function circlesFor(v) {
  const n = Math.max(1, Math.round(v.length / Math.max(1.2, v.width)));
  const r = v.width / 2;
  const f = forwardOf(v.yaw);
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = n === 1 ? 0 : -v.length / 2 + r + ((v.length - 2 * r) * i) / (n - 1);
    out.push({ x: v.x + f.x * t, z: v.z + f.z * t, r });
  }
  return out;
}

export class TrafficManager {
  constructor(world) {
    this.world = world;
    this.net = world.network;
    this.scene = world.scene;
    this.npcs = [];
    this.pool = new Map();
    this.config = { count: 0, kinds: [] };
    this.spawnTimer = 0;
    this.oncomingTimer = 0;
    this.time = 0;
  }

  configure(config) {
    this.config = { count: 0, kinds: [], ...config };
  }

  clear() {
    for (const n of [...this.npcs]) this._remove(n);
    for (const node of this.net.nodes.values()) node.reservations.clear();
  }

  reset(player) {
    this.clear();
    this.time = 0;
    this.oncomingTimer = 2;
    for (const s of this.config.scripted || []) {
      const spot = this.net.laneSpot(s.edge, s.dir, s.t, s.lane || 0);
      const npc = this._spawn(s.type, spot.lane, spot.s, s.color ?? 0x1e6fd9);
      npc.scripted = true;
      npc.fixedV0 = s.speedKmh / KMH;
      npc.v = npc.fixedV0;
    }
    // isi awal
    for (let i = 0; i < this.config.count * 3 && this.npcs.length < this.config.count; i++) this._trySpawnRandom(player, 45, 380);
    if (this.config.oncoming) {
      for (const t of [260, 560, 900]) this._spawnOncoming(player, t);
    }
  }

  // ---------- spawn ----------
  _getModel(type) {
    const arr = this.pool.get(type);
    if (arr && arr.length) return arr.pop();
    const color = CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)];
    const busColors = [0xe53935, 0x1e88e5, 0x43a047, 0xfdd835];
    const c = type === 'bus' ? busColors[Math.floor(Math.random() * busColors.length)] : type === 'lorry' ? [0x1e6fd9, 0xd84315, 0x2e7d32, 0xf9a825][Math.floor(Math.random() * 4)] : color;
    return buildVehicle(type, c);
  }

  _spawn(type, lane, s, color) {
    const model = color !== undefined && !this.pool.get(type)?.length ? buildVehicle(type, color) : this._getModel(type);
    model.group.traverse((o) => {
      o.layers.set(0);
    });
    this.scene.add(model.group);
    const spec = VEHICLE_SPECS[type];
    const p = PARAMS[type];
    const limit = lane.limit / KMH;
    let factor = 0.88 + Math.random() * 0.12;
    if (type === 'lorry') factor = Math.min(1, 80 / lane.limit) * (0.82 + Math.random() * 0.08);
    if (type === 'bus') factor = Math.min(1, 90 / lane.limit) * 0.85;
    const npc = {
      id: NPC_ID++,
      type,
      model,
      length: spec.length,
      width: spec.width,
      p,
      lane,
      s,
      v: limit * factor * 0.8,
      factor,
      plan: [],
      prevLane: null,
      reservation: null,
      stopDone: false,
      stopTimer: 0,
      state: 'FOLLOW_LANE',
      lc: null,
      lcCooldown: 4 + Math.random() * 4,
      lcPrep: 0,
      lcTarget: null,
      stuck: 0,
      recover: 0,
      signal: 0,
      brake: false,
      x: 0,
      z: 0,
      yaw: 0,
      speed: 0,
      scripted: false,
      fixedV0: null
    };
    this._pose(npc, 0);
    this.npcs.push(npc);
    return npc;
  }

  _remove(npc) {
    this.scene.remove(npc.model.group);
    if (npc.reservation) npc.reservation.reservations.delete(npc);
    npc.reservation = null;
    const arr = this.pool.get(npc.type) || [];
    arr.push(npc.model);
    this.pool.set(npc.type, arr);
    const i = this.npcs.indexOf(npc);
    if (i >= 0) this.npcs.splice(i, 1);
  }

  _randomType(kind) {
    const r = Math.random();
    if (kind === 'highway') return r < 0.6 ? 'car' : r < 0.72 ? 'hatch' : r < 0.9 ? 'lorry' : 'bus';
    if (kind === 'rural') return r < 0.55 ? 'car' : r < 0.75 ? 'hatch' : r < 0.9 ? 'motorcycle' : 'lorry';
    return r < 0.5 ? 'car' : r < 0.72 ? 'hatch' : r < 0.9 ? 'motorcycle' : r < 0.96 ? 'bus' : 'lorry';
  }

  _spaceFree(x, z, r) {
    for (const n of this.npcs) if (Math.hypot(n.x - x, n.z - z) < r + n.length / 2) return false;
    return true;
  }

  _trySpawnRandom(player, minR, maxR) {
    const kinds = this.config.kinds || [];
    if (!kinds.length) return false;
    const lanes = this.net.lanes.filter((l) => !l.isConnector && kinds.includes(l.edge.kind));
    for (let attempt = 0; attempt < 25; attempt++) {
      const lane = lanes[Math.floor(Math.random() * lanes.length)];
      if (lane.length < 30) continue;
      const s = 8 + Math.random() * (lane.length - 30);
      const p = this.net.lanePointAt(lane, s);
      const d = Math.hypot(p.x - player.x, p.z - player.z);
      if (d < minR || d > maxR) continue;
      if (!this._spaceFree(p.x, p.z, lane.edge.kind === 'highway' ? 45 : 18)) continue;
      if (Math.hypot(p.x - player.x, p.z - player.z) < 30) continue;
      this._spawn(this._randomType(lane.edge.kind), lane, s);
      return true;
    }
    return false;
  }

  _spawnOncoming(player, ahead) {
    const cfg = this.config.oncoming;
    const edge = this.net.edges.get(cfg.edge);
    const pr = this.net.projectOnEdge(edge, player.x, player.z);
    const sc = pr.s + ahead;
    if (sc > edge.length - edge.rTo - 10) return;
    const lane = edge.lanes.bwd[0];
    const s = this.net.centerToLaneS(lane, sc);
    const p = this.net.lanePointAt(lane, s);
    if (!this._spaceFree(p.x, p.z, 25)) return;
    const r = Math.random();
    const npc = this._spawn(r < 0.7 ? 'car' : r < 0.85 ? 'hatch' : 'lorry', lane, s);
    npc.v = npc.lane.limit / KMH * npc.factor;
  }

  // ---------- perancangan laluan ----------
  _ensurePlan(npc) {
    while (npc.plan.length < 3) {
      const last = npc.plan.length ? npc.plan[npc.plan.length - 1] : npc.lane;
      if (!last.next.length) break;
      let pick;
      if (last.next.length === 1) pick = last.next[0];
      else {
        const w = last.next.map((c) => (c.turn === 'S' ? 2 : 1));
        let r = Math.random() * w.reduce((a, b) => a + b, 0);
        pick = last.next[0];
        for (let i = 0; i < w.length; i++) {
          r -= w[i];
          if (r <= 0) {
            pick = last.next[i];
            break;
          }
        }
      }
      npc.plan.push(pick);
    }
  }

  // titik-titik laluan di hadapan (untuk sensor) + had laju di hadapan
  _samplePath(npc, maxD) {
    const pts = [];
    let lane = npc.lane;
    let s = npc.s;
    let d = 0;
    let k = -1;
    const step = 2.5;
    let vCap = Infinity;
    while (d < maxD) {
      const rem = lane.length - s;
      if (rem > 0.01) {
        const p = this.net.lanePointAt(lane, s);
        pts.push({ x: p.x, z: p.z, d, dx: p.dx, dz: p.dz });
        const kc = lane.curv[p.i] || 0;
        if (kc > 1e-4) vCap = Math.min(vCap, Math.sqrt(Math.sqrt(2.6 / kc) ** 2 + 2 * 1.8 * Math.max(0, d - npc.length / 2)));
        const adv = Math.min(step, rem);
        s += adv;
        d += adv;
      } else {
        k++;
        if (k >= npc.plan.length) break;
        lane = npc.plan[k];
        s = 0;
        const lim = lane.limit / KMH;
        vCap = Math.min(vCap, Math.sqrt(lim * lim + 2 * 1.8 * Math.max(0, d - npc.length / 2)));
      }
    }
    return { pts, vCap };
  }

  // ---------- simpang ----------
  _playerThreatensNode(node, player) {
    const dx = node.x - player.x;
    const dz = node.z - player.z;
    const dist = Math.hypot(dx, dz);
    if (dist < node.radius) return true;
    if (dist > node.radius + 40) return false;
    const f = forwardOf(player.yaw);
    const closing = (dx * f.x + dz * f.z) / (dist || 1) * player.speed;
    return closing > 1 && (dist - node.radius) / closing < 3.0;
  }

  _tryReserve(npc, node, conn, minor, player) {
    for (const [other, oc] of node.reservations) {
      if (other === npc) return true;
      if (oc.conflicts.has(conn)) return false;
    }
    if (this._playerThreatensNode(node, player)) return false;
    if (minor) {
      for (const ap of node.approaches) {
        if (ap.control !== 'priority') continue;
        for (const o of this.npcs) {
          if (o === npc || !ap.lanes.includes(o.lane)) continue;
          const rem = o.lane.length - o.s;
          if (o.v > 1 && rem < Math.max(25, o.v * 4)) return false;
        }
      }
    }
    node.reservations.set(npc, conn);
    npc.reservation = node;
    return true;
  }

  // ---------- kemas kini ----------
  update(dt, player, pedestrians) {
    this.time += dt;
    const lights = this.world.lights;

    // permintaan lampu isyarat
    for (const c of lights.controllers.values()) {
      for (const ap of c.approaches) ap.demand = false;
    }
    for (const n of this.npcs) {
      const ap = n.lane.approach;
      if (ap && ap.node.control === 'signal' && n.lane.length - n.s < 60) ap.demand = true;
    }
    const pl = player.laneInfo;
    if (pl && pl.lane && !pl.lane.isConnector && pl.lane.approach && pl.lane.length - pl.s < 70) pl.lane.approach.demand = true;
    lights.update(dt);

    // halangan (kenderaan + pejalan kaki di atas jalan)
    const obstacles = [];
    for (const n of this.npcs) {
      const circles = circlesFor(n);
      if (n.lc) {
        // NPC yang sedang masuk ke lorong lain dianggap sudah berada di lorong sasaran
        const p = this.net.lanePointAt(n.lane, Math.min(n.s, n.lane.length));
        circles.push(...circlesFor({ x: p.x, z: p.z, yaw: Math.atan2(-p.dx, -p.dz), length: n.length, width: n.width }));
      }
      obstacles.push({ ref: n, x: n.x, z: n.z, yaw: n.yaw, speed: n.v, circles });
    }
    obstacles.push({ ref: player, x: player.x, z: player.z, yaw: player.yaw, speed: Math.max(0, player.speed), circles: circlesFor(player) });
    for (const p of pedestrians.peds) {
      if (pedestrians.onRoad(p)) obstacles.push({ ref: p, x: p.x, z: p.z, yaw: 0, speed: 0, circles: [{ x: p.x, z: p.z, r: 0.45 }] });
    }

    for (const npc of [...this.npcs]) this._updateNPC(npc, dt, player, obstacles, pedestrians, lights);

    // spawn / despawn
    for (const npc of [...this.npcs]) {
      const d = Math.hypot(npc.x - player.x, npc.z - player.z);
      if (!npc.scripted && d > 520) this._remove(npc);
      else if (!npc.scripted && npc.stuck > 45 && d > 70) this._remove(npc);
    }
    this.spawnTimer -= dt;
    if (this.spawnTimer <= 0) {
      this.spawnTimer = 0.4;
      const nonScripted = this.npcs.filter((n) => !n.scripted).length;
      if (nonScripted < this.config.count) this._trySpawnRandom(player, 170, 430);
    }
    if (this.config.oncoming) {
      this.oncomingTimer -= dt;
      if (this.oncomingTimer <= 0) {
        this.oncomingTimer = 11 + Math.random() * 12;
        this._spawnOncoming(player, 430 + Math.random() * 60);
      }
    }
  }

  _updateNPC(npc, dt, player, obstacles, pedestrians, lights) {
    this._ensurePlan(npc);
    const p = npc.p;
    const v = npc.v;
    const lane = npc.lane;
    const lim = lane.limit / KMH;
    let v0 = npc.fixedV0 ?? lim * npc.factor;
    if (npc.recover > 0) {
      npc.recover -= dt;
      v0 *= 0.5;
    }
    const lookD = Math.max(40, v * 4 + 15);
    const { pts, vCap } = this._samplePath(npc, lookD);
    v0 = Math.max(0.5, Math.min(v0, vCap));

    // pemimpin (leader) melalui sensor laluan
    let leaderGap = Infinity;
    let leaderV = 0;
    let leaderRef = null;
    const myR = npc.width / 2 + 0.35;
    for (const ob of obstacles) {
      if (ob.ref === npc) continue;
      if (Math.abs(ob.x - npc.x) > lookD + 15 || Math.abs(ob.z - npc.z) > lookD + 15) continue;
      for (const c of ob.circles) {
        for (const pt of pts) {
          if (pt.d < npc.length / 2 - 0.5) continue;
          const dd = Math.hypot(pt.x - c.x, pt.z - c.z);
          if (dd < c.r + myR) {
            const gap = pt.d - npc.length / 2 - c.r;
            if (gap < leaderGap) {
              leaderGap = gap;
              const of = forwardOf(ob.yaw);
              leaderV = Math.max(0, ob.speed * (of.x * pt.dx + of.z * pt.dz));
              leaderRef = ob.ref;
            }
            break;
          }
        }
      }
    }

    // sasaran berhenti (garisan berhenti / lintasan)
    let stopGap = Infinity;
    let approaching = false;
    const next = npc.plan[0];
    if (!lane.isConnector && lane.approach && next && next.isConnector) {
      const ap = lane.approach;
      const rem = lane.length - npc.s - npc.length / 2 - 0.6;
      const commit = Math.max(6, (v * v) / (2 * 3) + 4);
      const node = ap.node;
      const ctl = ap.control;
      if (ctl === 'signal') {
        const st = lights.stateOf(ap);
        const canStop = rem > (v * v) / (2 * 3.5) + 0.5;
        if (npc.reservation === node) {
          // sudah komited
        } else if (st === 'green' || (st === 'yellow' && !canStop)) {
          if (rem < commit && !this._tryReserve(npc, node, next, false, player)) stopGap = rem;
        } else {
          stopGap = rem;
        }
        approaching = rem < 60 && stopGap !== Infinity;
      } else if (ctl === 'stop') {
        if (!npc.stopDone) {
          stopGap = rem;
          if (rem < 1.8 && v < 0.3) {
            npc.stopTimer += dt;
            if (npc.stopTimer > 1.2) npc.stopDone = true;
          }
        } else if (npc.reservation !== node && !this._tryReserve(npc, node, next, true, player)) {
          stopGap = rem;
        }
        approaching = rem < 60;
      } else if (ctl === 'giveway') {
        if (rem < 25) v0 = Math.min(v0, 4.5);
        if (npc.reservation !== node && rem < commit && !this._tryReserve(npc, node, next, true, player)) stopGap = rem;
        approaching = rem < 40;
      } else if (ctl === 'priority') {
        if (npc.reservation !== node && rem < commit && !this._tryReserve(npc, node, next, false, player)) stopGap = rem;
      }
    }
    // lintasan zebra
    const checkCross = (ln, sOffset, sFrom) => {
      for (const c of ln.crossings) {
        const dist = sOffset + (c.s - sFrom);
        if (dist < 0 || dist > 45) continue;
        if (pedestrians.isBlocked(c.crossing)) {
          const g = dist - npc.length / 2 - 3.6;
          if (g > -1.5) stopGap = Math.min(stopGap, Math.max(0, g));
        }
      }
    };
    checkCross(lane, 0, npc.s);
    if (next) checkCross(next, lane.length - npc.s, 0);

    // IDM
    const idm = (gap, vl) => {
      const g = Math.max(0.05, gap);
      const sStar = p.s0 + Math.max(0, v * p.T + (v * (v - vl)) / (2 * Math.sqrt(p.a * p.b)));
      return p.a * (1 - Math.pow(v / v0, 4) - (sStar / g) ** 2);
    };
    const free = p.a * (1 - Math.pow(v / v0, 4));
    let acc = free;
    if (leaderGap < Infinity) acc = Math.min(acc, idm(leaderGap, leaderV));
    if (stopGap < Infinity) {
      // berhenti tepat di garisan: s0 kecil untuk sasaran statik
      const g = Math.max(0.05, stopGap + p.s0 - 0.6);
      acc = Math.min(acc, idm(g, 0));
      if (stopGap < 0.3 && v < 1.5) acc = Math.min(acc, -6);
    }
    acc = Math.max(-9, Math.min(p.a, acc));
    if (acc < -6 && v > 3) npc.recover = 2;
    npc.v = Math.max(0, v + acc * dt);
    if (npc.v < 0.05 && acc < 0) npc.v = 0;
    npc.acc = acc;

    // tukar lorong (lebuh raya)
    this._laneChangeLogic(npc, dt, leaderGap, leaderV, v0, player);

    // gerak
    npc.s += npc.v * dt;
    while (npc.s > npc.lane.length) {
      const over = npc.s - npc.lane.length;
      const nxt = npc.plan.shift();
      if (!nxt) {
        this._remove(npc);
        return;
      }
      if (npc.lane.isConnector && npc.reservation) {
        npc.reservation.reservations.delete(npc);
        npc.reservation = null;
      }
      if (nxt.isConnector && !npc.reservation && nxt.node.control !== 'none') {
        // terpaksa masuk (contoh: tidak sempat berhenti) — daftar supaya NPC lain menunggu
        nxt.node.reservations.set(npc, nxt);
        npc.reservation = nxt.node;
      }
      npc.prevLane = npc.lane;
      npc.lane = nxt;
      npc.s = over;
      npc.stopDone = false;
      npc.stopTimer = 0;
      npc.lc = null;
      this._ensurePlan(npc);
    }

    // state untuk paparan / ujian
    if (npc.lc || npc.lcPrep > 0) npc.state = 'CHANGE_LANE';
    else if (npc.lane.isConnector && npc.lane.turn !== 'S') npc.state = 'TURN';
    else if (npc.v < 0.2 && (stopGap < 3 || leaderGap < 4)) npc.state = 'WAIT';
    else if (npc.recover > 0) npc.state = 'RECOVER';
    else if (acc < -2.5) npc.state = 'BRAKE';
    else if (approaching) npc.state = 'APPROACH_STOP';
    else npc.state = 'FOLLOW_LANE';
    npc.stuck = npc.v < 0.1 ? npc.stuck + dt : 0;
    npc.leaderRef = leaderRef;

    // isyarat membelok
    let sig = 0;
    const turnLane = npc.lane.isConnector ? npc.lane : npc.plan[0] && npc.plan[0].isConnector && npc.lane.length - npc.s < 45 ? npc.plan[0] : null;
    if (turnLane && turnLane.turn === 'L') sig = -1;
    if (turnLane && turnLane.turn === 'R') sig = 1;
    if (npc.lcDir && (npc.lc || npc.lcPrep > 0)) sig = npc.lcDir;
    npc.signal = sig;
    this._pose(npc, dt);
  }

  _laneChangeLogic(npc, dt, leaderGap, leaderV, v0, player) {
    const lane = npc.lane;
    if (npc.lc) {
      npc.lc.t += dt / 3.2;
      if (npc.lc.t >= 1) {
        npc.lc = null;
        npc.lcDir = 0;
      }
      return;
    }
    if (lane.isConnector || lane.edge.kind !== 'highway' || npc.scripted) return;
    npc.lcCooldown -= dt;
    if (npc.lcPrep > 0) {
      npc.lcPrep -= dt;
      if (npc.lcPrep <= 0) {
        const target = npc.lcTarget;
        npc.lcTarget = null;
        if (target && this._laneSafe(npc, target, player)) {
          const sc = this.net.laneSToCenter(lane, npc.s);
          const ns = this.net.centerToLaneS(target, sc);
          // offset sisi semasa relatif kepada pusat lorong sasaran (+ = kiri)
          npc.lc = { t: 0, off: lane.offset - target.offset };
          npc.prevLane = null;
          npc.lane = target;
          npc.s = ns;
          npc.plan = [];
          npc.lcCooldown = 14 + Math.random() * 10;
        } else {
          npc.lcDir = 0;
        }
      }
      return;
    }
    if (npc.lcCooldown > 0) return;
    // potong di kanan
    if (lane.rightLane && leaderGap < 45 && leaderV < v0 - 3 && this._laneSafe(npc, lane.rightLane, player, 40)) {
      npc.lcTarget = lane.rightLane;
      npc.lcDir = 1;
      npc.lcPrep = 1.6;
      return;
    }
    // kembali ke kiri
    if (lane.leftLane && leaderGap > 120 && this._laneSafe(npc, lane.leftLane, player, 90)) {
      npc.lcTarget = lane.leftLane;
      npc.lcDir = -1;
      npc.lcPrep = 1.6;
    }
  }

  _laneSafe(npc, target, player, aheadNeed = 28) {
    const sc = this.net.laneSToCenter(npc.lane, npc.s);
    const ts = this.net.centerToLaneS(target, sc);
    const tp = this.net.lanePointAt(target, ts);
    const check = (x, z, yaw, speed, length) => {
      const loc = toLocal(npc.yaw, tp.x, tp.z, x, z);
      if (Math.abs(loc.right) > 2.4) return true;
      const gap = Math.abs(loc.fwd) - npc.length / 2 - length / 2;
      if (loc.fwd > 0) return gap > aheadNeed * 0.5 + Math.max(0, npc.v - speed) * 2;
      return gap > Math.max(15, (speed - npc.v) * 4);
    };
    for (const o of this.npcs) {
      if (o === npc) continue;
      if (Math.abs(o.x - npc.x) > 120 || Math.abs(o.z - npc.z) > 120) continue;
      if (!check(o.x, o.z, o.yaw, o.v, o.length)) return false;
    }
    return check(player.x, player.z, player.yaw, player.speed, player.length);
  }

  // titik di sepanjang laluan NPC (boleh melangkaui lorong semasa)
  _pathPoint(npc, offset) {
    let lane = npc.lane;
    let s = npc.s + offset;
    let k = 0;
    while (s > lane.length && k < npc.plan.length) {
      s -= lane.length;
      lane = npc.plan[k++];
    }
    if (s < 0 && npc.prevLane) {
      s += npc.prevLane.length;
      lane = npc.prevLane;
    }
    return this.net.lanePointAt(lane, Math.max(0, Math.min(lane.length, s)));
  }

  _pose(npc, dt) {
    const half = npc.length * 0.32;
    const pf = this._pathPoint(npc, half);
    const pb = this._pathPoint(npc, -half);
    const p = this.net.lanePointAt(npc.lane, Math.min(npc.s, npc.lane.length));
    let x = (pf.x + pb.x) / 2;
    let z = (pf.z + pb.z) / 2;
    const fdx = pf.x - pb.x;
    const fdz = pf.z - pb.z;
    let yaw = Math.hypot(fdx, fdz) > 0.5 ? Math.atan2(-fdx, -fdz) : Math.atan2(-p.dx, -p.dz);
    if (npc.lc) {
      const t = npc.lc.t;
      const k = 1 - smoothstep(t);
      const lx = p.dz;
      const lz = -p.dx;
      x += lx * npc.lc.off * k;
      z += lz * npc.lc.off * k;
      const dk = (6 * t * (1 - t)) / 3.2; // derivatif smoothstep / tempoh
      const lat = -npc.lc.off * dk;
      yaw += Math.atan2(lat, Math.max(npc.v, 1));
    }
    npc.x = x;
    npc.z = z;
    npc.yaw = yaw;
    npc.speed = npc.v;
    const g = npc.model.group;
    g.position.set(x, 0, z);
    g.rotation.y = yaw;
    // lampu
    npc.blink = (npc.blink || 0) + dt;
    const on = Math.floor(npc.blink * 2.6) % 2 === 0;
    const brake = (npc.acc ?? 0) < -0.8 || npc.v < 0.3;
    if (brake !== npc._brakeShown || npc.signal !== npc._sigShown || on !== npc._onShown) {
      setLightState(npc.model.lights, brake, npc.signal === -1 && on, npc.signal === 1 && on);
      npc._brakeShown = brake;
      npc._sigShown = npc.signal;
      npc._onShown = on;
    }
  }
}
