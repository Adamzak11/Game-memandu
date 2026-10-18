// Ujian hujung-ke-hujung dalam Chromium (Playwright).
// Guna: npm run dev (port 5173), kemudian: node scripts/e2e.mjs [url] [outDir]
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:5173/';
const out = process.argv[3] || '.';
const args = ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'];
const results = [];
const check = (name, ok, info = '') => {
  results.push({ name, ok, info });
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${info ? '  — ' + info : ''}`);
};

const browser = await chromium.launch({ args });
const errors = [];
const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 } });
const page = await ctx.newPage();
page.on('pageerror', (e) => errors.push(String(e)));
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
await page.goto(url);
await page.waitForFunction(() => window.__MRH);

// 1. Profil wajib sebelum misi
await page.click('#btn-start');
check('Skrin CREATE YOUR DRIVER dipaparkan sebelum misi', await page.isVisible('#profile-screen'));
await page.click('#btn-confirm-driver');
check('Nama kosong ditolak', (await page.textContent('#name-error')).length > 0);
check('Karakter wajib dipilih', (await page.textContent('#char-error')).length > 0);
await page.fill('#driver-name', 'Hero   Malaysia');
await page.click('#btn-confirm-driver');
check('Tidak boleh teruskan tanpa karakter', await page.isVisible('#profile-screen'));
await page.click('.char-card[data-id="meiling"]');
await page.click('#btn-confirm-driver');
check('Mission select selepas CONFIRM DRIVER', await page.isVisible('#mission-select'));
check('Nama dinormalkan', (await page.textContent('#ms-driver')) === 'Hero Malaysia');

// 2. Profil kekal selepas refresh
await page.reload();
await page.waitForFunction(() => window.__MRH);
const chip = await page.textContent('.chip-name');
check('Profil kekal selepas refresh', chip === 'Hero Malaysia', chip);
check('Kredit di menu utama', (await page.textContent('#menu-credit')) === 'DEVELOPER: ADAM ZAKWAN');
check('Kredit di footer menu', (await page.textContent('.menu-footer')).includes('DEVELOPER: ADAM ZAKWAN'));
await page.click('#btn-about');
check('Kredit di halaman ABOUT', (await page.textContent('#about-credit')).includes('ADAM ZAKWAN'));
await page.click('#about button.btn.primary');

// 3. Perlanggaran -> GAME OVER sekali -> TRY AGAIN
const crash = await page.evaluate(async () => {
  const g = window.__MRH;
  const { MISSIONS } = await import('/src/data/missionData.js');
  g.settings.autoDialogs = false;
  g.startMission(MISSIONS[0]);
  const spot = g.net.laneSpot('e_n01_n11', 1, 70, 0);
  const n = g.traffic._spawn('car', spot.lane, spot.s);
  n.fixedV0 = 0.01;
  n.v = 0;
  let overs = 0;
  const orig = g.gameOver.bind(g);
  g.gameOver = (r) => {
    overs++;
    orig(r);
  };
  g.debugStep(900, 1 / 60, { throttle: true });
  for (let i = 0; i < 5; i++) g.debugStep(10, 1 / 60, { throttle: true }); // tiada GAME OVER kedua
  g.gameOver = orig;
  return { state: g.state, reason: g.lastGameOver, overs };
});
check('Perlanggaran = GAME OVER', crash.state === 'GAME_OVER', crash.reason);
check('GAME OVER dicetuskan sekali sahaja', crash.overs === 1);
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/e2e-gameover.png` });
check('Overlay GAME OVER + sebab + butang', (await page.isVisible('#game-over')) && (await page.isVisible('#btn-retry')) && (await page.isVisible('#btn-go-menu')));
await page.click('#btn-retry');
const after = await page.evaluate(() => {
  const g = window.__MRH;
  return { state: g.state, kmh: g.player.kmh, x: g.player.x, z: g.player.z, warnings: g.warnings.log.length, cp: g.mission.cpIndex, npcs: g.traffic.npcs.length };
});
check('TRY AGAIN memulihkan keadaan', after.state === 'PLAYING' && after.kmh === 0 && Math.abs(after.x - -320) < 1 && after.warnings === 0 && after.cp === 0, JSON.stringify(after));

// 4. Dialog papan tanda (mod pembelajaran = jeda)
const dlg = await page.evaluate(async () => {
  const g = window.__MRH;
  const { MISSIONS } = await import('/src/data/missionData.js');
  g.settings.autoDialogs = true;
  g.settings.drivingMode = 'learning';
  g.settings.pauseOnDialog = true;
  g.startMission(MISSIONS[2]);
  g.traffic.clear();
  for (let i = 0; i < 40 && g.state === 'PLAYING'; i++) g.debugStep(30, 1 / 60, { throttle: true });
  return { state: g.state, sign: g.dialog.sign?.type, x: g.player.x, z: g.player.z };
});
check('Dialog papan tanda muncul & menjeda (mod pembelajaran)', dlg.state === 'DIALOG' && !!dlg.sign, JSON.stringify(dlg));
await page.waitForTimeout(800);
const geom = await page.evaluate(() => {
  const d = window.__MRH.dialog.lastScreen;
  const box = document.querySelector('.sign-dialog').getBoundingClientRect();
  return { d, box: { x: box.x, y: box.y, w: box.width, h: box.height }, line: document.querySelector('.leader-svg line').style.display, vw: innerWidth, vh: innerHeight };
});
const inside = geom.box.x >= 0 && geom.box.y >= 0 && geom.box.x + geom.box.w <= geom.vw && geom.box.y + geom.box.h <= geom.vh;
check('Dialog dalam kawasan skrin', inside, JSON.stringify(geom.box));
check('Garisan penunjuk ke papan tanda', geom.d.visible && geom.line !== 'none', JSON.stringify(geom.d));
await page.screenshot({ path: `${out}/e2e-sign-dialog.png` });
const frozen = await page.evaluate(async () => {
  const g = window.__MRH;
  const z0 = g.player.z;
  await new Promise((r) => setTimeout(r, 600));
  return Math.abs(g.player.z - z0);
});
check('Simulasi dijeda semasa dialog', frozen === 0);
await page.click('#sd-ok');
const st = await page.evaluate(() => window.__MRH.state);
check('OK menutup dialog & menyambung', st === 'PLAYING');
const again = await page.evaluate(() => {
  const g = window.__MRH;
  const first = g.lastSign;
  g.debugStep(60, 1 / 60, { throttle: true });
  return { same: g.dialog.isOpen && g.dialog.sign === first };
});
check('Dialog sama tidak berulang serta-merta', !again.same);

// 5. Tiga cermin: setiap cermin menunjukkan kenderaan di arah yang betul
const mir = await page.evaluate(async () => {
  const g = window.__MRH;
  const { MISSIONS } = await import('/src/data/missionData.js');
  g.settings.autoDialogs = false;
  const m4 = MISSIONS.find((m) => m.id === 'm4');
  g.startMission({ ...m4, start: { edge: 'e_hS_hN', dir: 1, t: 300, lane: 1 }, traffic: { count: { low: 0, medium: 0, high: 0 }, kinds: [] } });
  g.traffic.clear();
  g.traffic.pool.clear();
  const put = (lane, t, color) => {
    const sp = g.net.laneSpot('e_hS_hN', 1, t, lane);
    const n = g.traffic._spawn('car', sp.lane, sp.s, color);
    n.v = 0;
    n.fixedV0 = 0;
  };
  put(0, 284, 0xff00ff); // kiri-belakang (magenta)
  put(2, 284, 0xffff00); // kanan-belakang (kuning)
  put(1, 280, 0x00ff00); // belakang (hijau)
  g._syncCar();
  g._render();
  g._render();
  const res = {};
  for (const [k, m] of Object.entries(g.mirrors.mirrors)) {
    const rt = m.target;
    const w = rt.width;
    const h = rt.height;
    const buf = new Uint8Array(w * h * 4);
    g.renderer.readRenderTargetPixels(rt, 0, 0, w, h, buf);
    const c = { magenta: 0, yellow: 0, green: 0, magentaX: 0, yellowX: 0 };
    for (let i = 0; i < w * h; i++) {
      const R = buf[i * 4];
      const G = buf[i * 4 + 1];
      const B = buf[i * 4 + 2];
      const x = i % w;
      if (R > 110 && B > 110 && G < 60) {
        c.magenta++;
        c.magentaX += x / w;
      } else if (R > 110 && G > 110 && B < 50) {
        c.yellow++;
        c.yellowX += x / w;
      } else if (G > 110 && R < 60 && B < 60) c.green++;
    }
    c.magentaX = c.magenta ? c.magentaX / c.magenta : null;
    c.yellowX = c.yellow ? c.yellowX / c.yellow : null;
    res[k] = c;
  }
  return res;
});
check('Cermin kiri: nampak kenderaan kiri-belakang sahaja', mir.left.magenta > 30 && mir.left.yellow < 10, JSON.stringify(mir.left));
check('Cermin kanan: nampak kenderaan kanan-belakang sahaja', mir.right.yellow > 30 && mir.right.magenta < 10, JSON.stringify(mir.right));
check('Cermin belakang: nampak kenderaan di belakang', mir.rear.green > 30, JSON.stringify(mir.rear));
// imej kamera belakang (sebelum diterbalikkan pada kaca): kenderaan kiri di separuh kanan imej
check('Orientasi pantulan cermin belakang betul', mir.rear.magentaX > 0.5 && mir.rear.yellowX < 0.5, JSON.stringify(mir.rear));
await page.keyboard.press('Escape');
await page.waitForTimeout(400);
check('Kredit pada skrin jeda', (await page.textContent('#pause .credit')) === 'DEVELOPER: ADAM ZAKWAN');

// 6. Kawalan telefon
await ctx.close();
const mob = await browser.newContext({ viewport: { width: 844, height: 390 }, hasTouch: true, isMobile: true });
const mp = await mob.newPage();
mp.on('pageerror', (e) => errors.push(String(e)));
await mp.addInitScript(() => localStorage.setItem('mrh3d.profile.v1', JSON.stringify({ name: 'Mobile', characterId: 'siti', outfit: 1 })));
await mp.goto(url, { timeout: 90000 });
await mp.waitForFunction(() => window.__MRH, null, { timeout: 90000 });
await mp.evaluate(async () => {
  const g = window.__MRH;
  const { MISSIONS } = await import('/src/data/missionData.js');
  g.settings.autoDialogs = false;
  g.startMission(MISSIONS[1]);
});
check('Butang sentuh dipaparkan pada telefon', await mp.isVisible('#t-gas'));
const gas = await mp.$('#t-gas');
const bb = await gas.boundingBox();
await mp.evaluate(() => {
  const b = document.getElementById('t-gas');
  b.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, pointerId: 7, pointerType: 'touch' }));
});
await mp.waitForTimeout(2500);
const mstate = await mp.evaluate(() => ({ gas: window.__MRH.input.touch.gas, kmh: window.__MRH.player.kmh }));
await mp.evaluate(() => document.getElementById('t-gas').dispatchEvent(new PointerEvent('pointerup', { bubbles: true, pointerId: 7, pointerType: 'touch' })));
check('Butang MINYAK sentuh menggerakkan kereta', mstate.gas && mstate.kmh > 0.05, JSON.stringify(mstate) + ' ' + JSON.stringify(bb));
await mp.screenshot({ path: `${out}/e2e-mobile.png` });
await mob.close();

check('Tiada ralat JavaScript', errors.length === 0, errors.slice(0, 3).join(' | '));
await browser.close();
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} lulus`);
process.exit(failed ? 1 : 0);
