import * as THREE from 'three';
import { COCKPIT, LAYER_EXTERIOR, LAYER_INTERIOR } from '../world/PlayerCarModel.js';

// Tiga cermin berfungsi menggunakan kamera tambahan + render-to-texture.
//  - Setiap cermin mempunyai kamera SENDIRI yang dilekatkan pada kereta.
//  - Imej diterbalikkan secara mendatar (u -> 1-u) seperti pantulan cermin sebenar.
//  - Kamera cermin TIDAK melihat lapisan kokpit (layer 1), jadi permukaan cermin tidak
//    pernah dirender ke dalam dirinya sendiri (tiada rendering rekursif).
//  - Cermin sisi turut melihat lapisan badan luar kereta (layer 2) supaya sisi kereta
//    sendiri kelihatan, seperti cermin sisi sebenar.

const QUALITY = {
  low: { side: [192, 120], rear: [256, 80], every: 2 },
  medium: { side: [320, 200], rear: [400, 128], every: 1 },
  high: { side: [512, 320], rear: [640, 200], every: 1 }
};

const SETUP = {
  // yaw: putaran kamera (pi = memandang ke belakang); +ve condong ke kiri
  left: { yaw: Math.PI - 0.2, pitch: -0.05, fov: 26, aspect: 0.24 / 0.15, layers: [0, LAYER_EXTERIOR], offset: [-0.03, 0, 0] },
  right: { yaw: Math.PI + 0.2, pitch: -0.05, fov: 26, aspect: 0.24 / 0.15, layers: [0, LAYER_EXTERIOR], offset: [0.03, 0, 0] },
  rear: { yaw: Math.PI, pitch: -0.035, fov: 15, aspect: 0.27 / 0.085, layers: [0], offset: [0, 0, 0.3] }
};

export class MirrorSystem {
  constructor(carModel, quality = 'medium') {
    this.car = carModel;
    this.mirrors = {};
    this.frame = 0;
    for (const key of ['left', 'right', 'rear']) {
      const cfg = SETUP[key];
      const m = COCKPIT.mirrors[key];
      const cam = new THREE.PerspectiveCamera(cfg.fov, cfg.aspect, 0.15, 260);
      cam.position.copy(m.pos).add(new THREE.Vector3(...cfg.offset));
      cam.rotation.order = 'YXZ';
      cam.rotation.y = cfg.yaw;
      cam.rotation.x = cfg.pitch;
      cam.layers.disableAll();
      for (const l of cfg.layers) cam.layers.enable(l);
      carModel.group.add(cam);

      const geo = new THREE.PlaneGeometry(m.size[0], m.size[1]);
      // terbalikkan mendatar = pantulan cermin
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i));
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
      const glass = new THREE.Mesh(geo, material);
      glass.layers.set(LAYER_INTERIOR);
      carModel.mirrorSlots[key].add(glass);
      this.mirrors[key] = { key, cam, glass, material, target: null, enabled: true };
    }
    this.setQuality(quality);
  }

  setQuality(q) {
    const cfg = QUALITY[q] || QUALITY.medium;
    this.every = cfg.every;
    for (const [key, m] of Object.entries(this.mirrors)) {
      const [w, h] = key === 'rear' ? cfg.rear : cfg.side;
      if (m.target) m.target.dispose();
      m.target = new THREE.WebGLRenderTarget(w, h, { samples: q === 'high' ? 4 : 0 });
      m.target.texture.colorSpace = THREE.SRGBColorSpace;
      m.material.map = m.target.texture;
      m.material.needsUpdate = true;
    }
  }

  render(renderer, scene) {
    this.frame++;
    if (this.frame % this.every !== 0) return;
    const prevTarget = renderer.getRenderTarget();
    for (const m of Object.values(this.mirrors)) {
      if (!m.enabled) continue;
      m.cam.updateMatrixWorld();
      renderer.setRenderTarget(m.target);
      renderer.render(scene, m.cam);
    }
    renderer.setRenderTarget(prevTarget);
  }

  // Untuk ujian: arah pandangan kamera cermin dalam koordinat dunia.
  worldDirection(key) {
    const v = new THREE.Vector3();
    this.mirrors[key].cam.getWorldDirection(v);
    return v;
  }

  dispose() {
    for (const m of Object.values(this.mirrors)) m.target?.dispose();
  }
}
