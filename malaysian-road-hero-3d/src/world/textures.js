import * as THREE from 'three';
import { mulberry32 } from '../game/util.js';

// Tekstur prosedur (canvas) — tiada fail imej luaran diperlukan.

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function toTexture(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) {
    t.wrapS = THREE.RepeatWrapping;
    t.wrapT = THREE.RepeatWrapping;
  }
  t.anisotropy = 4;
  return t;
}

export function asphaltTexture() {
  const c = canvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#5b6068';
  g.fillRect(0, 0, 256, 256);
  const rnd = mulberry32(7);
  for (let i = 0; i < 5000; i++) {
    const v = 70 + Math.floor(rnd() * 40);
    g.fillStyle = `rgba(${v},${v + 3},${v + 8},${0.35 + rnd() * 0.4})`;
    g.fillRect(rnd() * 256, rnd() * 256, 1 + rnd() * 2, 1 + rnd() * 2);
  }
  for (let i = 0; i < 6; i++) {
    g.strokeStyle = 'rgba(40,42,48,0.25)';
    g.lineWidth = 1 + rnd() * 2;
    g.beginPath();
    g.moveTo(rnd() * 256, rnd() * 256);
    g.bezierCurveTo(rnd() * 256, rnd() * 256, rnd() * 256, rnd() * 256, rnd() * 256, rnd() * 256);
    g.stroke();
  }
  return toTexture(c);
}

export function grassTexture() {
  const c = canvas(256, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#6cbf55';
  g.fillRect(0, 0, 256, 256);
  const rnd = mulberry32(11);
  for (let i = 0; i < 3500; i++) {
    const h = 95 + rnd() * 30;
    const l = 38 + rnd() * 16;
    g.fillStyle = `hsla(${h},50%,${l}%,0.5)`;
    g.fillRect(rnd() * 256, rnd() * 256, 2, 2 + rnd() * 3);
  }
  return toTexture(c);
}

export function pavementTexture() {
  const c = canvas(128, 128);
  const g = c.getContext('2d');
  g.fillStyle = '#c9c3b6';
  g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#a9a294';
  g.lineWidth = 2;
  for (let i = 0; i <= 128; i += 32) {
    g.beginPath();
    g.moveTo(i, 0);
    g.lineTo(i, 128);
    g.moveTo(0, i);
    g.lineTo(128, i);
    g.stroke();
  }
  return toTexture(c);
}

export function windowTexture(kind = 'office') {
  const c = canvas(128, 256);
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 128, 256);
  const rnd = mulberry32(kind === 'office' ? 3 : 5);
  if (kind === 'office') {
    for (let y = 8; y < 256; y += 24) {
      for (let x = 8; x < 128; x += 30) {
        const lit = rnd() > 0.7;
        g.fillStyle = lit ? '#bfd9ee' : '#6f8fae';
        g.fillRect(x, y, 22, 15);
      }
    }
  } else {
    // rumah kedai: tingkap atas, pintu gulung bawah
    for (let x = 6; x < 128; x += 42) {
      g.fillStyle = '#7b8fa3';
      g.fillRect(x, 20, 30, 40);
      g.fillRect(x, 100, 30, 40);
      g.fillStyle = '#9aa1a8';
      g.fillRect(x - 2, 170, 36, 80);
      g.strokeStyle = '#80868c';
      for (let y = 172; y < 250; y += 6) {
        g.beginPath();
        g.moveTo(x - 2, y);
        g.lineTo(x + 34, y);
        g.stroke();
      }
    }
  }
  const t = toTexture(c);
  return t;
}

export function houseTexture() {
  const c = canvas(128, 64);
  const g = c.getContext('2d');
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, 128, 64);
  g.fillStyle = '#7c95ad';
  g.fillRect(14, 18, 24, 22);
  g.fillRect(90, 18, 24, 22);
  g.fillStyle = '#8a5a3c';
  g.fillRect(54, 20, 20, 44);
  return toTexture(c, false);
}

export function skyGradientTexture() {
  const c = canvas(4, 256);
  const g = c.getContext('2d');
  const grad = g.createLinearGradient(0, 0, 0, 256);
  grad.addColorStop(0, '#3d8fe0');
  grad.addColorStop(0.45, '#8cc8f5');
  grad.addColorStop(0.62, '#d9f0ff');
  grad.addColorStop(1, '#eaf6ff');
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
