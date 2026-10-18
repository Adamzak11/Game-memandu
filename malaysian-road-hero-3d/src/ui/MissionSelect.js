import { h } from './dom.js';
import { MISSIONS, FREE_DRIVE_STARTS } from '../data/missionData.js';

// Skrin MISSION SELECT + taklimat misi sebelum mula.

const stars = (n) => '★'.repeat(n) + '☆'.repeat(3 - n);

export function missionSelectScreen({ profile, progress, onPick, onFree, onBack }) {
  return h(
    'div',
    { class: 'screen panel-screen', id: 'mission-select' },
    h(
      'div',
      { class: 'panel wide' },
      h('h2', {}, 'MISSION SELECT'),
      h('p', { class: 'muted' }, `Pemandu: `, h('strong', { id: 'ms-driver' }, profile.name)),
      h(
        'div',
        { class: 'mission-grid' },
        ...MISSIONS.map((m) => {
          const p = progress.missions[m.id];
          return h(
            'button',
            { class: `mission-card${p?.completed ? ' done' : ''}`, id: `mission-${m.id}`, onclick: () => onPick(m) },
            h('div', { class: 'mission-no' }, `MISI ${m.no}`),
            h('div', { class: 'mission-title' }, m.title),
            h('div', { class: 'mission-sum' }, m.summary),
            h('div', { class: 'mission-stars' }, p ? stars(p.bestStars) : '☆☆☆', p?.completed ? ' · SELESAI' : '')
          );
        })
      ),
      h('h3', {}, 'PEMANDUAN BEBAS'),
      h('p', { class: 'muted' }, 'Tiada objektif. Amaran tetap dipaparkan. Pilih lokasi permulaan:'),
      h(
        'div',
        { class: 'free-row' },
        ...FREE_DRIVE_STARTS.map((f) => h('button', { class: 'btn', id: `free-${f.id}`, onclick: () => onFree(f) }, f.title))
      ),
      h('div', { class: 'row-buttons' }, h('button', { class: 'btn ghost', onclick: onBack }, 'KEMBALI'))
    )
  );
}

export function briefingScreen({ mission, profile, settings, onStart, onBack }) {
  const isTouch = settings.controlMode === 'touch' || (settings.controlMode === 'auto' && matchMedia('(pointer: coarse)').matches);
  return h(
    'div',
    { class: 'screen panel-screen', id: 'briefing' },
    h(
      'div',
      { class: 'panel' },
      h('div', { class: 'mission-no' }, mission.no ? `MISI ${mission.no}` : 'PEMANDUAN BEBAS'),
      h('h2', {}, mission.title),
      h('p', {}, mission.summary || 'Pandu dengan bebas dan patuhi peraturan jalan raya.'),
      mission.objectives
        ? h('div', {}, h('h3', {}, 'OBJEKTIF'), h('ul', { class: 'obj-list' }, ...mission.objectives.map((o) => h('li', {}, o.label))))
        : null,
      h(
        'div',
        { class: 'tip' },
        isTouch
          ? 'Kawalan sentuh: ◀ ▶ stereng, MINYAK / BREK di kanan, butang signal ⇦ ⇨ dan 👁 untuk menoleh ke cermin.'
          : 'W/S minyak & brek · A/D stereng · Q/E signal · tahan Z/C untuk toleh ke cermin sisi · Space brek kecemasan · R reset · Esc jeda'
      ),
      h(
        'div',
        { class: 'tip' },
        settings.drivingMode === 'learning'
          ? 'Mod pembelajaran: permainan dijeda apabila dialog papan tanda muncul.'
          : 'Mod pemanduan bebas: dialog papan tanda tidak menjeda permainan.'
      ),
      h('p', { class: 'muted' }, `Semoga selamat, ${profile.name}! Perlanggaran = GAME OVER.`),
      h(
        'div',
        { class: 'row-buttons' },
        h('button', { class: 'btn ghost', onclick: onBack }, 'KEMBALI'),
        h('button', { class: 'btn primary big', id: 'btn-go', onclick: onStart }, 'MULA MEMANDU')
      )
    )
  );
}
