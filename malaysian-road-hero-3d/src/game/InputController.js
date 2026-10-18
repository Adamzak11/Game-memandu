// Input papan kekunci + sentuhan + seret tetikus (untuk menoleh).
// Kawalan:
//   W/↑ minyak, S/↓ brek (tahan ketika berhenti = undur), A/D/←/→ stereng,
//   Q signal kiri, E signal kanan, Space brek kecemasan, R reset, Esc jeda,
//   Z / C (tahan) menoleh ke cermin sisi kiri / kanan.

const GAME_KEYS = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
  'Space', 'KeyQ', 'KeyE', 'KeyR', 'KeyZ', 'KeyC', 'Escape'
]);

export class InputController {
  constructor(target) {
    this.keys = new Set();
    this.touch = { gas: false, brake: false, left: false, right: false, lookL: false, lookR: false, emergency: false };
    this.queue = [];
    this.enabled = true;
    this.dragYaw = 0;
    this._dragging = false;
    this._lastX = 0;

    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (GAME_KEYS.has(e.code) && this.enabled) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      if (e.code === 'KeyQ') this.queue.push('signalLeft');
      if (e.code === 'KeyE') this.queue.push('signalRight');
      if (e.code === 'KeyR') this.queue.push('reset');
      if (e.code === 'Escape') this.queue.push('pause');
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      for (const k of Object.keys(this.touch)) this.touch[k] = false;
    });

    // seret tetikus pada kanvas untuk menoleh
    if (target) {
      target.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse') return;
        this._dragging = true;
        this._lastX = e.clientX;
      });
      window.addEventListener('pointermove', (e) => {
        if (!this._dragging) return;
        const dx = e.clientX - this._lastX;
        this._lastX = e.clientX;
        this.dragYaw = Math.max(-1.2, Math.min(1.2, this.dragYaw - dx * 0.005));
      });
      window.addEventListener('pointerup', () => {
        this._dragging = false;
      });
    }
  }

  has(...codes) {
    return codes.some((c) => this.keys.has(c));
  }

  get state() {
    return {
      throttle: this.has('KeyW', 'ArrowUp') || this.touch.gas,
      brake: this.has('KeyS', 'ArrowDown') || this.touch.brake,
      left: this.has('KeyA', 'ArrowLeft') || this.touch.left,
      right: this.has('KeyD', 'ArrowRight') || this.touch.right,
      emergency: this.has('Space') || this.touch.emergency,
      lookLeft: this.has('KeyZ') || this.touch.lookL,
      lookRight: this.has('KeyC') || this.touch.lookR,
      dragging: this._dragging
    };
  }

  push(evt) {
    this.queue.push(evt);
  }

  drain() {
    const q = this.queue;
    this.queue = [];
    return q;
  }

  releaseAll() {
    this.keys.clear();
    for (const k of Object.keys(this.touch)) this.touch[k] = false;
    this.queue = [];
  }
}
