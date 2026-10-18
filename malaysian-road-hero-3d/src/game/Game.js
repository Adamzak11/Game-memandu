import * as THREE from 'three';
import { World } from '../world/World.js';
import { PlayerCarModel, COCKPIT, LAYER_INTERIOR } from '../world/PlayerCarModel.js';
import { signImageURL } from '../world/RoadSigns.js';
import { MirrorSystem } from '../mirrors/MirrorSystem.js';
import { VehicleController } from './VehicleController.js';
import { InputController } from './InputController.js';
import { TrafficManager } from './TrafficManager.js';
import { CollisionSystem } from './CollisionSystem.js';
import { RuleMonitor } from './RuleMonitor.js';
import { MissionManager } from './MissionManager.js';
import { AudioSystem } from './AudioSystem.js';
import { STATE, loadSettings, saveSettings, loadProgress, recordMissionResult } from './GameState.js';
import { yawFromDir, KMH } from './util.js';
import { MISSIONS } from '../data/missionData.js';
import { signInfo } from '../data/roadSignData.js';
import { loadProfile, saveProfile } from '../player/PlayerProfile.js';
import { CharacterSelector } from '../player/CharacterSelector.js';
import { getCharacter } from '../player/characters.js';
import { h, clear } from '../ui/dom.js';
import { MainMenu, aboutScreen } from '../ui/MainMenu.js';
import { ProfileScreen } from '../ui/ProfileScreen.js';
import { missionSelectScreen, briefingScreen } from '../ui/MissionSelect.js';
import { settingsScreen } from '../ui/SettingsMenu.js';
import { gameOverScreen, missionCompleteScreen, pauseScreen } from '../ui/GameOverScreen.js';
import { DashboardUI } from '../ui/DashboardUI.js';
import { RoadSignDialog } from '../ui/RoadSignDialog.js';
import { WarningSystem } from '../ui/WarningSystem.js';
import { TouchControls } from '../ui/TouchControls.js';

const MENU_STATES = new Set([STATE.MENU, STATE.PROFILE, STATE.MISSION_SELECT, STATE.BRIEFING]);

export class Game {
  constructor(canvas, uiRoot) {
    this.canvas = canvas;
    this.uiRoot = uiRoot;
    this.settings = loadSettings();
    this.profile = loadProfile();
    this.state = STATE.MENU;
    this.time = 0;

    // renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: this.settings.graphics !== 'low', powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;

    // dunia
    this.world = new World();
    this.net = this.world.network;
    this.scene = this.world.scene;

    // kereta pemain + kamera first-person
    this.player = new VehicleController();
    this.carModel = new PlayerCarModel(0xd32f2f);
    this.scene.add(this.carModel.group);
    this.headPivot = new THREE.Object3D();
    this.headPivot.position.copy(COCKPIT.eye);
    this.headPivot.rotation.order = 'YXZ';
    this.carModel.group.add(this.headPivot);
    this.camera = new THREE.PerspectiveCamera(68, 1, 0.05, 4600);
    this.camera.layers.enable(LAYER_INTERIOR);
    this.headPivot.add(this.camera);
    this.headYaw = 0;
    this.menuCamera = new THREE.PerspectiveCamera(55, 1, 0.5, 4600);

    this.mirrors = new MirrorSystem(this.carModel, this.settings.mirrorQuality);
    this.input = new InputController(canvas);
    this.traffic = new TrafficManager(this.world);
    this.collision = new CollisionSystem(this.world);
    this.audio = new AudioSystem();

    // UI
    this.hudLayer = h('div', { class: 'layer hud-layer' });
    this.dialogLayer = h('div', { class: 'layer dialog-layer' });
    this.screenLayer = h('div', { class: 'layer screen-layer' });
    uiRoot.append(this.hudLayer, this.dialogLayer, this.screenLayer);
    this.hud = new DashboardUI(this.hudLayer, { onPause: () => this.pause() });
    this.hud.setRoads(this.net);
    this.touch = new TouchControls(this.hudLayer, this.input);
    this.hudLayer.append(h('div', { class: 'rotate-hint' }, 'Pusingkan telefon ke mod landskap untuk pengalaman terbaik.'));
    this.warnings = new WarningSystem(this.hud.warnings, { onShow: () => this.audio.warning() });
    this.dialog = new RoadSignDialog(this.dialogLayer, { onClose: () => this._onDialogClosed() });
    this.menu = new MainMenu(this.screenLayer, {
      onStart: () => this.goStart(),
      onMissions: () => this.goStart(),
      onSettings: () => this.showSettings(() => this.showMenu()),
      onAbout: () => this.showAbout(),
      onEditProfile: () => this.showProfile(() => this.showMenu()),
      getProfile: () => this.profile,
      getAvatar: (p) => this.avatarFor(p)
    });

    this.rules = new RuleMonitor(this.world, this.traffic, {
      onWarning: (id, vars) => {
        this.mission.onWarning(id);
        this.warnings.show(id, vars);
      },
      onEvent: (name) => this.mission.onEvent(name)
    });
    this.mission = new MissionManager(this.world, {
      onComplete: (r) => this._onMissionComplete(r),
      onObjectivesChanged: () => this._refreshObjectives(),
      onCheckpoint: (cp, next) => {
        this.audio.chime();
        this.hud.setHint(next ? next.hint : cp.hint);
      }
    });

    this.shownSigns = new Set();
    this.blinkT = 0;
    this.lastBlink = false;
    this.statusMsg = '';
    this.statusTimer = 0;
    this.current = null;

    this._thumbs = null;
    this.applySettings();
    this._onResize();
    window.addEventListener('resize', () => this._onResize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === STATE.PLAYING) this.pause();
    });
    window.addEventListener('pointerdown', () => this.audio.unlock(), { once: false });
    window.addEventListener('keydown', () => this.audio.unlock(), { once: false });

    this._menuTraffic();
    this.showMenu();
    this._last = performance.now();
    this.renderer.setAnimationLoop(() => this._frame());
  }

  // ---------- profil ----------
  get thumbs() {
    if (!this._thumbs) {
      const cv = document.createElement('canvas');
      cv.width = 160;
      cv.height = 200;
      try {
        const sel = new CharacterSelector(cv);
        this._thumbs = sel.thumbnails();
        sel.dispose();
      } catch {
        this._thumbs = {};
      }
    }
    return this._thumbs;
  }

  avatarFor(p) {
    return this.thumbs[`${p.characterId}:${p.outfit || 0}`] || null;
  }

  _applyProfileToCar() {
    if (!this.profile) return;
    const def = getCharacter(this.profile.characterId);
    if (!def) return;
    const o = def.outfits[this.profile.outfit] || def.outfits[0];
    this.carModel.setOutfit(def.skin, o.color);
  }

  // ---------- tetapan ----------
  applySettings() {
    const s = this.settings;
    const dpr = window.devicePixelRatio || 1;
    const pr = s.graphics === 'low' ? Math.min(1, dpr * 0.75) : s.graphics === 'medium' ? Math.min(1.5, dpr) : Math.min(2, dpr);
    this.renderer.setPixelRatio(pr);
    this.renderer.shadowMap.enabled = s.graphics !== 'low';
    this.world.setQuality(s.graphics);
    if (this._mirrorQ !== s.mirrorQuality) {
      this.mirrors.setQuality(s.mirrorQuality);
      this._mirrorQ = s.mirrorQuality;
    }
    this.audio.setEnabled(s.sound, s.volume);
    const touch = s.controlMode === 'touch' || (s.controlMode === 'auto' && matchMedia('(pointer: coarse)').matches);
    this.touchEnabled = touch;
    this.touch.setVisible(touch && this.state === STATE.PLAYING);
    this._onResize();
  }

  _onResize() {
    const w = window.innerWidth;
    const hgt = window.innerHeight;
    this.renderer.setSize(w, hgt, false);
    const aspect = w / hgt;
    // pastikan medan pandangan mendatar mencukupi pada skrin sempit
    const minH = 2 * Math.atan(Math.tan((80 * Math.PI) / 360) / aspect) * (180 / Math.PI);
    this.camera.fov = Math.min(100, Math.max(64, minH));
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.menuCamera.aspect = aspect;
    this.menuCamera.updateProjectionMatrix();
    this.width = w;
    this.height = hgt;
  }

  // ---------- skrin ----------
  _setScreen(el, onMounted) {
    if (this._screenObj?.dispose) this._screenObj.dispose();
    this._screenObj = null;
    clear(this.screenLayer);
    if (el) this.screenLayer.append(el);
    onMounted?.();
  }

  _enterMenuState(state) {
    const wasPlaying = !MENU_STATES.has(this.state);
    this.state = state;
    this.hud.hide();
    this.touch.setVisible(false);
    this.dialog.hide();
    this.carModel.group.visible = false;
    if (wasPlaying) this._menuTraffic();
  }

  showMenu() {
    this._enterMenuState(STATE.MENU);
    this._setScreen(this.menu.render());
  }

  showAbout() {
    this._enterMenuState(STATE.MENU);
    this._setScreen(aboutScreen(() => this.showMenu()));
  }

  showSettings(back) {
    const prevState = this.state;
    const el = settingsScreen({ ...this.settings }, {
      onChange: (s) => {
        this.settings = s;
        saveSettings(s);
        this.applySettings();
      },
      onBack: () => back()
    });
    if (prevState === STATE.PAUSED) {
      clear(this.screenLayer);
      this.screenLayer.append(el);
    } else {
      this._enterMenuState(STATE.MENU);
      this._setScreen(el);
    }
  }

  showProfile(after) {
    this._enterMenuState(STATE.PROFILE);
    const ps = new ProfileScreen({
      existing: this.profile,
      thumbs: this.thumbs,
      onConfirm: (p) => {
        this.profile = saveProfile(p);
        this._applyProfileToCar();
        after();
      },
      onCancel: () => this.showMenu()
    });
    this._setScreen(ps.render(), () => ps.mounted());
    this._screenObj = ps;
  }

  goStart() {
    if (!this.profile) {
      // wajib cipta profil sebelum misi pertama
      this.showProfile(() => this.showMissionSelect());
      return;
    }
    this.showMissionSelect();
  }

  showMissionSelect() {
    this._enterMenuState(STATE.MISSION_SELECT);
    this._setScreen(
      missionSelectScreen({
        profile: this.profile,
        progress: loadProgress(),
        onPick: (m) => this.showBriefing(m),
        onFree: (f) =>
          this.showBriefing({
            id: f.id,
            title: `PEMANDUAN BEBAS — ${f.title.toUpperCase()}`,
            free: true,
            start: f.start,
            traffic: { kinds: f.kinds }
          }),
        onBack: () => this.showMenu()
      })
    );
  }

  showBriefing(mission) {
    this._enterMenuState(STATE.BRIEFING);
    this._setScreen(
      briefingScreen({
        mission,
        profile: this.profile,
        settings: this.settings,
        onStart: () => this.startMission(mission),
        onBack: () => this.showMissionSelect()
      })
    );
  }

  // ---------- sesi pemanduan ----------
  startMission(mission) {
    if (!this.profile) return this.goStart();
    this.audio.unlock();
    this.current = mission;
    this._applyProfileToCar();
    this._setScreen(null);
    this.hud.setProfile(this.profile, this.avatarFor(this.profile), mission.no ? `MISI ${mission.no}: ${mission.title}` : mission.title);
    this.mission.start(mission.free ? { ...mission, objectives: null, checkpoints: [] } : mission);
    this.restart();
  }

  restart() {
    const m = this.current;
    if (!m) return;
    this._setScreen(null);
    const st = m.start;
    const spot = this.net.laneSpot(st.edge, st.dir, st.t, st.lane || 0);
    this.player.reset(spot.x, spot.z, yawFromDir(spot.dx, spot.dz));
    this.player.laneInfo = null;
    this.carModel.group.visible = true;
    this._syncCar();

    const q = this.settings.graphics;
    const defCount = { low: 8, medium: 14, high: 20 };
    const tcfg = m.traffic || {};
    this.traffic.configure({
      count: tcfg.count ? tcfg.count[q] : defCount[q],
      kinds: tcfg.kinds || [],
      oncoming: tcfg.oncoming || null,
      scripted: m.scripted || []
    });
    this.world.lights.reset();
    this.world.pedestrians.reset();
    this.traffic.reset(this.player);
    this.rules.reset();
    this.warnings.reset();
    this.mission.reset();
    this.dialog.hide();
    this.shownSigns.clear();
    this.headYaw = 0;
    this.input.dragYaw = 0;
    this.input.releaseAll();
    this.statusMsg = '';
    this.hud.setHint(this.mission.currentCheckpoint ? this.mission.currentCheckpoint.hint : 'Pemanduan bebas — patuhi peraturan jalan raya.');
    this._refreshObjectives();
    this.hud.show();
    this.state = STATE.PLAYING;
    this.touch.setVisible(this.touchEnabled);
    this.input.enabled = true;
  }

  pause() {
    if (this.state !== STATE.PLAYING && this.state !== STATE.DIALOG) return;
    this._pausedFrom = this.state;
    this.state = STATE.PAUSED;
    this.input.releaseAll();
    this._showPause();
  }

  _showPause() {
    this._setScreen(
      pauseScreen({
        onResume: () => this.resume(),
        onRestart: () => this.restart(),
        onSettings: () => this.showSettings(() => this._showPause()),
        onMenu: () => this.showMenu()
      })
    );
  }

  resume() {
    if (this.state !== STATE.PAUSED) return;
    this._setScreen(null);
    this.state = this._pausedFrom === STATE.DIALOG && this.dialog.isOpen ? STATE.DIALOG : STATE.PLAYING;
    this.touch.setVisible(this.touchEnabled);
  }

  gameOver(reason) {
    if (this.state === STATE.GAME_OVER) return; // hanya sekali bagi setiap kemalangan
    this.state = STATE.GAME_OVER;
    this.player.speed = 0;
    this.input.releaseAll();
    this.audio.crash();
    this.dialog.hide();
    this.touch.setVisible(false);
    this.lastGameOver = reason;
    this._setScreen(
      gameOverScreen({
        reason,
        profile: this.profile,
        onRetry: () => this.restart(),
        onMenu: () => this.showMenu()
      })
    );
  }

  _onMissionComplete(result) {
    if (this.state !== STATE.PLAYING && this.state !== STATE.DIALOG) return;
    this.state = STATE.COMPLETE;
    this.input.releaseAll();
    this.touch.setVisible(false);
    this.dialog.hide();
    this.lastResult = result;
    recordMissionResult(this.current.id, result);
    const idx = MISSIONS.findIndex((m) => m.id === this.current.id);
    const next = idx >= 0 && idx < MISSIONS.length - 1 ? MISSIONS[idx + 1] : null;
    this._setScreen(
      missionCompleteScreen({
        mission: this.current,
        result,
        profile: this.profile,
        onRetry: () => this.restart(),
        onNext: next ? () => this.showBriefing(next) : null,
        onMenu: () => this.showMenu()
      })
    );
  }

  _refreshObjectives() {
    this.hud.setObjectives(this.mission.mission?.objectives ? this.mission.mission : null, (o) => this.mission.objectiveStatus(o));
  }

  _resetCarToLane() {
    const p = this.player;
    const loc = this.net.locateLane(p.x, p.z, p.yaw, 12) || this.net.locateLane(p.x, p.z, p.yaw + Math.PI, 12);
    let lane;
    let s;
    if (loc && !loc.lane.isConnector) {
      lane = loc.lane;
      s = loc.s;
    } else {
      // lorong terdekat dari sebarang arah
      let best = null;
      for (const l of this.net.lanes) {
        if (l.isConnector) continue;
        for (let i = 0; i < l.xs.length; i += 3) {
          const d = Math.hypot(l.xs[i] - p.x, l.zs[i] - p.z);
          if (!best || d < best.d) best = { d, lane: l, s: l.cum[i] };
        }
      }
      lane = best.lane;
      s = best.s;
    }
    // cari kedudukan bebas di sepanjang lorong
    for (let k = 0; k < 20; k++) {
      const pt = this.net.lanePointAt(lane, Math.min(lane.length - 1, s));
      const clear = this.traffic.npcs.every((n) => Math.hypot(n.x - pt.x, n.z - pt.z) > 9);
      if (clear) {
        p.reset(pt.x, pt.z, yawFromDir(pt.dx, pt.dz));
        p.signal = 0;
        this.statusMsg = 'Kereta dikembalikan ke lorong.';
        this.statusTimer = 2;
        return;
      }
      s = Math.max(0, s - 8);
    }
  }

  // ---------- gelung utama ----------
  _menuTraffic() {
    const dummy = { x: 90, z: 90, yaw: 0, speed: 0, length: 4.3, width: 1.8, laneInfo: null };
    this.menuDummy = dummy;
    this.traffic.configure({ count: 14, kinds: ['city', 'residential'] });
    this.world.lights.reset();
    this.traffic.reset(dummy);
  }

  _frame() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this._last) / 1000);
    this._last = now;
    this.time += dt;

    if (this.state === STATE.PLAYING) this._simulate(dt);
    else this.audio.update(0, 0, 0, false);
    if (MENU_STATES.has(this.state)) {
      this.traffic.update(dt, this.menuDummy, this.world.pedestrians);
      this.world.pedestrians.update(dt, this.traffic.npcs);
      const a = this.time * 0.05;
      this.menuCamera.position.set(60 + Math.cos(a) * 170, 70, 180 + Math.sin(a) * 170);
      this.menuCamera.lookAt(30, 0, 150);
      this.world.followSun(60, 180);
    }
    if (this.state === STATE.DIALOG || this.state === STATE.PLAYING) {
      this.dialog.update(this.state === STATE.DIALOG ? 0 : dt, this.camera, this.width, this.height);
    }
    this._render();
  }

  _simulate(dt) {
    const p = this.player;
    for (const evt of this.input.drain()) {
      if (evt === 'signalLeft') p.toggleSignal(-1);
      else if (evt === 'signalRight') p.toggleSignal(1);
      else if (evt === 'reset') this._resetCarToLane();
      else if (evt === 'pause') {
        this.pause();
        return;
      }
    }
    const inp = this.input.state;
    const loc = this.rules.edgeLoc;
    const slippery = !!(loc && loc.inTrim && this.net.isSlippery(loc.edge, loc.s));
    p.update(dt, inp, { sensitivity: this.settings.steeringSensitivity, slippery });
    p.laneInfo = this.net.locateLane(p.x, p.z, p.yaw, 4);

    // menoleh ke cermin
    let target = this.input.dragYaw;
    if (inp.lookLeft) target = 0.95;
    else if (inp.lookRight) target = -0.75;
    else if (!inp.dragging) this.input.dragYaw *= Math.max(0, 1 - dt * 3);
    this.headYaw += (target - this.headYaw) * Math.min(1, dt * 8);

    this.traffic.update(dt, p, this.world.pedestrians);
    this.world.pedestrians.update(dt, [p, ...this.traffic.npcs]);

    const recentLC = this.rules.time - this.rules.lastLaneChange.time < 3 || (this.rules.overtake && this.rules.time - this.rules.overtake.start < 4);
    const hit = this.collision.check(p, this.traffic, this.world.pedestrians, recentLC);
    if (hit) {
      if (hit.type === 'bump') {
        p.revert();
        this.statusMsg = 'Kereta tersangkut — undur (tahan S) atau tekan R.';
        this.statusTimer = 2.5;
      } else {
        this._syncCar();
        this.gameOver(hit.reason);
        return;
      }
    }

    this.rules.update(dt, p, this.headYaw);
    this.mission.update(dt, p);
    if (this.state !== STATE.PLAYING) return;
    this._checkSigns();
    this.warnings.update(dt);

    // signal berkelip + bunyi
    this.blinkT += dt;
    const blinkOn = p.signal !== 0 && Math.floor(this.blinkT * 2.8) % 2 === 0;
    if (p.signal !== 0 && blinkOn !== this.lastBlink) this.audio.tick(blinkOn);
    this.lastBlink = blinkOn;
    this.audio.update(p.speed, p.throttle, p.brake + (inp.emergency ? 1 : 0), true);

    this.statusTimer -= dt;
    const status = this.statusTimer > 0 ? this.statusMsg : slippery ? 'Jalan licin — brek kurang berkesan (simulasi).' : '';
    this._syncCar();
    this.carModel.drawCluster(p.kmh, this.rules.currentLimit, p.signal, blinkOn, p.reverse);
    this.hud.update(p, { limit: this.rules.currentLimit, blinkOn, checkpoint: this.mission.currentCheckpoint, status });
  }

  _syncCar() {
    const p = this.player;
    const g = this.carModel.group;
    g.position.set(p.x, 0, p.z);
    g.rotation.y = p.yaw;
    this.headPivot.rotation.y = this.headYaw;
    this.headPivot.rotation.x = -0.06 + p.pitchFx;
    this.carModel.update(p.steerVisual);
    this.world.followSun(p.x, p.z);
  }

  _checkSigns() {
    if (!this.settings.autoDialogs || this.dialog.isOpen) return;
    const p = this.player;
    const fx = -Math.sin(p.yaw);
    const fz = -Math.cos(p.yaw);
    for (const s of this.world.signs.signs) {
      const dx = s.x - p.x;
      const dz = s.z - p.z;
      if (Math.abs(dx) > 70 || Math.abs(dz) > 70) continue;
      const along = dx * fx + dz * fz;
      if (along < 14 || along > 62) continue;
      const lat = Math.abs(dx * fz - dz * fx);
      if (lat > along * 0.6) continue;
      if (fx * s.tdx + fz * s.tdz < 0.75) continue; // papan menghadap pemain
      const key = `${s.type}|${s.value ?? ''}`;
      if (this.shownSigns.has(key)) continue;
      this.shownSigns.add(key);
      const info = signInfo(s.type, s.value);
      const pausing = this.settings.drivingMode === 'learning' && this.settings.pauseOnDialog;
      this.dialog.open(s, info, signImageURL(s.type, s.value), { pausing, autoClose: !pausing });
      this.lastSign = s;
      if (pausing) {
        this.state = STATE.DIALOG;
        this.input.releaseAll();
      }
      return;
    }
  }

  _onDialogClosed() {
    if (this.state === STATE.DIALOG) this.state = STATE.PLAYING;
  }

  _render() {
    const r = this.renderer;
    r.shadowMap.needsUpdate = r.shadowMap.enabled;
    if (MENU_STATES.has(this.state)) {
      this.world.scenery.updateVisibility(this.menuCamera.position.x, this.menuCamera.position.z, this.world.drawDistance);
      r.render(this.scene, this.menuCamera);
      return;
    }
    this.world.scenery.updateVisibility(this.player.x, this.player.z, this.world.drawDistance);
    this.carModel.group.updateMatrixWorld(true);
    this.mirrors.render(r, this.scene);
    r.render(this.scene, this.camera);
  }

  // ---------- untuk ujian automatik ----------
  // Jalankan simulasi beberapa langkah tanpa render (renderer headless sangat perlahan).
  debugStep(steps = 60, dt = 1 / 60, keys = {}) {
    const base = { throttle: false, brake: false, left: false, right: false, emergency: false, lookLeft: false, lookRight: false, dragging: false };
    Object.defineProperty(this.input, 'state', { configurable: true, get: () => ({ ...base, ...keys }) });
    try {
      for (let i = 0; i < steps && this.state === STATE.PLAYING; i++) this._simulate(dt);
    } finally {
      delete this.input.state; // kembali kepada getter asal (prototype)
    }
    return this.debugSnapshot();
  }

  debugSnapshot() {
    return {
      state: this.state,
      player: { x: this.player.x, z: this.player.z, yaw: this.player.yaw, kmh: this.player.kmh, signal: this.player.signal },
      npcs: this.traffic.npcs.length,
      npcStates: this.traffic.npcs.reduce((a, n) => ((a[n.state] = (a[n.state] || 0) + 1), a), {}),
      limit: this.rules.currentLimit,
      checkpoint: this.mission.cpIndex,
      warnings: this.warnings.log.map((w) => w.id),
      dialog: this.dialog.isOpen ? this.dialog.sign.type : null,
      kmhUnit: KMH
    };
  }
}
