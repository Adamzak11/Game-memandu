import { clamp, forwardOf, wrapAngle, KMH } from './util.js';

// Kawalan kereta pemain — model basikal kinematik (fizik permainan ringkas, BUKAN simulasi
// automotif sebenar). Pecutan & brek beransur-ansur, stereng bergantung kelajuan,
// geseran asas, gear undur pada kelajuan rendah.

export class VehicleController {
  constructor() {
    this.length = 4.3;
    this.width = 1.78;
    this.wheelBase = 2.6;
    this.vmax = 44; // ~160 km/j
    this.reset(0, 0, 0);
  }

  reset(x, z, yaw) {
    this.x = x;
    this.z = z;
    this.yaw = yaw;
    this.speed = 0;
    this.steerInput = 0;
    this.throttle = 0;
    this.brake = 0;
    this.reverse = false;
    this.reverseHold = 0;
    this.signal = 0; // -1 kiri, 1 kanan
    this.signalYaw = 0;
    this.signalTime = 0;
    this.acc = 0;
    this.pitchFx = 0;
    this.prevX = x;
    this.prevZ = z;
    this.prevYaw = yaw;
  }

  get kmh() {
    return Math.abs(this.speed) * KMH;
  }

  toggleSignal(dir) {
    if (this.signal === dir) this.signal = 0;
    else {
      this.signal = dir;
      this.signalYaw = this.yaw;
      this.signalTime = 0;
    }
  }

  update(dt, input, opts = {}) {
    const sens = opts.sensitivity ?? 1;
    const slippery = !!opts.slippery;
    this.prevX = this.x;
    this.prevZ = this.z;
    this.prevYaw = this.yaw;

    // stereng
    const target = (input.left ? 1 : 0) - (input.right ? 1 : 0);
    const rate = target !== 0 ? 2.0 * sens : 3.0;
    const want = target * Math.min(1, 0.55 + 0.45 * sens);
    if (this.steerInput < want) this.steerInput = Math.min(want, this.steerInput + rate * dt);
    else if (this.steerInput > want) this.steerInput = Math.max(want, this.steerInput - rate * dt);

    // pedal
    const gas = input.throttle ? 1 : 0;
    const brk = input.brake ? 1 : 0;
    this.throttle += clamp(gas - this.throttle, -4 * dt, 2.2 * dt);
    this.brake += clamp(brk - this.brake, -5 * dt, 3.5 * dt);

    // gear undur: tahan brek ketika berhenti
    if (!this.reverse && Math.abs(this.speed) < 0.15 && brk && !gas) {
      this.reverseHold += dt;
      if (this.reverseHold > 0.45) this.reverse = true;
    } else if (!brk) {
      this.reverseHold = 0;
    }
    if (this.reverse && gas && Math.abs(this.speed) < 0.15) this.reverse = false;

    const v = this.speed;
    let acc = 0;
    const brakeMax = slippery ? 4.6 : 7.8;
    const emergencyMax = slippery ? 5.5 : 9.5;
    if (!this.reverse) {
      const engine = 3.4 * (1 - Math.pow(Math.max(0, v) / this.vmax, 2));
      acc += this.throttle * engine;
      let decel = this.brake * brakeMax + (input.emergency ? emergencyMax : 0);
      decel += 0.25 + 0.0009 * v * v; // geseran & rintangan udara
      if (v > 0) acc -= decel;
      else acc -= Math.min(decel, 0); // tidak bergerak ke belakang melalui brek
      this.speed = Math.max(0, v + acc * dt);
      if (v <= 0 && this.throttle <= 0.01) this.speed = 0;
    } else {
      // undur: S = minyak ke belakang, W = brek
      const back = this.brake * 1.6;
      const stop = this.throttle * brakeMax + (input.emergency ? emergencyMax : 0) + 0.3;
      let nv = v - back * dt;
      if (nv < 0) nv = Math.min(0, nv + stop * dt * (nv < 0 ? 1 : 0));
      this.speed = Math.max(-4.2, nv);
      acc = (this.speed - v) / dt;
    }
    this.acc = acc;
    this.pitchFx += (clamp(-acc * 0.006, -0.05, 0.05) - this.pitchFx) * Math.min(1, dt * 4);

    // sudut stereng maksimum berkurang apabila laju (had pecutan sisi ~7.5 m/s²)
    const sp = Math.abs(this.speed);
    const maxSteer = Math.min(0.55, Math.atan((this.wheelBase * 7.5) / Math.max(sp * sp, 1)));
    const delta = this.steerInput * maxSteer;
    this.yaw = wrapAngle(this.yaw + (this.speed / this.wheelBase) * Math.tan(delta) * dt);
    const f = forwardOf(this.yaw);
    this.x += f.x * this.speed * dt;
    this.z += f.z * this.speed * dt;

    // batal signal automatik selepas membelok
    if (this.signal !== 0) {
      this.signalTime += dt;
      const turned = Math.abs(wrapAngle(this.yaw - this.signalYaw));
      if (turned > 0.9 && Math.abs(this.steerInput) < 0.12) this.signal = 0;
    }
  }

  revert() {
    this.x = this.prevX;
    this.z = this.prevZ;
    this.yaw = this.prevYaw;
    this.speed = 0;
  }

  get steerVisual() {
    return this.steerInput * 2.4;
  }
}
