import * as THREE from 'three';

// Model kenderaan Stylized 3D dibina daripada geometri asas Three.js.
// Semua kenderaan menghala ke -Z tempatan. Geometri dan bahan dikongsi (cache) untuk prestasi.

const geoCache = new Map();
const matCache = new Map();

export function box(w, h, d) {
  const k = `b${w}|${h}|${d}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.BoxGeometry(w, h, d));
  return geoCache.get(k);
}

export function cyl(rt, rb, h, seg = 12) {
  const k = `c${rt}|${rb}|${h}|${seg}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.CylinderGeometry(rt, rb, h, seg));
  return geoCache.get(k);
}

export function sphere(r, ws = 12, hs = 8) {
  const k = `s${r}|${ws}|${hs}`;
  if (!geoCache.has(k)) geoCache.set(k, new THREE.SphereGeometry(r, ws, hs));
  return geoCache.get(k);
}

export function mat(color, opts = {}) {
  const k = `${color}|${JSON.stringify(opts)}`;
  if (!matCache.has(k)) {
    const m = opts.basic
      ? new THREE.MeshBasicMaterial({ color, ...(opts.params || {}) })
      : new THREE.MeshLambertMaterial({ color, ...(opts.params || {}) });
    matCache.set(k, m);
  }
  return matCache.get(k);
}

export const LIGHT_MATS = {
  brakeOff: () => mat(0x7a1010),
  brakeOn: () => mat(0xff2a2a, { basic: true }),
  indOff: () => mat(0x8a5a10),
  indOn: () => mat(0xffb020, { basic: true }),
  head: () => mat(0xfff6d8, { basic: true })
};

function mesh(geo, material, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = false;
  return m;
}

function wheels(group, halfTrack, zs, r, w) {
  const g = cyl(r, r, w, 14);
  const m = mat(0x1d1f24);
  const hub = cyl(r * 0.55, r * 0.55, w + 0.02, 10);
  const hm = mat(0xb9c0c8);
  for (const z of zs) {
    for (const s of [-1, 1]) {
      const wh = mesh(g, m, s * halfTrack, r, z, false);
      wh.rotation.z = Math.PI / 2;
      group.add(wh);
      const hb = mesh(hub, hm, s * halfTrack, r, z, false);
      hb.rotation.z = Math.PI / 2;
      group.add(hb);
    }
  }
}

function lights(group, hw, y, zFront, zRear, size = 0.22) {
  const lightGeo = box(size * 1.6, size * 0.7, 0.06);
  const indGeo = box(size * 0.7, size * 0.6, 0.07);
  const out = { brake: [], indL: [], indR: [] };
  for (const s of [-1, 1]) {
    group.add(mesh(lightGeo, LIGHT_MATS.head(), s * (hw - size), y, zFront - 0.02, false));
    const b = mesh(lightGeo, LIGHT_MATS.brakeOff(), s * (hw - size), y, zRear + 0.02, false);
    group.add(b);
    out.brake.push(b);
    const i1 = mesh(indGeo, LIGHT_MATS.indOff(), s * (hw - 0.05), y, zFront + 0.05, false);
    const i2 = mesh(indGeo, LIGHT_MATS.indOff(), s * (hw - 0.05), y, zRear - 0.05, false);
    group.add(i1, i2);
    (s < 0 ? out.indL : out.indR).push(i1, i2);
  }
  return out;
}

export const VEHICLE_SPECS = {
  car: { length: 4.4, width: 1.8, height: 1.5 },
  hatch: { length: 3.9, width: 1.72, height: 1.55 },
  motorcycle: { length: 2.0, width: 0.8, height: 1.5 },
  lorry: { length: 8.6, width: 2.5, height: 3.3 },
  bus: { length: 11.0, width: 2.55, height: 3.3 }
};

export const CAR_COLORS = [0xe8eef4, 0x2c3440, 0xc0392b, 0x2e6fd8, 0xb9c2cc, 0x1e8f5e, 0xf2b134, 0x6b4fd8, 0xff7a3c, 0x8b1e2d];

export function buildVehicle(type, color) {
  const g = new THREE.Group();
  const spec = VEHICLE_SPECS[type];
  const body = mat(color);
  const glass = mat(0x2a3b52);
  let lt;
  if (type === 'car' || type === 'hatch') {
    const L = spec.length;
    const W = spec.width;
    const hood = type === 'car' ? 1.1 : 0.85;
    const trunk = type === 'car' ? 0.75 : 0.2;
    g.add(mesh(box(W, 0.62, L), body, 0, 0.62, 0));
    const cabinL = L - hood - trunk;
    const cz = -L / 2 + hood + cabinL / 2;
    g.add(mesh(box(W - 0.12, 0.55, cabinL), glass, 0, 1.2, cz));
    g.add(mesh(box(W - 0.1, 0.08, cabinL - 0.3), body, 0, 1.5, cz));
    // tiang tingkap
    for (const s of [-1, 1]) g.add(mesh(box(0.06, 0.55, 0.12), body, s * (W / 2 - 0.08), 1.2, cz - cabinL / 2 + 0.1));
    g.add(mesh(box(W + 0.02, 0.18, 0.12), mat(0x30343a), 0, 0.42, -L / 2 + 0.02));
    g.add(mesh(box(W + 0.02, 0.18, 0.12), mat(0x30343a), 0, 0.42, L / 2 - 0.02));
    wheels(g, W / 2 - 0.12, [-L / 2 + 0.8, L / 2 - 0.8], 0.33, 0.24);
    lt = lights(g, W / 2, 0.75, -L / 2, L / 2);
  } else if (type === 'motorcycle') {
    g.add(mesh(box(0.32, 0.4, 1.4), body, 0, 0.62, 0));
    g.add(mesh(box(0.36, 0.2, 0.5), mat(0x222222), 0, 0.88, 0.25));
    const tire = cyl(0.3, 0.3, 0.12, 12);
    for (const z of [-0.7, 0.7]) {
      const t = mesh(tire, mat(0x1d1f24), 0, 0.3, z, false);
      t.rotation.z = Math.PI / 2;
      g.add(t);
    }
    // penunggang
    const shirt = mat([0x3a7bd5, 0xe74c3c, 0x27ae60, 0xf39c12][Math.floor(Math.random() * 4)]);
    g.add(mesh(box(0.42, 0.55, 0.3), shirt, 0, 1.2, 0.15));
    g.add(mesh(sphere(0.17), mat(0xf5f5f5), 0, 1.6, 0.08));
    g.add(mesh(box(0.5, 0.06, 0.06), mat(0x333333), 0, 1.05, -0.45));
    lt = { brake: [], indL: [], indR: [] };
    const bl = mesh(box(0.18, 0.1, 0.05), LIGHT_MATS.brakeOff(), 0, 0.85, 0.72, false);
    g.add(bl);
    lt.brake.push(bl);
    g.add(mesh(box(0.2, 0.14, 0.05), LIGHT_MATS.head(), 0, 0.95, -0.72, false));
  } else if (type === 'lorry') {
    const L = spec.length;
    const W = spec.width;
    const cab = mat(color);
    g.add(mesh(box(W, 2.2, 2.0), cab, 0, 1.55, -L / 2 + 1.0));
    g.add(mesh(box(W - 0.1, 0.8, 0.05), glass, 0, 2.05, -L / 2 - 0.01));
    g.add(mesh(box(W, 2.6, L - 2.3), mat(0xdedad2), 0, 1.95, -L / 2 + 2.15 + (L - 2.3) / 2));
    g.add(mesh(box(W - 0.3, 0.3, L), mat(0x2a2a2a), 0, 0.6, 0));
    wheels(g, W / 2 - 0.2, [-L / 2 + 1.1, L / 2 - 2.2, L / 2 - 1.0], 0.48, 0.34);
    lt = lights(g, W / 2, 0.9, -L / 2, L / 2, 0.26);
    // jalur pemantul belakang
    g.add(mesh(box(W, 0.12, 0.04), mat(0xffcc00, { basic: true }), 0, 0.5, L / 2 + 0.02, false));
  } else if (type === 'bus') {
    const L = spec.length;
    const W = spec.width;
    g.add(mesh(box(W, 2.6, L), body, 0, 1.75, 0));
    g.add(mesh(box(W + 0.02, 0.9, L - 1.2), glass, 0, 2.25, 0.3));
    g.add(mesh(box(W - 0.2, 1.1, 0.05), glass, 0, 2.2, -L / 2 - 0.01));
    g.add(mesh(box(W + 0.03, 0.25, L - 0.5), mat(0xffffff), 0, 1.4, 0));
    wheels(g, W / 2 - 0.2, [-L / 2 + 2.2, L / 2 - 2.5], 0.5, 0.34);
    lt = lights(g, W / 2, 0.9, -L / 2, L / 2, 0.26);
  }
  return { group: g, lights: lt, spec };
}

export function setLightState(lights, brake, indL, indR) {
  for (const b of lights.brake) b.material = brake ? LIGHT_MATS.brakeOn() : LIGHT_MATS.brakeOff();
  for (const i of lights.indL) i.material = indL ? LIGHT_MATS.indOn() : LIGHT_MATS.indOff();
  for (const i of lights.indR) i.material = indR ? LIGHT_MATS.indOn() : LIGHT_MATS.indOff();
}

// Pejalan kaki ringkas
export function buildPedestrian(seed) {
  const g = new THREE.Group();
  const shirts = [0xe74c3c, 0x3498db, 0xf1c40f, 0x9b59b6, 0x1abc9c, 0xffffff];
  const skins = [0xf1c9a5, 0xc68a5e, 0x8d5a3b, 0xe0ac7e];
  const isChild = seed % 3 === 0;
  const sc = isChild ? 0.72 : 1;
  const shirt = mat(seed % 3 === 0 ? 0xffffff : shirts[seed % shirts.length]);
  const pants = mat(isChild ? 0x1f3b8a : 0x34495e);
  const skin = mat(skins[seed % skins.length]);
  const legGeo = box(0.14, 0.8, 0.16);
  const legL = new THREE.Group();
  const legR = new THREE.Group();
  legL.position.set(-0.1, 0.85, 0);
  legR.position.set(0.1, 0.85, 0);
  legL.add(mesh(legGeo, pants, 0, -0.4, 0));
  legR.add(mesh(legGeo, pants, 0, -0.4, 0));
  g.add(legL, legR);
  g.add(mesh(box(0.42, 0.6, 0.24), shirt, 0, 1.15, 0));
  g.add(mesh(sphere(0.16), skin, 0, 1.62, 0));
  g.add(mesh(sphere(0.165, 10, 6), mat(0x1b1b1b), 0, 1.68, 0.03));
  if (isChild) g.add(mesh(box(0.34, 0.4, 0.14), mat(0x2e86de), 0, 1.15, 0.18)); // beg sekolah
  g.scale.setScalar(sc);
  g.userData.legs = [legL, legR];
  return g;
}
