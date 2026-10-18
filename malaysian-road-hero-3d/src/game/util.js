// Fungsi matematik kecil yang dikongsi oleh semua sistem.
// Konvensyen dunia: X = timur, Z = selatan, Y = atas. Kenderaan menghala ke -Z tempatan.
// yaw = 0 bermaksud menghala ke utara (-Z); yaw bertambah apabila membelok ke kiri.

export const KMH = 3.6;

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (t) => {
  const x = clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
};

export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export function yawFromDir(dx, dz) {
  return Math.atan2(-dx, -dz);
}

export function forwardOf(yaw) {
  return { x: -Math.sin(yaw), z: -Math.cos(yaw) };
}

export function rightOf(yaw) {
  return { x: Math.cos(yaw), z: -Math.sin(yaw) };
}

// Kotak berorientasi 2D (atas pandangan) untuk pengesanan perlanggaran.
// hl = separuh panjang (paksi hadapan), hw = separuh lebar.
export function makeOBB(x, z, yaw, hl, hw) {
  return { x, z, yaw, hl, hw };
}

function axesOf(o) {
  const s = Math.sin(o.yaw);
  const c = Math.cos(o.yaw);
  return [
    { x: -s, z: -c },
    { x: c, z: -s }
  ];
}

function radiusOn(o, axes, ax) {
  return (
    o.hl * Math.abs(axes[0].x * ax.x + axes[0].z * ax.z) +
    o.hw * Math.abs(axes[1].x * ax.x + axes[1].z * ax.z)
  );
}

// Separating Axis Theorem: true hanya jika kedua-dua kotak benar-benar bertindih.
export function obbOverlap(a, b) {
  const aa = axesOf(a);
  const ba = axesOf(b);
  const dx = b.x - a.x;
  const dz = b.z - a.z;
  const list = [aa[0], aa[1], ba[0], ba[1]];
  for (const ax of list) {
    const dist = Math.abs(dx * ax.x + dz * ax.z);
    if (dist > radiusOn(a, aa, ax) + radiusOn(b, ba, ax)) return false;
  }
  return true;
}

export function obbCircleOverlap(o, cx, cz, r) {
  const ax = axesOf(o);
  const dx = cx - o.x;
  const dz = cz - o.z;
  const lf = dx * ax[0].x + dz * ax[0].z;
  const lr = dx * ax[1].x + dz * ax[1].z;
  const qx = clamp(lf, -o.hl, o.hl);
  const qz = clamp(lr, -o.hw, o.hw);
  const ex = lf - qx;
  const ez = lr - qz;
  return ex * ex + ez * ez <= r * r;
}

// Kedudukan titik dalam bingkai tempatan kenderaan: fwd (+ hadapan), right (+ kanan).
export function toLocal(yaw, ox, oz, px, pz) {
  const f = forwardOf(yaw);
  const r = rightOf(yaw);
  const dx = px - ox;
  const dz = pz - oz;
  return { fwd: dx * f.x + dz * f.z, right: dx * r.x + dz * r.z };
}

// Penjana nombor rawak deterministik (untuk susun atur dunia yang konsisten).
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function rand() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function segIntersect(ax, az, bx, bz, cx, cz, dx, dz) {
  const d = (bx - ax) * (dz - cz) - (bz - az) * (dx - cx);
  if (Math.abs(d) < 1e-9) return false;
  const t = ((cx - ax) * (dz - cz) - (cz - az) * (dx - cx)) / d;
  const u = ((cx - ax) * (bz - az) - (cz - az) * (bx - ax)) / d;
  return t > 0.02 && t < 0.98 && u > 0.02 && u < 0.98;
}

// Carian binari pada tatasusunan jarak kumulatif.
export function findSegment(cum, s) {
  let lo = 0;
  let hi = cum.length - 1;
  if (s <= 0) return 0;
  if (s >= cum[hi]) return hi - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (cum[mid] <= s) lo = mid;
    else hi = mid;
  }
  return lo;
}
