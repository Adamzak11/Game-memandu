import { h } from './dom.js';
import { ruleMessage } from '../data/roadRuleData.js';
import { CATEGORY, VERIFICATION } from '../data/roadSignData.js';

// Paparan WARNING kuning. Cooldown setiap jenis amaran supaya tidak berulang-ulang.

const COOLDOWN = 8;
const SHOW_TIME = 6.5;

export class WarningSystem {
  constructor(container, { onShow } = {}) {
    this.container = container;
    this.onShow = onShow;
    this.last = new Map();
    this.items = [];
    this.time = 0;
    this.log = [];
  }

  reset() {
    this.last.clear();
    for (const it of this.items) it.el.remove();
    this.items = [];
    this.log = [];
  }

  show(id, vars = {}) {
    const r = ruleMessage(id, vars);
    if (!r) return false;
    const prev = this.last.get(id);
    if (prev !== undefined && this.time - prev < COOLDOWN) return false;
    this.last.set(id, this.time);
    this.log.push({ id, t: this.time });
    const cat = CATEGORY[r.category];
    const ver = VERIFICATION[r.verification];
    const el = h(
      'div',
      { class: 'warning-card', role: 'alert', 'data-id': id },
      h('div', { class: 'warn-icon', 'aria-hidden': 'true' }, '⚠'),
      h(
        'div',
        { class: 'warn-body' },
        h('div', { class: 'warn-msg' }, r.message),
        h('div', { class: 'warn-exp' }, r.explanation),
        h(
          'div',
          { class: 'warn-meta' },
          h('span', { class: `tag cat-${r.category}` }, cat?.label || r.category),
          ver && ver.id !== 'COMMON' ? h('span', { class: `tag ver-${ver.tone}` }, ver.label) : null
        ),
        r.legalRef
          ? h('div', { class: 'warn-ref' }, `Rujukan: ${r.legalRef.text} — `, h('em', {}, VERIFICATION[r.legalRef.status]?.label || r.legalRef.status), r.legalRef.note ? `. ${r.legalRef.note}` : '')
          : null
      )
    );
    this.container.prepend(el);
    this.items.push({ el, t: this.time });
    while (this.items.length > 2) this.items.shift().el.remove();
    this.onShow?.(id);
    return true;
  }

  update(dt) {
    this.time += dt;
    for (const it of [...this.items]) {
      if (this.time - it.t > SHOW_TIME) {
        it.el.classList.add('out');
        setTimeout(() => it.el.remove(), 400);
        this.items.splice(this.items.indexOf(it), 1);
      }
    }
  }
}
