import * as THREE from 'three';
import { box, cyl, sphere, mat } from './models.js';

// Lampu isyarat berfasa berasingan (setiap pendekatan mendapat hijau secara bergilir),
// digerakkan permintaan (actuated): pendekatan tanpa kenderaan dilangkau.
// Ini mengelakkan konflik pusingan kanan merentasi trafik bertentangan.

const T = { minGreen: 6, maxGreen: 16, gap: 2.5, yellow: 3, allRed: 2 };

const LAMP = {
  red: [mat(0x4a1010), mat(0xff3030, { basic: true })],
  yellow: [mat(0x4a3a10), mat(0xffc020, { basic: true })],
  green: [mat(0x0f3a1a), mat(0x30ff70, { basic: true })]
};

export class SignalController {
  constructor(node) {
    this.node = node;
    this.approaches = node.approaches;
    this.heads = [];
    this.reset();
  }

  reset() {
    this.current = 0;
    this.phase = 'GREEN';
    this.timer = 0;
    this.noDemandTime = 0;
    this.redSince = this.approaches.map(() => 0);
  }

  stateFor(index) {
    if (index !== this.current) return 'red';
    if (this.phase === 'GREEN') return 'green';
    if (this.phase === 'YELLOW') return 'yellow';
    return 'red';
  }

  update(dt) {
    this.timer += dt;
    const aps = this.approaches;
    const cur = aps[this.current];
    const otherDemand = aps.some((a, i) => i !== this.current && a.demand);
    if (this.phase === 'GREEN') {
      if (cur.demand) this.noDemandTime = 0;
      else this.noDemandTime += dt;
      const gapOut = this.timer > T.minGreen && this.noDemandTime > T.gap && otherDemand;
      const maxOut = this.timer > T.maxGreen && otherDemand;
      if (gapOut || maxOut) this._go('YELLOW');
    } else if (this.phase === 'YELLOW') {
      if (this.timer > T.yellow) this._go('ALLRED');
    } else if (this.phase === 'ALLRED') {
      if (this.timer > T.allRed) {
        // pendekatan seterusnya yang mempunyai permintaan
        let next = this.current;
        for (let k = 1; k <= aps.length; k++) {
          const i = (this.current + k) % aps.length;
          if (aps[i].demand) {
            next = i;
            break;
          }
        }
        this.current = next;
        this._go('GREEN');
      }
    }
    for (let i = 0; i < aps.length; i++) {
      if (this.stateFor(i) === 'red') this.redSince[i] += dt;
      else this.redSince[i] = 0;
    }
    this._updateVisuals();
  }

  _go(phase) {
    this.phase = phase;
    this.timer = 0;
    this.noDemandTime = 0;
  }

  _updateVisuals() {
    for (const h of this.heads) {
      const st = this.stateFor(h.approach);
      h.red.material = LAMP.red[st === 'red' ? 1 : 0];
      h.yellow.material = LAMP.yellow[st === 'yellow' ? 1 : 0];
      h.green.material = LAMP.green[st === 'green' ? 1 : 0];
    }
  }

  // model 3D: tiang di tepi kiri garisan berhenti + lengan atas lorong
  build(group, colliders) {
    for (const ap of this.approaches) {
      const lane = ap.lanes[0];
      const n = lane.xs.length;
      const ex = lane.xs[n - 1];
      const ez = lane.zs[n - 1];
      const dx = ap.hx;
      const dz = ap.hz;
      const lx = dz;
      const lz = -dx;
      const half = lane.edge.laneWidth / 2;
      const px = ex + lx * (half + 1.6) + dx * 0.5;
      const pz = ez + lz * (half + 1.6) + dz * 0.5;
      const g = new THREE.Group();
      g.position.set(px, 0, pz);
      g.rotation.y = Math.atan2(-dx, -dz);
      const poleM = mat(0x3b4048);
      const pole = new THREE.Mesh(cyl(0.11, 0.13, 5.6, 10), poleM);
      pole.position.y = 2.8;
      pole.castShadow = true;
      g.add(pole);
      const arm = new THREE.Mesh(box(4.2, 0.12, 0.12), poleM);
      arm.position.set(2.1, 5.5, 0);
      g.add(arm);
      const mkHead = (x, y) => {
        const hg = new THREE.Group();
        hg.position.set(x, y, 0);
        const body = new THREE.Mesh(box(0.42, 1.25, 0.32), mat(0x1c1f24));
        body.castShadow = true;
        hg.add(body);
        const visor = new THREE.Mesh(box(0.5, 1.33, 0.04), mat(0x2b2f36));
        visor.position.z = -0.17;
        hg.add(visor);
        const lamp = (yy) => {
          const m = new THREE.Mesh(sphere(0.13, 12, 8), LAMP.red[0]);
          m.position.set(0, yy, 0.15);
          m.scale.z = 0.5;
          hg.add(m);
          return m;
        };
        const head = { approach: ap.index, red: lamp(0.38), yellow: lamp(0), green: lamp(-0.38) };
        // lampu menghadap pemandu yang menghampiri (+Z tempatan)
        this.heads.push(head);
        g.add(hg);
      };
      mkHead(3.6, 4.85);
      mkHead(0, 3.0);
      group.add(g);
      colliders.push({ x: px, z: pz, yaw: 0, hl: 0.2, hw: 0.2, kind: 'pole' });

      // lampu seberang simpang (kelihatan ketika berhenti di garisan berhenti)
      const far = this.node.radius * 2 + 2.5;
      const fx = px + dx * far;
      const fz = pz + dz * far;
      const fg = new THREE.Group();
      fg.position.set(fx, 0, fz);
      fg.rotation.y = Math.atan2(-dx, -dz);
      const fpole = new THREE.Mesh(cyl(0.1, 0.12, 3.6, 10), poleM);
      fpole.position.y = 1.8;
      fpole.castShadow = true;
      fg.add(fpole);
      const mkFar = () => {
        const hg = new THREE.Group();
        hg.position.set(0, 3.4, 0);
        const body = new THREE.Mesh(box(0.42, 1.25, 0.32), mat(0x1c1f24));
        hg.add(body);
        const lamp = (yy) => {
          const m = new THREE.Mesh(sphere(0.13, 12, 8), LAMP.red[0]);
          m.position.set(0, yy, 0.15);
          m.scale.z = 0.5;
          hg.add(m);
          return m;
        };
        this.heads.push({ approach: ap.index, red: lamp(0.38), yellow: lamp(0), green: lamp(-0.38) });
        fg.add(hg);
      };
      mkFar();
      group.add(fg);
      colliders.push({ x: fx, z: fz, yaw: 0, hl: 0.2, hw: 0.2, kind: 'pole' });
    }
    this._updateVisuals();
  }
}

export class TrafficLights {
  constructor(network) {
    this.controllers = new Map();
    for (const node of network.nodes.values()) {
      if (node.control === 'signal') this.controllers.set(node.id, new SignalController(node));
    }
  }

  build(group, colliders) {
    for (const c of this.controllers.values()) c.build(group, colliders);
  }

  stateOf(approach) {
    const c = this.controllers.get(approach.node.id);
    return c ? c.stateFor(approach.index) : null;
  }

  update(dt) {
    for (const c of this.controllers.values()) c.update(dt);
  }

  reset() {
    for (const c of this.controllers.values()) c.reset();
  }
}
