import { h } from './dom.js';
import { yawFromDir } from '../game/util.js';

// HUD semasa memandu: kelajuan, had laju, signal, objektif misi, status, peta mini, butang jeda.

export class DashboardUI {
  constructor(layer, { onPause }) {
    this.layer = layer;
    this.speedEl = h('div', { class: 'hud-speed-num', id: 'hud-speed' }, '0');
    this.limitEl = h('div', { class: 'hud-limit', id: 'hud-limit' }, '--');
    this.sigL = h('div', { class: 'hud-sig left', id: 'hud-sig-left' }, '◀');
    this.sigR = h('div', { class: 'hud-sig right', id: 'hud-sig-right' }, '▶');
    this.gearEl = h('div', { class: 'hud-gear' }, 'D');
    this.statusEl = h('div', { class: 'hud-status', id: 'hud-status' }, '');
    this.nameEl = h('div', { class: 'hud-name', id: 'hud-name' });
    this.avatarEl = h('img', { class: 'hud-avatar', alt: '' });
    this.titleEl = h('div', { class: 'hud-title', id: 'hud-title' });
    this.objList = h('ul', { class: 'hud-objs', id: 'hud-objectives' });
    this.hintEl = h('div', { class: 'hud-hint', id: 'hud-hint' });
    this.distEl = h('div', { class: 'hud-dist' });
    this.arrowEl = h('div', { class: 'hud-arrow' }, '➤');
    this.mini = h('canvas', { class: 'hud-minimap', width: '150', height: '150' });
    this.warnings = h('div', { class: 'warning-stack', id: 'warning-stack' });
    this.objBox = h('div', { class: 'hud-objbox' }, h('div', { class: 'hud-objhead', onclick: () => this.objBox.classList.toggle('toggled') }, 'OBJEKTIF ▾'), this.objList);
    this.el = h(
      'div',
      { class: 'hud', id: 'hud' },
      h('div', { class: 'hud-top-left' }, h('div', { class: 'hud-driver' }, this.avatarEl, h('div', {}, this.nameEl, this.titleEl))),
      h('div', { class: 'hud-top-center' }, h('div', { class: 'hud-nav' }, this.arrowEl, h('div', {}, this.hintEl, this.distEl))),
      this.warnings,
      h('div', { class: 'hud-top-right' }, h('button', { class: 'btn icon', id: 'btn-pause', 'aria-label': 'Jeda', onclick: onPause }, '❚❚'), this.mini, this.objBox),
      h(
        'div',
        { class: 'hud-bottom' },
        this.sigL,
        h('div', { class: 'hud-speed' }, this.speedEl, h('div', { class: 'hud-unit' }, 'km/j'), this.gearEl),
        h('div', { class: 'hud-limit-wrap' }, h('div', { class: 'hud-limit-label' }, 'HAD'), this.limitEl),
        this.sigR
      ),
      this.statusEl
    );
    layer.append(this.el);
    this.hide();
    this.roads = null;
  }

  show() {
    this.el.style.display = '';
  }

  hide() {
    this.el.style.display = 'none';
  }

  setProfile(profile, avatar, title) {
    this.nameEl.textContent = profile.name;
    if (avatar) this.avatarEl.src = avatar;
    this.titleEl.textContent = title;
  }

  setObjectives(mission, statusFn) {
    this.objList.innerHTML = '';
    if (!mission || !mission.objectives) {
      this.objBox.style.display = 'none';
      return;
    }
    this.objBox.style.display = '';
    for (const o of mission.objectives) {
      const st = statusFn(o);
      this.objList.append(
        h('li', { class: st.failed ? 'fail' : st.done ? 'ok' : '' }, h('span', { class: 'obj-mark' }, st.failed ? '✘' : st.done ? '✔' : '•'), h('span', {}, o.label), h('span', { class: 'obj-prog' }, st.progress || ''))
      );
    }
  }

  setHint(text) {
    this.hintEl.textContent = text || '';
    this.hintEl.parentElement.parentElement.style.display = text ? '' : 'none';
  }

  setRoads(network) {
    this.roads = [];
    for (const e of network.edges.values()) {
      const pts = [];
      for (let i = 0; i < e.xs.length; i += 2) pts.push([e.xs[i], e.zs[i]]);
      pts.push([e.xs[e.xs.length - 1], e.zs[e.zs.length - 1]]);
      this.roads.push({ pts, w: e.leftHalf + e.rightHalf });
    }
  }

  update(player, { limit, blinkOn, checkpoint, status }) {
    this.speedEl.textContent = String(Math.round(Math.abs(player.speed) * 3.6));
    this.limitEl.textContent = limit ? String(limit) : '--';
    const over = limit && Math.abs(player.speed) * 3.6 > limit + 3;
    this.speedEl.classList.toggle('over', !!over);
    this.sigL.classList.toggle('on', player.signal === -1 && blinkOn);
    this.sigR.classList.toggle('on', player.signal === 1 && blinkOn);
    this.sigL.classList.toggle('armed', player.signal === -1);
    this.sigR.classList.toggle('armed', player.signal === 1);
    this.gearEl.textContent = player.reverse ? 'R' : 'D';
    this.statusEl.textContent = status || '';
    this.statusEl.style.display = status ? '' : 'none';
    if (checkpoint) {
      const dx = checkpoint.x - player.x;
      const dz = checkpoint.z - player.z;
      const d = Math.hypot(dx, dz);
      this.distEl.textContent = `${d < 1000 ? Math.round(d) + ' m' : (d / 1000).toFixed(1) + ' km'}${checkpoint.finish ? ' · DESTINASI' : ''}`;
      const rel = yawFromDir(dx, dz) - player.yaw;
      this.arrowEl.style.transform = `rotate(${-rel - Math.PI / 2}rad)`;
      this.arrowEl.style.display = '';
    } else {
      this.distEl.textContent = '';
      this.arrowEl.style.display = 'none';
    }
    this._minimap(player, checkpoint);
  }

  _minimap(player, cp) {
    if (!this.roads) return;
    const c = this.mini;
    const g = c.getContext('2d');
    const W = c.width;
    const scale = W / 2 / 260; // 260 m jejari
    g.save();
    g.clearRect(0, 0, W, W);
    g.fillStyle = 'rgba(12,22,40,0.72)';
    g.beginPath();
    g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2);
    g.fill();
    g.clip();
    g.translate(W / 2, W / 2);
    g.rotate(player.yaw);
    g.scale(scale, scale);
    g.translate(-player.x, -player.z);
    g.strokeStyle = '#c9d4e2';
    g.lineCap = 'round';
    g.lineJoin = 'round';
    for (const r of this.roads) {
      g.lineWidth = Math.max(r.w, 7 / scale / 2);
      g.beginPath();
      r.pts.forEach(([x, z], i) => (i ? g.lineTo(x, z) : g.moveTo(x, z)));
      g.stroke();
    }
    if (cp) {
      g.fillStyle = cp.finish ? '#6dff7a' : '#29e0ff';
      g.beginPath();
      g.arc(cp.x, cp.z, 9 / scale / 1.5, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();
    // pemain (sentiasa menghala ke atas)
    g.fillStyle = '#ffd23f';
    g.beginPath();
    g.moveTo(W / 2, W / 2 - 9);
    g.lineTo(W / 2 - 6, W / 2 + 7);
    g.lineTo(W / 2 + 6, W / 2 + 7);
    g.closePath();
    g.fill();
  }
}
