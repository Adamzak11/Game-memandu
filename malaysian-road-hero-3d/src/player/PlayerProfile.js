// Profil pemain: nama panggilan + karakter. Disimpan dalam localStorage.
// Tiada maklumat peribadi sensitif diminta (tiada IC, alamat, dll.).

const KEY = 'mrh3d.profile.v1';

export const NAME_MIN = 3;
export const NAME_MAX = 20;

// Buang ruang kosong berlebihan dan aksara kawalan.
export function normalizeName(raw) {
  return String(raw ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function validateName(raw) {
  const name = normalizeName(raw);
  if (!name) return { ok: false, name, error: 'Nama tidak boleh kosong.' };
  if (name.length < NAME_MIN) return { ok: false, name, error: `Nama mesti sekurang-kurangnya ${NAME_MIN} aksara.` };
  if (name.length > NAME_MAX) return { ok: false, name, error: `Nama tidak boleh melebihi ${NAME_MAX} aksara.` };
  return { ok: true, name, error: null };
}

export function loadProfile(storage = globalThis.localStorage) {
  try {
    const raw = storage?.getItem(KEY);
    if (!raw) return null;
    const p = JSON.parse(raw);
    const v = validateName(p?.name);
    if (!v.ok || typeof p.characterId !== 'string') return null;
    return { name: v.name, characterId: p.characterId, outfit: Number.isInteger(p.outfit) ? p.outfit : 0, createdAt: p.createdAt || null };
  } catch {
    return null;
  }
}

export function saveProfile(profile, storage = globalThis.localStorage) {
  const v = validateName(profile.name);
  if (!v.ok) throw new Error(v.error);
  if (!profile.characterId) throw new Error('Karakter belum dipilih.');
  const data = { name: v.name, characterId: profile.characterId, outfit: profile.outfit || 0, createdAt: profile.createdAt || new Date().toISOString() };
  storage?.setItem(KEY, JSON.stringify(data));
  return data;
}
