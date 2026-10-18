import test from 'node:test';
import assert from 'node:assert/strict';
import { makeTestWorld } from './helpers.js';

test('graf lorong: trafik di sebelah KIRI (offset positif = kiri arah perjalanan)', () => {
  const { network } = makeTestWorld();
  for (const lane of network.lanes) {
    if (lane.isConnector || !lane.edge.twoWay) continue; // jalan sehala: lorong di tengah
    assert.ok(lane.offset > 0, `${lane.id} offset ${lane.offset}`);
    // titik lorong mesti berada di kiri garisan tengah bagi arah perjalanan
    const e = lane.edge;
    const mid = Math.floor(lane.xs.length / 2);
    const pr = network.projectOnEdge(e, lane.xs[mid], lane.zs[mid]);
    const dirLeft = pr.d * lane.dir;
    assert.ok(dirLeft > 0, `${lane.id} bukan di kiri`);
  }
});

test('graf lorong: setiap lorong bersambung kecuali di jalan mati', () => {
  const { network } = makeTestWorld();
  for (const lane of network.lanes) {
    const end = network.nodes.get(lane.endNode);
    if (end.control === 'end') continue;
    assert.ok(lane.next.length > 0, `${lane.id} tiada sambungan`);
  }
});

test('connector: belok kiri lebih pendek daripada belok kanan (pandu kiri)', () => {
  const { network } = makeTestWorld();
  const n = network.nodes.get('n20');
  const L = n.connectors.filter((c) => c.turn === 'L');
  const R = n.connectors.filter((c) => c.turn === 'R');
  assert.equal(L.length, 4);
  assert.equal(R.length, 4);
  const avg = (a) => a.reduce((s, c) => s + c.length, 0) / a.length;
  assert.ok(avg(L) < avg(R));
});

test('jalan sehala tiada lorong arah bertentangan', () => {
  const { network } = makeTestWorld();
  const e = network.edges.get('e_n11_n21');
  assert.equal(e.lanes.bwd.length, 0);
  assert.equal(e.lanes.fwd.length, 1);
});

test('jalan kampung mempunyai zon garisan berkembar dan putus-putus', () => {
  const { network } = makeTestWorld();
  const e = network.edges.get('e_n20_kEnd');
  const types = new Set(e.centerMarks.map((m) => m.type));
  assert.ok(types.has('double') && types.has('broken'));
  const broken = e.centerMarks.filter((m) => m.type === 'broken' && m.to - m.from > 200);
  assert.ok(broken.length >= 2, 'perlu zon memotong yang cukup panjang');
});

test('lebuh raya: 3 lorong setiap arah dengan jiran kiri/kanan', () => {
  const { network } = makeTestWorld();
  const e = network.edges.get('e_hS_hN');
  assert.equal(e.lanes.fwd.length, 3);
  assert.equal(e.lanes.fwd[0].leftLane, null);
  assert.equal(e.lanes.fwd[0].rightLane, e.lanes.fwd[1]);
  // lorong 0 (kiri) paling jauh dari pembahagi tengah
  assert.ok(e.lanes.fwd[0].offset > e.lanes.fwd[2].offset);
});
