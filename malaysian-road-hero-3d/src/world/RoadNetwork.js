import * as THREE from 'three';
import { findSegment, segIntersect } from '../game/util.js';

// Graf lorong (lane graph) untuk seluruh peta.
// - Edge: jalan antara dua nod, dengan garisan tengah (centerline) bersampel.
// - Lane: laluan berarah untuk satu lorong (offset ke kiri arah perjalanan).
// - Connector: lorong pendek di dalam simpang (kiri / lurus / kanan).
// Semua NPC dan peraturan menggunakan graf yang sama supaya konsisten.

const CELL = 24;
const LANE_STEP = 3;

function polyFromPoints(xs, zs) {
  const cum = new Float64Array(xs.length);
  for (let i = 1; i < xs.length; i++) {
    cum[i] = cum[i - 1] + Math.hypot(xs[i] - xs[i - 1], zs[i] - zs[i - 1]);
  }
  return cum;
}

export function polyPointAt(xs, zs, cum, s) {
  const i = findSegment(cum, s);
  const seg = cum[i + 1] - cum[i] || 1;
  const t = Math.min(1, Math.max(0, (s - cum[i]) / seg));
  const dx = (xs[i + 1] - xs[i]) / seg;
  const dz = (zs[i + 1] - zs[i]) / seg;
  return { x: xs[i] + (xs[i + 1] - xs[i]) * t, z: zs[i] + (zs[i + 1] - zs[i]) * t, dx, dz, i };
}

// Unjurkan titik pada polyline: pulangkan jarak sepanjang (s), jarak sisi bertanda (d, + = kiri).
function projectOnPoly(xs, zs, cum, px, pz, i0 = 0, i1 = xs.length - 1) {
  let best = { dist2: Infinity, s: 0, d: 0, i: 0 };
  for (let i = Math.max(0, i0); i < Math.min(i1, xs.length - 1); i++) {
    const ax = xs[i];
    const az = zs[i];
    const vx = xs[i + 1] - ax;
    const vz = zs[i + 1] - az;
    const len2 = vx * vx + vz * vz || 1e-9;
    let t = ((px - ax) * vx + (pz - az) * vz) / len2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    const qx = ax + vx * t;
    const qz = az + vz * t;
    const d2 = (px - qx) ** 2 + (pz - qz) ** 2;
    if (d2 < best.dist2) {
      const len = Math.sqrt(len2);
      // kiri bagi arah (dx,dz) ialah (dz,-dx)
      const lx = vz / len;
      const lz = -vx / len;
      best = { dist2: d2, s: cum[i] + t * len, d: (px - qx) * lx + (pz - qz) * lz, i, tx: vx / len, tz: vz / len };
    }
  }
  best.dist = Math.sqrt(best.dist2);
  return best;
}

// Polyline sudut -> garis lurus + lengkok bulat (jejari R) di setiap sudut.
export function filletPath(pts, R, step) {
  const xs = [];
  const zs = [];
  const pushLine = (ax, az, bx, bz) => {
    const L = Math.hypot(bx - ax, bz - az);
    const n = Math.max(1, Math.ceil(L / step));
    for (let i = xs.length ? 1 : 0; i <= n; i++) {
      xs.push(ax + ((bx - ax) * i) / n);
      zs.push(az + ((bz - az) * i) / n);
    }
  };
  let cur = { x: pts[0].x, z: pts[0].z };
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i];
    const ax = p.x - pts[i - 1].x;
    const az = p.z - pts[i - 1].z;
    const al = Math.hypot(ax, az);
    const bx = pts[i + 1].x - p.x;
    const bz = pts[i + 1].z - p.z;
    const bl = Math.hypot(bx, bz);
    const a = { x: ax / al, z: az / al };
    const b = { x: bx / bl, z: bz / bl };
    const theta = Math.acos(Math.max(-1, Math.min(1, a.x * b.x + a.z * b.z)));
    const T = R * Math.tan(theta / 2);
    const A = { x: p.x - a.x * T, z: p.z - a.z * T };
    const B = { x: p.x + b.x * T, z: p.z + b.z * T };
    pushLine(cur.x, cur.z, A.x, A.z);
    // pusat lengkok di sebelah dalam selekoh
    const cross = a.x * b.z - a.z * b.x;
    const nx = cross < 0 ? a.z : -a.z; // kiri = (az,-ax), kanan = (-az,ax)
    const nz = cross < 0 ? -a.x : a.x;
    const cx = A.x + nx * R;
    const cz = A.z + nz * R;
    const a0 = Math.atan2(A.z - cz, A.x - cx);
    let a1 = Math.atan2(B.z - cz, B.x - cx);
    let da = a1 - a0;
    while (da > Math.PI) da -= Math.PI * 2;
    while (da < -Math.PI) da += Math.PI * 2;
    const n = Math.max(2, Math.ceil((Math.abs(da) * R) / step));
    for (let k = 1; k <= n; k++) {
      const ang = a0 + (da * k) / n;
      xs.push(cx + Math.cos(ang) * R);
      zs.push(cz + Math.sin(ang) * R);
    }
    cur = B;
  }
  const last = pts[pts.length - 1];
  pushLine(cur.x, cur.z, last.x, last.z);
  return { xs, zs };
}

export class RoadNetwork {
  constructor(def) {
    this.nodes = new Map();
    this.edges = new Map();
    this.lanes = [];
    this.laneById = new Map();
    this.laneGrid = new Map();
    this.edgeGrid = new Map();
    for (const n of def.nodes) {
      this.nodes.set(n.id, { ...n, approaches: [], inLanes: [], outLanes: [], connectors: [], reservations: new Map() });
    }
    for (const e of def.edges) this._buildEdge(e);
    for (const e of this.edges.values()) this._buildEdgeLanes(e);
    for (const n of this.nodes.values()) this._buildNode(n);
    for (const l of this.lanes) this._indexLane(l);
    for (const e of this.edges.values()) this._indexEdge(e);
    for (const e of this.edges.values()) this._buildMarkings(e);
    this._attachCrossings();
  }

  // ---------- pembinaan ----------
  _buildEdge(def) {
    const a = this.nodes.get(def.from);
    const b = this.nodes.get(def.to);
    let xs;
    let zs;
    if (def.via && def.via.length && def.fillet) {
      ({ xs, zs } = filletPath([{ x: a.x, z: a.z }, ...def.via, { x: b.x, z: b.z }], def.fillet, 4));
    } else if (def.via && def.via.length) {
      const ctrl = [{ x: a.x, z: a.z }, ...def.via, { x: b.x, z: b.z }].map((p) => new THREE.Vector3(p.x, 0, p.z));
      const curve = new THREE.CatmullRomCurve3(ctrl, false, 'centripetal');
      const n = Math.ceil(curve.getLength() / 4);
      const pts = curve.getSpacedPoints(n);
      xs = pts.map((p) => p.x);
      zs = pts.map((p) => p.z);
    } else {
      const L = Math.hypot(b.x - a.x, b.z - a.z);
      const n = Math.max(2, Math.ceil(L / 4));
      xs = [];
      zs = [];
      for (let i = 0; i <= n; i++) {
        xs.push(a.x + ((b.x - a.x) * i) / n);
        zs.push(a.z + ((b.z - a.z) * i) / n);
      }
    }
    const cum = polyFromPoints(xs, zs);
    const W = def.laneWidth;
    const twoWay = def.lanesFwd > 0 && def.lanesBwd > 0;
    const leftHalf = twoWay ? def.median / 2 + def.lanesFwd * W : (def.lanesFwd * W) / 2;
    const rightHalf = twoWay ? def.median / 2 + def.lanesBwd * W : (def.lanesFwd * W) / 2;
    const edge = {
      ...def,
      xs: Float64Array.from(xs),
      zs: Float64Array.from(zs),
      cum,
      length: cum[cum.length - 1],
      rFrom: a.radius,
      rTo: b.radius,
      twoWay,
      leftHalf,
      rightHalf,
      lanes: { fwd: [], bwd: [] },
      centerMarks: [],
      curves: [],
      slippery: def.slippery || []
    };
    this.edges.set(edge.id, edge);
  }

  edgePointAt(edge, s) {
    return polyPointAt(edge.xs, edge.zs, edge.cum, s);
  }

  _buildEdgeLanes(edge) {
    const W = edge.laneWidth;
    const nF = edge.lanesFwd;
    const nB = edge.lanesBwd;
    for (let i = 0; i < nF; i++) {
      const off = nB === 0 ? (nF / 2 - i - 0.5) * W : edge.median / 2 + (nF - i - 0.5) * W;
      edge.lanes.fwd.push(this._makeLane(edge, 1, i, off));
    }
    for (let i = 0; i < nB; i++) {
      const off = nF === 0 ? (nB / 2 - i - 0.5) * W : edge.median / 2 + (nB - i - 0.5) * W;
      edge.lanes.bwd.push(this._makeLane(edge, -1, i, off));
    }
    const link = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].leftLane = arr[i - 1] || null; // ke arah bahu kiri
        arr[i].rightLane = arr[i + 1] || null; // ke arah tengah jalan
      }
    };
    link(edge.lanes.fwd);
    link(edge.lanes.bwd);
  }

  _makeLane(edge, dir, index, offset) {
    const s0 = edge.rFrom;
    const s1 = edge.length - edge.rTo;
    const ss = [];
    for (let s = s0; s < s1; s += LANE_STEP) ss.push(s);
    ss.push(s1);
    if (dir < 0) ss.reverse();
    const xs = [];
    const zs = [];
    for (const s of ss) {
      const p = this.edgePointAt(edge, s);
      // kiri arah hadapan edge = (dz,-dx)
      const lx = p.dz;
      const lz = -p.dx;
      const k = dir > 0 ? offset : -offset;
      xs.push(p.x + lx * k);
      zs.push(p.z + lz * k);
    }
    const lane = {
      id: `${edge.id}:${dir > 0 ? 'f' : 'b'}${index}`,
      edge,
      dir,
      index,
      offset,
      xs: Float64Array.from(xs),
      zs: Float64Array.from(zs),
      sc: Float64Array.from(ss),
      cum: null,
      length: 0,
      limit: edge.limit,
      startNode: dir > 0 ? edge.from : edge.to,
      endNode: dir > 0 ? edge.to : edge.from,
      next: [],
      prev: [],
      isConnector: false,
      crossings: [],
      approach: null
    };
    lane.cum = polyFromPoints(lane.xs, lane.zs);
    lane.length = lane.cum[lane.cum.length - 1];
    lane.curv = this._curvature(lane);
    this.lanes.push(lane);
    this.laneById.set(lane.id, lane);
    return lane;
  }

  _curvature(lane) {
    const n = lane.xs.length;
    const k = new Float32Array(n);
    for (let i = 1; i < n - 1; i++) {
      const a1 = Math.atan2(lane.zs[i] - lane.zs[i - 1], lane.xs[i] - lane.xs[i - 1]);
      const a2 = Math.atan2(lane.zs[i + 1] - lane.zs[i], lane.xs[i + 1] - lane.xs[i]);
      let da = a2 - a1;
      while (da > Math.PI) da -= Math.PI * 2;
      while (da < -Math.PI) da += Math.PI * 2;
      const ds = (lane.cum[i + 1] - lane.cum[i - 1]) / 2 || 1;
      k[i] = Math.abs(da) / ds;
    }
    return k;
  }

  _buildNode(node) {
    for (const lane of this.lanes) {
      if (lane.isConnector) continue;
      if (lane.endNode === node.id) node.inLanes.push(lane);
      if (lane.startNode === node.id) node.outLanes.push(lane);
    }
    // kumpulkan pendekatan (approach) mengikut edge
    const byEdge = new Map();
    for (const l of node.inLanes) {
      if (!byEdge.has(l.edge.id)) byEdge.set(l.edge.id, []);
      byEdge.get(l.edge.id).push(l);
    }
    let idx = 0;
    for (const [edgeId, lanes] of byEdge) {
      const l0 = lanes[0];
      const n = l0.xs.length;
      const hx = l0.xs[n - 1] - l0.xs[n - 2];
      const hz = l0.zs[n - 1] - l0.zs[n - 2];
      const hl = Math.hypot(hx, hz) || 1;
      let control = node.control;
      if (control === 'priority') control = node.minor[edgeId] || 'priority';
      const ap = { node, edgeId, lanes, hx: hx / hl, hz: hz / hl, control, index: idx++, demand: false };
      for (const l of lanes) l.approach = ap;
      node.approaches.push(ap);
    }
    if (node.control === 'end') return;

    // connector antara lorong masuk dan lorong keluar
    for (const inL of node.inLanes) {
      const ni = inL.xs.length;
      const p0 = { x: inL.xs[ni - 1], z: inL.zs[ni - 1] };
      const d0x = inL.xs[ni - 1] - inL.xs[ni - 2];
      const d0z = inL.zs[ni - 1] - inL.zs[ni - 2];
      const d0l = Math.hypot(d0x, d0z);
      const d0 = { x: d0x / d0l, z: d0z / d0l };
      for (const outL of node.outLanes) {
        if (outL.edge.id === inL.edge.id) continue; // tiada pusingan U
        if (inL.approach.lanes.length > 1 && outL.index !== inL.index) continue;
        const p2 = { x: outL.xs[0], z: outL.zs[0] };
        const d2x = outL.xs[1] - outL.xs[0];
        const d2z = outL.zs[1] - outL.zs[0];
        const d2l = Math.hypot(d2x, d2z);
        const d2 = { x: d2x / d2l, z: d2z / d2l };
        const cross = d0.x * d2.z - d0.z * d2.x;
        const dot = d0.x * d2.x + d0.z * d2.z;
        if (dot < -0.7) continue;
        const turn = cross < -0.5 ? 'L' : cross > 0.5 ? 'R' : 'S';
        let p1;
        if (Math.abs(cross) < 0.1) {
          p1 = { x: (p0.x + p2.x) / 2, z: (p0.z + p2.z) / 2 };
        } else {
          const rx = p2.x - p0.x;
          const rz = p2.z - p0.z;
          let t = (rx * d2.z - rz * d2.x) / cross;
          t = Math.max(0.5, t);
          p1 = { x: p0.x + d0.x * t, z: p0.z + d0.z * t };
        }
        const xs = [];
        const zs = [];
        const N = 12;
        for (let k = 0; k <= N; k++) {
          const t = k / N;
          const a = (1 - t) * (1 - t);
          const b = 2 * (1 - t) * t;
          const c = t * t;
          xs.push(a * p0.x + b * p1.x + c * p2.x);
          zs.push(a * p0.z + b * p1.z + c * p2.z);
        }
        const conn = {
          id: `${inL.id}>${outL.id}`,
          edge: null,
          dir: 1,
          index: 0,
          xs: Float64Array.from(xs),
          zs: Float64Array.from(zs),
          cum: null,
          length: 0,
          limit: turn === 'S' ? Math.min(inL.limit, outL.limit) : 20,
          startNode: node.id,
          endNode: node.id,
          node,
          next: [outL],
          prev: [inL],
          isConnector: true,
          turn,
          fromLane: inL,
          toLane: outL,
          crossings: [],
          conflicts: new Set()
        };
        conn.cum = polyFromPoints(conn.xs, conn.zs);
        conn.length = conn.cum[conn.cum.length - 1];
        conn.curv = this._curvature(conn);
        inL.next.push(conn);
        outL.prev.push(conn);
        node.connectors.push(conn);
        this.lanes.push(conn);
        this.laneById.set(conn.id, conn);
      }
    }
    // jadual konflik: laluan bersilang atau bergabung ke lorong sama
    const cs = node.connectors;
    for (let i = 0; i < cs.length; i++) {
      for (let j = i + 1; j < cs.length; j++) {
        const a = cs[i];
        const b = cs[j];
        if (a.fromLane === b.fromLane) continue;
        let conflict = a.toLane === b.toLane;
        for (let p = 0; !conflict && p < a.xs.length - 1; p++) {
          for (let q = 0; q < b.xs.length - 1; q++) {
            if (segIntersect(a.xs[p], a.zs[p], a.xs[p + 1], a.zs[p + 1], b.xs[q], b.zs[q], b.xs[q + 1], b.zs[q + 1])) {
              conflict = true;
              break;
            }
          }
        }
        if (conflict) {
          a.conflicts.add(b);
          b.conflicts.add(a);
        }
      }
    }
  }

  _cellKey(cx, cz) {
    return cx * 100003 + cz;
  }

  _insert(grid, x0, z0, x1, z1, item) {
    const cx0 = Math.floor(Math.min(x0, x1) / CELL);
    const cx1 = Math.floor(Math.max(x0, x1) / CELL);
    const cz0 = Math.floor(Math.min(z0, z1) / CELL);
    const cz1 = Math.floor(Math.max(z0, z1) / CELL);
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const k = this._cellKey(cx, cz);
        let arr = grid.get(k);
        if (!arr) grid.set(k, (arr = []));
        arr.push(item);
      }
    }
  }

  _query(grid, x, z, r) {
    const out = new Set();
    const cx0 = Math.floor((x - r) / CELL);
    const cx1 = Math.floor((x + r) / CELL);
    const cz0 = Math.floor((z - r) / CELL);
    const cz1 = Math.floor((z + r) / CELL);
    for (let cx = cx0; cx <= cx1; cx++) {
      for (let cz = cz0; cz <= cz1; cz++) {
        const arr = grid.get(this._cellKey(cx, cz));
        if (arr) for (const it of arr) out.add(it);
      }
    }
    return out;
  }

  _indexLane(lane) {
    for (let i = 0; i < lane.xs.length - 1; i++) {
      this._insert(this.laneGrid, lane.xs[i], lane.zs[i], lane.xs[i + 1], lane.zs[i + 1], lane);
    }
  }

  _indexEdge(edge) {
    for (let i = 0; i < edge.xs.length - 1; i++) {
      this._insert(this.edgeGrid, edge.xs[i], edge.zs[i], edge.xs[i + 1], edge.zs[i + 1], edge);
    }
  }

  // Garisan tengah: 'double' (garisan berkembar - larangan memotong) atau 'broken' (putus-putus).
  _buildMarkings(edge) {
    if (!edge.twoWay || edge.median > 0) return;
    const L = edge.length;
    const s0 = edge.rFrom;
    const s1 = L - edge.rTo;
    const dbl = [];
    edge.curves = [];
    // berhampiran simpang
    const nearJ = edge.kind === 'rural' ? 60 : 22;
    const fromNode = this.nodes.get(edge.from);
    const toNode = this.nodes.get(edge.to);
    if (fromNode.control !== 'end') dbl.push([s0, s0 + nearJ]);
    if (toNode.control !== 'end') dbl.push([s1 - nearJ, s1]);
    // selekoh: kelengkungan melebihi ambang (jarak pandangan terhad)
    if (edge.kind === 'rural') {
      const step = 10;
      let zoneStart = null;
      let sumK = 0;
      for (let s = s0; s <= s1; s += step) {
        const a = this.edgePointAt(edge, Math.max(0, s - 10));
        const b = this.edgePointAt(edge, Math.min(L, s + 10));
        const cross = a.dx * b.dz - a.dz * b.dx;
        const k = Math.asin(Math.max(-1, Math.min(1, cross))) / 20;
        const curved = Math.abs(k) > 1 / 480;
        if (curved && zoneStart === null) {
          zoneStart = s;
          sumK = 0;
        }
        if (curved) sumK += k;
        if (!curved && zoneStart !== null) {
          dbl.push([zoneStart - 60, s + 60, sumK]);
          edge.curves.push({ from: zoneStart, to: s, sign: Math.sign(sumK) });
          zoneStart = null;
        }
      }
      if (zoneStart !== null) dbl.push([zoneStart - 60, s1, sumK]);
    }
    // gabung selang bertindih
    dbl.sort((p, q) => p[0] - q[0]);
    const merged = [];
    for (const z of dbl) {
      const a = Math.max(s0, z[0]);
      const b = Math.min(s1, z[1]);
      const last = merged[merged.length - 1];
      if (last && a <= last.to + 80) {
        last.to = Math.max(last.to, b);
        if (z[2]) last.curve = (last.curve || 0) + z[2];
      } else {
        merged.push({ from: a, to: b, curve: z[2] || 0 });
      }
    }
    const marks = [];
    let cur = s0;
    for (const m of merged) {
      if (m.from > cur) marks.push({ from: cur, to: m.from, type: 'broken' });
      marks.push({ from: m.from, to: m.to, type: 'double', curve: m.curve });
      cur = m.to;
    }
    if (cur < s1) marks.push({ from: cur, to: s1, type: 'broken' });
    edge.centerMarks = marks;
  }

  _attachCrossings() {
    this.crossings = [];
    for (const edge of this.edges.values()) {
      for (const c of edge.crossings) {
        const p = this.edgePointAt(edge, c.s);
        const crossing = {
          ...c,
          edge,
          x: p.x,
          z: p.z,
          tx: p.dx,
          tz: p.dz,
          // arah melintas = kiri edge
          lx: p.dz,
          lz: -p.dx,
          halfRoad: Math.max(edge.leftHalf, edge.rightHalf),
          peds: []
        };
        this.crossings.push(crossing);
        for (const lane of [...edge.lanes.fwd, ...edge.lanes.bwd]) {
          lane.crossings.push({ s: this.centerToLaneS(lane, c.s), crossing });
        }
      }
    }
  }

  // ---------- pertanyaan ----------
  lanePointAt(lane, s) {
    return polyPointAt(lane.xs, lane.zs, lane.cum, s);
  }

  laneCurvatureAt(lane, s) {
    const i = findSegment(lane.cum, s);
    return lane.curv[i] || 0;
  }

  laneSToCenter(lane, s) {
    if (lane.isConnector) return 0;
    const i = findSegment(lane.cum, s);
    const seg = lane.cum[i + 1] - lane.cum[i] || 1;
    const t = (s - lane.cum[i]) / seg;
    return lane.sc[i] + (lane.sc[i + 1] - lane.sc[i]) * t;
  }

  centerToLaneS(lane, sc) {
    const n = lane.sc.length;
    const inc = lane.sc[n - 1] > lane.sc[0];
    let lo = 0;
    let hi = n - 1;
    const v = (i) => (inc ? lane.sc[i] : -lane.sc[i]);
    const target = inc ? sc : -sc;
    if (target <= v(0)) return 0;
    if (target >= v(hi)) return lane.length;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (v(mid) <= target) lo = mid;
      else hi = mid;
    }
    const t = (target - v(lo)) / (v(hi) - v(lo) || 1);
    return lane.cum[lo] + (lane.cum[hi] - lane.cum[lo]) * t;
  }

  // Lorong terdekat yang selari dengan arah kenderaan.
  locateLane(x, z, yaw, maxDist = 5) {
    const fx = -Math.sin(yaw);
    const fz = -Math.cos(yaw);
    let best = null;
    for (const lane of this._query(this.laneGrid, x, z, maxDist)) {
      const pr = projectOnPoly(lane.xs, lane.zs, lane.cum, x, z);
      if (pr.dist > maxDist) continue;
      const align = pr.tx * fx + pr.tz * fz;
      if (align < 0.3) continue;
      const score = pr.dist + (1 - align) * 4 + (lane.isConnector ? 0.5 : 0);
      if (!best || score < best.score) best = { lane, s: pr.s, lat: pr.d, dist: pr.dist, align, score };
    }
    return best;
  }

  // Edge terdekat (garisan tengah) — untuk peraturan lorong, garisan dan had laju.
  locateEdge(x, z) {
    let best = null;
    for (const edge of this._query(this.edgeGrid, x, z, 14)) {
      const pr = projectOnPoly(edge.xs, edge.zs, edge.cum, x, z);
      const half = Math.max(edge.leftHalf, edge.rightHalf);
      if (pr.dist > half + 6) continue;
      if (!best || pr.dist < best.dist) {
        best = {
          edge,
          s: pr.s,
          d: pr.d,
          dist: pr.dist,
          tx: pr.tx,
          tz: pr.tz,
          onRoad: pr.d <= edge.leftHalf + 0.3 && pr.d >= -edge.rightHalf - 0.3,
          inTrim: pr.s >= edge.rFrom && pr.s <= edge.length - edge.rTo
        };
      }
    }
    return best;
  }

  projectOnEdge(edge, x, z) {
    const pr = projectOnPoly(edge.xs, edge.zs, edge.cum, x, z);
    return { s: pr.s, d: pr.d, dist: pr.dist, tx: pr.tx, tz: pr.tz };
  }

  nodeAt(x, z, extra = 0) {
    for (const n of this.nodes.values()) {
      if (n.control === 'end') continue;
      if (Math.hypot(x - n.x, z - n.z) < n.radius + extra) return n;
    }
    return null;
  }

  limitAt(edge, s) {
    for (const zn of edge.zones) if (s >= zn.from && s <= zn.to) return zn.limit;
    return edge.limit;
  }

  centerMarkAt(edge, s) {
    for (const m of edge.centerMarks) if (s >= m.from && s <= m.to) return m.type;
    return null;
  }

  isSlippery(edge, s) {
    for (const z of edge.slippery) if (s >= z.from && s <= z.to) return true;
    return false;
  }

  // Lorong & kedudukan berdasarkan {edge, dir, t (jarak perjalanan dari mula edge)}
  laneSpot(edgeId, dir, t, index = 0) {
    const edge = this.edges.get(edgeId);
    const lanes = dir > 0 ? edge.lanes.fwd : edge.lanes.bwd;
    const lane = lanes[Math.min(index, lanes.length - 1)];
    const sc = dir > 0 ? t : edge.length - t;
    const s = this.centerToLaneS(lane, sc);
    const p = this.lanePointAt(lane, s);
    return { lane, s, x: p.x, z: p.z, dx: p.dx, dz: p.dz };
  }

  // Jarak dari titik ke jalan terdekat (untuk penempatan landskap).
  distanceToRoad(x, z, r = 30) {
    let best = Infinity;
    for (const edge of this._query(this.edgeGrid, x, z, r)) {
      const pr = projectOnPoly(edge.xs, edge.zs, edge.cum, x, z);
      const half = Math.max(edge.leftHalf, edge.rightHalf);
      best = Math.min(best, pr.dist - half);
    }
    for (const n of this.nodes.values()) {
      if (n.control === 'end') continue;
      best = Math.min(best, Math.hypot(x - n.x, z - n.z) - n.radius - 4);
    }
    return best;
  }
}
