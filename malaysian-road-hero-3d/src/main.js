import './styles/main.css';
import { Game } from './game/Game.js';

// MALAYSIAN ROAD HERO 3D — DEVELOPER: ADAM ZAKWAN

function boot() {
  const canvas = document.getElementById('game-canvas');
  const ui = document.getElementById('ui-root');
  try {
    const game = new Game(canvas, ui);
    window.__MRH = game; // pendedahan untuk ujian automatik
  } catch (err) {
    console.error(err);
    const box = document.createElement('div');
    box.className = 'fatal';
    box.innerHTML = '<h2>Ralat memulakan game</h2><p>Pelayar anda mungkin tidak menyokong WebGL.</p><pre></pre><p>DEVELOPER: ADAM ZAKWAN</p>';
    box.querySelector('pre').textContent = String(err && err.message ? err.message : err);
    ui.append(box);
  }
}

boot();
