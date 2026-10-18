import * as THREE from 'three';
import { CHARACTERS, buildCharacter } from './characters.js';

// Pratonton karakter 3D (renderer kecil berasingan) + penjana gambar kecil (thumbnail).

export class CharacterSelector {
  constructor(canvas) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8899aa, 1.6));
    const d = new THREE.DirectionalLight(0xffffff, 1.6);
    d.position.set(2, 3, 4);
    this.scene.add(d);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.75, 0.08, 40), new THREE.MeshLambertMaterial({ color: 0x2b6ee6 }));
    disc.position.y = -0.04;
    this.scene.add(disc);
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.1, 20);
    this.camera.position.set(0, 1.25, 4.2);
    this.camera.lookAt(0, 1.0, 0);
    this.model = null;
    this.angle = 0;
    this.running = false;
  }

  _setModel(def, outfit) {
    if (this.model) this.scene.remove(this.model);
    this.model = buildCharacter(def, outfit);
    this.scene.add(this.model);
  }

  _resize(w, h) {
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  thumbnails() {
    const out = {};
    this._resize(160, 200);
    this.camera.position.set(0, 1.45, 2.4);
    this.camera.lookAt(0, 1.3, 0);
    for (const c of CHARACTERS) {
      for (let i = 0; i < c.outfits.length; i++) {
        this._setModel(c, i);
        this.model.rotation.y = -0.35;
        this.renderer.render(this.scene, this.camera);
        out[`${c.id}:${i}`] = this.canvas.toDataURL('image/png');
      }
    }
    this.camera.position.set(0, 1.25, 4.2);
    this.camera.lookAt(0, 1.0, 0);
    return out;
  }

  show(def, outfit) {
    this._setModel(def, outfit);
  }

  start() {
    if (this.running) return;
    this.running = true;
    const loop = () => {
      if (!this.running) return;
      const w = this.canvas.clientWidth || 260;
      const h = this.canvas.clientHeight || 300;
      if (this.canvas.width !== Math.floor(w * this.renderer.getPixelRatio())) this._resize(w, h);
      this.angle += 0.012;
      if (this.model) this.model.rotation.y = Math.sin(this.angle) * 0.7;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    this.running = false;
  }

  dispose() {
    this.stop();
    this.renderer.dispose();
    this.renderer.forceContextLoss?.();
  }
}
