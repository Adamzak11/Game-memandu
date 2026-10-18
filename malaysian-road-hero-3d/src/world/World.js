import * as THREE from 'three';
import { buildMapDefinition } from '../data/mapData.js';
import { RoadNetwork } from './RoadNetwork.js';
import { RoadBuilder } from './RoadBuilder.js';
import { RoadSigns } from './RoadSigns.js';
import { TrafficLights } from './TrafficLights.js';
import { Scenery } from './Scenery.js';
import { Pedestrians } from './Pedestrians.js';

// Dunia 3D: satu scene yang dikongsi oleh kamera utama dan ketiga-tiga kamera cermin.
export class World {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xbfe3ff);
    this.scene.fog = new THREE.Fog(0xcfe8f7, 160, 700);

    const hemi = new THREE.HemisphereLight(0xdff1ff, 0x5e7d4a, 1.15);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xfff1d6, 1.9);
    sun.position.set(120, 220, 80);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    const sc = sun.shadow.camera;
    sc.left = -90;
    sc.right = 90;
    sc.top = 90;
    sc.bottom = -90;
    sc.near = 10;
    sc.far = 600;
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.4;
    this.scene.add(sun);
    this.scene.add(sun.target);
    this.sun = sun;
    this.sunOffset = new THREE.Vector3(120, 220, 80);

    this.network = new RoadNetwork(buildMapDefinition());

    const roads = new RoadBuilder(this.network).build();
    this.scene.add(roads.group);

    this.signs = new RoadSigns(this.network);
    this.scene.add(this.signs.group);

    this.lights = new TrafficLights(this.network);
    const lightGroup = new THREE.Group();
    const lightColliders = [];
    this.lights.build(lightGroup, lightColliders);
    this.scene.add(lightGroup);

    const scenery = new Scenery(this.network, [...this.signs.colliders, ...lightColliders]).build();
    this.scene.add(scenery.group);
    this.scenery = scenery.scenery;
    this.drawDistance = 700;

    this.pedestrians = new Pedestrians(this.network, this.scene);

    this.colliders = [...roads.colliders, ...this.signs.colliders, ...lightColliders, ...scenery.colliders];
    this._indexColliders();
  }

  _indexColliders() {
    this.cgrid = new Map();
    const C = 20;
    this.cCell = C;
    for (const c of this.colliders) {
      const r = Math.max(c.hl, c.hw);
      const x0 = Math.floor((c.x - r) / C);
      const x1 = Math.floor((c.x + r) / C);
      const z0 = Math.floor((c.z - r) / C);
      const z1 = Math.floor((c.z + r) / C);
      for (let x = x0; x <= x1; x++) {
        for (let z = z0; z <= z1; z++) {
          const k = x * 100003 + z;
          if (!this.cgrid.has(k)) this.cgrid.set(k, []);
          this.cgrid.get(k).push(c);
        }
      }
    }
  }

  collidersNear(x, z, r = 6) {
    const C = this.cCell;
    const out = new Set();
    for (let cx = Math.floor((x - r) / C); cx <= Math.floor((x + r) / C); cx++) {
      for (let cz = Math.floor((z - r) / C); cz <= Math.floor((z + r) / C); cz++) {
        const arr = this.cgrid.get(cx * 100003 + cz);
        if (arr) for (const c of arr) out.add(c);
      }
    }
    return out;
  }

  // bayang-bayang mengikut pemain supaya resolusi bayang tertumpu di sekitar kereta
  followSun(x, z) {
    this.sun.position.set(x + this.sunOffset.x, this.sunOffset.y, z + this.sunOffset.z);
    this.sun.target.position.set(x, 0, z);
  }

  setQuality(q) {
    const far = q === 'low' ? 420 : q === 'medium' ? 600 : 800;
    this.drawDistance = far + 40;
    this.scene.fog.near = far * 0.25;
    this.scene.fog.far = far;
    this.sun.castShadow = q !== 'low';
    const size = q === 'high' ? 2048 : 1024;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
  }
}
