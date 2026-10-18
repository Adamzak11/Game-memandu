// Keadaan permainan, tetapan dan kemajuan (disimpan dalam localStorage).

export const STATE = {
  MENU: 'MENU',
  PROFILE: 'PROFILE',
  MISSION_SELECT: 'MISSION_SELECT',
  BRIEFING: 'BRIEFING',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  DIALOG: 'DIALOG',
  GAME_OVER: 'GAME_OVER',
  COMPLETE: 'COMPLETE'
};

const SETTINGS_KEY = 'mrh3d.settings.v1';
const PROGRESS_KEY = 'mrh3d.progress.v1';

export const DEFAULT_SETTINGS = {
  steeringSensitivity: 1.0,
  controlMode: 'auto', // auto | keyboard | touch
  graphics: 'medium', // low | medium | high
  mirrorQuality: 'medium',
  sound: true,
  volume: 0.7,
  drivingMode: 'learning', // learning | free
  pauseOnDialog: true,
  autoDialogs: true
};

function readJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function loadSettings() {
  const s = readJSON(SETTINGS_KEY);
  const out = { ...DEFAULT_SETTINGS };
  if (s && typeof s === 'object') {
    for (const k of Object.keys(DEFAULT_SETTINGS)) {
      if (typeof s[k] === typeof DEFAULT_SETTINGS[k]) out[k] = s[k];
    }
  }
  return out;
}

export function saveSettings(s) {
  return writeJSON(SETTINGS_KEY, s);
}

export function loadProgress() {
  const p = readJSON(PROGRESS_KEY);
  return p && typeof p === 'object' && p.missions ? p : { missions: {} };
}

export function recordMissionResult(missionId, result) {
  const p = loadProgress();
  const prev = p.missions[missionId] || { completed: false, bestStars: 0, bestTime: null, attempts: 0 };
  prev.attempts += 1;
  if (result.passed) {
    prev.completed = true;
    prev.bestStars = Math.max(prev.bestStars, result.stars);
    prev.bestTime = prev.bestTime === null ? result.time : Math.min(prev.bestTime, result.time);
  }
  p.missions[missionId] = prev;
  writeJSON(PROGRESS_KEY, p);
  return prev;
}
