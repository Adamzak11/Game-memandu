// Audio sintetik Web Audio (tiada fail bunyi luaran).
// Enjin, signal, brek, amaran, perlanggaran dan bunyi persekitaran.
// Game berfungsi sepenuhnya tanpa audio; semua panggilan selamat jika audio tidak tersedia.

export class AudioSystem {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.volume = 0.7;
  }

  // mesti dipanggil daripada interaksi pengguna (dasar autoplay pelayar)
  unlock() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
      return;
    }
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
    } catch {
      this.ctx = null;
      return;
    }
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = this.enabled ? this.volume : 0;
    this.master.connect(c.destination);

    // enjin: dua pengayun melalui penapis lowpass
    this.engGain = c.createGain();
    this.engGain.gain.value = 0;
    this.engFilter = c.createBiquadFilter();
    this.engFilter.type = 'lowpass';
    this.engFilter.frequency.value = 600;
    this.osc1 = c.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc2 = c.createOscillator();
    this.osc2.type = 'square';
    const g2 = c.createGain();
    g2.gain.value = 0.35;
    this.osc1.connect(this.engFilter);
    this.osc2.connect(g2).connect(this.engFilter);
    this.engFilter.connect(this.engGain).connect(this.master);
    this.osc1.start();
    this.osc2.start();

    // hingar (untuk brek, angin, persekitaran, perlanggaran)
    const len = c.sampleRate * 2;
    this.noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02; // hingar coklat
      d[i] = last * 3.5;
    }
    this.ambient = this._loopNoise(180, 0.0);
    this.brakeN = this._loopNoise(2600, 0.0, 'bandpass');
  }

  _loopNoise(freq, gain, type = 'lowpass') {
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    if (type === 'bandpass') f.Q.value = 6;
    const g = c.createGain();
    g.gain.value = gain;
    src.connect(f).connect(g).connect(this.master);
    src.start();
    return g;
  }

  setEnabled(on, volume = this.volume) {
    this.enabled = on;
    this.volume = volume;
    if (this.master) this.master.gain.setTargetAtTime(on ? volume : 0, this.ctx.currentTime, 0.05);
  }

  update(speed, throttle, brake, active) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const v = Math.abs(speed);
    // gear maya untuk nada enjin
    const gears = [0, 6, 12, 19, 27, 36, 50];
    let g = 1;
    while (g < gears.length - 1 && v > gears[g]) g++;
    const lo = gears[g - 1];
    const hi = gears[g];
    const rpm = 900 + ((v - lo) / (hi - lo)) * 3800 * (0.6 + 0.4 * throttle);
    const f = rpm / 60;
    this.osc1.frequency.setTargetAtTime(f, t, 0.05);
    this.osc2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    this.engFilter.frequency.setTargetAtTime(350 + throttle * 900 + v * 10, t, 0.08);
    this.engGain.gain.setTargetAtTime(active ? 0.06 + throttle * 0.07 : 0, t, 0.1);
    this.ambient.gain.setTargetAtTime(active ? 0.05 + Math.min(0.12, v * 0.004) : 0.02, t, 0.3);
    this.brakeN.gain.setTargetAtTime(active && brake > 0.6 && v > 6 ? 0.025 : 0, t, 0.05);
  }

  _beep(freq, dur, type = 'triangle', vol = 0.15, delay = 0) {
    if (!this.ctx) return;
    const c = this.ctx;
    const t = c.currentTime + delay;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  tick(high) {
    this._beep(high ? 1800 : 1400, 0.03, 'square', 0.06);
  }

  warning() {
    this._beep(880, 0.16, 'triangle', 0.18);
    this._beep(660, 0.2, 'triangle', 0.18, 0.18);
  }

  chime() {
    this._beep(660, 0.12, 'sine', 0.15);
    this._beep(990, 0.25, 'sine', 0.15, 0.12);
  }

  crash() {
    if (!this.ctx) return;
    const c = this.ctx;
    const src = c.createBufferSource();
    src.buffer = this.noiseBuf;
    const f = c.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = 1400;
    const g = c.createGain();
    const t = c.currentTime;
    g.gain.setValueAtTime(0.9, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + 1.3);
    this._beep(120, 0.5, 'sawtooth', 0.25);
  }
}
