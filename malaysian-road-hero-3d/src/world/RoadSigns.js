import * as THREE from 'three';
import { drawSign } from './signArt.js';
import { cyl, mat } from './models.js';
import { yawFromDir } from '../game/util.js';

// Menjana dan meletakkan papan tanda 3D berdasarkan graf jalan.
// Setiap papan mempunyai arah trafik yang dihadapinya (untuk pencetus dialog).

const texCache = new Map();
function signTex(type, value, silhouette) {
  const k = `${type}|${value}|${silhouette ? 1 : 0}`;
  if (!texCache.has(k)) {
    const t = new THREE.CanvasTexture(drawSign(type, value, silhouette));
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    texCache.set(k, t);
  }
  return texCache.get(k);
}

export function signImageURL(type, value) {
  return drawSign(type, value).toDataURL('image/png');
}

export class RoadSigns {
  constructor(network) {
    this.net = network;
    this.signs = [];
    this.group = new THREE.Group();
    this.colliders = [];
    this._generate();
    this._build();
  }

  // letak papan di tepi kiri jalan bagi arah perjalanan 'dir' pada jarak tengah 'sc'
  _place(edge, dir, sc, type, value, opts = {}) {
    sc = Math.max(1, Math.min(edge.length - 1, sc));
    const p = this.net.edgePointAt(edge, sc);
    const tdx = dir > 0 ? p.dx : -p.dx;
    const tdz = dir > 0 ? p.dz : -p.dz;
    const lx = tdz;
    const lz = -tdx;
    const half = dir > 0 ? edge.leftHalf : edge.rightHalf;
    const town = edge.kind === 'city' || edge.kind === 'residential';
    const side = opts.rightSide ? -1 : 1;
    const halfSide = opts.rightSide ? (dir > 0 ? edge.rightHalf : edge.leftHalf) : half;
    const off = halfSide + (town ? 1.6 : 2.2);
    const x = p.x + lx * off * side;
    const z = p.z + lz * off * side;
    this.signs.push({
      id: `sg${this.signs.length}`,
      type,
      value,
      x,
      z,
      yaw: yawFromDir(tdx, tdz),
      tdx,
      tdz,
      edgeId: edge.id,
      dir,
      sc,
      height: opts.height || 2.3,
      size: opts.size || 0.95
    });
  }

  _generate() {
    const net = this.net;
    for (const edge of net.edges.values()) {
      const L = edge.length;
      const s0 = edge.rFrom;
      const s1 = L - edge.rTo;
      const dirs = [];
      if (edge.lanesFwd > 0) dirs.push(1);
      if (edge.lanesBwd > 0) dirs.push(-1);

      // had laju di permulaan setiap arah
      for (const dir of dirs) {
        const sc = dir > 0 ? s0 + 14 : s1 - 14;
        this._place(edge, dir, sc, 'SPEED_LIMIT', net.limitAt(edge, sc));
        if (edge.kind === 'highway') {
          for (let t = 1000; t < L - 200; t += 1000) this._place(edge, dir, dir > 0 ? t : L - t, 'SPEED_LIMIT', edge.limit, { size: 1.3, height: 2.6 });
        }
      }
      // zon (kawasan sekolah)
      for (const zn of edge.zones) {
        if (zn.type === 'school') {
          this._place(edge, 1, zn.from - 18, 'SCHOOL');
          this._place(edge, -1, zn.to + 18, 'SCHOOL');
        }
        this._place(edge, 1, zn.from, 'SPEED_LIMIT', zn.limit);
        this._place(edge, -1, zn.to, 'SPEED_LIMIT', zn.limit);
        this._place(edge, 1, zn.to + 4, 'SPEED_LIMIT', edge.limit);
        this._place(edge, -1, zn.from - 4, 'SPEED_LIMIT', edge.limit);
      }
      // lintasan pejalan kaki
      for (const c of edge.crossings) {
        this._place(edge, 1, c.s - 30, 'PED_CROSSING');
        this._place(edge, -1, c.s + 30, 'PED_CROSSING');
      }
      // jalan sehala: DILARANG MASUK di hujung keluar, menghadap trafik yang salah arah
      if (edge.oneway) {
        this._place(edge, -1, s1 - 1, 'NO_ENTRY');
        this._place(edge, -1, s1 - 1, 'NO_ENTRY', null, { rightSide: true });
      }
      // jalan kampung: larangan memotong & amaran selekoh
      if (edge.kind === 'rural') {
        for (const m of edge.centerMarks) {
          if (m.type !== 'double' || m.from <= s0 + 1 || m.to >= s1 - 1) continue;
          this._place(edge, 1, m.from + 4, 'NO_OVERTAKING');
          this._place(edge, -1, m.to - 4, 'NO_OVERTAKING');
        }
        for (const cv of edge.curves) {
          // sign<0 = selekoh kiri bagi arah hadapan edge
          this._place(edge, 1, cv.from - 70, cv.sign < 0 ? 'CURVE_LEFT' : 'CURVE_RIGHT');
          this._place(edge, -1, cv.to + 70, cv.sign < 0 ? 'CURVE_RIGHT' : 'CURVE_LEFT');
        }
      }
      for (const zn of edge.slippery) {
        this._place(edge, 1, zn.from - 50, 'SLIPPERY');
        this._place(edge, -1, zn.to + 50, 'SLIPPERY');
      }
    }
    // BERHENTI / BERI LALUAN di pendekatan jalan kecil
    for (const node of net.nodes.values()) {
      for (const ap of node.approaches) {
        if (ap.control !== 'stop' && ap.control !== 'giveway') continue;
        const edge = net.edges.get(ap.edgeId);
        const dir = ap.lanes[0].dir;
        const sc = dir > 0 ? edge.length - edge.rTo - 1.5 : edge.rFrom + 1.5;
        this._place(edge, dir, sc, ap.control === 'stop' ? 'STOP' : 'GIVE_WAY');
      }
    }
  }

  _build() {
    const poleGeo = cyl(0.05, 0.05, 1, 8);
    const poleMat = mat(0x9aa3ad);
    const plate = new THREE.PlaneGeometry(1, 1);
    for (const s of this.signs) {
      const g = new THREE.Group();
      g.position.set(s.x, 0, s.z);
      g.rotation.y = s.yaw;
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.scale.y = s.height;
      pole.position.y = s.height / 2;
      pole.castShadow = true;
      g.add(pole);
      const front = new THREE.Mesh(
        plate,
        new THREE.MeshBasicMaterial({ map: signTex(s.type, s.value, false), transparent: true, alphaTest: 0.5, toneMapped: false })
      );
      front.scale.setScalar(s.size);
      front.position.set(0, s.height + s.size / 2 - 0.1, 0.06);
      g.add(front);
      const back = new THREE.Mesh(
        plate,
        new THREE.MeshLambertMaterial({ map: signTex(s.type, s.value, true), color: 0x8c939b, transparent: true, alphaTest: 0.5 })
      );
      back.scale.setScalar(s.size);
      back.rotation.y = Math.PI;
      back.position.set(0, s.height + s.size / 2 - 0.1, 0.04);
      g.add(back);
      this.group.add(g);
      s.anchor = new THREE.Vector3(s.x, s.height + s.size / 2 - 0.1, s.z);
      this.colliders.push({ x: s.x, z: s.z, yaw: 0, hl: 0.12, hw: 0.12, kind: 'pole' });
    }
  }
}
