import test from 'node:test';
import assert from 'node:assert/strict';
import { makeTestWorld } from './helpers.js';
import { RuleMonitor } from '../src/game/RuleMonitor.js';
import { yawFromDir } from '../src/game/util.js';

// Pemandu ujian: menggerakkan "pemain" di sepanjang lorong dengan kelajuan & offset sisi tertentu.
function setup() {
  const { world, network } = makeTestWorld();
  const traffic = { npcs: [] };
  const warnings = [];
  const events = [];
  const rules = new RuleMonitor(world, traffic, {
    onWarning: (id) => warnings.push(id),
    onEvent: (e) => events.push(e)
  });
  const player = { x: 0, z: 0, yaw: 0, speed: 0, length: 4.3, width: 1.78, signal: 0 };
  return { world, network, traffic, rules, player, warnings, events };
}

// gerak di sepanjang lorong (edge, dir, index) dari t0 ke t1 (meter perjalanan)
function drive(ctx, { edge, dir = 1, lane = 0, t0, t1, kmh, lat = () => 0, signal = 0, head = 0, dt = 1 / 30, speedAt }) {
  const { network, rules, player } = ctx;
  const e = network.edges.get(edge);
  for (let t = t0; t <= t1; ) {
    const v = (speedAt ? speedAt(t) : kmh) / 3.6;
    const sp = network.laneSpot(edge, dir, t, lane);
    const lx = sp.dz;
    const lz = -sp.dx;
    const o = lat(t);
    player.x = sp.x + lx * o;
    player.z = sp.z + lz * o;
    player.yaw = yawFromDir(sp.dx, sp.dz);
    player.speed = v;
    player.signal = typeof signal === 'function' ? signal(t) : signal;
    rules.update(dt, player, typeof head === 'function' ? head(t) : head);
    t += Math.max(v, 0.01) * dt;
    if (v === 0) t += 0; // berhenti
    void e;
  }
}

test('pemanduan biasa dalam lorong: TIADA amaran palsu', () => {
  const c = setup();
  drive(c, { edge: 'e_n20_n30', t0: 15, t1: 165, kmh: 45 });
  drive(c, { edge: 'e_n20_kEnd', t0: 15, t1: 1900, kmh: 65 });
  drive(c, { edge: 'e_hS_hN', t0: 20, t1: 3000, kmh: 100, lane: 0 });
  assert.deepEqual(c.warnings, []);
});

test('melebihi had laju: satu amaran sahaja bagi satu episod', () => {
  const c = setup();
  drive(c, { edge: 'e_n20_n30', t0: 15, t1: 160, kmh: 75 });
  assert.deepEqual(c.warnings, ['SPEEDING']);
});

test('lampu merah: amaran apabila melepasi garisan berhenti ketika merah', () => {
  const c = setup();
  const ctl = c.world.lights.controllers.get('n20');
  const ap = c.network.nodes.get('n20').approaches.find((a) => a.edgeId === 'e_n10_n20');
  ctl.current = (ap.index + 1) % ctl.approaches.length;
  ctl.phase = 'GREEN';
  drive(c, { edge: 'e_n10_n20', t0: 120, t1: 175, kmh: 40 });
  assert.ok(c.warnings.includes('RED_LIGHT'));
});

test('lampu hijau: tiada amaran, peristiwa signalPassed', () => {
  const c = setup();
  const ctl = c.world.lights.controllers.get('n20');
  const ap = c.network.nodes.get('n20').approaches.find((a) => a.edgeId === 'e_n10_n20');
  ctl.current = ap.index;
  ctl.phase = 'GREEN';
  drive(c, { edge: 'e_n10_n20', t0: 120, t1: 175, kmh: 40 });
  assert.ok(!c.warnings.includes('RED_LIGHT'));
  assert.ok(c.events.includes('signalPassed'));
});

test('papan BERHENTI: tidak berhenti = amaran; berhenti penuh = patuh', () => {
  const c = setup();
  // e_n10_n11 arah -1 (ke utara) menuju n10 (pendekatan BERHENTI)
  drive(c, { edge: 'e_n10_n11', dir: -1, t0: 100, t1: 172, kmh: 25 });
  assert.ok(c.warnings.includes('STOP_SIGN'));

  const d = setup();
  const L = d.network.edges.get('e_n10_n11').length;
  const stopT = L - 10 - 4.3 / 2 - 1.2; // berhenti ~1 m sebelum garisan
  let waited = 0;
  drive(d, {
    edge: 'e_n10_n11',
    dir: -1,
    t0: 100,
    t1: 172,
    speedAt: (t) => {
      if (t < stopT - 15) return 25;
      if (t < stopT && waited === 0) return Math.max(3, 25 * ((stopT - t) / 15));
      if (waited < 60) {
        waited++;
        return 0;
      }
      return 12;
    }
  });
  assert.ok(!d.warnings.includes('STOP_SIGN'), d.warnings.join());
  assert.ok(d.events.includes('stopSignComplied'));
});

test('garisan berkembar: melintasinya memberi amaran DOUBLE_LINE', () => {
  const c = setup();
  const e = c.network.edges.get('e_n20_kEnd');
  const dz = e.centerMarks.find((m) => m.type === 'double' && m.from > 100);
  drive(c, { edge: 'e_n20_kEnd', t0: dz.from + 20, t1: dz.from + 120, kmh: 60, lat: (t) => (t > dz.from + 50 ? -3.0 : 0) });
  assert.ok(c.warnings.includes('DOUBLE_LINE'));
});

test('memotong lori di garisan putus-putus dengan signal & jalan jelas = overtakeSafe tanpa amaran', () => {
  const c = setup();
  const e = c.network.edges.get('e_n20_kEnd');
  const bz = e.centerMarks.find((m) => m.type === 'broken' && m.to - m.from > 250);
  const start = bz.from + 20;
  // lori statik (dianggap perlahan) di hadapan
  const sp = c.network.laneSpot('e_n20_kEnd', 1, start + 40, 0);
  c.traffic.npcs.push({ id: 1, type: 'lorry', x: sp.x, z: sp.z, yaw: yawFromDir(sp.dx, sp.dz), v: 0, length: 8.6, width: 2.5, lane: { isConnector: false } });
  drive(c, {
    edge: 'e_n20_kEnd',
    t0: start,
    t1: start + 110,
    kmh: 60,
    signal: (t) => (t < start + 30 ? 1 : t > start + 62 ? -1 : 0),
    lat: (t) => {
      if (t < start + 22) return 0;
      if (t < start + 30) return -3.5 * ((t - start - 22) / 8);
      if (t < start + 62) return -3.5;
      if (t < start + 72) return -3.5 * (1 - (t - start - 62) / 10);
      return 0;
    }
  });
  assert.deepEqual(c.warnings, []);
  assert.ok(c.events.includes('overtakeSafe'));
});

test('memotong ketika trafik bertentangan hampir = ONCOMING_CLOSE', () => {
  const c = setup();
  const e = c.network.edges.get('e_n20_kEnd');
  const bz = e.centerMarks.find((m) => m.type === 'broken' && m.to - m.from > 250);
  const start = bz.from + 20;
  const sp = c.network.laneSpot('e_n20_kEnd', -1, e.length - (start + 70), 0);
  c.traffic.npcs.push({ id: 2, type: 'car', x: sp.x, z: sp.z, yaw: yawFromDir(sp.dx, sp.dz), v: 18, length: 4.4, width: 1.8, lane: { isConnector: false } });
  drive(c, { edge: 'e_n20_kEnd', t0: start, t1: start + 30, kmh: 60, signal: 1, lat: (t) => (t > start + 8 ? -3.5 : 0) });
  assert.ok(c.warnings.includes('ONCOMING_CLOSE'));
});

test('lebuh raya: tukar lorong tanpa signal & cermin = amaran; dengan signal + toleh cermin = selamat', () => {
  const c = setup();
  drive(c, { edge: 'e_hS_hN', t0: 100, t1: 260, kmh: 90, lat: (t) => (t > 160 ? -Math.min(3.6, (t - 160) / 12) : 0) });
  assert.ok(c.warnings.includes('NO_SIGNAL_LANE'));
  assert.ok(c.warnings.includes('NO_MIRROR_CHECK'));

  const d = setup();
  drive(d, {
    edge: 'e_hS_hN',
    t0: 100,
    t1: 260,
    kmh: 90,
    signal: (t) => (t > 140 && t < 220 ? 1 : 0),
    head: (t) => (t > 140 && t < 150 ? -0.7 : 0),
    lat: (t) => (t > 160 ? -Math.min(3.6, (t - 160) / 12) : 0)
  });
  assert.deepEqual(d.warnings, []);
  assert.ok(d.events.includes('safeLaneChange'));
});

test('jalan sehala dari arah salah = NO_ENTRY', () => {
  const c = setup();
  // e_n11_n21 sehala ke timur; pandu ke barat (arah -1) menggunakan lorong fwd terbalik
  const e = c.network.edges.get('e_n11_n21');
  const p = c.player;
  for (let s = e.length - 20; s > 40; s -= 0.5) {
    const pt = c.network.edgePointAt(e, s);
    p.x = pt.x;
    p.z = pt.z;
    p.yaw = yawFromDir(-pt.dx, -pt.dz);
    p.speed = 8;
    c.rules.update(1 / 16, p, 0);
  }
  assert.ok(c.warnings.includes('NO_ENTRY'));
});

test('membelok di simpang tanpa signal = NO_SIGNAL_TURN; dengan signal = turnSignalled', () => {
  for (const withSignal of [false, true]) {
    const c = setup();
    const ctl = c.world.lights.controllers.get('n20');
    const ap = c.network.nodes.get('n20').approaches.find((a) => a.edgeId === 'e_n10_n20');
    ctl.current = ap.index;
    ctl.phase = 'GREEN';
    drive(c, { edge: 'e_n10_n20', t0: 130, t1: 168, kmh: 25, signal: withSignal ? -1 : 0 });
    // ikut connector belok kiri (utara ke jalan kampung)
    const inLane = c.network.edges.get('e_n10_n20').lanes.fwd[0];
    const conn = inLane.next.find((x) => x.turn === 'L');
    for (let s = 0; s <= conn.length; s += 0.3) {
      const pt = c.network.lanePointAt(conn, s);
      Object.assign(c.player, { x: pt.x, z: pt.z, yaw: yawFromDir(pt.dx, pt.dz), speed: 6, signal: withSignal ? -1 : 0 });
      c.rules.update(0.05, c.player, 0);
    }
    drive(c, { edge: conn.toLane.edge.id, dir: conn.toLane.dir, t0: 14, t1: 40, kmh: 25 });
    if (withSignal) {
      assert.ok(!c.warnings.includes('NO_SIGNAL_TURN'));
      assert.ok(c.events.includes('turnSignalled'));
    } else {
      assert.ok(c.warnings.includes('NO_SIGNAL_TURN'));
    }
  }
});
