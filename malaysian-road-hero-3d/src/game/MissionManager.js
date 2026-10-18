import * as THREE from 'three';
import { LAYER_INTERIOR } from '../world/PlayerCarModel.js';

// Sistem misi: checkpoint berturutan, objektif 'count' dan 'avoid'.
// Misi hanya LULUS apabila destinasi dicapai DAN semua objektif dipenuhi.

export class MissionManager {
  constructor(world, { onComplete, onObjectivesChanged, onCheckpoint }) {
    this.world = world;
    this.net = world.network;
    this.onComplete = onComplete;
    this.onObjectivesChanged = onObjectivesChanged;
    this.onCheckpoint = onCheckpoint;
    this.mission = null;
    this.marker = this._buildMarker();
    this.marker.visible = false;
    world.scene.add(this.marker);
  }

  _buildMarker() {
    const g = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x29e0ff, transparent: true, opacity: 0.55, depthWrite: false });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.12, 8, 40, Math.PI), ringMat);
    ring.position.y = 0;
    g.add(ring);
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.4, 4), new THREE.MeshBasicMaterial({ color: 0xffd23f }));
    arrow.rotation.x = Math.PI;
    arrow.position.y = 5.2;
    g.add(arrow);
    this.arrow = arrow;
    this.ringMat = ringMat;
    g.traverse((o) => o.layers.set(LAYER_INTERIOR));
    return g;
  }

  start(mission) {
    this.mission = mission;
    this.reset();
  }

  reset() {
    const m = this.mission;
    this.time = 0;
    this.cpIndex = 0;
    this.done = false;
    this.warnings = [];
    this.counts = {};
    this.failed = new Set();
    this.checkpoints = (m?.checkpoints || []).map((c) => {
      const spot = this.net.laneSpot(c.edge, c.dir, c.t, 0);
      return { ...c, x: spot.x, z: spot.z, dx: spot.dx, dz: spot.dz };
    });
    this._placeMarker();
    this.onObjectivesChanged?.();
  }

  get isFree() {
    return !this.mission || !this.mission.objectives;
  }

  get currentCheckpoint() {
    return this.checkpoints[this.cpIndex] || null;
  }

  _placeMarker() {
    const cp = this.currentCheckpoint;
    if (!cp) {
      this.marker.visible = false;
      return;
    }
    this.marker.visible = true;
    this.marker.position.set(cp.x, 0, cp.z);
    this.marker.rotation.y = Math.atan2(-cp.dx, -cp.dz);
    this.ringMat.color.set(cp.finish ? 0x6dff7a : 0x29e0ff);
  }

  onWarning(id) {
    if (!this.mission || this.done) return;
    this.warnings.push(id);
    for (const o of this.mission.objectives || []) {
      if (o.type === 'avoid' && o.warnings.includes(id)) this.failed.add(o.id);
    }
    this.onObjectivesChanged?.();
  }

  onEvent(name) {
    if (!this.mission || this.done) return;
    this.counts[name] = (this.counts[name] || 0) + 1;
    this.onObjectivesChanged?.();
  }

  objectiveStatus(o) {
    if (o.type === 'route') {
      const total = this.checkpoints.length;
      return { done: this.cpIndex >= total, progress: `${Math.min(this.cpIndex, total)}/${total}` };
    }
    if (o.type === 'count') {
      const c = this.counts[o.event] || 0;
      return { done: c >= o.target, progress: `${Math.min(c, o.target)}/${o.target}` };
    }
    if (o.type === 'avoid') {
      return { done: !this.failed.has(o.id), failed: this.failed.has(o.id), progress: this.failed.has(o.id) ? 'GAGAL' : 'OK' };
    }
    return { done: false };
  }

  update(dt, player) {
    if (!this.mission || this.done) return;
    this.time += dt;
    this.arrow.position.y = 5.2 + Math.sin(this.time * 3) * 0.3;
    this.arrow.rotation.y += dt * 2;
    const cp = this.currentCheckpoint;
    if (!cp) return;
    const d = Math.hypot(player.x - cp.x, player.z - cp.z);
    if (d < 7.5) {
      this.cpIndex++;
      this.onCheckpoint?.(cp, this.currentCheckpoint);
      this._placeMarker();
      this.onObjectivesChanged?.();
      if (cp.finish || !this.currentCheckpoint) this._finish();
    }
  }

  _finish() {
    this.done = true;
    const objs = (this.mission.objectives || []).map((o) => ({ ...o, status: this.objectiveStatus(o) }));
    const passed = objs.every((o) => o.status.done);
    const n = this.warnings.length;
    const stars = passed ? (n === 0 ? 3 : n <= 2 ? 2 : 1) : 0;
    this.onComplete?.({ passed, stars, time: this.time, warnings: [...this.warnings], objectives: objs });
  }

  distanceToCheckpoint(player) {
    const cp = this.currentCheckpoint;
    return cp ? Math.hypot(player.x - cp.x, player.z - cp.z) : null;
  }
}
