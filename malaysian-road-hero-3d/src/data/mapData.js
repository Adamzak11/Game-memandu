// Susun atur peta Malaysian Road Hero 3D.
// Semua jarak dalam meter. X = timur, Z = selatan (utara = -Z).
// Trafik bergerak di sebelah KIRI jalan (Malaysia).
//
// Kawasan:
//  - Taman perumahan (lajur x = -360, -180): simpang berhenti / beri laluan, had 30 km/j
//  - Bandar (lajur x = 0, 180): lampu isyarat, kawasan sekolah, had 50 km/j
//  - Jalan kampung: dari simpang (0,0) ke utara, dua lorong dua hala dengan selekoh
//  - Lebuh raya: x ~ 600, tiga lorong sehala setiap arah dengan pembahagi tengah
//
// Had laju di sini ialah PERATURAN SIMULASI dan dipaparkan melalui papan tanda dalam dunia.

export const COLS = [-360, -180, 0, 180];
export const ROWS = [0, 180, 360];

export const LIMITS = { residential: 30, city: 50, school: 30, rural: 70, highway: 110 };

export const nodeId = (c, r) => `n${c}${r}`;

function gridNodes() {
  const nodes = [];
  for (let c = 0; c < COLS.length; c++) {
    for (let r = 0; r < ROWS.length; r++) {
      nodes.push({ id: nodeId(c, r), x: COLS[c], z: ROWS[r], control: 'none', radius: 10, minor: {} });
    }
  }
  return nodes;
}

export function buildMapDefinition() {
  const nodes = gridNodes();
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const edges = [];
  const add = (from, to, opts = {}) => {
    const a = byId[from];
    const b = byId[to];
    const residential = a.x <= -180 && b.x <= -180;
    const kind = opts.kind || (residential ? 'residential' : 'city');
    edges.push({
      id: `e_${from}_${to}`,
      from,
      to,
      lanesFwd: 1,
      lanesBwd: 1,
      laneWidth: 3.5,
      median: 0,
      limit: LIMITS[kind],
      kind,
      zones: [],
      crossings: [],
      ...opts
    });
  };

  // Jalan mendatar (barat -> timur)
  for (let r = 0; r < ROWS.length; r++) {
    for (let c = 0; c < COLS.length - 1; c++) {
      const from = nodeId(c, r);
      const to = nodeId(c + 1, r);
      if (from === 'n11' && to === 'n21') {
        // Jalan sehala ke timur (papan DILARANG MASUK di hujung timur)
        add(from, to, { lanesFwd: 1, lanesBwd: 0, laneWidth: 4.0, kind: 'city', limit: 40, oneway: true });
      } else {
        add(from, to);
      }
    }
  }
  // Jalan menegak (utara -> selatan)
  for (let c = 0; c < COLS.length; c++) {
    for (let r = 0; r < ROWS.length - 1; r++) {
      add(nodeId(c, r), nodeId(c, r + 1));
    }
  }

  // Lintasan pejalan kaki bandar & kawasan sekolah
  const eCity = edges.find((e) => e.id === 'e_n20_n30');
  eCity.crossings.push({ id: 'cx_city', s: 90 });
  const eSchool = edges.find((e) => e.id === 'e_n21_n22');
  eSchool.crossings.push({ id: 'cx_school', s: 90, school: true });
  eSchool.zones.push({ from: 25, to: 150, limit: LIMITS.school, type: 'school' });

  // Kawalan simpang
  const ctl = (id, control, minor = {}) => {
    byId[id].control = control;
    byId[id].minor = minor;
    if (control === 'signal') byId[id].radius = 12;
  };
  // Perumahan: jalan mendatar ialah jalan utama
  ctl('n01', 'priority', { e_n01_n11: 'stop' }); // simpang T, cabang timur = jalan kecil
  ctl('n10', 'priority', { e_n10_n11: 'stop' }); // cabang selatan = jalan kecil
  ctl('n11', 'priority', { e_n01_n11: 'giveway' }); // dari barat = beri laluan
  ctl('n12', 'priority', { e_n11_n12: 'stop' });
  // Bandar: lampu isyarat
  ctl('n20', 'signal');
  ctl('n21', 'signal');
  ctl('n22', 'signal');
  ctl('n31', 'signal');
  // Selekoh sudut (n00, n02, n30, n32) kekal 'none' dengan jejari lebih besar
  for (const id of ['n00', 'n02', 'n30', 'n32']) byId[id].radius = 14;

  // Jalan kampung ke utara dari n20
  nodes.push({ id: 'kEnd', x: -30, z: -1980, control: 'end', radius: 2, minor: {} });
  edges.push({
    id: 'e_n20_kEnd',
    from: 'n20',
    to: 'kEnd',
    // titik sudut; selekoh dibentuk sebagai lengkok bulat berjejari 'fillet'
    via: [
      { x: 0, z: -500 },
      { x: 110, z: -760 },
      { x: 110, z: -1250 },
      { x: -30, z: -1530 }
    ],
    fillet: 260,
    lanesFwd: 1,
    lanesBwd: 1,
    laneWidth: 3.5,
    median: 0,
    limit: LIMITS.rural,
    kind: 'rural',
    zones: [],
    crossings: [],
    slippery: [{ from: 1180, to: 1300 }]
  });

  // Lebuh raya (berasingan): 3 lorong setiap arah, pembahagi tengah berpenghadang
  nodes.push({ id: 'hS', x: 620, z: 500, control: 'end', radius: 2, minor: {} });
  nodes.push({ id: 'hN', x: 620, z: -2900, control: 'end', radius: 2, minor: {} });
  edges.push({
    id: 'e_hS_hN',
    from: 'hS',
    to: 'hN',
    via: [
      { x: 620, z: -300 },
      { x: 720, z: -1100 },
      { x: 720, z: -1900 },
      { x: 620, z: -2500 }
    ],
    fillet: 1200,
    lanesFwd: 3,
    lanesBwd: 3,
    laneWidth: 3.6,
    median: 3,
    limit: LIMITS.highway,
    kind: 'highway',
    zones: [],
    crossings: []
  });

  return { nodes, edges };
}
