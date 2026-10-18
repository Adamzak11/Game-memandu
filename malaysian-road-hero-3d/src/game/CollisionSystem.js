import { makeOBB, obbOverlap, obbCircleOverlap, toLocal, wrapAngle, KMH } from './util.js';

// Pengesanan perlanggaran 2D (pandangan atas) menggunakan kotak berorientasi (OBB).
// GAME OVER hanya apabila kotak benar-benar bertindih — bukan sekadar berdekatan.
// Objek statik pada kelajuan sangat rendah (< 5 km/j) hanya menghentikan kereta.

export class CollisionSystem {
  constructor(world) {
    this.world = world;
  }

  playerOBB(p) {
    return makeOBB(p.x, p.z, p.yaw, p.length / 2, p.width / 2);
  }

  // pulangkan { type:'static'|'vehicle'|'pedestrian', ... } atau null
  check(player, traffic, pedestrians, recentLaneChange) {
    const po = this.playerOBB(player);
    // kenderaan
    for (const n of traffic.npcs) {
      if (Math.abs(n.x - player.x) > 14 || Math.abs(n.z - player.z) > 14) continue;
      const no = makeOBB(n.x, n.z, n.yaw, n.length / 2, n.width / 2);
      if (obbOverlap(po, no)) return { type: 'vehicle', other: n, reason: this._reason(player, n, recentLaneChange) };
    }
    // pejalan kaki
    for (const p of pedestrians.peds) {
      if (Math.abs(p.x - player.x) > 6 || Math.abs(p.z - player.z) > 6) continue;
      if (obbCircleOverlap(po, p.x, p.z, 0.3)) return { type: 'pedestrian', reason: 'Anda melanggar pejalan kaki.' };
    }
    // statik
    for (const c of this.world.collidersNear(player.x, player.z, 6)) {
      if (obbOverlap(po, c)) {
        const kmh = Math.abs(player.speed) * KMH;
        if (kmh < 5) return { type: 'bump', collider: c };
        const what = c.kind === 'building' ? 'bangunan' : c.kind === 'tree' ? 'pokok' : c.kind === 'barrier' ? 'penghadang jalan' : 'tiang tepi jalan';
        return { type: 'static', reason: `Anda melanggar ${what}.` };
      }
    }
    return null;
  }

  _reason(player, npc, recentLaneChange) {
    const loc = toLocal(player.yaw, player.x, player.z, npc.x, npc.z);
    const rel = Math.abs(wrapAngle(npc.yaw - player.yaw));
    if (rel > 2.3) return 'Anda bertembung dengan kenderaan dari arah bertentangan.';
    if (recentLaneChange && Math.abs(loc.right) > 1.0) return 'Anda gagal mengelakkan perlanggaran ketika menukar lorong.';
    if (rel > 0.8) return 'Anda berlanggar dengan kenderaan di persimpangan.';
    if (loc.fwd > 1.5) return 'Anda melanggar kenderaan di hadapan.';
    if (loc.fwd < -1.5) {
      return player.speed < 0
        ? 'Anda mengundur dan melanggar kenderaan di belakang.'
        : 'Kenderaan di belakang melanggar anda — elakkan brek mengejut tanpa sebab dan jangan berhenti di tengah jalan.';
    }
    return 'Anda berlanggar dengan kenderaan di sebelah.';
  }
}
