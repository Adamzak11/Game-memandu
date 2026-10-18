// Ujian asap (smoke test) automatik menggunakan Playwright + Chromium headless.
// Guna: (1) npm run dev  (2) node scripts/smoke.mjs [url] [outDir]
// Playwright perlu dipasang secara global atau sebagai devDependency.
import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:5173/';
const out = process.argv[3] || '.';
const errors = [];
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(m.text());
});
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto(url);
await page.waitForFunction(() => window.__MRH, null, { timeout: 60000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${out}/01-menu.png` });
console.log('menu credit:', await page.textContent('#menu-credit'));

await page.click('#btn-start');
await page.waitForSelector('#profile-screen');
await page.click('#btn-confirm-driver');
console.log('empty name error:', await page.textContent('#name-error'), '|', await page.textContent('#char-error'));
await page.fill('#driver-name', '   Ad   am   ');
await page.click('.char-card[data-id="siti"]');
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/02-profile.png` });
await page.click('#btn-confirm-driver');
await page.waitForSelector('#mission-select');
console.log('driver:', await page.textContent('#ms-driver'));
await page.screenshot({ path: `${out}/03-missions.png` });
await page.click('#mission-m2');
await page.waitForSelector('#btn-go');
await page.click('#btn-go');
await page.waitForTimeout(1000);
await page.screenshot({ path: `${out}/04-drive-start.png` });
await page.keyboard.down('KeyW');
await page.waitForTimeout(3500);
await page.keyboard.up('KeyW');
await page.screenshot({ path: `${out}/05-driving.png` });
console.log(JSON.stringify(await page.evaluate(() => window.__MRH.debugSnapshot())));
console.log('errors:', errors.slice(0, 10));
await browser.close();
