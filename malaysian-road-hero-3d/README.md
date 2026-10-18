# MALAYSIAN ROAD HERO 3D

**DEVELOPER: ADAM ZAKWAN**

Simulator pemanduan 3D first-person untuk pendidikan keselamatan jalan raya Malaysia.
Pemain duduk di dalam kabin kereta pandu kanan, memandu sendiri, menggunakan tiga cermin
berfungsi, berinteraksi dengan trafik NPC, belajar papan tanda dan mengelakkan kesalahan.

> Game ini merupakan projek pendidikan dan simulasi. Ia bukan aplikasi rasmi JPJ dan bukan
> pengganti latihan memandu atau perundangan rasmi Malaysia. Lihat [VERIFICATION.md](VERIFICATION.md).

## Menjalankan

```bash
cd malaysian-road-hero-3d
npm install
npm run dev        # buka http://localhost:5173
npm run build      # binaan produksi ke dist/
npm test           # 31 ujian unit/simulasi (Node)
```

Ujian pelayar (28 semakan; perlukan Playwright dipasang): `npm run dev` kemudian `npm run test:e2e`.

## Kawalan

| Komputer | Tindakan |
|---|---|
| W / ↑ | Minyak |
| S / ↓ | Brek (tahan ketika berhenti = gear undur) |
| A D / ← → | Stereng |
| Q / E | Signal kiri / kanan |
| Z / C (tahan) | Toleh ke cermin sisi kiri / kanan (semakan cermin) |
| Seret tetikus | Lihat sekeliling |
| Space | Brek kecemasan |
| R | Reset ke lorong jika tersangkut |
| Esc | Jeda |

Telefon: butang ◀ ▶ (stereng), MINYAK, BREK, ⇦ ⇨ (signal), 👁 (toleh cermin), R dan ❚❚ (jeda).
Kawalan sentuh muncul automatik pada skrin sentuh (boleh dipaksa dalam SETTINGS).

## Ciri & pelaksanaan

| Ciri | Fail utama |
|---|---|
| Dunia Stylized 3D (bandar, taman perumahan, sekolah, jalan kampung, lebuh raya, pokok tropika, gunung) | `src/world/World.js`, `Scenery.js`, `RoadBuilder.js` |
| Graf lorong (trafik sebelah kiri), simpang, connector belok kiri/kanan | `src/world/RoadNetwork.js`, `src/data/mapData.js` |
| Kokpit first-person, stereng kanan, kluster meter km/j, tangan pemandu | `src/world/PlayerCarModel.js` |
| Fizik permainan ringkas (model basikal kinematik) | `src/game/VehicleController.js` |
| 3 cermin render-to-texture (kamera berasingan, imej diterbalikkan, tiada rekursi melalui layers) | `src/mirrors/MirrorSystem.js` |
| AI trafik NPC (IDM, lampu isyarat, BERHENTI, beri laluan, tempahan simpang, tukar lorong lebuh raya) | `src/game/TrafficManager.js` |
| Lampu isyarat berfasa (actuated) | `src/world/TrafficLights.js` |
| Pejalan kaki di lintasan zebra | `src/world/Pedestrians.js` |
| Papan tanda 3D + dialog dengan garisan penunjuk (mod pembelajaran = jeda) | `src/world/RoadSigns.js`, `src/ui/RoadSignDialog.js`, `src/data/roadSignData.js` |
| Enjin peraturan & amaran (memotong, garisan berkembar, lampu merah, BERHENTI, had laju, tukar lorong, jarak, dll.) | `src/game/RuleMonitor.js`, `src/data/roadRuleData.js`, `src/ui/WarningSystem.js` |
| Perlanggaran OBB + GAME OVER + TRY AGAIN | `src/game/CollisionSystem.js`, `src/ui/GameOverScreen.js` |
| Profil pemain (nama wajib 3–20 aksara, 5 karakter 3D × 3 warna) | `src/player/*`, `src/ui/ProfileScreen.js` |
| 4 misi + pemanduan bebas | `src/data/missionData.js`, `src/game/MissionManager.js` |
| Menu, SETTINGS, ABOUT, HUD, peta mini | `src/ui/*` |
| Audio sintetik (enjin, signal, brek, amaran, perlanggaran, persekitaran) | `src/game/AudioSystem.js` |

### Misi

1. **Kawasan Perumahan** — simpang BERI LALUAN & BERHENTI, signal setiap belokan, had 30 km/j.
2. **Jalan Bandar** — 4 lampu isyarat, jarak selamat, kawasan sekolah & lintasan zebra.
3. **Memotong Dengan Selamat** — lori perlahan, zon garisan berkembar vs putus-putus, trafik bertentangan.
4. **Lebuh Raya** — 3 lorong, 3 pertukaran lorong selamat (signal + semak cermin), jarak, had 110 km/j.

Misi hanya LULUS apabila destinasi dicapai **dan** semua objektif dipenuhi (tiada kuiz).

## Status pengujian (jujur)

Diuji secara automatik dalam persekitaran pembangunan (Node 22 + Chromium headless dengan
SwiftShader, iaitu render perisian — bukan GPU sebenar):

| # | Perkara | Status |
|---|---|---|
| 1 | Pandu dari perspektif first-person | ✔ e2e + tangkapan skrin |
| 2 | Stereng di sebelah kanan | ✔ tangkapan skrin (kamera pemandu x=+0.38 m, cermin kanan dekat) |
| 3 | Tiga cermin menunjukkan pantulan betul | ✔ ujian piksel (`scripts/e2e.mjs`): kereta kiri-belakang hanya dalam cermin kiri, kanan-belakang hanya cermin kanan, cermin belakang nampak kenderaan di belakang; orientasi pantulan betul |
| 4 | NPC bergerak mengikut lorong | ✔ simulasi 4 minit × 3 benih: 0 perlanggaran NPC |
| 5 | NPC kelihatan dalam cermin | ✔ ujian piksel cermin |
| 6 | Dialog papan tanda muncul pada masa/lokasi betul | ✔ e2e (dalam skrin, garisan penunjuk ke papan, jeda dalam mod pembelajaran) |
| 7 | Maklumat papan tanda tidak direka | ✔ maksud lazim sahaja; tiada denda/seksyen; dilabel "belum disemak" |
| 8 | Peraturan memotong berdasarkan sumber rasmi yang disahkan | ✘ **Tidak dapat disahkan** — laman JPJ tidak boleh dicapai dari persekitaran pembangunan. Dilabel "Perlu pengesahan". Lihat VERIFICATION.md |
| 9 | Tiada amaran tidak berasas | ✔ ujian: pemanduan biasa di bandar, kampung (1.9 km) & lebuh raya (3 km) = 0 amaran |
| 10 | Perlanggaran = GAME OVER | ✔ e2e (dicetuskan sekali sahaja) |
| 11 | Restart berfungsi | ✔ e2e (kedudukan, kelajuan, amaran, checkpoint, trafik dipulihkan) |
| 12 | Nama pemain wajib | ✔ unit + e2e |
| 13 | Karakter wajib dipilih | ✔ e2e |
| 14 | Profil kekal selepas refresh | ✔ e2e |
| 15 | Kredit DEVELOPER: ADAM ZAKWAN | ✔ e2e (menu, ABOUT, footer, jeda) |
| 16 | Kawalan telefon | ✔ diemulasi (viewport mudah alih + sentuhan) — **belum diuji pada telefon sebenar** |
| 17 | Build tanpa ralat kritikal | ✔ `vite build`; tiada ralat konsol dalam e2e |

**Belum diuji:** prestasi FPS pada GPU / telefon sebenar (render perisian sandbox ~1–2 FPS
tidak mewakili), audio (tidak boleh didengar dalam ujian automatik), penyempurnaan misi penuh
oleh pemandu manusia. Kiraan geometri setiap bingkai telah dioptimumkan (jubin landskap, culling
jarak): ~60–130k segi tiga untuk pandangan utama dan ~55–75k bagi setiap cermin.

## Had yang diketahui

- Fizik ialah model permainan ringkas, bukan simulasi automotif sebenar.
- Lebuh raya dan jalan kampung tidak bersambung melalui susur keluar/masuk; pilih lokasi melalui misi/pemanduan bebas.
- Model 3D dibina daripada geometri asas Three.js (tiada aset glTF luaran); `GLTFLoader` boleh ditambah kemudian untuk model premium.
- Rupa papan tanda ialah ilustrasi simulasi dan mungkin berbeza daripada reka bentuk rasmi.
