// Lukisan papan tanda menggunakan Canvas 2D. Bentuk & warna mengikut gaya papan tanda lazim
// di Malaysia (amaran = berlian kuning, larangan = bulatan merah). Ini ialah ilustrasi
// simulasi, bukan imej rasmi.

const SIZE = 256;

export function shapePath(g, shape) {
  const c = SIZE / 2;
  g.beginPath();
  if (shape === 'octagon') {
    for (let i = 0; i < 8; i++) {
      const a = Math.PI / 8 + (i * Math.PI) / 4;
      const x = c + Math.cos(a) * 124;
      const y = c + Math.sin(a) * 124;
      if (i === 0) g.moveTo(x, y);
      else g.lineTo(x, y);
    }
  } else if (shape === 'triangle-down') {
    g.moveTo(8, 22);
    g.lineTo(248, 22);
    g.lineTo(128, 236);
  } else if (shape === 'diamond') {
    g.moveTo(c, 4);
    g.lineTo(252, c);
    g.lineTo(c, 252);
    g.lineTo(4, c);
  } else if (shape === 'square-blue') {
    g.rect(10, 10, 236, 236);
  } else {
    g.arc(c, c, 122, 0, Math.PI * 2);
  }
  g.closePath();
}

function text(g, str, y, size, color = '#fff') {
  g.fillStyle = color;
  g.font = `900 ${size}px "Arial Black", Arial, sans-serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(str, SIZE / 2, y);
}

function carShape(g, x, y, s, color) {
  g.fillStyle = color;
  g.beginPath();
  g.roundRect(x - 20 * s, y - 34 * s, 40 * s, 68 * s, 10 * s);
  g.fill();
  g.fillStyle = '#ffffff';
  g.fillRect(x - 14 * s, y - 20 * s, 28 * s, 12 * s);
}

function person(g, x, y, s, color = '#111') {
  g.fillStyle = color;
  g.strokeStyle = color;
  g.lineCap = 'round';
  g.beginPath();
  g.arc(x, y - 42 * s, 9 * s, 0, Math.PI * 2);
  g.fill();
  g.lineWidth = 9 * s;
  g.beginPath();
  g.moveTo(x, y - 30 * s);
  g.lineTo(x - 2 * s, y);
  g.moveTo(x - 2 * s, y);
  g.lineTo(x - 14 * s, y + 26 * s);
  g.moveTo(x - 2 * s, y);
  g.lineTo(x + 12 * s, y + 26 * s);
  g.moveTo(x, y - 24 * s);
  g.lineTo(x - 16 * s, y - 6 * s);
  g.moveTo(x, y - 24 * s);
  g.lineTo(x + 16 * s, y - 10 * s);
  g.stroke();
}

export const SIGN_SHAPES = {
  STOP: 'octagon',
  GIVE_WAY: 'triangle-down',
  SPEED_LIMIT: 'circle',
  NO_ENTRY: 'circle',
  NO_OVERTAKING: 'circle',
  CURVE_LEFT: 'diamond',
  CURVE_RIGHT: 'diamond',
  SCHOOL: 'diamond',
  SLIPPERY: 'diamond',
  PED_CROSSING: 'square-blue'
};

export function drawSign(type, value, silhouette = false) {
  const cv = document.createElement('canvas');
  cv.width = SIZE;
  cv.height = SIZE;
  const g = cv.getContext('2d');
  const shape = SIGN_SHAPES[type] || 'circle';
  if (silhouette) {
    shapePath(g, shape);
    g.fillStyle = '#ffffff';
    g.fill();
    return cv;
  }
  const c = SIZE / 2;
  switch (type) {
    case 'STOP':
      shapePath(g, shape);
      g.fillStyle = '#ffffff';
      g.fill();
      g.save();
      g.translate(c, c);
      g.scale(0.9, 0.9);
      g.translate(-c, -c);
      shapePath(g, shape);
      g.fillStyle = '#d0202a';
      g.fill();
      g.restore();
      text(g, 'BERHENTI', c + 2, 40);
      break;
    case 'GIVE_WAY':
      shapePath(g, shape);
      g.fillStyle = '#d0202a';
      g.fill();
      g.beginPath();
      g.moveTo(44, 44);
      g.lineTo(212, 44);
      g.lineTo(128, 194);
      g.closePath();
      g.fillStyle = '#ffffff';
      g.fill();
      text(g, 'BERI', 80, 30, '#111');
      text(g, 'LALUAN', 114, 26, '#111');
      break;
    case 'SPEED_LIMIT':
      shapePath(g, shape);
      g.fillStyle = '#d0202a';
      g.fill();
      g.beginPath();
      g.arc(c, c, 96, 0, Math.PI * 2);
      g.fillStyle = '#ffffff';
      g.fill();
      text(g, String(value), c + 4, String(value).length > 2 ? 86 : 104, '#111');
      break;
    case 'NO_ENTRY':
      shapePath(g, shape);
      g.fillStyle = '#d0202a';
      g.fill();
      g.fillStyle = '#ffffff';
      g.fillRect(40, c - 22, 176, 44);
      break;
    case 'NO_OVERTAKING':
      shapePath(g, shape);
      g.fillStyle = '#d0202a';
      g.fill();
      g.beginPath();
      g.arc(c, c, 96, 0, Math.PI * 2);
      g.fillStyle = '#ffffff';
      g.fill();
      carShape(g, c - 32, c + 6, 1.1, '#d0202a');
      carShape(g, c + 32, c + 6, 1.1, '#111111');
      break;
    case 'PED_CROSSING':
      shapePath(g, shape);
      g.fillStyle = '#1f5fbf';
      g.fill();
      g.beginPath();
      g.moveTo(c, 34);
      g.lineTo(228, 214);
      g.lineTo(28, 214);
      g.closePath();
      g.fillStyle = '#ffffff';
      g.fill();
      g.fillStyle = '#111';
      for (let i = 0; i < 5; i++) g.fillRect(58 + i * 30, 192, 18, 12);
      person(g, c, 152, 1.25);
      break;
    default: {
      // berlian amaran kuning
      shapePath(g, 'diamond');
      g.fillStyle = '#111';
      g.fill();
      g.save();
      g.translate(c, c);
      g.scale(0.9, 0.9);
      g.translate(-c, -c);
      shapePath(g, 'diamond');
      g.fillStyle = '#f7c600';
      g.fill();
      g.restore();
      g.strokeStyle = '#111';
      g.fillStyle = '#111';
      g.lineWidth = 16;
      g.lineCap = 'round';
      if (type === 'CURVE_LEFT' || type === 'CURVE_RIGHT') {
        const s = type === 'CURVE_LEFT' ? -1 : 1;
        g.beginPath();
        g.moveTo(c - s * 10, 196);
        g.lineTo(c - s * 10, 128);
        g.quadraticCurveTo(c - s * 10, 86, c + s * 40, 86);
        g.stroke();
        g.beginPath();
        g.moveTo(c + s * 64, 86);
        g.lineTo(c + s * 34, 60);
        g.lineTo(c + s * 34, 112);
        g.closePath();
        g.fill();
      } else if (type === 'SCHOOL') {
        person(g, c - 26, 150, 1.05);
        person(g, c + 28, 156, 0.85);
        g.fillRect(c - 70, 196, 140, 8);
      } else if (type === 'SLIPPERY') {
        carShape(g, c, 104, 0.9, '#111');
        g.lineWidth = 7;
        for (const s of [-1, 1]) {
          g.beginPath();
          g.moveTo(c + s * 14, 150);
          g.bezierCurveTo(c + s * 44, 170, c - s * 10, 190, c + s * 30, 214);
          g.stroke();
        }
      }
    }
  }
  return cv;
}
