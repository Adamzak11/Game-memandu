import { buildPedestrian } from './models.js';
import { forwardOf } from '../game/util.js';

// Pejalan kaki di lintasan zebra.
// Pejalan kaki hanya mula melintas apabila tiada kenderaan yang menghampiri dalam jarak
// berhenti yang munasabah, supaya situasi sentiasa adil kepada pemain.

const WALK = 1.25;

export class Pedestrians {
  constructor(network, scene) {
    this.net = network;
    this.scene = scene;
    this.peds = [];
    let seed = 1;
    for (const c of network.crossings) {
      const count = c.school ? 3 : 2;
      for (let i = 0; i < count; i++) {
        const model = buildPedestrian(seed++);
        scene.add(model);
        const ped = { crossing: c, model, side: i % 2 === 0 ? -1 : 1, u: 0, state: 'WAIT', timer: 0, along: (i - 1) * 0.9, phase: Math.random() * 6 };
        this.peds.push(ped);
        c.peds.push(ped);
      }
    }
    this.reset();
  }

  reset() {
    let k = 0;
    for (const p of this.peds) {
      const end = p.crossing.halfRoad + 2.2;
      p.u = p.side * end;
      p.state = 'WAIT';
      p.timer = 3 + ((k++ * 2.7) % 6);
      this._pose(p);
    }
  }

  // Adakah kenderaan menghampiri lintasan dalam jarak yang tidak selamat?
  _vehicleThreat(c, vehicles) {
    for (const v of vehicles) {
      const f = forwardOf(v.yaw);
      const rx = c.x - v.x;
      const rz = c.z - v.z;
      const along = rx * f.x + rz * f.z;
      const lat = Math.abs(rx * f.z - rz * f.x);
      if (lat > c.halfRoad + 3) continue;
      const stopDist = (v.speed * v.speed) / (2 * 3.0) + 10;
      if (along > -3 && along < stopDist) return true;
    }
    return false;
  }

  isBlocked(c) {
    for (const p of c.peds) {
      if (p.state === 'CROSS' || Math.abs(p.u) < c.halfRoad + 0.6) return true;
    }
    return false;
  }

  update(dt, vehicles) {
    for (const p of this.peds) {
      const c = p.crossing;
      const end = c.halfRoad + 2.2;
      if (p.state === 'WAIT') {
        p.timer -= dt;
        if (p.timer <= 0) {
          if (!this._vehicleThreat(c, vehicles)) {
            p.state = 'CROSS';
            p.target = -Math.sign(p.u || 1) * end;
          } else {
            p.timer = 0.5;
          }
        }
      } else if (p.state === 'CROSS') {
        const dir = Math.sign(p.target - p.u);
        p.u += dir * WALK * dt;
        p.phase += dt * 7;
        if ((dir > 0 && p.u >= p.target) || (dir < 0 && p.u <= p.target)) {
          p.u = p.target;
          p.state = 'WAIT';
          p.timer = 6 + Math.random() * 10;
        }
      }
      this._pose(p);
    }
  }

  _pose(p) {
    const c = p.crossing;
    const x = c.x + c.lx * p.u + c.tx * p.along;
    const z = c.z + c.lz * p.u + c.tz * p.along;
    p.x = x;
    p.z = z;
    p.model.position.set(x, 0, z);
    const dir = p.state === 'CROSS' ? Math.sign(p.target - p.u) : -Math.sign(p.u || 1);
    // menghadap arah melintas
    const fx = c.lx * dir;
    const fz = c.lz * dir;
    p.model.rotation.y = Math.atan2(-fx, -fz);
    const swing = p.state === 'CROSS' ? Math.sin(p.phase) * 0.5 : 0;
    const legs = p.model.userData.legs;
    legs[0].rotation.x = swing;
    legs[1].rotation.x = -swing;
  }

  onRoad(p) {
    return Math.abs(p.u) < p.crossing.halfRoad + 0.3;
  }
}
