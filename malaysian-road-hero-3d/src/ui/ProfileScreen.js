import { h } from './dom.js';
import { CHARACTERS, getCharacter } from '../player/characters.js';
import { CharacterSelector } from '../player/CharacterSelector.js';
import { validateName, NAME_MAX, NAME_MIN } from '../player/PlayerProfile.js';

// Skrin CREATE YOUR DRIVER: nama (wajib) + karakter (wajib) + CONFIRM DRIVER.

export class ProfileScreen {
  constructor({ existing, thumbs, onConfirm, onCancel }) {
    this.existing = existing;
    this.thumbs = thumbs;
    this.onConfirm = onConfirm;
    this.onCancel = onCancel;
    this.characterId = existing?.characterId || null;
    this.outfit = existing?.outfit || 0;
    this.selector = null;
  }

  render() {
    const nameInput = h('input', {
      type: 'text',
      id: 'driver-name',
      maxlength: String(NAME_MAX + 10),
      placeholder: `Nama panggilan (${NAME_MIN}–${NAME_MAX} aksara)`,
      autocomplete: 'off',
      value: this.existing?.name || ''
    });
    const nameErr = h('div', { class: 'field-error', id: 'name-error', role: 'alert' });
    const charErr = h('div', { class: 'field-error', id: 'char-error', role: 'alert' });
    const previewCanvas = h('canvas', { class: 'char-preview', id: 'char-preview' });
    const previewName = h('div', { class: 'preview-name' }, this.characterId ? getCharacter(this.characterId).name : 'Pilih karakter');
    const outfitRow = h('div', { class: 'outfit-row', id: 'outfit-row' });
    const cards = h('div', { class: 'char-grid', id: 'char-grid' });

    const refreshCards = () => {
      cards.querySelectorAll('.char-card').forEach((c) => c.classList.toggle('selected', c.dataset.id === this.characterId));
      outfitRow.innerHTML = '';
      const def = getCharacter(this.characterId);
      previewName.textContent = def ? `${def.name} — ${def.desc}` : 'Pilih karakter';
      if (!def) return;
      def.outfits.forEach((o, i) => {
        const b = h(
          'button',
          {
            class: `outfit-swatch${i === this.outfit ? ' selected' : ''}`,
            style: { background: `#${o.color.toString(16).padStart(6, '0')}` },
            title: o.name,
            'aria-label': `Pakaian ${o.name}`,
            onclick: () => {
              this.outfit = i;
              this.selector?.show(def, i);
              refreshCards();
            }
          },
          ''
        );
        outfitRow.append(b);
      });
      this.selector?.show(def, this.outfit);
    };

    for (const c of CHARACTERS) {
      const card = h(
        'button',
        {
          class: 'char-card',
          'data-id': c.id,
          onclick: () => {
            if (this.characterId !== c.id) this.outfit = 0;
            this.characterId = c.id;
            charErr.textContent = '';
            refreshCards();
          }
        },
        h('img', { src: this.thumbs[`${c.id}:0`], alt: c.name }),
        h('div', { class: 'char-name' }, c.name)
      );
      cards.append(card);
    }

    const confirm = () => {
      const v = validateName(nameInput.value);
      let ok = true;
      if (!v.ok) {
        nameErr.textContent = v.error;
        ok = false;
      } else {
        nameErr.textContent = '';
        nameInput.value = v.name;
      }
      if (!this.characterId) {
        charErr.textContent = 'Sila pilih satu karakter.';
        ok = false;
      }
      if (!ok) return;
      this.onConfirm({ name: v.name, characterId: this.characterId, outfit: this.outfit, createdAt: this.existing?.createdAt });
    };
    nameInput.addEventListener('input', () => {
      const v = validateName(nameInput.value);
      nameErr.textContent = nameInput.value && !v.ok ? v.error : '';
    });
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') confirm();
    });

    this.el = h(
      'div',
      { class: 'screen panel-screen', id: 'profile-screen' },
      h(
        'div',
        { class: 'panel wide' },
        h('h2', {}, 'CREATE YOUR DRIVER'),
        h('p', { class: 'muted' }, 'Isi nama panggilan dan pilih seorang karakter sebelum mula memandu. Jangan masukkan maklumat peribadi seperti nombor kad pengenalan atau alamat.'),
        h(
          'div',
          { class: 'profile-layout' },
          h(
            'div',
            { class: 'profile-left' },
            h('label', { for: 'driver-name', class: 'field-label' }, '1. ENTER NAME'),
            nameInput,
            nameErr,
            h('div', { class: 'field-label' }, '2. SELECT CHARACTER'),
            cards,
            charErr
          ),
          h('div', { class: 'profile-right' }, previewCanvas, previewName, h('div', { class: 'field-label small' }, 'Warna pakaian'), outfitRow)
        ),
        h(
          'div',
          { class: 'row-buttons' },
          this.existing ? h('button', { class: 'btn ghost', onclick: () => this.onCancel() }, 'BATAL') : null,
          h('button', { class: 'btn primary big', id: 'btn-confirm-driver', onclick: confirm }, 'CONFIRM DRIVER')
        )
      )
    );
    this._mountPreview = () => {
      try {
        this.selector = new CharacterSelector(previewCanvas);
        this.selector.start();
      } catch {
        this.selector = null;
      }
      refreshCards();
    };
    return this.el;
  }

  mounted() {
    this._mountPreview?.();
  }

  dispose() {
    this.selector?.dispose();
    this.selector = null;
  }
}
