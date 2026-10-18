// Data papan tanda untuk dialog pendidikan.
//
// PENTING (kejujuran sumber):
// Semasa pembangunan versi ini, laman JPJ (jpj.gov.my) dan PDF Akta 333 TIDAK dapat dicapai
// dari persekitaran pembangunan (rangkaian disekat). Oleh itu:
//  - Maksud papan tanda dilabel "MAKSUD LAZIM" — maksud umum papan tanda standard yang
//    belum disemak semula terhadap dokumen rasmi JPJ dalam versi ini.
//  - Tiada nombor seksyen, nombor kaedah, denda atau mata demerit dipaparkan sebagai fakta.
//  - Semua rujukan undang-undang dilabel "PERLU PENGESAHAN".
// Lihat VERIFICATION.md untuk senarai semakan yang perlu dibuat.

export const CATEGORY = {
  LAW: { id: 'LAW', label: 'Undang-undang / larangan rasmi' },
  SIGN: { id: 'SIGN', label: 'Arahan papan tanda' },
  SAFETY: { id: 'SAFETY', label: 'Nasihat keselamatan' },
  SIM: { id: 'SIM', label: 'Peraturan simulasi' }
};

export const VERIFICATION = {
  VERIFIED: { id: 'VERIFIED', label: 'Disahkan dengan sumber rasmi', tone: 'ok' },
  COMMON: { id: 'COMMON', label: 'Maksud lazim — belum disemak semula dengan dokumen rasmi JPJ', tone: 'info' },
  PENDING: { id: 'PENDING', label: 'Perlu pengesahan', tone: 'warn' },
  NA: { id: 'NA', label: 'Peraturan simulasi (bukan undang-undang)', tone: 'sim' }
};

const OFFICIAL_SOURCES = [
  'Jabatan Pengangkutan Jalan Malaysia (JPJ) — https://www.jpj.gov.my/',
  'Akta Pengangkutan Jalan 1987 (Akta 333) dan pindaan',
  'Kaedah-Kaedah Lalu Lintas Jalan 1959'
];

const LEGAL_PENDING = {
  text: 'Akta Pengangkutan Jalan 1987 (Akta 333) dan kaedah-kaedah lalu lintas berkaitan',
  status: 'PENDING',
  note: 'Nombor seksyen/kaedah khusus belum disahkan terhadap teks rasmi terkini — tidak dipaparkan.'
};

export const ROAD_SIGNS = {
  STOP: {
    type: 'STOP',
    name: 'BERHENTI',
    shape: 'octagon',
    meaning: 'Pemandu perlu berhenti sepenuhnya.',
    action:
      'Berhenti di tempat yang sesuai dan selamat (sebelum garisan berhenti), periksa trafik dan teruskan hanya apabila selamat serta dibenarkan.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: LEGAL_PENDING
  },
  GIVE_WAY: {
    type: 'GIVE_WAY',
    name: 'BERI LALUAN',
    shape: 'triangle-down',
    meaning: 'Pemandu perlu memberi laluan kepada kenderaan di jalan utama atau di persimpangan.',
    action:
      'Perlahankan kenderaan, berhenti jika perlu, dan masuk ke persimpangan hanya apabila tiada kenderaan yang perlu diberi laluan.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: LEGAL_PENDING
  },
  SPEED_LIMIT: {
    type: 'SPEED_LIMIT',
    name: 'HAD LAJU {v} km/j',
    shape: 'circle-red',
    meaning: 'Had laju maksimum di jalan ini ialah {v} km/j.',
    action: 'Pastikan kelajuan tidak melebihi {v} km/j. Pandu lebih perlahan jika keadaan jalan atau trafik memerlukan.',
    simNote: 'Nilai had laju untuk setiap kawasan dalam game ditetapkan oleh simulasi ini.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: LEGAL_PENDING
  },
  NO_ENTRY: {
    type: 'NO_ENTRY',
    name: 'DILARANG MASUK',
    shape: 'circle-noentry',
    meaning: 'Kenderaan tidak dibenarkan memasuki jalan ini dari arah ini.',
    action: 'Jangan masuk. Gunakan laluan lain yang dibenarkan.',
    simNote: 'Dalam game ini, jalan tersebut ialah jalan sehala ke timur.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: LEGAL_PENDING
  },
  NO_OVERTAKING: {
    type: 'NO_OVERTAKING',
    name: 'DILARANG MEMOTONG',
    shape: 'circle-noovertake',
    meaning: 'Kenderaan tidak dibenarkan memotong kenderaan lain di kawasan ini.',
    action:
      'Kekal di lorong anda sehingga tamat kawasan larangan. Garisan berkembar di tengah jalan juga menandakan anda tidak boleh melintasinya untuk memotong.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: {
      text: 'Kaedah-Kaedah Lalu Lintas Jalan 1959 — peruntukan berkaitan garisan berkembar dan larangan memotong',
      status: 'PENDING',
      note: 'Terdapat laporan media yang merujuk satu kaedah khusus, tetapi teks rasmi belum disemak — nombor kaedah tidak dipaparkan.'
    }
  },
  CURVE_LEFT: {
    type: 'CURVE_LEFT',
    name: 'AMARAN: SELEKOH KE KIRI',
    shape: 'diamond',
    meaning: 'Terdapat selekoh ke kiri di hadapan.',
    action: 'Kurangkan kelajuan sebelum memasuki selekoh dan kekal di lorong sendiri. Jangan memotong di selekoh.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: null
  },
  CURVE_RIGHT: {
    type: 'CURVE_RIGHT',
    name: 'AMARAN: SELEKOH KE KANAN',
    shape: 'diamond',
    meaning: 'Terdapat selekoh ke kanan di hadapan.',
    action: 'Kurangkan kelajuan sebelum memasuki selekoh dan kekal di lorong sendiri. Jangan memotong di selekoh.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: null
  },
  SCHOOL: {
    type: 'SCHOOL',
    name: 'KAWASAN SEKOLAH',
    shape: 'diamond',
    meaning: 'Anda menghampiri kawasan sekolah. Kanak-kanak mungkin melintas jalan.',
    action: 'Kurangkan kelajuan, berwaspada dan bersedia untuk berhenti.',
    simNote: 'Reka bentuk papan dalam game ialah contoh simulasi; rupa sebenar papan tanda rasmi mungkin berbeza.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: null
  },
  PED_CROSSING: {
    type: 'PED_CROSSING',
    name: 'LINTASAN PEJALAN KAKI',
    shape: 'square-blue',
    meaning: 'Terdapat lintasan pejalan kaki (zebra) di hadapan.',
    action: 'Perlahankan kenderaan dan beri laluan kepada pejalan kaki yang sedang atau hendak melintas.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: LEGAL_PENDING
  },
  SLIPPERY: {
    type: 'SLIPPERY',
    name: 'AMARAN: JALAN LICIN',
    shape: 'diamond',
    meaning: 'Permukaan jalan di hadapan mungkin licin, terutamanya ketika basah.',
    action: 'Kurangkan kelajuan dan elakkan brek atau pusingan stereng secara mengejut.',
    simNote: 'Dalam simulasi ini, keberkesanan brek dikurangkan di kawasan jalan licin.',
    category: 'SIGN',
    meaningStatus: 'COMMON',
    legalRef: null
  }
};

export function signInfo(type, value) {
  const base = ROAD_SIGNS[type];
  if (!base) return null;
  const fill = (s) => (s ? s.replace(/\{v\}/g, String(value ?? '')) : s);
  return {
    ...base,
    name: fill(base.name),
    meaning: fill(base.meaning),
    action: fill(base.action),
    value,
    sources: OFFICIAL_SOURCES
  };
}
