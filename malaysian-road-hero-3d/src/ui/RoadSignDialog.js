import * as THREE from 'three';
import { h } from './dom.js';
import { CATEGORY, VERIFICATION } from '../data/roadSignData.js';

// Dialog maklumat papan tanda (BUKAN kuiz) dengan garisan penunjuk ke papan tanda 3D.
// Kedudukan papan diproyeksikan dari koordinat dunia ke skrin setiap bingkai.

const SVGNS = 'http://www.w3.org/2000/svg';

export class RoadSignDialog {
  constructor(layer, { onClose }) {
    this.layer = layer;
    this.onClose = onClose;
    this.sign = null;
    this.svg = document.createElementNS(SVGNS, 'svg');
    this.svg.setAttribute('class', 'leader-svg');
    this.line = document.createElementNS(SVGNS, 'line');
    this.dot = document.createElementNS(SVGNS, 'circle');
    this.dot.setAttribute('r', '9');
    this.ring = document.createElementNS(SVGNS, 'circle');
    this.ring.setAttribute('r', '18');
    this.ring.setAttribute('class', 'leader-ring');
    this.svg.append(this.line, this.ring, this.dot);
    this.box = h('div', { class: 'sign-dialog', role: 'dialog', 'aria-live': 'polite' });
    layer.append(this.svg, this.box);
    this.hide();
    this._v = new THREE.Vector3();
  }

  get isOpen() {
    return !!this.sign;
  }

  open(sign, info, imageURL, { pausing, autoClose }) {
    this.sign = sign;
    this.pausing = pausing;
    this.timer = autoClose ? 8 : Infinity;
    const cat = CATEGORY[info.category];
    this.box.innerHTML = '';
    const parts = [
      h(
        'div',
        { class: 'sd-head' },
        h('img', { src: imageURL, alt: info.name, class: 'sd-icon' }),
        h('div', {}, h('div', { class: 'sd-label' }, 'NAMA'), h('div', { class: 'sd-name', id: 'sd-name' }, info.name))
      ),
      h('div', { class: 'sd-label' }, 'MAKSUD'),
      h('div', { class: 'sd-text' }, info.meaning),
      h('div', { class: 'sd-label' }, 'TINDAKAN'),
      h('div', { class: 'sd-text' }, info.action),
      info.simNote ? h('div', { class: 'sd-sim' }, `Nota simulasi: ${info.simNote}`) : null,
      h(
        'div',
        { class: 'warn-meta' },
        h('span', { class: `tag cat-${info.category}` }, cat?.label)
      ),
      info.legalRef
        ? h('div', { class: 'sd-ref' }, 'Rujukan: ', info.legalRef.text, ' — ', h('em', {}, VERIFICATION[info.legalRef.status]?.label), info.legalRef.note ? `. ${info.legalRef.note}` : '')
        : null,
      h(
        'div',
        { class: 'sd-actions' },
        pausing ? h('span', { class: 'muted small' }, 'Permainan dijeda') : h('span', { class: 'muted small' }, 'Tutup automatik'),
        h('button', { class: 'btn primary', id: 'sd-ok', onclick: () => this.close() }, 'OK')
      )
    ];
    this.box.append(...parts.filter(Boolean));
    this.box.style.display = 'block';
    this.svg.style.display = 'block';
    this.box.querySelector('#sd-ok')?.focus({ preventScroll: true });
  }

  close() {
    if (!this.sign) return;
    const was = this.sign;
    this.hide();
    this.onClose?.(was);
  }

  hide() {
    this.sign = null;
    this.box.style.display = 'none';
    this.svg.style.display = 'none';
  }

  update(dt, camera, width, height) {
    if (!this.sign) return;
    if (!this.pausing) {
      this.timer -= dt;
      if (this.timer <= 0) {
        this.close();
        return;
      }
    }
    const v = this._v.copy(this.sign.anchor).project(camera);
    const visible = v.z < 1 && v.z > -1 && Math.abs(v.x) < 1.2 && Math.abs(v.y) < 1.2;
    const px = (v.x * 0.5 + 0.5) * width;
    const py = (-v.y * 0.5 + 0.5) * height;
    const bw = this.box.offsetWidth || 320;
    const bh = this.box.offsetHeight || 260;
    const margin = 12;
    // letak dialog di sebelah papan (tidak menutup jalan di tengah), dalam kawasan skrin
    let bx;
    if (visible) bx = px > width / 2 ? px - bw - 70 : px + 70;
    else bx = width - bw - margin;
    bx = Math.max(margin, Math.min(width - bw - margin, bx));
    let by = visible ? py - bh * 0.6 : 80;
    by = Math.max(70, Math.min(height * 0.62 - bh * 0.3, by));
    by = Math.max(margin, Math.min(height - bh - margin, by));
    this.box.style.transform = `translate(${Math.round(bx)}px, ${Math.round(by)}px)`;
    this.svg.setAttribute('width', String(width));
    this.svg.setAttribute('height', String(height));
    if (visible) {
      const ax = Math.max(bx, Math.min(bx + bw, px));
      const ay = Math.max(by, Math.min(by + bh, py));
      const sx = px < bx ? bx : px > bx + bw ? bx + bw : ax;
      const sy = py < by ? by : py > by + bh ? by + bh : ay;
      this.line.setAttribute('x1', String(sx));
      this.line.setAttribute('y1', String(sy));
      this.line.setAttribute('x2', String(px));
      this.line.setAttribute('y2', String(py));
      for (const c of [this.dot, this.ring]) {
        c.setAttribute('cx', String(px));
        c.setAttribute('cy', String(py));
      }
      this.line.style.display = this.dot.style.display = this.ring.style.display = '';
    } else {
      this.line.style.display = this.dot.style.display = this.ring.style.display = 'none';
    }
    this.lastScreen = { px, py, visible, bx, by, bw, bh };
  }
}
