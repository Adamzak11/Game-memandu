// Definisi misi. Kedudukan dinyatakan sebagai {edge, dir, t}:
//   edge = id jalan, dir = +1 (arah from->to) / -1 (arah bertentangan), t = jarak perjalanan (m)
// Jenis objektif:
//   route  : capai semua checkpoint mengikut turutan dan sampai ke destinasi
//   count  : peristiwa (event) mesti berlaku sekurang-kurangnya 'target' kali
//   avoid  : amaran yang disenaraikan tidak boleh berlaku langsung

export const MISSIONS = [
  {
    id: 'm1',
    no: 1,
    title: 'KAWASAN PERUMAHAN',
    summary: 'Kawal kereta di taman perumahan, patuhi papan BERHENTI dan BERI LALUAN, dan beri signal di setiap simpang.',
    area: 'residential',
    start: { edge: 'e_n01_n11', dir: 1, t: 40 },
    traffic: { count: { low: 6, medium: 9, high: 12 }, kinds: ['residential', 'city'] },
    checkpoints: [
      { edge: 'e_n10_n11', dir: -1, t: 45, hint: 'Di simpang BERI LALUAN hadapan, beri signal kiri (Q) dan belok KIRI.' },
      { edge: 'e_n00_n10', dir: -1, t: 55, hint: 'Berhenti penuh di papan BERHENTI, kemudian beri signal kiri dan belok KIRI.' },
      { edge: 'e_n00_n01', dir: 1, t: 90, hint: 'Ikut selekoh ke selatan.' },
      { edge: 'e_n01_n11', dir: 1, t: 110, hint: 'Di simpang T, beri signal kiri dan belok KIRI. Destinasi di sebelah kiri jalan.', finish: true }
    ],
    objectives: [
      { id: 'route', type: 'route', label: 'Ikut laluan hingga ke rumah destinasi' },
      { id: 'stop', type: 'count', event: 'stopSignComplied', target: 1, label: 'Berhenti penuh di papan BERHENTI' },
      { id: 'signal', type: 'avoid', warnings: ['NO_SIGNAL_TURN'], label: 'Beri signal setiap kali membelok di simpang' },
      { id: 'giveway', type: 'avoid', warnings: ['GIVE_WAY', 'STOP_SIGN'], label: 'Patuhi papan BERHENTI dan BERI LALUAN' },
      { id: 'speed', type: 'avoid', warnings: ['SPEEDING'], label: 'Jangan melebihi had laju 30 km/j' }
    ]
  },
  {
    id: 'm2',
    no: 2,
    title: 'JALAN BANDAR',
    summary: 'Pandu di bandar yang sibuk. Patuhi lampu isyarat, kekalkan jarak selamat dan berhati-hati di kawasan sekolah.',
    area: 'city',
    start: { edge: 'e_n10_n20', dir: 1, t: 50 },
    traffic: { count: { low: 10, medium: 16, high: 22 }, kinds: ['city', 'residential'] },
    checkpoints: [
      { edge: 'e_n20_n30', dir: 1, t: 130, hint: 'Di lampu isyarat hadapan, jalan TERUS ke timur. Awas lintasan pejalan kaki.' },
      { edge: 'e_n30_n31', dir: 1, t: 60, hint: 'Ikut selekoh ke selatan.' },
      { edge: 'e_n21_n31', dir: -1, t: 50, hint: 'Di lampu isyarat, beri signal kanan (E) dan belok KANAN.' },
      { edge: 'e_n21_n22', dir: 1, t: 130, hint: 'Di lampu isyarat, belok KIRI ke kawasan sekolah. Had laju 30 km/j.' },
      { edge: 'e_n22_n32', dir: 1, t: 80, hint: 'Di lampu isyarat, beri signal kiri dan belok KIRI ke destinasi.', finish: true }
    ],
    objectives: [
      { id: 'route', type: 'route', label: 'Sampai ke destinasi di timur sekolah' },
      { id: 'lights', type: 'count', event: 'signalPassed', target: 4, label: 'Lalui 4 lampu isyarat dengan betul' },
      { id: 'red', type: 'avoid', warnings: ['RED_LIGHT'], label: 'Jangan melanggar lampu merah' },
      { id: 'gap', type: 'avoid', warnings: ['TAILGATING'], label: 'Kekalkan jarak selamat' },
      { id: 'speed', type: 'avoid', warnings: ['SPEEDING'], label: 'Ikut had laju (50 km/j, 30 km/j di sekolah)' },
      { id: 'ped', type: 'avoid', warnings: ['PED_CROSSING'], label: 'Beri laluan kepada pejalan kaki' }
    ]
  },
  {
    id: 'm3',
    no: 3,
    title: 'MEMOTONG DENGAN SELAMAT',
    summary:
      'Jalan kampung dua hala. Sebuah lori perlahan di hadapan. Kenal pasti kawasan larangan memotong dan potong hanya apabila selamat.',
    area: 'rural',
    start: { edge: 'e_n20_kEnd', dir: 1, t: 40 },
    traffic: { count: { low: 0, medium: 0, high: 0 }, kinds: [], oncoming: { edge: 'e_n20_kEnd', dir: -1 } },
    scripted: [{ type: 'lorry', edge: 'e_n20_kEnd', dir: 1, t: 120, speedKmh: 40 }],
    checkpoints: [
      { edge: 'e_n20_kEnd', dir: 1, t: 400, hint: 'Garisan putus-putus: memotong dibenarkan JIKA jalan di hadapan jelas.' },
      { edge: 'e_n20_kEnd', dir: 1, t: 1000, hint: 'Perhatikan garisan berkembar di selekoh — dilarang memotong.' },
      { edge: 'e_n20_kEnd', dir: 1, t: 1880, hint: 'Teruskan ke penghujung jalan kampung.', finish: true }
    ],
    objectives: [
      { id: 'route', type: 'route', label: 'Sampai ke penghujung jalan kampung' },
      { id: 'overtake', type: 'count', event: 'overtakeSafe', target: 1, label: 'Potong lori dengan selamat (garisan putus-putus, jalan jelas)' },
      { id: 'double', type: 'avoid', warnings: ['DOUBLE_LINE'], label: 'Jangan melintasi garisan berkembar' },
      { id: 'oncoming', type: 'avoid', warnings: ['ONCOMING_CLOSE'], label: 'Jangan memotong ketika trafik bertentangan hampir' },
      { id: 'speed', type: 'avoid', warnings: ['SPEEDING'], label: 'Jangan melebihi had laju 70 km/j' }
    ]
  },
  {
    id: 'm4',
    no: 4,
    title: 'LEBUH RAYA',
    summary:
      'Lebuh raya tiga lorong. Urus kelajuan, kekalkan jarak, dan tukar lorong dengan signal serta semakan cermin.',
    area: 'highway',
    start: { edge: 'e_hS_hN', dir: 1, t: 90, lane: 0 },
    traffic: { count: { low: 10, medium: 16, high: 24 }, kinds: ['highway'] },
    checkpoints: [
      { edge: 'e_hS_hN', dir: 1, t: 900, hint: 'Kekal di lorong kiri kecuali ketika memotong. Toleh cermin (Z/C) sebelum tukar lorong.' },
      { edge: 'e_hS_hN', dir: 1, t: 2000, hint: 'Kekalkan jarak sekurang-kurangnya 2 saat.' },
      { edge: 'e_hS_hN', dir: 1, t: 3150, hint: 'Teruskan ke penanda destinasi.', finish: true }
    ],
    objectives: [
      { id: 'route', type: 'route', label: 'Sampai ke penanda destinasi lebuh raya' },
      { id: 'lanes', type: 'count', event: 'safeLaneChange', target: 3, label: 'Buat 3 pertukaran lorong yang selamat (signal + cermin)' },
      { id: 'gap', type: 'avoid', warnings: ['TAILGATING'], label: 'Kekalkan jarak selamat' },
      { id: 'speed', type: 'avoid', warnings: ['SPEEDING'], label: 'Jangan melebihi had laju 110 km/j' },
      { id: 'unsafe', type: 'avoid', warnings: ['UNSAFE_LANE_CHANGE'], label: 'Jangan tukar lorong secara tidak selamat' }
    ]
  }
];

// Mod pemanduan bebas: tiada objektif, pilih lokasi permulaan.
export const FREE_DRIVE_STARTS = [
  { id: 'free_res', title: 'Taman Perumahan', start: { edge: 'e_n01_n11', dir: 1, t: 40 }, kinds: ['residential', 'city'] },
  { id: 'free_city', title: 'Pusat Bandar', start: { edge: 'e_n10_n20', dir: 1, t: 50 }, kinds: ['city', 'residential'] },
  { id: 'free_rural', title: 'Jalan Kampung', start: { edge: 'e_n20_kEnd', dir: 1, t: 40 }, kinds: ['rural', 'city'] },
  { id: 'free_hw', title: 'Lebuh Raya', start: { edge: 'e_hS_hN', dir: 1, t: 90, lane: 0 }, kinds: ['highway'] }
];
