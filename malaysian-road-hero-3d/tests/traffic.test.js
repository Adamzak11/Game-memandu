import test from 'node:test';
import assert from 'node:assert/strict';
import { makeTestWorld, makePlayer, seedRandom } from './helpers.js';
import { makeOBB, obbOverlap } from '../src/game/util.js';

function run(kinds, player, count, seconds, dt = 1 / 30) {
  const { world, traffic } = makeTestWorld();
  traffic.configure({ count, kinds });
  traffic.reset(player);
  const stats = { overlaps: 0, redRuns: 0, stopRuns: 0, entries: 0, laneChanges: 0, distance: 0, states: {}, maxStuck: 0 };
  const prevLane = new Map();
  const minNearLine = new Map();
  const overlapPairs = new Set();
  for (let t = 0; t < seconds; t += dt) {
    traffic.update(dt, player, world.pedestrians);
    world.pedestrians.update(dt, traffic.npcs);
    for (const n of traffic.npcs) {
      stats.distance += n.v * dt;
      stats.states[n.state] = (stats.states[n.state] || 0) + 1;
      const pl = prevLane.get(n.id);
      // kelajuan minimum berhampiran garisan berhenti
      if (!n.lane.isConnector && n.lane.approach && n.lane.length - n.s - n.length / 2 < 3) {
        minNearLine.set(n.id, Math.min(minNearLine.get(n.id) ?? Infinity, n.v));
      }
      if (pl && pl !== n.lane) {
        if (n.lane.isConnector && pl.approach) {
          stats.entries++;
          const ap = pl.approach;
          if (ap.control === 'signal') {
            const ctl = world.lights.controllers.get(ap.node.id);
            if (ctl.stateFor(ap.index) === 'red' && ctl.redSince[ap.index] > 2.0) stats.redRuns++;
          }
          if (ap.control === 'stop' && (minNearLine.get(n.id) ?? Infinity) > 0.6) stats.stopRuns++;
          minNearLine.delete(n.id);
        }
        if (!n.lane.isConnector && !pl.isConnector && n.lane.edge === pl.edge) stats.laneChanges++;
      }
      prevLane.set(n.id, n.lane);
      stats.maxStuck = Math.max(stats.maxStuck, n.stuck);
    }
    const ns = traffic.npcs;
    for (let i = 0; i < ns.length; i++) {
      const a = ns[i];
      const oa = makeOBB(a.x, a.z, a.yaw, a.length / 2 - 0.15, a.width / 2 - 0.1);
      for (let j = i + 1; j < ns.length; j++) {
        const b = ns[j];
        if (Math.abs(a.x - b.x) > 14 || Math.abs(a.z - b.z) > 14) continue;
        if (obbOverlap(oa, makeOBB(b.x, b.z, b.yaw, b.length / 2 - 0.15, b.width / 2 - 0.1))) {
          const key = `${Math.min(a.id, b.id)}-${Math.max(a.id, b.id)}`;
          if (!overlapPairs.has(key)) {
            overlapPairs.add(key);
            stats.overlaps++;
            stats.lastOverlap = { a: [a.type, a.lane.id, a.state, a.v.toFixed(1)], b: [b.type, b.lane.id, b.state, b.v.toFixed(1)] };
          }
        }
      }
    }
  }
  stats.final = traffic.npcs.length;
  return stats;
}

for (const seed of [1, 2, 3]) test(`NPC bandar & perumahan (benih ${seed}): tiada perlanggaran, patuh lampu merah dan papan BERHENTI`, () => {
  seedRandom(seed);
  const s = run(['city', 'residential'], makePlayer(90, 90), 28, 240);
  console.log('town', seed, JSON.stringify(s));
  assert.equal(s.overlaps, 0, `perlanggaran NPC: ${JSON.stringify(s.lastOverlap)}`);
  assert.equal(s.redRuns, 0);
  assert.equal(s.stopRuns, 0);
  assert.ok(s.entries > 50, 'NPC perlu melalui simpang');
  assert.ok(s.distance > 28 * 240 * 4, 'NPC perlu bergerak (purata > 4 m/s termasuk masa menunggu)');
});

for (const seed of [1, 2, 3]) test(`NPC lebuh raya (benih ${seed}): tukar lorong tanpa perlanggaran`, () => {
  seedRandom(seed);
  const s = run(['highway'], makePlayer(560, -1000), 26, 240);
  console.log('highway', seed, JSON.stringify(s));
  assert.equal(s.overlaps, 0, `perlanggaran NPC: ${JSON.stringify(s.lastOverlap)}`);
  assert.ok(s.laneChanges > 0, 'NPC perlu menukar lorong untuk memotong');
});
