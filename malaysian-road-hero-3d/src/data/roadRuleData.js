// Rekod peraturan / amaran yang dikesan oleh RuleMonitor.
// Setiap rekod membezakan:
//   category: LAW (undang-undang/larangan rasmi), SIGN (arahan papan tanda),
//             SAFETY (nasihat keselamatan), SIM (peraturan simulasi)
//   verification: status pengesahan (lihat VERIFICATION dalam roadSignData.js)
// Tiada denda, mata demerit atau nombor seksyen dipaparkan kerana belum disahkan.

const PENDING_ACT = {
  text: 'Akta Pengangkutan Jalan 1987 (Akta 333) / Kaedah-Kaedah Lalu Lintas Jalan 1959',
  status: 'PENDING',
  note: 'Peruntukan khusus belum disahkan terhadap teks rasmi terkini.'
};

export const RULES = {
  SPEEDING: {
    id: 'SPEEDING',
    title: 'Melebihi had laju',
    message: 'AMARAN: Anda melebihi had laju {limit} km/j.',
    explanation:
      'Kelajuan anda melebihi had yang dipaparkan pada papan tanda kawasan ini. Kelajuan berlebihan memanjangkan jarak berhenti dan mengurangkan masa untuk bertindak.',
    category: 'SIGN',
    verification: 'PENDING',
    legalRef: PENDING_ACT
  },
  RED_LIGHT: {
    id: 'RED_LIGHT',
    title: 'Melanggar lampu merah',
    message: 'AMARAN: Anda melepasi garisan berhenti ketika lampu isyarat MERAH.',
    explanation:
      'Lampu merah bermaksud kenderaan mesti berhenti di belakang garisan berhenti dan menunggu lampu hijau. Melanggar lampu merah boleh menyebabkan perlanggaran sisi di persimpangan.',
    category: 'LAW',
    verification: 'PENDING',
    legalRef: PENDING_ACT
  },
  STOP_SIGN: {
    id: 'STOP_SIGN',
    title: 'Tidak berhenti penuh',
    message: 'AMARAN: Anda tidak berhenti sepenuhnya di papan tanda BERHENTI.',
    explanation:
      'Papan BERHENTI menghendaki kenderaan berhenti sepenuhnya sebelum garisan berhenti, kemudian memeriksa trafik sebelum meneruskan perjalanan.',
    category: 'SIGN',
    verification: 'COMMON',
    legalRef: PENDING_ACT
  },
  GIVE_WAY: {
    id: 'GIVE_WAY',
    title: 'Tidak memberi laluan',
    message: 'AMARAN: Anda memasuki simpang tanpa memberi laluan kepada kenderaan di jalan utama.',
    explanation:
      'Di simpang BERHENTI atau BERI LALUAN, kenderaan di jalan utama perlu diberi laluan. Tunggu sehingga ada ruang yang selamat.',
    category: 'SIGN',
    verification: 'COMMON',
    legalRef: PENDING_ACT
  },
  NO_SIGNAL_TURN: {
    id: 'NO_SIGNAL_TURN',
    title: 'Tiada isyarat membelok',
    message: 'AMARAN: Anda membelok {dir} tanpa memberi signal yang betul.',
    explanation:
      'Beri signal lebih awal sebelum membelok supaya pengguna jalan lain tahu niat anda. Tekan Q (kiri) atau E (kanan).',
    category: 'SAFETY',
    verification: 'PENDING',
    legalRef: { ...PENDING_ACT, note: 'Kewajipan memberi isyarat perlu disahkan terhadap kaedah rasmi.' }
  },
  NO_SIGNAL_LANE: {
    id: 'NO_SIGNAL_LANE',
    title: 'Tukar lorong tanpa signal',
    message: 'AMARAN: Anda menukar lorong tanpa memberi signal.',
    explanation: 'Beri signal ke arah lorong yang hendak dimasuki, periksa cermin, dan tukar lorong hanya apabila ada ruang yang selamat.',
    category: 'SAFETY',
    verification: 'PENDING',
    legalRef: null
  },
  NO_MIRROR_CHECK: {
    id: 'NO_MIRROR_CHECK',
    title: 'Cermin tidak diperiksa',
    message: 'AMARAN: Anda menukar lorong tanpa memeriksa cermin sisi.',
    explanation:
      'Sebelum menukar lorong, toleh ke cermin sisi (tahan Z untuk kiri / C untuk kanan, atau butang 👁) untuk memastikan tiada kenderaan di lorong sebelah.',
    category: 'SIM',
    verification: 'NA',
    legalRef: null
  },
  UNSAFE_LANE_CHANGE: {
    id: 'UNSAFE_LANE_CHANGE',
    title: 'Tukar lorong tidak selamat',
    message: 'AMARAN: Anda menukar lorong terlalu dekat dengan kenderaan lain.',
    explanation:
      'Terdapat kenderaan terlalu hampir di lorong yang anda masuki. Pastikan ada ruang yang cukup di hadapan dan di belakang sebelum menukar lorong.',
    category: 'SAFETY',
    verification: 'NA',
    legalRef: null
  },
  DOUBLE_LINE: {
    id: 'DOUBLE_LINE',
    title: 'Memotong di kawasan larangan',
    message: 'AMARAN: Anda cuba memotong di kawasan larangan.',
    explanation:
      'Garisan berkembar di tengah jalan menandakan kawasan larangan memotong, biasanya di selekoh atau berhampiran simpang di mana jarak pandangan terhad. Jangan melintasinya.',
    category: 'LAW',
    verification: 'PENDING',
    legalRef: {
      text: 'Kaedah-Kaedah Lalu Lintas Jalan 1959 — peruntukan garisan berkembar',
      status: 'PENDING',
      note: 'Nombor kaedah khusus belum disahkan terhadap teks rasmi — tidak dipaparkan.'
    }
  },
  ONCOMING_CLOSE: {
    id: 'ONCOMING_CLOSE',
    title: 'Trafik bertentangan terlalu hampir',
    message: 'AMARAN: Trafik dari arah bertentangan terlalu hampir.',
    explanation:
      'Anda berada di lorong bertentangan dan kenderaan dari hadapan semakin hampir. Kembali ke lorong anda dengan segera dan selamat. Potong hanya jika jalan di hadapan jelas.',
    category: 'SAFETY',
    verification: 'NA',
    legalRef: null
  },
  NO_SIGNAL_OVERTAKE: {
    id: 'NO_SIGNAL_OVERTAKE',
    title: 'Memotong tanpa signal',
    message: 'AMARAN: Anda keluar dari lorong untuk memotong tanpa signal kanan.',
    explanation: 'Beri signal kanan sebelum keluar dari lorong untuk memotong supaya pemandu lain tahu niat anda.',
    category: 'SAFETY',
    verification: 'NA',
    legalRef: null
  },
  OVERTAKE_LEFT: {
    id: 'OVERTAKE_LEFT',
    title: 'Memotong di sebelah kiri',
    message: 'AMARAN: Anda memotong kenderaan di sebelah kiri.',
    explanation:
      'Di Malaysia, kenderaan perlahan dikehendaki berada di sebelah kiri dan memotong dibuat di sebelah kanan. Memotong di sebelah kiri berbahaya kerana anda berada di titik buta pemandu lain.',
    category: 'SAFETY',
    verification: 'PENDING',
    legalRef: {
      text: 'Kaedah-Kaedah Lalu Lintas Jalan 1959 (kenderaan perlahan di sebelah kiri; memotong di sebelah kanan)',
      status: 'PENDING',
      note: 'Sumber sekunder (kenyataan MIROS, media) menyokong prinsip ini; teks rasmi belum disemak.'
    }
  },
  TAILGATING: {
    id: 'TAILGATING',
    title: 'Jarak terlalu dekat',
    message: 'AMARAN: Jarak anda dengan kenderaan di hadapan terlalu dekat.',
    explanation:
      'Kekalkan jarak sekurang-kurangnya 2 saat dengan kenderaan di hadapan (lebih jauh ketika hujan atau di lebuh raya). Simulasi memberi amaran jika jarak kurang daripada 1 saat.',
    category: 'SAFETY',
    verification: 'NA',
    legalRef: null
  },
  NO_ENTRY: {
    id: 'NO_ENTRY',
    title: 'Memasuki jalan sehala',
    message: 'AMARAN: Anda memasuki jalan sehala dari arah bertentangan (DILARANG MASUK).',
    explanation: 'Papan DILARANG MASUK bermaksud kenderaan tidak boleh memasuki jalan tersebut dari arah itu. Berpatah balik dengan selamat.',
    category: 'SIGN',
    verification: 'COMMON',
    legalRef: PENDING_ACT
  },
  WRONG_SIDE: {
    id: 'WRONG_SIDE',
    title: 'Memandu di lorong bertentangan',
    message: 'AMARAN: Anda memandu di lorong trafik bertentangan.',
    explanation: 'Di Malaysia, kenderaan perlu dipandu di sebelah kiri jalan. Kembali ke lorong kiri anda.',
    category: 'LAW',
    verification: 'PENDING',
    legalRef: PENDING_ACT
  },
  PED_CROSSING: {
    id: 'PED_CROSSING',
    title: 'Tidak memberi laluan kepada pejalan kaki',
    message: 'AMARAN: Anda melintasi lintasan zebra ketika pejalan kaki sedang melintas.',
    explanation: 'Berhenti sebelum lintasan pejalan kaki dan biarkan pejalan kaki melintas sepenuhnya.',
    category: 'SIGN',
    verification: 'PENDING',
    legalRef: PENDING_ACT
  },
  OFF_ROAD: {
    id: 'OFF_ROAD',
    title: 'Keluar dari jalan',
    message: 'AMARAN: Kereta anda keluar dari jalan raya.',
    explanation: 'Kekal di atas jalan dan di dalam lorong anda. Tekan R untuk kembali ke lorong jika tersangkut.',
    category: 'SIM',
    verification: 'NA',
    legalRef: null
  }
};

export function ruleMessage(id, vars = {}) {
  const r = RULES[id];
  if (!r) return null;
  const fill = (s) => (s ? s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : '')) : s);
  return { ...r, message: fill(r.message), explanation: fill(r.explanation) };
}
