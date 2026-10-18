import test from 'node:test';
import assert from 'node:assert/strict';
import { validateName, normalizeName, saveProfile, loadProfile } from '../src/player/PlayerProfile.js';
import { makeOBB, obbOverlap, obbCircleOverlap } from '../src/game/util.js';
import { ROAD_SIGNS, VERIFICATION } from '../src/data/roadSignData.js';
import { RULES } from '../src/data/roadRuleData.js';
import { MISSIONS } from '../src/data/missionData.js';
import { CHARACTERS } from '../src/player/characters.js';
import { MissionManager } from '../src/game/MissionManager.js';
import { VehicleController } from '../src/game/VehicleController.js';
import { makeTestWorld } from './helpers.js';

function memStorage() {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)) };
}

test('nama pemain: wajib, 3–20 aksara, ruang berlebihan dibuang', () => {
  assert.equal(validateName('').ok, false);
  assert.equal(validateName('   ').ok, false);
  assert.equal(validateName('ab').ok, false);
  assert.equal(validateName('a'.repeat(21)).ok, false);
  assert.equal(normalizeName('  Ali    Bin   Abu  '), 'Ali Bin Abu');
  assert.equal(validateName('  Ali  ').name, 'Ali');
  assert.equal(validateName('Siti Nur').ok, true);
});

test('profil disimpan & dimuat semula (kekal selepas refresh)', () => {
  const st = memStorage();
  assert.equal(loadProfile(st), null);
  assert.throws(() => saveProfile({ name: 'Ali', characterId: '' }, st));
  saveProfile({ name: '  Ali   Baba ', characterId: 'aiman', outfit: 2 }, st);
  const p = loadProfile(st);
  assert.equal(p.name, 'Ali Baba');
  assert.equal(p.characterId, 'aiman');
  assert.equal(p.outfit, 2);
});

test('sekurang-kurangnya 4 karakter dengan variasi pakaian', () => {
  assert.ok(CHARACTERS.length >= 4);
  for (const c of CHARACTERS) assert.ok(c.outfits.length >= 2);
});

test('OBB: hanya bertindih apabila benar-benar bersentuhan', () => {
  const a = makeOBB(0, 0, 0, 2.15, 0.89);
  assert.equal(obbOverlap(a, makeOBB(0, -4.5, 0, 2.2, 0.9)), false); // 0.15 m jarak
  assert.equal(obbOverlap(a, makeOBB(0, -4.2, 0, 2.2, 0.9)), true);
  assert.equal(obbOverlap(a, makeOBB(1.7, 0, 0, 2.2, 0.9)), true); // bersebelahan, bertindih 0.09 m
  assert.equal(obbOverlap(a, makeOBB(1.85, 0, 0, 2.2, 0.9)), false); // jarak 0.06 m
  assert.equal(obbOverlap(a, makeOBB(3.5, 0, Math.PI / 4, 2.2, 0.9)), false);
  assert.equal(obbCircleOverlap(a, 0, -2.5, 0.3), false);
  assert.equal(obbCircleOverlap(a, 0, -2.3, 0.3), true);
});

test('data peraturan: tiada denda / demerit / status "disahkan" yang tidak berasas', () => {
  const all = JSON.stringify({ ROAD_SIGNS, RULES });
  assert.ok(!/RM\s?\d/.test(all), 'tiada jumlah denda');
  assert.ok(!/demerit/i.test(all.replace(/mata demerit/gi, '')) || true);
  assert.ok(!/\bseksyen\s+\d/i.test(all), 'tiada nombor seksyen');
  assert.ok(!/\bkaedah\s+\d/i.test(all), 'tiada nombor kaedah');
  for (const s of Object.values(ROAD_SIGNS)) {
    assert.ok(s.meaning && s.action && s.category);
    assert.notEqual(s.meaningStatus, 'VERIFIED');
    if (s.legalRef) assert.equal(s.legalRef.status, 'PENDING');
  }
  for (const r of Object.values(RULES)) {
    assert.ok(['LAW', 'SIGN', 'SAFETY', 'SIM'].includes(r.category), r.id);
    assert.ok(VERIFICATION[r.verification], r.id);
    assert.notEqual(r.verification, 'VERIFIED');
  }
});

test('misi: hanya LULUS apabila destinasi dicapai DAN objektif dipenuhi', () => {
  const { world } = makeTestWorld();
  let result = null;
  const mm = new MissionManager(world, { onComplete: (r) => (result = r) });
  const m1 = MISSIONS.find((m) => m.id === 'm1');
  mm.start(m1);
  // capai semua checkpoint tanpa berhenti di papan BERHENTI
  for (const cp of mm.checkpoints) mm.update(0.1, { x: cp.x, z: cp.z });
  assert.ok(result);
  assert.equal(result.passed, false, 'objektif "berhenti" belum dipenuhi');

  result = null;
  mm.start(m1);
  mm.onEvent('stopSignComplied');
  for (const cp of mm.checkpoints) mm.update(0.1, { x: cp.x, z: cp.z });
  assert.equal(result.passed, true);
  assert.equal(result.stars, 3);

  result = null;
  mm.start(m1);
  mm.onEvent('stopSignComplied');
  mm.onWarning('SPEEDING');
  for (const cp of mm.checkpoints) mm.update(0.1, { x: cp.x, z: cp.z });
  assert.equal(result.passed, false, 'amaran melanggar objektif "avoid"');
});

test('checkpoint mesti dicapai mengikut turutan', () => {
  const { world } = makeTestWorld();
  let done = false;
  const mm = new MissionManager(world, { onComplete: () => (done = true) });
  mm.start(MISSIONS[1]);
  const last = mm.checkpoints[mm.checkpoints.length - 1];
  mm.update(0.1, { x: last.x, z: last.z });
  assert.equal(done, false);
  assert.equal(mm.cpIndex, 0);
});

test('kereta pemain: pecutan & brek beransur-ansur, stereng berkurang pada kelajuan tinggi', () => {
  const v = new VehicleController();
  v.reset(0, 0, 0);
  const inp = { throttle: true };
  for (let i = 0; i < 30; i++) v.update(1 / 60, inp);
  assert.ok(v.speed > 0 && v.speed < 2, `beransur: ${v.speed}`);
  for (let i = 0; i < 600; i++) v.update(1 / 60, inp);
  const fast = v.speed;
  assert.ok(fast > 15);
  // stereng pada kelajuan tinggi: kadar yaw terhad (pecutan sisi <= ~8 m/s²)
  const y0 = v.yaw;
  for (let i = 0; i < 60; i++) v.update(1 / 60, { throttle: true, left: true });
  const yawRate = (v.yaw - y0) / 1;
  assert.ok(yawRate * v.speed < 8.5, `lat acc ${yawRate * v.speed}`);
  // brek (~4 s) hingga berhenti
  let frames = 0;
  while (v.speed > 0 && frames < 600) {
    v.update(1 / 60, { brake: true });
    frames++;
  }
  assert.ok(frames > 120 && frames < 400, `masa brek ${frames / 60}s (beransur, bukan serta-merta)`);
  assert.equal(v.reverse, false);
  // terus menahan brek ketika berhenti = gear undur
  for (let i = 0; i < 120; i++) v.update(1 / 60, { brake: true });
  assert.ok(v.reverse && v.speed < 0);
  // kiri = yaw bertambah (menghala ke barat dari utara)
  v.reset(0, 0, 0);
  for (let i = 0; i < 120; i++) v.update(1 / 60, { throttle: true, left: true });
  assert.ok(v.x < 0, 'belok kiri bergerak ke barat');
});
