import * as THREE from 'three';
import { asphaltTexture, pavementTexture } from './textures.js';

// Menukar graf jalan kepada mesh 3D: permukaan jalan, simpang, kaki lima,
// garisan jalan (tengah, berkembar, lorong, tepi), garisan berhenti, lintasan zebra,
// penghadang lebuh raya. Semua geometri digabung mengikut bahan untuk prestasi.

class StripBuffer {
  constructor() {
    this.pos = [];
    this.uv = [];
    this.idx = [];
  }
  quad(a, b, c, d, uva, uvb, uvc, uvd) {
    const i = this.pos.length / 3;
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z, d.x, d.y, d.z);
    this.uv.push(...uva, ...uvb, ...uvc, ...uvd);
    this.idx.push(i, i + 1, i + 2, i + 1, i + 3, i + 2);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setIndex(this.idx);
    g.computeVertexNormals();
    return g;
  }
}

export class RoadBuilder {
  constructor(network) {
    this.net = network;
    this.group = new THREE.Group();
    this.colliders = [];
    this.road = new StripBuffer();
    this.walk = new StripBuffer();
    this.shoulder = new StripBuffer();
    this.white = new StripBuffer();
    this.yellow = new StripBuffer();
    this.wall = new StripBuffer();
    this.rail = new StripBuffer();
    this.slick = new StripBuffer();
  }

  // Jalur selari garisan tengah: lateral 'off' (+ kiri), lebar 'w', ketinggian 'y'.
  strip(buf, edge, s0, s1, off, w, y, step = 2, uvScale = 6) {
    if (s1 - s0 < 0.05) return;
    const n = Math.max(1, Math.ceil((s1 - s0) / step));
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const s = s0 + ((s1 - s0) * i) / n;
      const p = this.net.edgePointAt(edge, s);
      const lx = p.dz;
      const lz = -p.dx;
      const a = { x: p.x + lx * (off + w / 2), y, z: p.z + lz * (off + w / 2) };
      const b = { x: p.x + lx * (off - w / 2), y, z: p.z + lz * (off - w / 2) };
      if (prev) {
        buf.quad(prev.a, prev.b, a, b, [0, prev.s / uvScale], [w / uvScale, prev.s / uvScale], [0, s / uvScale], [w / uvScale, s / uvScale]);
      }
      prev = { a, b, s };
    }
  }

  // Dinding (penghadang): kotak memanjang di sepanjang jalan.
  wallStrip(buf, edge, s0, s1, off, w, h, step = 4) {
    const n = Math.max(1, Math.ceil((s1 - s0) / step));
    let prev = null;
    for (let i = 0; i <= n; i++) {
      const s = s0 + ((s1 - s0) * i) / n;
      const p = this.net.edgePointAt(edge, s);
      const lx = p.dz;
      const lz = -p.dx;
      const L = { x: p.x + lx * (off + w / 2), z: p.z + lz * (off + w / 2) };
      const R = { x: p.x + lx * (off - w / 2), z: p.z + lz * (off - w / 2) };
      if (prev) {
        const top = (q, y) => ({ x: q.x, y, z: q.z });
        buf.quad(top(prev.L, h), top(prev.R, h), top(L, h), top(R, h), [0, 0], [1, 0], [0, 1], [1, 1]);
        buf.quad(top(prev.L, 0), top(prev.L, h), top(L, 0), top(L, h), [0, 0], [0, 1], [1, 0], [1, 1]);
        buf.quad(top(prev.R, h), top(prev.R, 0), top(R, h), top(R, 0), [0, 1], [0, 0], [1, 1], [1, 0]);
        // kolider untuk segmen
        const mx = (prev.c.x + p.x) / 2 + lx * off;
        const mz = (prev.c.z + p.z) / 2 + lz * off;
        const yaw = Math.atan2(-p.dx, -p.dz);
        this.colliders.push({ x: mx, z: mz, yaw, hl: (s - prev.s) / 2 + 0.2, hw: w / 2, kind: 'barrier' });
      }
      prev = { L, R, s, c: { x: p.x, z: p.z } };
    }
  }

  build() {
    const net = this.net;
    for (const edge of net.edges.values()) this.buildEdge(edge);
    for (const node of net.nodes.values()) this.buildNode(node);

    const asphalt = asphaltTexture();
    const roadMat = new THREE.MeshLambertMaterial({ map: asphalt, color: 0xffffff });
    const roadMesh = new THREE.Mesh(this.road.geometry(), roadMat);
    roadMesh.receiveShadow = true;
    this.group.add(roadMesh);

    const pv = pavementTexture();
    const walkMesh = new THREE.Mesh(this.walk.geometry(), new THREE.MeshLambertMaterial({ map: pv }));
    walkMesh.receiveShadow = true;
    this.group.add(walkMesh);

    const shMesh = new THREE.Mesh(this.shoulder.geometry(), new THREE.MeshLambertMaterial({ color: 0xa89a7c }));
    shMesh.receiveShadow = true;
    this.group.add(shMesh);

    const markMat = (color) =>
      new THREE.MeshLambertMaterial({ color, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    this.group.add(new THREE.Mesh(this.white.geometry(), markMat(0xf4f4f0)));
    this.group.add(new THREE.Mesh(this.yellow.geometry(), markMat(0xf2c230)));
    const slick = new THREE.Mesh(
      this.slick.geometry(),
      new THREE.MeshLambertMaterial({ color: 0x3a4250, transparent: true, opacity: 0.45, polygonOffset: true, polygonOffsetFactor: -1 })
    );
    this.group.add(slick);

    const wallMesh = new THREE.Mesh(this.wall.geometry(), new THREE.MeshLambertMaterial({ color: 0xc9c9c2, side: THREE.DoubleSide }));
    wallMesh.castShadow = true;
    wallMesh.receiveShadow = true;
    this.group.add(wallMesh);
    const railMesh = new THREE.Mesh(this.rail.geometry(), new THREE.MeshLambertMaterial({ color: 0xaab4be, side: THREE.DoubleSide }));
    railMesh.castShadow = true;
    this.group.add(railMesh);

    // nod simpang
    const nodeMat = new THREE.MeshLambertMaterial({ map: asphalt, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    for (const node of net.nodes.values()) {
      if (node.control === 'end') continue;
      const r = node.radius + 1.5;
      const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 28), nodeMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(node.x, 0.012, node.z);
      disc.receiveShadow = true;
      this.group.add(disc);
    }
    return { group: this.group, colliders: this.colliders };
  }

  buildEdge(edge) {
    const L = edge.length;
    const s0 = edge.rFrom;
    const s1 = L - edge.rTo;
    const lh = edge.leftHalf;
    const rh = edge.rightHalf;
    // permukaan jalan
    this.strip(this.road, edge, s0, s1, (lh - rh) / 2, lh + rh, 0.01, 2, 6);

    const town = edge.kind === 'city' || edge.kind === 'residential';
    if (town) {
      // kaki lima di kedua-dua sisi
      this.strip(this.walk, edge, s0 + 1.5, s1 - 1.5, lh + 1.4, 2.8, 0.14, 4, 3);
      this.strip(this.walk, edge, s0 + 1.5, s1 - 1.5, -rh - 1.4, 2.8, 0.14, 4, 3);
      // kerb
      this.strip(this.white, edge, s0 + 1.5, s1 - 1.5, lh + 0.05, 0.12, 0.02, 4);
      this.strip(this.white, edge, s0 + 1.5, s1 - 1.5, -rh - 0.05, 0.12, 0.02, 4);
    } else {
      this.strip(this.shoulder, edge, s0, s1, lh + 1.2, 2.4, 0.005, 4, 4);
      this.strip(this.shoulder, edge, s0, s1, -rh - 1.2, 2.4, 0.005, 4, 4);
      // garisan tepi (putih penuh)
      this.strip(this.white, edge, s0, s1, lh - 0.25, 0.15, 0.02, 4);
      this.strip(this.white, edge, s0, s1, -rh + 0.25, 0.15, 0.02, 4);
    }

    // garisan tengah
    if (edge.twoWay && edge.median === 0) {
      for (const m of edge.centerMarks) {
        if (m.type === 'double') {
          this.strip(this.white, edge, m.from, m.to, 0.16, 0.12, 0.02, 2);
          this.strip(this.white, edge, m.from, m.to, -0.16, 0.12, 0.02, 2);
        } else {
          this.dashes(edge, m.from, m.to, 0, 0.13, 3, 6);
        }
      }
    }
    // lebuh raya: pembahagi + garisan lorong
    if (edge.median > 0) {
      const half = edge.median / 2;
      this.wallStrip(this.wall, edge, s0, s1, 0, 0.6, 0.85);
      this.strip(this.yellow, edge, s0, s1, half - 0.25, 0.15, 0.02, 4);
      this.strip(this.yellow, edge, s0, s1, -half + 0.25, 0.15, 0.02, 4);
      for (let i = 1; i < edge.lanesFwd; i++) this.dashes(edge, s0, s1, half + i * edge.laneWidth, 0.15, 4, 8);
      for (let i = 1; i < edge.lanesBwd; i++) this.dashes(edge, s0, s1, -(half + i * edge.laneWidth), 0.15, 4, 8);
      // pagar penghadang tepi
      this.wallStrip(this.rail, edge, s0, s1, lh + 1.6, 0.25, 0.8);
      this.wallStrip(this.rail, edge, s0, s1, -rh - 1.6, 0.25, 0.8);
    } else if (!edge.twoWay && edge.lanesFwd > 1) {
      for (let i = 1; i < edge.lanesFwd; i++) this.dashes(edge, s0, s1, lh - i * edge.laneWidth, 0.13, 3, 6);
    }

    // garisan berhenti / beri laluan
    const stopLine = (node, toEnd) => {
      const ap = node.approaches.find((a) => a.edgeId === edge.id && a.lanes[0].dir === (toEnd ? 1 : -1));
      if (!ap) return;
      const s = toEnd ? s1 - 0.4 : s0 + 0.4;
      const lo = !edge.twoWay ? -rh : toEnd ? 0 : -rh;
      const hi = !edge.twoWay ? lh : toEnd ? lh : 0;
      if (ap.control === 'signal' || ap.control === 'stop') {
        this.strip(this.white, edge, s - 0.25, s + 0.25, (lo + hi) / 2, hi - lo, 0.021, 1);
      } else if (ap.control === 'giveway') {
        for (let o = lo + 0.3; o < hi - 0.2; o += 0.9) this.strip(this.white, edge, s - 0.2, s + 0.2, o + 0.25, 0.5, 0.021, 1);
      }
    };
    stopLine(this.net.nodes.get(edge.to), true);
    stopLine(this.net.nodes.get(edge.from), false);

    // lintasan zebra
    for (const c of edge.crossings) {
      const half = Math.max(lh, rh);
      for (let o = -half + 0.4; o < half; o += 1.0) {
        this.strip(this.white, edge, c.s - 1.6, c.s + 1.6, o + 0.25, 0.5, 0.022, 1);
      }
    }
    // jalan licin (tompok gelap)
    for (const z of edge.slippery) {
      this.strip(this.slick, edge, z.from, z.to, (lh - rh) / 2, lh + rh - 0.6, 0.015, 4);
    }
  }

  dashes(edge, s0, s1, off, w, dash, period) {
    for (let s = s0 + 1; s < s1 - 1; s += period) {
      this.strip(this.white, edge, s, Math.min(s + dash, s1), off, w, 0.02, dash);
    }
  }

  buildNode(node) {
    if (node.control !== 'end') return;
    // penghujung jalan: penghadang melintang + kolider
    for (const edge of this.net.edges.values()) {
      if (edge.from !== node.id && edge.to !== node.id) continue;
      const atEnd = edge.to === node.id;
      const s = atEnd ? edge.length - 4 : 4;
      const p = this.net.edgePointAt(edge, s);
      const width = edge.leftHalf + edge.rightHalf + 6;
      const g = new THREE.Mesh(
        new THREE.BoxGeometry(width, 1.1, 0.6),
        new THREE.MeshLambertMaterial({ color: 0xe9e3d0 })
      );
      const yaw = Math.atan2(-p.dx, -p.dz);
      g.position.set(p.x, 0.55, p.z);
      g.rotation.y = yaw;
      g.castShadow = true;
      this.group.add(g);
      // jalur amaran merah-putih
      for (let i = 0; i < 6; i++) {
        const st = new THREE.Mesh(new THREE.BoxGeometry(width / 12, 0.3, 0.62), new THREE.MeshBasicMaterial({ color: 0xd12b2b }));
        const off = -width / 2 + (width / 6) * i + width / 24;
        st.position.set(p.x + Math.cos(yaw) * off, 0.8, p.z - Math.sin(yaw) * off);
        st.rotation.y = yaw;
        this.group.add(st);
      }
      this.colliders.push({ x: p.x, z: p.z, yaw, hl: 0.3, hw: width / 2, kind: 'barrier' });
    }
  }
}
