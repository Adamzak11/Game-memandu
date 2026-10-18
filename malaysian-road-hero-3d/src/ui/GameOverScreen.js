import { h, CREDIT } from './dom.js';
import { RULES } from '../data/roadRuleData.js';

// Overlay GAME OVER, keputusan misi dan menu jeda.

export function gameOverScreen({ reason, profile, onRetry, onMenu }) {
  return h(
    'div',
    { class: 'screen overlay-screen', id: 'game-over' },
    h(
      'div',
      { class: 'panel danger' },
      h('div', { class: 'go-title' }, 'GAME OVER'),
      h('p', { class: 'go-reason', id: 'go-reason' }, reason),
      h('p', { class: 'muted' }, `${profile?.name || 'Pemandu'}, kemalangan boleh dielakkan dengan kelajuan yang sesuai, jarak selamat dan pemerhatian cermin.`),
      h(
        'div',
        { class: 'row-buttons' },
        h('button', { class: 'btn ghost', id: 'btn-go-menu', onclick: onMenu }, 'MAIN MENU'),
        h('button', { class: 'btn primary big', id: 'btn-retry', onclick: onRetry }, 'TRY AGAIN')
      )
    )
  );
}

function fmtTime(t) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

export function missionCompleteScreen({ mission, result, profile, onRetry, onNext, onMenu }) {
  const counts = {};
  for (const w of result.warnings) counts[w] = (counts[w] || 0) + 1;
  return h(
    'div',
    { class: 'screen overlay-screen', id: 'mission-result' },
    h(
      'div',
      { class: `panel ${result.passed ? 'success' : 'warn'}` },
      h('div', { class: 'go-title' }, result.passed ? 'MISI SELESAI' : 'MISI TIDAK LULUS'),
      h('div', { class: 'result-stars' }, '★'.repeat(result.stars) + '☆'.repeat(3 - result.stars)),
      h('p', {}, `${mission.title} · Pemandu: `, h('strong', {}, profile.name), ` · Masa ${fmtTime(result.time)}`),
      h(
        'ul',
        { class: 'obj-list result' },
        ...result.objectives.map((o) =>
          h('li', { class: o.status.done ? 'ok' : 'fail' }, `${o.status.done ? '✔' : '✘'} ${o.label}`, h('span', { class: 'obj-prog' }, o.status.progress || ''))
        )
      ),
      Object.keys(counts).length
        ? h(
            'div',
            {},
            h('h3', {}, 'Amaran semasa misi'),
            h('ul', { class: 'warn-summary' }, ...Object.entries(counts).map(([id, n]) => h('li', {}, `${RULES[id]?.title || id} × ${n}`)))
          )
        : h('p', { class: 'muted' }, 'Tiada amaran. Pemanduan yang cemerlang!'),
      h(
        'div',
        { class: 'row-buttons' },
        h('button', { class: 'btn ghost', onclick: onMenu }, 'MAIN MENU'),
        h('button', { class: 'btn', id: 'btn-retry-mission', onclick: onRetry }, 'ULANG MISI'),
        onNext ? h('button', { class: 'btn primary', onclick: onNext }, 'MISI SETERUSNYA') : null
      )
    )
  );
}

export function pauseScreen({ onResume, onRestart, onSettings, onMenu }) {
  return h(
    'div',
    { class: 'screen overlay-screen', id: 'pause' },
    h(
      'div',
      { class: 'panel' },
      h('h2', {}, 'JEDA'),
      h(
        'div',
        { class: 'menu-buttons' },
        h('button', { class: 'btn primary big', id: 'btn-resume', onclick: onResume }, 'SAMBUNG'),
        h('button', { class: 'btn', onclick: onRestart }, 'MULA SEMULA'),
        h('button', { class: 'btn', onclick: onSettings }, 'SETTINGS'),
        h('button', { class: 'btn ghost', onclick: onMenu }, 'MAIN MENU')
      ),
      h('div', { class: 'credit' }, CREDIT)
    )
  );
}
