import { h } from './dom.js';

// Butang sentuh untuk telefon (multi-touch, tidak bergantung pada hover).

export class TouchControls {
  constructor(layer, input) {
    this.input = input;
    const hold = (label, key, cls, id) => {
      const b = h('button', { class: `tbtn ${cls}`, id, 'aria-label': label }, label);
      const on = (e) => {
        e.preventDefault();
        try {
          b.setPointerCapture(e.pointerId);
        } catch {
          // sesetengah pelayar tidak menyokong capture untuk pointer ini
        }
        input.touch[key] = true;
        b.classList.add('down');
      };
      const off = (e) => {
        e.preventDefault();
        input.touch[key] = false;
        b.classList.remove('down');
      };
      b.addEventListener('pointerdown', on);
      b.addEventListener('pointerup', off);
      b.addEventListener('pointercancel', off);
      b.addEventListener('lostpointercapture', off);
      b.addEventListener('contextmenu', (e) => e.preventDefault());
      return b;
    };
    const tap = (label, evt, cls, id) => {
      const b = h('button', { class: `tbtn ${cls}`, id, 'aria-label': label }, label);
      b.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        input.push(evt);
      });
      return b;
    };
    this.el = h(
      'div',
      { class: 'touch-controls', id: 'touch-controls' },
      h(
        'div',
        { class: 'tc-left' },
        h('div', { class: 'tc-row' }, tap('⇦', 'signalLeft', 'small sig', 't-sig-left'), tap('⇨', 'signalRight', 'small sig', 't-sig-right')),
        h('div', { class: 'tc-row' }, hold('◀', 'left', 'steer', 't-left'), hold('▶', 'right', 'steer', 't-right'))
      ),
      h(
        'div',
        { class: 'tc-right' },
        h('div', { class: 'tc-row' }, hold('👁◀', 'lookL', 'small look', 't-look-left'), hold('▶👁', 'lookR', 'small look', 't-look-right'), tap('R', 'reset', 'small', 't-reset')),
        h('div', { class: 'tc-row' }, hold('BREK', 'brake', 'pedal brake', 't-brake'), hold('MINYAK', 'gas', 'pedal gas', 't-gas'))
      )
    );
    layer.append(this.el);
    this.setVisible(false);
  }

  setVisible(v) {
    this.el.style.display = v ? '' : 'none';
  }
}
