import { toLocal, wrapAngle, KMH } from './util.js';

// Enjin peraturan: memerhati tindakan pemain berbanding keadaan jalan, papan tanda,
// lampu isyarat dan trafik, kemudian menghantar AMARAN (warning) dan PERISTIWA (event)
// untuk sistem misi. Setiap kesalahan diurus sebagai "episod" supaya satu kejadian
// tidak menghasilkan amaran berulang.

export class RuleMonitor {
  constructor(world, traffic, { onWarning, onEvent }) {
    this.world = world;
    this.net = world.network;
    this.traffic = traffic;
    this.onWarning = onWarning;
    this.onEvent = onEvent;
    this.reset();
  }

  reset() {
    this.time = 0;
    this.lastSignal = { '-1': -99, '1': -99 };
    this.lastGlance = { '-1': -99, '1': -99 };
    this.speed = { timer: 0, flag: false };
    this.track = null;
    this.passage = null;
    this.dbl = { flag: false, clear: 0 };
    this.overtake = null;
    this.wrongSide = { timer: 0, flag: false };
    this.noEntry = { timer: 0, flag: false };
    this.laneIdx = null;
    this.lastLaneChange = { time: -99, dir: 0 };
    this.passMap = new Map();
    this.tail = { timer: 0, flag: false };
    this.cross = new Map();
    this.off = { timer: 0, flag: false };
    this.currentLimit = null;
    this.edgeLoc = null;
    this.prevStraddle = false;
  }

  warn(id, vars = {}) {
    if (this.overtake) this.overtake.unsafe = true;
    this.onWarning(id, vars);
  }

  update(dt, player, headYaw) {
    this.time += dt;
    const t = this.time;
    const kmh = Math.abs(player.speed) * KMH;
    const v = Math.max(0, player.speed);
    if (player.signal !== 0) this.lastSignal[String(player.signal)] = t;
    if (headYaw > 0.25) this.lastGlance['-1'] = t;
    if (headYaw < -0.25) this.lastGlance['1'] = t;

    const loc = this.net.locateEdge(player.x, player.z);
    this.edgeLoc = loc;
    const fx = -Math.sin(player.yaw);
    const fz = -Math.cos(player.yaw);

    // ---------- had laju ----------
    if (loc && loc.inTrim) this.currentLimit = this.net.limitAt(loc.edge, loc.s);
    if (this.currentLimit) {
      if (kmh > this.currentLimit + 3) {
        this.speed.timer += dt;
        if (this.speed.timer > 1.5 && !this.speed.flag) {
          this.speed.flag = true;
          this.warn('SPEEDING', { limit: this.currentLimit });
        }
      } else if (kmh <= this.currentLimit) {
        this.speed.timer = 0;
        this.speed.flag = false;
      }
    }

    // ---------- garisan berhenti & simpang ----------
    this._stopLines(loc, player, kmh, fx, fz);
    this._passage(loc, player);

    // ---------- lorong, garisan tengah, memotong ----------
    if (loc && loc.inTrim && loc.onRoad) {
      const edge = loc.edge;
      const dirSign = loc.tx * fx + loc.tz * fz >= 0 ? 1 : -1;
      const dl = loc.d * dirSign; // + = sebelah sendiri (kiri arah perjalanan)
      const halfW = player.width / 2;

      // jalan sehala dari arah salah
      if (!edge.twoWay && dirSign < 0 && kmh > 3) {
        this.noEntry.timer += dt;
        if (this.noEntry.timer > 0.6 && !this.noEntry.flag) {
          this.noEntry.flag = true;
          this.warn('NO_ENTRY');
        }
      } else if (dirSign > 0 || edge.twoWay) {
        this.noEntry.timer = 0;
        this.noEntry.flag = false;
      }

      if (edge.twoWay && edge.median === 0) this._twoLane(dt, edge, loc, dirSign, dl, halfW, player, kmh, v);
      else this.prevStraddle = false;

      const nSide = dirSign > 0 ? edge.lanesFwd : edge.lanesBwd;
      if (edge.twoWay && nSide > 1) this._multiLane(edge, dl, nSide, player, v);
      else this.laneIdx = null;
    } else {
      this.laneIdx = null;
    }

    this._overtakeLeft(player, loc, v);
    this._tailgate(dt, player, v);
    this._crossings(player, fx, fz);

    // ---------- keluar jalan ----------
    const onRoad = (loc && loc.onRoad) || this.net.nodeAt(player.x, player.z, 2);
    if (!onRoad && kmh > 2) {
      this.off.timer += dt;
      if (this.off.timer > 1.5 && !this.off.flag) {
        this.off.flag = true;
        this.warn('OFF_ROAD');
      }
    } else if (onRoad) {
      this.off.timer = 0;
      this.off.flag = false;
    }
  }

  _stopLines(loc, player, kmh, fx, fz) {
    const net = this.net;
    if (loc && loc.inTrim && loc.onRoad) {
      const dirSign = loc.tx * fx + loc.tz * fz >= 0 ? 1 : -1;
      const edge = loc.edge;
      if (!this.track || this.track.edge !== edge || this.track.dirSign !== dirSign) {
        const node = net.nodes.get(dirSign > 0 ? edge.to : edge.from);
        const ap = node.approaches.find((a) => a.edgeId === edge.id && a.lanes[0].dir === dirSign);
        if (ap && node.control !== 'end') {
          this.track = { edge, node, ap, dirSign, prevD: null, minKmh: Infinity };
        } else {
          this.track = null;
        }
      }
    }
    const tr = this.track;
    if (!tr) return;
    const pr = net.projectOnEdge(tr.edge, player.x, player.z);
    // jarak hadapan kereta ke garisan berhenti
    const lineS = tr.dirSign > 0 ? tr.edge.length - tr.edge.rTo : tr.edge.rFrom;
    const d = (tr.dirSign > 0 ? lineS - pr.s : pr.s - lineS) - player.length / 2;
    if (d < 14) tr.minKmh = Math.min(tr.minKmh, kmh);
    if (tr.prevD === null) {
      // bingkai pertama: hanya rekod kedudukan (elak pencetus palsu selepas melepasi garisan)
      tr.prevD = d;
      return;
    }
    if (tr.prevD > 0 && d <= 0 && pr.dist < Math.max(tr.edge.leftHalf, tr.edge.rightHalf) + 2) {
      this._onStopLine(tr, player);
      this.track = null;
      return;
    }
    tr.prevD = d;
    if (d > 120 || pr.dist > 15) this.track = null;
  }

  _onStopLine(tr, player) {
    const ap = tr.ap;
    const ctl = ap.control;
    if (ctl === 'signal') {
      const st = this.world.lights.stateOf(ap);
      if (st === 'red') this.warn('RED_LIGHT');
      else this.onEvent('signalPassed', { node: tr.node.id });
    }
    if (ctl === 'stop') {
      if (tr.minKmh > 2) this.warn('STOP_SIGN');
      else this.onEvent('stopSignComplied', { node: tr.node.id });
    }
    if (ctl === 'stop' || ctl === 'giveway') {
      if (this._conflictingTraffic(tr.node, ap)) this.warn('GIVE_WAY');
      else if (ctl === 'giveway') this.onEvent('gaveWay', { node: tr.node.id });
    }
    if (ctl !== 'none') {
      this.passage = { node: tr.node, ap, entryYaw: player.yaw, crossTime: this.time };
    }
  }

  _conflictingTraffic(node, myAp) {
    for (const n of this.traffic.npcs) {
      if (n.lane.isConnector && n.lane.node === node && n.lane.fromLane.approach !== myAp) return true;
      const ap = n.lane.approach;
      if (!ap || ap.node !== node || ap === myAp || ap.control !== 'priority') continue;
      const rem = n.lane.length - n.s;
      if (n.v > 2 && rem < Math.max(15, n.v * 3)) return true;
    }
    return false;
  }

  _passage(loc, player) {
    const p = this.passage;
    if (!p) return;
    if (this.time - p.crossTime > 25) {
      this.passage = null;
      return;
    }
    if (!loc || !loc.inTrim || loc.edge.id === p.ap.edgeId) return;
    const dy = wrapAngle(player.yaw - p.entryYaw);
    const turn = dy > 0.6 ? 'L' : dy < -0.6 ? 'R' : 'S';
    this.passage = null;
    if (turn === 'S' || Math.abs(dy) > 2.6) return;
    const need = turn === 'L' ? -1 : 1;
    const ok = this.lastSignal[String(need)] >= p.crossTime - 6;
    if (ok) this.onEvent('turnSignalled', { turn });
    else this.warn('NO_SIGNAL_TURN', { dir: turn === 'L' ? 'ke kiri' : 'ke kanan' });
  }

  _twoLane(dt, edge, loc, dirSign, dl, halfW, player, kmh, v) {
    const t = this.time;
    const straddle = dl < halfW - 0.05;
    const fullyOpp = dl < -halfW;
    const mark = this.net.centerMarkAt(edge, loc.s);

    // garisan berkembar
    if (straddle && mark === 'double' && kmh > 3) {
      if (!this.dbl.flag) {
        this.dbl.flag = true;
        this.warn('DOUBLE_LINE');
      }
      this.dbl.clear = 0;
    } else if (dl > halfW + 0.3) {
      this.dbl.clear += dt;
      if (this.dbl.clear > 2) this.dbl.flag = false;
    }

    // episod memotong bermula apabila kereta mula melintasi garisan tengah
    if (straddle && !this.prevStraddle && !this.overtake && kmh > 10) {
      const targets = [];
      for (const n of this.traffic.npcs) {
        const l = toLocal(player.yaw, player.x, player.z, n.x, n.z);
        const rel = Math.abs(wrapAngle(n.yaw - player.yaw));
        if (rel < 0.6 && l.fwd > 0 && l.fwd < 60 && Math.abs(l.right) < 3) targets.push(n);
      }
      this.overtake = { targets, unsafe: false, start: t };
      if (targets.length) {
        const sigOK = player.signal === 1 || this.lastSignal['1'] >= t - 3;
        if (!sigOK) this.warn('NO_SIGNAL_OVERTAKE');
        if (mark === 'double') this.overtake.unsafe = true;
      }
    }
    this.prevStraddle = straddle;

    // trafik bertentangan
    if (straddle) {
      for (const n of this.traffic.npcs) {
        const rel = Math.abs(wrapAngle(n.yaw - player.yaw));
        if (rel < 2.4) continue;
        const l = toLocal(player.yaw, player.x, player.z, n.x, n.z);
        if (l.fwd <= 0 || l.fwd > 180 || Math.abs(l.right) > 2.6) continue;
        const gap = l.fwd - player.length / 2 - n.length / 2;
        const closing = v + n.v;
        if (closing > 1 && gap / closing < 3.5) {
          if (!this.overtake || !this.overtake.oncomingWarned) {
            this.warn('ONCOMING_CLOSE');
            if (this.overtake) this.overtake.oncomingWarned = true;
            else this.overtake = { targets: [], unsafe: true, start: t, oncomingWarned: true };
          }
          break;
        }
      }
    }

    // tamat episod: kembali sepenuhnya ke lorong sendiri
    if (this.overtake && dl > halfW + 0.2) {
      const ot = this.overtake;
      this.overtake = null;
      const passed = ot.targets.filter((n) => this.traffic.npcs.includes(n) && toLocal(player.yaw, player.x, player.z, n.x, n.z).fwd < -(player.length / 2 + n.length / 2));
      if (passed.length) {
        if (!ot.unsafe) this.onEvent('overtakeSafe', { types: passed.map((n) => n.type) });
        else this.onEvent('overtakeUnsafe', {});
      }
    }

    // memandu terlalu lama di lorong bertentangan
    if (fullyOpp) {
      this.wrongSide.timer += dt;
      const limit = this.overtake && this.overtake.targets.length ? 10 : 3;
      if (this.wrongSide.timer > limit && !this.wrongSide.flag) {
        this.wrongSide.flag = true;
        this.warn('WRONG_SIDE');
      }
    } else if (dl > halfW) {
      this.wrongSide.timer = 0;
      this.wrongSide.flag = false;
    }
  }

  _multiLane(edge, dl, n, player, v) {
    const W = edge.laneWidth;
    const half = edge.median / 2;
    const centerOf = (k) => half + (n - k - 0.5) * W; // k = indeks dari bahu kiri
    let best = null;
    for (let k = 0; k < n; k++) {
      if (Math.abs(dl - centerOf(k)) < 1.1) best = k;
    }
    if (best === null) return;
    if (this.laneIdx === null) {
      this.laneIdx = best;
      return;
    }
    if (best === this.laneIdx) return;
    const dir = best < this.laneIdx ? -1 : 1; // -1 = ke kiri
    this.laneIdx = best;
    const t = this.time;
    this.lastLaneChange = { time: t, dir };
    let ok = true;
    if (this.lastSignal[String(dir)] < t - 4) {
      ok = false;
      this.warn('NO_SIGNAL_LANE');
    }
    if (this.lastGlance[String(dir)] < t - 6) {
      ok = false;
      this.warn('NO_MIRROR_CHECK');
    }
    if (this._gapUnsafe(player, v)) {
      ok = false;
      this.warn('UNSAFE_LANE_CHANGE');
    }
    if (ok) this.onEvent('safeLaneChange', { dir });
  }

  _gapUnsafe(player, v) {
    for (const o of this.traffic.npcs) {
      const rel = Math.abs(wrapAngle(o.yaw - player.yaw));
      if (rel > 0.6) continue;
      const l = toLocal(player.yaw, player.x, player.z, o.x, o.z);
      if (Math.abs(l.right) > 1.7) continue;
      const lens = player.length / 2 + o.length / 2;
      if (l.fwd > 0 && l.fwd - lens < Math.max(4, (v - o.v) * 1.5)) return true;
      if (l.fwd <= 0 && -l.fwd - lens < Math.max(5, (o.v - v) * 2)) return true;
    }
    return false;
  }

  _overtakeLeft(player, loc, v) {
    const seen = new Set();
    for (const n of this.traffic.npcs) {
      if (Math.abs(n.x - player.x) > 40 || Math.abs(n.z - player.z) > 40) continue;
      const rel = Math.abs(wrapAngle(n.yaw - player.yaw));
      if (rel > 0.5) continue;
      const l = toLocal(player.yaw, player.x, player.z, n.x, n.z);
      seen.add(n.id);
      const prev = this.passMap.get(n.id);
      this.passMap.set(n.id, l.fwd);
      if (prev === undefined) continue;
      if (prev > 2 && l.fwd <= -2 && l.right > 1.8 && l.right < 9 && v * KMH > n.v * KMH + 8) {
        const multi = loc && loc.edge && (loc.edge.lanesFwd > 1 || loc.edge.lanesBwd > 1);
        const recentLeft = this.time - this.lastLaneChange.time < 10 && this.lastLaneChange.dir === -1;
        if (!multi || recentLeft) this.warn('OVERTAKE_LEFT');
      }
    }
    for (const id of this.passMap.keys()) if (!seen.has(id)) this.passMap.delete(id);
  }

  _tailgate(dt, player, v) {
    let best = null;
    for (const n of this.traffic.npcs) {
      if (Math.abs(n.x - player.x) > 80 || Math.abs(n.z - player.z) > 80) continue;
      const rel = Math.abs(wrapAngle(n.yaw - player.yaw));
      if (rel > 0.5) continue;
      const l = toLocal(player.yaw, player.x, player.z, n.x, n.z);
      if (l.fwd <= 0 || Math.abs(l.right) > 1.5) continue;
      const gap = l.fwd - player.length / 2 - n.length / 2;
      if (!best || gap < best.gap) best = { gap, n };
    }
    this.leaderGap = best ? best.gap : null;
    const headway = best && v > 0.5 ? best.gap / v : Infinity;
    this.headway = headway;
    if (v > 30 / KMH && headway < 1.0) {
      this.tail.timer += dt;
      if (this.tail.timer > 2 && !this.tail.flag) {
        this.tail.flag = true;
        this.warn('TAILGATING');
      }
    } else if (headway > 1.8 || v < 20 / KMH) {
      this.tail.timer = 0;
      this.tail.flag = false;
    }
  }

  _crossings(player, fx, fz) {
    for (const c of this.net.crossings) {
      const dx = c.x - player.x;
      const dz = c.z - player.z;
      if (Math.abs(dx) > 40 || Math.abs(dz) > 40) {
        this.cross.delete(c.id);
        continue;
      }
      const along = dx * fx + dz * fz - player.length / 2;
      const lat = Math.abs(dx * fz - dz * fx);
      const prev = this.cross.get(c.id);
      this.cross.set(c.id, along);
      if (prev === undefined || lat > c.halfRoad + 1.5) continue;
      if (prev > 0 && along <= 0) {
        const busy = c.peds.some((p) => Math.abs(p.u) < c.halfRoad + 0.2 && p.state === 'CROSS');
        if (busy) this.warn('PED_CROSSING');
      }
    }
  }
}
