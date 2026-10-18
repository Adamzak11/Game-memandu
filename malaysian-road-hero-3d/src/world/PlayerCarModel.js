import * as THREE from 'three';
import { box, cyl, sphere, mat } from './models.js';

// Kereta pemain (pandu kanan): kokpit 3D, stereng di sebelah KANAN, papan pemuka,
// kluster meter (canvas), cermin sisi kiri/kanan dan cermin pandang belakang.
//
// Lapisan (layers):
//   1 = kokpit dalaman & permukaan cermin -> hanya kamera utama (elak rendering rekursif)
//   2 = badan luar kereta -> hanya kamera cermin sisi (nampak sisi kereta sendiri)

export const LAYER_INTERIOR = 1;
export const LAYER_EXTERIOR = 2;

export const COCKPIT = {
  eye: new THREE.Vector3(0.38, 1.25, 0.15),
  wheelCenter: new THREE.Vector3(0.38, 0.8, -0.32),
  mirrors: {
    left: { pos: new THREE.Vector3(-1.0, 1.0, -0.52), size: [0.24, 0.15] },
    right: { pos: new THREE.Vector3(1.0, 1.0, -0.52), size: [0.24, 0.15] },
    rear: { pos: new THREE.Vector3(0.02, 1.37, -0.46), size: [0.22, 0.068] }
  }
};

function setLayer(obj, layer) {
  obj.traverse((o) => o.layers.set(layer));
}

function beam(a, b, t, material) {
  const len = a.distanceTo(b);
  const m = new THREE.Mesh(box(t, t, 1), material);
  m.scale.z = len;
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.lookAt(b);
  return m;
}

export class PlayerCarModel {
  constructor(color = 0xd32f2f) {
    this.group = new THREE.Group();
    this.interior = new THREE.Group();
    this.exterior = new THREE.Group();
    this.group.add(this.interior, this.exterior);
    this.mirrorSlots = {};
    this._buildExterior(color);
    this._buildInterior(color);
    setLayer(this.interior, LAYER_INTERIOR);
    setLayer(this.exterior, LAYER_EXTERIOR);
  }

  _buildExterior(color) {
    const body = mat(color);
    const g = this.exterior;
    const lower = new THREE.Mesh(box(1.78, 0.62, 4.3), body);
    lower.position.set(0, 0.64, 0);
    g.add(lower);
    const cab = new THREE.Mesh(box(1.64, 0.52, 2.0), mat(0x2a3b52));
    cab.position.set(0, 1.2, 0.25);
    g.add(cab);
    for (const s of [-1, 1]) {
      const w = new THREE.Mesh(cyl(0.33, 0.33, 0.24, 14), mat(0x1d1f24));
      w.rotation.z = Math.PI / 2;
      w.position.set(s * 0.8, 0.33, 1.35);
      g.add(w);
      const w2 = w.clone();
      w2.position.z = -1.35;
      g.add(w2);
    }
  }

  _buildInterior(color) {
    const g = this.interior;
    const dark = mat(0x23262c);
    const darker = mat(0x16181c);
    const trim = mat(0x3a3f47);
    const paint = mat(color);

    // bonet (kelihatan melalui cermin depan)
    const hood = new THREE.Mesh(box(1.72, 0.12, 1.45), paint);
    hood.position.set(0, 0.86, -1.42);
    hood.rotation.x = 0.06;
    g.add(hood);
    // papan pemuka
    const dash = new THREE.Mesh(box(1.68, 0.3, 0.5), dark);
    dash.position.set(0, 0.74, -0.86);
    g.add(dash);
    const dashTop = new THREE.Mesh(box(1.68, 0.04, 0.42), darker);
    dashTop.position.set(0, 0.895, -0.84);
    g.add(dashTop);
    // tudung kluster meter (di hadapan pemandu, sebelah kanan)
    const hoodC = new THREE.Mesh(box(0.46, 0.05, 0.12), darker);
    hoodC.position.set(0.38, 0.94, -0.72);
    g.add(hoodC);
    // kluster meter (tekstur canvas dikemas kini)
    this.clusterCanvas = document.createElement('canvas');
    this.clusterCanvas.width = 512;
    this.clusterCanvas.height = 224;
    this.clusterTex = new THREE.CanvasTexture(this.clusterCanvas);
    this.clusterTex.colorSpace = THREE.SRGBColorSpace;
    const cluster = new THREE.Mesh(
      new THREE.PlaneGeometry(0.42, 0.184),
      new THREE.MeshBasicMaterial({ map: this.clusterTex, toneMapped: false })
    );
    cluster.position.set(0.38, 0.93, -0.62);
    cluster.rotation.x = -0.35;
    g.add(cluster);
    // konsol tengah & tuil gear
    const console1 = new THREE.Mesh(box(0.28, 0.4, 0.7), dark);
    console1.position.set(0, 0.55, -0.35);
    g.add(console1);
    const gear = new THREE.Mesh(cyl(0.02, 0.02, 0.18, 6), trim);
    gear.position.set(0, 0.82, -0.18);
    g.add(gear);
    const knob = new THREE.Mesh(sphere(0.04), darker);
    knob.position.set(0, 0.92, -0.18);
    g.add(knob);
    // skrin infotainment
    const scr = new THREE.Mesh(box(0.26, 0.15, 0.02), mat(0x0b2a44, { basic: true }));
    scr.position.set(0, 0.93, -0.74);
    scr.rotation.x = -0.25;
    g.add(scr);
    // pintu & ambang tingkap
    for (const s of [-1, 1]) {
      const door = new THREE.Mesh(box(0.08, 0.5, 1.6), dark);
      door.position.set(s * 0.86, 0.7, 0.15);
      g.add(door);
      const sill = new THREE.Mesh(box(0.12, 0.05, 1.6), trim);
      sill.position.set(s * 0.84, 0.97, 0.15);
      g.add(sill);
      // tiang A
      g.add(beam(new THREE.Vector3(s * 0.8, 0.92, -0.7), new THREE.Vector3(s * 0.7, 1.47, -0.12), 0.05, dark));
      // tiang B
      g.add(beam(new THREE.Vector3(s * 0.84, 0.98, 0.75), new THREE.Vector3(s * 0.74, 1.4, 0.7), 0.08, dark));
    }
    // bumbung & bingkai atas cermin depan
    const roof = new THREE.Mesh(box(1.5, 0.05, 1.8), mat(0xb8b2a6));
    roof.position.set(0, 1.5, 0.65);
    g.add(roof);
    const header = new THREE.Mesh(box(1.42, 0.07, 0.08), dark);
    header.position.set(0, 1.47, -0.12);
    g.add(header);
    const cowl = new THREE.Mesh(box(1.6, 0.04, 0.06), darker);
    cowl.position.set(0, 0.96, -1.0);
    g.add(cowl);
    // tempat duduk
    for (const sx of [-0.38, 0.38]) {
      const seat = new THREE.Mesh(box(0.5, 0.12, 0.5), mat(0x2f3540));
      seat.position.set(sx, 0.48, 0.35);
      g.add(seat);
      const back = new THREE.Mesh(box(0.5, 0.65, 0.1), mat(0x2f3540));
      back.position.set(sx, 0.85, 0.65);
      back.rotation.x = 0.15;
      g.add(back);
    }

    // stereng (kanan)
    this.wheelGroup = new THREE.Group();
    this.wheelGroup.position.copy(COCKPIT.wheelCenter);
    this.wheelGroup.rotation.x = -0.38;
    const wheelRot = new THREE.Group();
    this.wheelRot = wheelRot;
    this.wheelGroup.add(wheelRot);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.022, 10, 32), darker);
    wheelRot.add(rim);
    const hub = new THREE.Mesh(cyl(0.055, 0.055, 0.05, 14), dark);
    hub.rotation.x = Math.PI / 2;
    wheelRot.add(hub);
    const logo = new THREE.Mesh(cyl(0.022, 0.022, 0.052, 10), mat(0xc9ccd2));
    logo.rotation.x = Math.PI / 2;
    wheelRot.add(logo);
    for (const [x, y, rz] of [[-0.1, 0, 0], [0.1, 0, 0], [0, -0.1, Math.PI / 2]]) {
      const spoke = new THREE.Mesh(box(0.14, 0.03, 0.02), dark);
      spoke.position.set(x, y, 0);
      spoke.rotation.z = rz;
      wheelRot.add(spoke);
    }
    const column = new THREE.Mesh(cyl(0.035, 0.045, 0.3, 8), dark);
    column.rotation.x = Math.PI / 2;
    column.position.set(0, 0, -0.16);
    this.wheelGroup.add(column);
    g.add(this.wheelGroup);
    // tuil signal
    const stalk = new THREE.Mesh(box(0.14, 0.015, 0.015), trim);
    stalk.position.set(-0.13, 0.03, -0.08);
    this.wheelGroup.add(stalk);

    // tangan pemandu (warna pakaian dari profil)
    this.skinMat = new THREE.MeshLambertMaterial({ color: 0xc68a5e });
    this.sleeveMat = new THREE.MeshLambertMaterial({ color: 0x2f6fd6 });
    this.hands = [];
    for (const a of [Math.PI * 0.82, Math.PI * 0.18]) {
      const h = new THREE.Mesh(sphere(0.045, 10, 8), this.skinMat);
      h.position.set(Math.cos(a) * 0.19, Math.sin(a) * 0.19, 0.02);
      wheelRot.add(h);
      this.hands.push(h);
    }
    this.arms = [];
    for (let i = 0; i < 2; i++) {
      const arm = new THREE.Mesh(box(0.065, 0.065, 1), this.sleeveMat);
      g.add(arm);
      this.arms.push(arm);
    }
    this.shoulders = [new THREE.Vector3(0.12, 0.66, -0.02), new THREE.Vector3(0.66, 0.66, -0.02)];

    // cermin: perumah + slot permukaan (diisi oleh MirrorSystem)
    const eye = COCKPIT.eye;
    for (const [key, m] of Object.entries(COCKPIT.mirrors)) {
      const slot = new THREE.Group();
      slot.position.copy(m.pos);
      slot.lookAt(eye);
      const housing = new THREE.Mesh(box(m.size[0] + 0.03, m.size[1] + 0.03, 0.05), key === 'rear' ? darker : paint);
      housing.position.z = -0.035;
      slot.add(housing);
      g.add(slot);
      this.mirrorSlots[key] = slot;
      if (key !== 'rear') {
        const armM = beam(new THREE.Vector3(Math.sign(m.pos.x) * 0.82, 0.96, -0.55), m.pos.clone(), 0.04, paint);
        g.add(armM);
      } else {
        const st = beam(new THREE.Vector3(0.02, 1.47, -0.42), m.pos.clone().add(new THREE.Vector3(0, m.size[1] / 2, -0.06)), 0.02, darker);
        g.add(st);
      }
    }
    this._clusterState = '';
  }

  setOutfit(skin, sleeve) {
    this.skinMat.color.set(skin);
    this.sleeveMat.color.set(sleeve);
  }

  update(steerVisual) {
    this.wheelRot.rotation.z = steerVisual;
    // lengan: dari bahu ke tangan (dalam koordinat tempatan kereta)
    this.group.updateMatrixWorld(true);
    const inv = new THREE.Matrix4().copy(this.interior.matrixWorld).invert();
    for (let i = 0; i < 2; i++) {
      const hw = new THREE.Vector3();
      this.hands[i].getWorldPosition(hw);
      hw.applyMatrix4(inv);
      const sh = this.shoulders[i];
      const arm = this.arms[i];
      arm.position.copy(sh).add(hw).multiplyScalar(0.5);
      arm.scale.z = sh.distanceTo(hw);
      arm.updateMatrixWorld();
      arm.lookAt(this.interior.localToWorld(hw.clone()));
    }
  }

  drawCluster(kmh, limit, signal, blinkOn, reverse) {
    const key = `${Math.round(kmh)}|${limit}|${signal}|${blinkOn}|${reverse}`;
    if (key === this._clusterState) return;
    this._clusterState = key;
    const c = this.clusterCanvas;
    const g = c.getContext('2d');
    g.fillStyle = '#05070b';
    g.fillRect(0, 0, c.width, c.height);
    // dail kelajuan
    const cx = 256;
    const cy = 150;
    const R = 112;
    const a0 = Math.PI * 0.8;
    const a1 = Math.PI * 2.2;
    g.lineWidth = 10;
    g.strokeStyle = '#25303d';
    g.beginPath();
    g.arc(cx, cy, R, a0, a1);
    g.stroke();
    const frac = Math.min(1, kmh / 180);
    g.strokeStyle = limit && kmh > limit + 3 ? '#ff5a4a' : '#38d4ff';
    g.beginPath();
    g.arc(cx, cy, R, a0, a0 + (a1 - a0) * frac);
    g.stroke();
    g.fillStyle = '#9fb3c8';
    g.font = 'bold 15px Arial';
    g.textAlign = 'center';
    for (let v = 0; v <= 180; v += 30) {
      const a = a0 + ((a1 - a0) * v) / 180;
      g.fillText(String(v), cx + Math.cos(a) * (R - 26), cy + Math.sin(a) * (R - 26) + 5);
    }
    const na = a0 + (a1 - a0) * frac;
    g.strokeStyle = '#ff7043';
    g.lineWidth = 5;
    g.beginPath();
    g.moveTo(cx, cy);
    g.lineTo(cx + Math.cos(na) * (R - 8), cy + Math.sin(na) * (R - 8));
    g.stroke();
    g.fillStyle = '#ffffff';
    g.font = 'bold 46px Arial';
    g.fillText(String(Math.round(kmh)), cx, cy + 6);
    g.font = 'bold 15px Arial';
    g.fillStyle = '#9fb3c8';
    g.fillText('km/j', cx, cy + 30);
    // isyarat
    const arrow = (x, dir, on) => {
      g.fillStyle = on ? '#3dff7a' : '#1d3326';
      g.beginPath();
      g.moveTo(x + dir * 26, 44);
      g.lineTo(x, 24);
      g.lineTo(x, 64);
      g.closePath();
      g.fill();
      g.fillRect(dir > 0 ? x - 22 : x, 36, 22, 16);
    };
    arrow(70, -1, signal === -1 && blinkOn);
    arrow(442, 1, signal === 1 && blinkOn);
    // had laju
    if (limit) {
      g.fillStyle = '#fff';
      g.beginPath();
      g.arc(456, 160, 30, 0, Math.PI * 2);
      g.fill();
      g.lineWidth = 7;
      g.strokeStyle = '#d0202a';
      g.stroke();
      g.fillStyle = '#111';
      g.font = 'bold 22px Arial';
      g.fillText(String(limit), 456, 168);
    }
    g.fillStyle = reverse ? '#ffb020' : '#5f7387';
    g.font = 'bold 26px Arial';
    g.fillText(reverse ? 'R' : 'D', 56, 170);
    this.clusterTex.needsUpdate = true;
  }
}
