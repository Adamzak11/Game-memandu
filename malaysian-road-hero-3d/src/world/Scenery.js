import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { COLS, ROWS } from '../data/mapData.js';
import { mulberry32 } from '../game/util.js';
import { grassTexture, windowTexture, houseTexture, skyGradientTexture } from './textures.js';

// Landskap Stylized 3D: bangunan bandar, rumah kedai, rumah teres, sekolah,
// rumah kampung, pokok hujan, pokok kelapa/kelapa sawit, lampu jalan, gunung & awan.
// Menggunakan InstancedMesh untuk mengurangkan draw call.

const tmpM = new THREE.Matrix4();
const tmpQ = new THREE.Quaternion();
const tmpS = new THREE.Vector3();
const tmpP = new THREE.Vector3();
const tmpC = new THREE.Color();
const UP = new THREE.Vector3(0, 1, 0);

class Instancer {
  constructor(geo, material, opts = {}) {
    this.geo = geo;
    this.material = material;
    this.items = [];
    this.opts = opts;
  }
  add(x, y, z, sx, sy, sz, rotY = 0, color = null) {
    this.items.push({ x, y, z, sx, sy, sz, rotY, color });
  }
  // Bahagikan kepada jubin spatial supaya frustum & jarak culling berkesan
  build(group, chunks) {
    if (!this.items.length) return null;
    const TILE = 220;
    const tiles = new Map();
    for (const it of this.items) {
      const k = `${Math.floor(it.x / TILE)},${Math.floor(it.z / TILE)}`;
      if (!tiles.has(k)) tiles.set(k, []);
      tiles.get(k).push(it);
    }
    for (const items of tiles.values()) {
      const im = new THREE.InstancedMesh(this.geo, this.material, items.length);
      let cx = 0;
      let cz = 0;
      items.forEach((it, i) => {
        tmpP.set(it.x, it.y, it.z);
        tmpQ.setFromAxisAngle(UP, it.rotY);
        tmpS.set(it.sx, it.sy, it.sz);
        tmpM.compose(tmpP, tmpQ, tmpS);
        im.setMatrixAt(i, tmpM);
        if (it.color !== null) im.setColorAt(i, tmpC.set(it.color));
        cx += it.x;
        cz += it.z;
      });
      im.castShadow = this.opts.shadow !== false;
      im.receiveShadow = !!this.opts.receive;
      im.computeBoundingSphere();
      group.add(im);
      if (chunks && !this.opts.always) chunks.push({ mesh: im, x: cx / items.length, z: cz / items.length, r: im.boundingSphere.radius });
    }
    return true;
  }
}

function palmLeavesGeometry() {
  const parts = [];
  for (let i = 0; i < 8; i++) {
    const leaf = new THREE.PlaneGeometry(0.7, 3.2);
    leaf.rotateX(-Math.PI / 2);
    leaf.translate(0, 0, 1.6);
    leaf.rotateX(0.55);
    leaf.rotateY((i / 8) * Math.PI * 2);
    parts.push(leaf);
  }
  const g = mergeGeometries(parts);
  return g;
}

export class Scenery {
  constructor(network, avoid = []) {
    this.net = network;
    this.group = new THREE.Group();
    this.colliders = [];
    this.avoid = avoid;
    this.rand = mulberry32(2024);
    this.footprints = [];
    this.chunks = [];
  }

  // sembunyikan jubin di luar jarak lukisan (dipanggil setiap bingkai)
  updateVisibility(x, z, dist) {
    for (const c of this.chunks) {
      const d = Math.hypot(c.x - x, c.z - z) - c.r;
      c.mesh.visible = d < dist;
    }
  }

  _free(x, z, r) {
    for (const c of this.avoid) if (Math.hypot(c.x - x, c.z - z) < r + 1.5) return false;
    for (const f of this.footprints) {
      if (Math.abs(f.x - x) < f.hw + r && Math.abs(f.z - z) < f.hd + r) return false;
    }
    return true;
  }

  _addBuilding(inst, x, z, w, d, h, color, rotY = 0, collide = true) {
    inst.add(x, h / 2, z, w, h, d, rotY, color);
    this.footprints.push({ x, z, hw: w / 2, hd: d / 2 });
    if (collide) this.colliders.push({ x, z, yaw: rotY, hl: d / 2, hw: w / 2, kind: 'building' });
  }

  build() {
    const R = this.rand;
    const g = this.group;

    // langit & tanah
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(4200, 24, 12),
      new THREE.MeshBasicMaterial({ map: skyGradientTexture(), side: THREE.BackSide, fog: false, depthWrite: false })
    );
    sky.renderOrder = -10;
    this.sky = sky;
    g.add(sky);
    const gt = grassTexture();
    gt.repeat.set(700, 700);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000), new THREE.MeshLambertMaterial({ map: gt }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.03;
    ground.receiveShadow = true;
    g.add(ground);

    const office = windowTexture('office');
    office.repeat.set(1, 3);
    const shop = windowTexture('shop');
    const house = houseTexture();
    const unitBox = new THREE.BoxGeometry(1, 1, 1);
    const towers = new Instancer(unitBox, new THREE.MeshLambertMaterial({ map: office }));
    const shops = new Instancer(unitBox, new THREE.MeshLambertMaterial({ map: shop }));
    const houses = new Instancer(unitBox, new THREE.MeshLambertMaterial({ map: house }));
    const plain = new Instancer(unitBox, new THREE.MeshLambertMaterial({ color: 0xffffff }));
    const roofGeo = new THREE.ConeGeometry(0.75, 1, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roofs = new Instancer(roofGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }));

    const pastel = [0xf6d6ad, 0xc8e6c9, 0xbbdefb, 0xffccbc, 0xfff59d, 0xe1bee7, 0xf8bbd0, 0xd7ccc8];
    const roofCols = [0xb5523b, 0x8d3b2e, 0x3d5a80, 0x6d4c41, 0x2e7d32];
    const towerCols = [0xdfe7ef, 0xc5d6e8, 0xe8e0d0, 0xb7c9d9, 0xf0f0f0, 0xa9c2d6];

    // --- blok bandar & perumahan ---
    const M = 15;
    const xs = [COLS[0] - 120, ...COLS, COLS[COLS.length - 1] + 110];
    const zs = [ROWS[0] - 100, ...ROWS, ROWS[ROWS.length - 1] + 110];
    for (let i = 0; i < xs.length - 1; i++) {
      for (let j = 0; j < zs.length - 1; j++) {
        const x0 = xs[i] + M;
        const x1 = xs[i + 1] - M;
        const z0 = zs[j] + M;
        const z1 = zs[j + 1] - M;
        const cx = (x0 + x1) / 2;
        const cz = (z0 + z1) / 2;
        const city = cx > -90;
        const school = x0 > 10 && x0 < 20 && z0 > 190 && z0 < 200;
        if (school) {
          this._school(plain, roofs, x0, x1, z0, z1);
          continue;
        }
        if (city) this._cityBlock(towers, shops, x0, x1, z0, z1, towerCols);
        else this._houseBlock(houses, roofs, x0, x1, z0, z1, pastel, roofCols);
      }
    }

    // --- rumah kampung di sepanjang jalan kampung ---
    const rural = this.net.edges.get('e_n20_kEnd');
    for (let s = 160; s < rural.length - 80; s += 70 + R() * 60) {
      const side = R() < 0.5 ? 1 : -1;
      const p = this.net.edgePointAt(rural, s);
      const off = 22 + R() * 14;
      const x = p.x + p.dz * off * side;
      const z = p.z - p.dx * off * side;
      const rot = Math.atan2(-p.dx, -p.dz) + (side > 0 ? -Math.PI / 2 : Math.PI / 2);
      if (!this._free(x, z, 7) || this.net.distanceToRoad(x, z) < 8) continue;
      // tiang + rumah kayu + bumbung
      for (const [ox, oz] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) plain.add(x + ox, 0.7, z + oz, 0.25, 1.4, 0.25, 0, 0x6d4c33);
      plain.add(x, 2.8, z, 8, 2.8, 7, rot, [0x9c6b45, 0xb07d50, 0x8a5a3c][Math.floor(R() * 3)]);
      roofs.add(x, 5.2, z, 12, 2.4, 10.5, rot, [0x8d3b2e, 0x5d4037, 0x37474f][Math.floor(R() * 3)]);
      this.footprints.push({ x, z, hw: 5, hd: 5 });
      this.colliders.push({ x, z, yaw: 0, hl: 4.2, hw: 4.2, kind: 'building' });
    }
    // sawah padi di kawasan kampung
    const paddyMat = new THREE.MeshLambertMaterial({ color: 0x9ccc65 });
    for (let s = 300; s < rural.length - 200; s += 260) {
      const p = this.net.edgePointAt(rural, s);
      for (const side of [-1, 1]) {
        const off = 70;
        const field = new THREE.Mesh(new THREE.PlaneGeometry(90, 160), paddyMat);
        field.rotation.x = -Math.PI / 2;
        field.rotation.z = Math.atan2(-p.dx, -p.dz);
        field.position.set(p.x + p.dz * off * side, -0.01, p.z - p.dx * off * side);
        field.receiveShadow = true;
        g.add(field);
      }
    }

    // --- pokok ---
    const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 1, 7);
    const trunks = new Instancer(trunkGeo, new THREE.MeshLambertMaterial({ color: 0x7a5236 }));
    const canopyGeo = new THREE.IcosahedronGeometry(1, 1);
    const canopies = new Instancer(canopyGeo, new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true }));
    const palmTrunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 1, 6);
    const palmTrunks = new Instancer(palmTrunkGeo, new THREE.MeshLambertMaterial({ color: 0x8d6e4f }));
    const leaves = new Instancer(palmLeavesGeometry(), new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
    const greens = [0x3f9b3a, 0x4caf50, 0x2e7d32, 0x5aa83c, 0x6abf4b];

    const rainTree = (x, z, s = 1) => {
      if (!this._free(x, z, 2.5) || this.net.distanceToRoad(x, z) < 3.2) return false;
      const h = (3 + R() * 2) * s;
      trunks.add(x, h / 2, z, s, h, s);
      const cs = (3 + R() * 1.6) * s;
      canopies.add(x, h + cs * 0.45, z, cs * 1.25, cs * 0.75, cs * 1.25, R() * 6, greens[Math.floor(R() * greens.length)]);
      this.colliders.push({ x, z, yaw: 0, hl: 0.35 * s, hw: 0.35 * s, kind: 'tree' });
      this.footprints.push({ x, z, hw: 1, hd: 1 });
      return true;
    };
    const palm = (x, z, s = 1, collide = true) => {
      if (!this._free(x, z, 1.5) || this.net.distanceToRoad(x, z) < 3) return false;
      const h = (6 + R() * 4) * s;
      palmTrunks.add(x, h / 2, z, s, h, s, 0);
      leaves.add(x, h, z, s * 1.2, s * 1.2, s * 1.2, R() * 6, greens[Math.floor(R() * greens.length)]);
      if (collide) this.colliders.push({ x, z, yaw: 0, hl: 0.3, hw: 0.3, kind: 'tree' });
      this.footprints.push({ x, z, hw: 0.8, hd: 0.8 });
      return true;
    };

    // pokok di tepi jalan bandar/perumahan (di belakang kaki lima)
    for (const edge of this.net.edges.values()) {
      const town = edge.kind === 'city' || edge.kind === 'residential';
      const step = town ? 22 : 34;
      for (let s = edge.rFrom + 12; s < edge.length - edge.rTo - 12; s += step) {
        for (const side of [-1, 1]) {
          if (R() < (town ? 0.35 : 0.45)) continue;
          const p = this.net.edgePointAt(edge, s + R() * 6);
          const half = side > 0 ? edge.leftHalf : edge.rightHalf;
          const off = half + (town ? 5.2 : 9 + R() * 14);
          const x = p.x + p.dz * off * side;
          const z = p.z - p.dx * off * side;
          if (edge.kind === 'residential' || edge.kind === 'rural') {
            if (R() < 0.5) rainTree(x, z, 0.9 + R() * 0.4);
            else palm(x, z);
          } else if (edge.kind === 'city') {
            rainTree(x, z, 0.7);
          }
        }
      }
    }
    // ladang kelapa sawit di sepanjang lebuh raya
    const hw = this.net.edges.get('e_hS_hN');
    for (let s = 60; s < hw.length - 60; s += 11) {
      const p = this.net.edgePointAt(hw, s);
      for (const side of [-1, 1]) {
        for (const off of [26, 37, 48]) {
          const o = off + (R() - 0.5) * 3;
          palm(p.x + p.dz * o * side, p.z - p.dx * o * side, 0.75 + R() * 0.2, false);
        }
      }
    }
    // pokok rawak di kawasan lapang
    for (let i = 0; i < 700; i++) {
      const x = -900 + R() * 1900;
      const z = -2200 + R() * 2900;
      if (Math.abs(x - 650) < 120) continue;
      if (x > -470 && x < 300 && z > -110 && z < 480) continue;
      if (R() < 0.5) rainTree(x, z, 0.8 + R() * 0.6);
      else palm(x, z, 0.9 + R() * 0.3);
    }

    // --- lampu jalan ---
    const lampPoleGeo = new THREE.CylinderGeometry(0.08, 0.11, 1, 6);
    const lampPoles = new Instancer(lampPoleGeo, new THREE.MeshLambertMaterial({ color: 0x8a939c }));
    const lampHeads = new Instancer(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0x5c656e }));
    for (const edge of this.net.edges.values()) {
      const town = edge.kind === 'city' || edge.kind === 'residential';
      if (!town && edge.kind !== 'highway') continue;
      const step = town ? 36 : 60;
      let k = 0;
      for (let s = edge.rFrom + 8; s < edge.length - edge.rTo - 6; s += step, k++) {
        const p = this.net.edgePointAt(edge, s);
        if (edge.kind === 'highway') {
          // lampu di pembahagi tengah, dua lengan
          lampPoles.add(p.x, 5, p.z, 1, 10, 1);
          for (const side of [-1, 1]) {
            lampHeads.add(p.x + p.dz * 1.6 * side, 9.9, p.z - p.dx * 1.6 * side, 0.4, 0.15, 3.2, Math.atan2(p.dz, -p.dx));
          }
          continue;
        }
        if (edge.crossings.some((c) => Math.abs(c.s - s) < 6)) continue;
        const side = k % 2 === 0 ? 1 : -1;
        const half = side > 0 ? edge.leftHalf : edge.rightHalf;
        const off = half + 2.4;
        const x = p.x + p.dz * off * side;
        const z = p.z - p.dx * off * side;
        if (!this._free(x, z, 0.4)) continue;
        lampPoles.add(x, 3.8, z, 1, 7.6, 1);
        lampHeads.add(x - p.dz * 0.9 * side, 7.6, z + p.dx * 0.9 * side, 0.45, 0.18, 0.45);
        this.colliders.push({ x, z, yaw: 0, hl: 0.15, hw: 0.15, kind: 'pole' });
      }
    }

    towers.build(g, this.chunks);
    shops.build(g, this.chunks);
    houses.build(g, this.chunks);
    plain.build(g, this.chunks);
    roofs.build(g, this.chunks);
    trunks.build(g, this.chunks);
    canopies.build(g, this.chunks);
    palmTrunks.build(g, this.chunks);
    leaves.build(g, this.chunks);
    lampPoles.build(g, this.chunks);
    lampHeads.build(g, this.chunks);

    this._backdrop();
    return { group: g, colliders: this.colliders, scenery: this };
  }

  _cityBlock(towers, shops, x0, x1, z0, z1, cols) {
    const R = this.rand;
    const w = x1 - x0;
    const d = z1 - z0;
    if (w < 20 || d < 20) return;
    // rumah kedai di sepanjang tepi blok
    const depth = 12;
    const unit = 26;
    const rowAlong = (ax, az, bx, bz) => {
      const L = Math.hypot(bx - ax, bz - az);
      const n = Math.floor(L / unit);
      for (let k = 0; k < n; k++) {
        const t = (k + 0.5) / n;
        const x = ax + (bx - ax) * t;
        const z = az + (bz - az) * t;
        if (!this._free(x, z, 4)) continue;
        const h = 9 + Math.floor(R() * 3) * 3.2;
        const horizontal = Math.abs(bz - az) < 1;
        const sw = horizontal ? L / n - 1 : depth;
        const sd = horizontal ? depth : L / n - 1;
        this._addBuilding(shops, x, z, sw, sd, h, [0xf3e3c3, 0xe7c9a9, 0xd9e4ec, 0xf5d0c5, 0xe0e8c8][Math.floor(R() * 5)], 0);
      }
    };
    rowAlong(x0 + 14, z0 + depth / 2, x1 - 14, z0 + depth / 2);
    rowAlong(x0 + 14, z1 - depth / 2, x1 - 14, z1 - depth / 2);
    rowAlong(x0 + depth / 2, z0 + depth + 4, x0 + depth / 2, z1 - depth - 4);
    rowAlong(x1 - depth / 2, z0 + depth + 4, x1 - depth / 2, z1 - depth - 4);
    // menara di tengah
    const ix0 = x0 + depth + 10;
    const ix1 = x1 - depth - 10;
    const iz0 = z0 + depth + 10;
    const iz1 = z1 - depth - 10;
    for (let x = ix0 + 14; x < ix1 - 8; x += 34) {
      for (let z = iz0 + 14; z < iz1 - 8; z += 34) {
        if (R() < 0.15) continue;
        const bw = 18 + R() * 10;
        const bd = 18 + R() * 10;
        const h = 22 + R() * 55;
        if (!this._free(x, z, 10)) continue;
        this._addBuilding(towers, x, z, bw, bd, h, cols[Math.floor(R() * cols.length)]);
      }
    }
  }

  _houseBlock(houses, roofs, x0, x1, z0, z1, pastel, roofCols) {
    const R = this.rand;
    const placeRow = (z, facing) => {
      for (let x = x0 + 8; x < x1 - 8; x += 14) {
        if (R() < 0.12) continue;
        if (!this._free(x, z, 5)) continue;
        const col = pastel[Math.floor(R() * pastel.length)];
        this._addBuilding(houses, x, z, 10, 8, 4.6, col, facing);
        roofs.add(x, 4.6 + 1.3, z, 15, 2.6, 12, 0, roofCols[Math.floor(R() * roofCols.length)]);
      }
    };
    placeRow(z0 + 6, Math.PI);
    if (z1 - z0 > 40) placeRow(z1 - 6, 0);
  }

  _school(plain, roofs, x0, x1, z0, z1) {
    // bangunan sekolah 3 tingkat + padang
    const x = x0 + 34;
    const z = (z0 + z1) / 2;
    this._addBuilding(plain, x, z, 18, 70, 11, 0xf3ead2);
    plain.add(x - 9.2, 6, z, 0.6, 1.2, 70, 0, 0x2b62b8); // jalur biru
    plain.add(x, 11.4, z, 21, 0.8, 74, 0, 0x2b62b8);
    this._addBuilding(plain, x + 40, z - 30, 30, 12, 7, 0xf3ead2);
    // padang
    const field = new THREE.Mesh(new THREE.PlaneGeometry(70, 90), new THREE.MeshLambertMaterial({ color: 0x7cc35a }));
    field.rotation.x = -Math.PI / 2;
    field.position.set(x + 60, 0.005, z + 10);
    field.receiveShadow = true;
    this.group.add(field);
    // pagar sekolah (visual)
    plain.add(x0 + 8, 0.7, z, 0.15, 1.4, z1 - z0 - 10, 0, 0x1e5bb5);
    this.footprints.push({ x: x0 + 8, z, hw: 0.5, hd: (z1 - z0) / 2 });
    // tiang bendera
    plain.add(x0 + 16, 5, z, 0.12, 10, 0.12, 0, 0xdddddd);
    this._flagPos = { x: x0 + 16, z };
  }

  _backdrop() {
    const g = this.group;
    const mountMat = new THREE.MeshLambertMaterial({ color: 0x5f8f74, flatShading: true, fog: false });
    const farMat = new THREE.MeshLambertMaterial({ color: 0x8fb0b8, flatShading: true, fog: false });
    const R = mulberry32(99);
    const cx = 200;
    const cz = -1000;
    for (let i = 0; i < 46; i++) {
      const a = (i / 46) * Math.PI * 2 + R() * 0.05;
      const near = i % 2 === 0;
      const r = near ? 3100 + R() * 300 : 3600 + R() * 300;
      const h = 250 + R() * 450;
      const geo = new THREE.ConeGeometry(300 + R() * 300, h, 6 + Math.floor(R() * 3));
      const m = new THREE.Mesh(geo, near ? mountMat : farMat);
      m.position.set(cx + Math.cos(a) * r, h / 2 - 30, cz + Math.sin(a) * r);
      m.rotation.y = R() * 3;
      g.add(m);
    }
    const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, fog: false, emissive: 0xaaaaaa });
    const cg = new THREE.IcosahedronGeometry(1, 1);
    const clouds = new Instancer(cg, cloudMat, { shadow: false, always: true });
    for (let i = 0; i < 40; i++) {
      const a = R() * Math.PI * 2;
      const r = 800 + R() * 2200;
      const x = cx + Math.cos(a) * r;
      const z = cz + Math.sin(a) * r;
      const y = 380 + R() * 250;
      for (let k = 0; k < 4; k++) {
        const s = 40 + R() * 50;
        clouds.add(x + (k - 1.5) * s * 0.9, y + R() * 15, z + R() * 30, s * 1.3, s * 0.6, s);
      }
    }
    clouds.build(g, null);
  }
}
