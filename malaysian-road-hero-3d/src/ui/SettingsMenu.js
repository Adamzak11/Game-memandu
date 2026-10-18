import { h } from './dom.js';

// SETTINGS: sensitiviti stereng, kawalan, grafik, cermin, bunyi, mod, dialog.

export function settingsScreen(settings, { onChange, onBack }) {
  const set = (k, v) => {
    settings[k] = v;
    onChange({ ...settings });
  };
  const select = (id, label, key, options) =>
    h(
      'label',
      { class: 'setting' },
      h('span', {}, label),
      h(
        'select',
        { id, onchange: (e) => set(key, e.target.value) },
        ...options.map(([v, t]) => h('option', { value: v, selected: settings[key] === v ? 'selected' : null }, t))
      )
    );
  const toggle = (id, label, key) =>
    h(
      'label',
      { class: 'setting' },
      h('span', {}, label),
      h('input', { id, type: 'checkbox', checked: settings[key] ? 'checked' : null, onchange: (e) => set(key, e.target.checked) })
    );
  const range = (id, label, key, min, max, step) => {
    const out = h('output', {}, String(settings[key]));
    return h(
      'label',
      { class: 'setting' },
      h('span', {}, label),
      h('input', {
        id,
        type: 'range',
        min: String(min),
        max: String(max),
        step: String(step),
        value: String(settings[key]),
        oninput: (e) => {
          out.textContent = e.target.value;
          set(key, parseFloat(e.target.value));
        }
      }),
      out
    );
  };
  return h(
    'div',
    { class: 'screen panel-screen', id: 'settings' },
    h(
      'div',
      { class: 'panel' },
      h('h2', {}, 'SETTINGS'),
      h('h3', {}, 'Kawalan'),
      range('set-steer', 'Sensitiviti stereng', 'steeringSensitivity', 0.5, 1.5, 0.1),
      select('set-control', 'Kawalan', 'controlMode', [
        ['auto', 'Automatik'],
        ['keyboard', 'Papan kekunci'],
        ['touch', 'Sentuh (telefon)']
      ]),
      h('h3', {}, 'Grafik'),
      select('set-graphics', 'Kualiti grafik', 'graphics', [
        ['low', 'LOW'],
        ['medium', 'MEDIUM'],
        ['high', 'HIGH']
      ]),
      select('set-mirror', 'Kualiti pantulan cermin', 'mirrorQuality', [
        ['low', 'LOW'],
        ['medium', 'MEDIUM'],
        ['high', 'HIGH']
      ]),
      h('h3', {}, 'Bunyi'),
      toggle('set-sound', 'Bunyi', 'sound'),
      range('set-volume', 'Kelantangan', 'volume', 0, 1, 0.1),
      h('h3', {}, 'Pembelajaran'),
      select('set-mode', 'Mod', 'drivingMode', [
        ['learning', 'Mod pembelajaran'],
        ['free', 'Mod pemanduan bebas']
      ]),
      toggle('set-pause-dialog', 'Jeda ketika dialog papan tanda muncul (mod pembelajaran)', 'pauseOnDialog'),
      toggle('set-auto-dialog', 'Dialog papan tanda automatik', 'autoDialogs'),
      h('p', { class: 'muted small' }, 'Tetapan disimpan secara automatik pada peranti ini.'),
      h('div', { class: 'row-buttons' }, h('button', { class: 'btn primary', id: 'btn-settings-back', onclick: onBack }, 'SIAP'))
    )
  );
}
