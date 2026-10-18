import { h, CREDIT } from './dom.js';

// Menu utama + halaman ABOUT.

export function logo() {
  return h(
    'div',
    { class: 'logo' },
    h('div', { class: 'logo-top' }, 'MALAYSIAN'),
    h('div', { class: 'logo-main' }, 'ROAD HERO', h('span', { class: 'logo-3d' }, '3D')),
    h('div', { class: 'logo-sub' }, 'Simulator Pendidikan Keselamatan Jalan Raya')
  );
}

export class MainMenu {
  constructor(layer, cb) {
    this.layer = layer;
    this.cb = cb;
  }

  render() {
    const profile = this.cb.getProfile();
    const avatar = profile ? this.cb.getAvatar(profile) : null;
    const chip = profile
      ? h(
          'div',
          { class: 'profile-chip' },
          avatar ? h('img', { src: avatar, alt: '' }) : null,
          h('div', {}, h('div', { class: 'chip-label' }, 'PEMANDU'), h('div', { class: 'chip-name' }, profile.name))
        )
      : h('div', { class: 'profile-chip empty' }, 'Profil pemandu belum dicipta');
    return h(
      'div',
      { class: 'screen menu-screen', id: 'main-menu' },
      h(
        'div',
        { class: 'menu-card' },
        logo(),
        chip,
        h(
          'div',
          { class: 'menu-buttons' },
          h('button', { class: 'btn primary big', id: 'btn-start', onclick: () => this.cb.onStart() }, '▶  START DRIVING'),
          h('button', { class: 'btn', id: 'btn-missions', onclick: () => this.cb.onMissions() }, 'MISSIONS'),
          h('button', { class: 'btn', id: 'btn-settings', onclick: () => this.cb.onSettings() }, 'SETTINGS'),
          h('button', { class: 'btn', id: 'btn-about', onclick: () => this.cb.onAbout() }, 'ABOUT'),
          profile ? h('button', { class: 'btn ghost', id: 'btn-edit-profile', onclick: () => this.cb.onEditProfile() }, 'EDIT PROFILE') : null
        ),
        h('div', { class: 'credit', id: 'menu-credit' }, CREDIT)
      ),
      h('footer', { class: 'menu-footer' }, `${CREDIT} · Projek pendidikan bebas — bukan aplikasi rasmi JPJ`)
    );
  }
}

export function aboutScreen(onBack) {
  return h(
    'div',
    { class: 'screen panel-screen', id: 'about' },
    h(
      'div',
      { class: 'panel' },
      h('h2', {}, 'MALAYSIAN ROAD HERO 3D'),
      h('p', { class: 'credit big', id: 'about-credit' }, 'Developer: ADAM ZAKWAN'),
      h('p', {}, 'An educational driving simulator inspired by Malaysian road safety rules.'),
      h(
        'div',
        { class: 'disclaimer' },
        h('strong', {}, 'Penafian: '),
        'Game ini merupakan projek pendidikan dan simulasi. Ia bukan aplikasi rasmi JPJ dan bukan pengganti latihan memandu atau perundangan rasmi Malaysia.'
      ),
      h('h3', {}, 'Status maklumat peraturan'),
      h(
        'ul',
        { class: 'about-list' },
        h('li', {}, 'Setiap mesej dilabel sebagai: Undang-undang / larangan rasmi, Arahan papan tanda, Nasihat keselamatan, atau Peraturan simulasi.'),
        h('li', {}, 'Rujukan undang-undang yang belum disemak terhadap teks rasmi terkini ditanda "PERLU PENGESAHAN". Tiada nombor seksyen, denda atau mata demerit dipaparkan.'),
        h('li', {}, 'Had laju setiap kawasan dalam game ditetapkan oleh simulasi dan dipaparkan pada papan tanda dalam dunia game.'),
        h('li', {}, 'Fizik kereta ialah model permainan ringkas, bukan simulasi automotif sebenar.')
      ),
      h('h3', {}, 'Sumber rujukan rasmi'),
      h(
        'ul',
        { class: 'about-list' },
        h('li', {}, 'Jabatan Pengangkutan Jalan Malaysia (JPJ) — www.jpj.gov.my'),
        h('li', {}, 'Akta Pengangkutan Jalan 1987 (Akta 333) dan pindaan'),
        h('li', {}, 'Kaedah-Kaedah Lalu Lintas Jalan 1959'),
        h('li', {}, 'Kementerian Pengangkutan Malaysia (MOT), MIROS')
      ),
      h('h3', {}, 'Kawalan'),
      h(
        'div',
        { class: 'controls-grid' },
        ...[
          ['W / ↑', 'Minyak'],
          ['S / ↓', 'Brek (tahan ketika berhenti = undur)'],
          ['A D / ← →', 'Stereng'],
          ['Q / E', 'Signal kiri / kanan'],
          ['Z / C (tahan)', 'Toleh ke cermin sisi kiri / kanan'],
          ['Seret tetikus', 'Lihat sekeliling'],
          ['Space', 'Brek kecemasan'],
          ['R', 'Reset ke lorong'],
          ['Esc', 'Jeda']
        ].map(([k, v]) => h('div', { class: 'ctl' }, h('kbd', {}, k), h('span', {}, v)))
      ),
      h('button', { class: 'btn primary', onclick: onBack }, 'KEMBALI')
    )
  );
}
