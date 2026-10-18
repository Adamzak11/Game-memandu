import * as THREE from 'three';

// Karakter pemandu Stylized 3D (dibina daripada geometri asas).
// Setiap karakter mempunyai 3 variasi warna pakaian.

export const CHARACTERS = [
  {
    id: 'aiman',
    name: 'Aiman',
    desc: 'Rambut pendek, baju polo',
    skin: 0xc68a5e,
    hair: 'short',
    hairColor: 0x1b1410,
    pants: 0x2b3445,
    outfits: [
      { name: 'Biru', color: 0x2f6fd6 },
      { name: 'Hijau', color: 0x1f9d6b },
      { name: 'Merah', color: 0xd64545 }
    ]
  },
  {
    id: 'siti',
    name: 'Siti',
    desc: 'Bertudung, baju kurung',
    skin: 0xe0ac7e,
    hair: 'tudung',
    hairColor: 0x1b1410,
    pants: 0x4a3f6b,
    outfits: [
      { name: 'Merah jambu', color: 0xe85d9c, accent: 0xf7c6dc },
      { name: 'Ungu', color: 0x7b5cd6, accent: 0xd5c8f5 },
      { name: 'Jingga', color: 0xf2a33a, accent: 0xfbe0b5 }
    ]
  },
  {
    id: 'meiling',
    name: 'Mei Ling',
    desc: 'Rambut ekor kuda, jaket',
    skin: 0xf1c9a5,
    hair: 'ponytail',
    hairColor: 0x231914,
    pants: 0x30343c,
    outfits: [
      { name: 'Teal', color: 0x22a39f },
      { name: 'Koral', color: 0xf06543 },
      { name: 'Biru', color: 0x4a6cf7 }
    ]
  },
  {
    id: 'ravi',
    name: 'Ravi',
    desc: 'Rambut kerinting, bermisai',
    skin: 0x8d5a3b,
    hair: 'curly',
    hairColor: 0x120d0a,
    pants: 0x3b3b3b,
    outfits: [
      { name: 'Kuning', color: 0xf39c12 },
      { name: 'Biru tua', color: 0x2c3e50 },
      { name: 'Hijau', color: 0x16a085 }
    ]
  },
  {
    id: 'daniel',
    name: 'Daniel',
    desc: 'Topi & cermin mata',
    skin: 0xd9a77c,
    hair: 'cap',
    hairColor: 0x3a2618,
    pants: 0x1f2a44,
    outfits: [
      { name: 'Kelabu', color: 0x7f8c8d, accent: 0xe74c3c },
      { name: 'Merah', color: 0xc0392b, accent: 0x2c3e50 },
      { name: 'Biru', color: 0x2980b9, accent: 0xf1c40f }
    ]
  }
];

export function getCharacter(id) {
  return CHARACTERS.find((c) => c.id === id) || null;
}

const L = (color) => new THREE.MeshLambertMaterial({ color });

export function buildCharacter(def, outfitIndex = 0) {
  const outfit = def.outfits[outfitIndex] || def.outfits[0];
  const g = new THREE.Group();
  const skin = L(def.skin);
  const cloth = L(outfit.color);
  const pants = L(def.pants);
  const hair = L(def.hairColor);
  const dark = L(0x111111);

  const cap = (r, h) => new THREE.CapsuleGeometry(r, h, 6, 12);
  // kaki
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(cap(0.11, 0.55), def.hair === 'tudung' ? cloth : pants);
    leg.position.set(s * 0.13, 0.42, 0);
    g.add(leg);
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.26), dark);
    shoe.position.set(s * 0.13, 0.04, 0.04);
    g.add(shoe);
  }
  // badan
  const torso = new THREE.Mesh(cap(0.26, 0.42), cloth);
  torso.position.y = 1.08;
  torso.scale.set(1, 1, 0.75);
  g.add(torso);
  if (def.hair === 'tudung') {
    // baju kurung labuh
    const skirt = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.36, 0.55, 16), cloth);
    skirt.position.y = 0.62;
    g.add(skirt);
  }
  // lengan
  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(cap(0.08, 0.45), cloth);
    arm.position.set(s * 0.36, 1.05, 0);
    arm.rotation.z = s * 0.12;
    g.add(arm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), skin);
    hand.position.set(s * 0.4, 0.76, 0);
    g.add(hand);
  }
  // kepala
  const head = new THREE.Group();
  head.position.y = 1.62;
  g.add(head);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.25, 20, 16), skin);
  head.add(face);
  for (const s of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.032, 8, 6), dark);
    eye.position.set(s * 0.085, 0.03, 0.225);
    head.add(eye);
    const cheek = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), L(0xf28b82));
    cheek.position.set(s * 0.14, -0.05, 0.2);
    cheek.scale.z = 0.4;
    head.add(cheek);
  }
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.012, 6, 12, Math.PI), dark);
  smile.position.set(0, -0.07, 0.235);
  smile.rotation.z = Math.PI;
  head.add(smile);

  if (def.hair === 'short') {
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.265, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), hair);
    h.position.y = 0.03;
    h.rotation.x = -0.25;
    head.add(h);
  } else if (def.hair === 'tudung') {
    const tud = L(outfit.accent ?? 0xffffff);
    const wrap = new THREE.Mesh(new THREE.SphereGeometry(0.29, 20, 16), tud);
    wrap.position.set(0, 0.02, -0.05);
    head.add(wrap);
    face.position.z = 0.03;
    face.scale.set(0.92, 0.95, 0.95);
    const drape = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.5, 20, 1, true), tud);
    drape.position.y = -0.3;
    head.add(drape);
  } else if (def.hair === 'ponytail') {
    const h = new THREE.Mesh(new THREE.SphereGeometry(0.27, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hair);
    h.position.y = 0.02;
    h.rotation.x = -0.3;
    head.add(h);
    const tail = new THREE.Mesh(cap(0.08, 0.3), hair);
    tail.position.set(0, -0.05, -0.3);
    tail.rotation.x = 0.5;
    head.add(tail);
  } else if (def.hair === 'curly') {
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), hair);
      b.position.set(Math.cos(a) * 0.18, 0.17 + Math.sin(i) * 0.03, Math.sin(a) * 0.18 - 0.04);
      head.add(b);
    }
    const top = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), hair);
    top.position.y = 0.16;
    head.add(top);
    const stache = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.035, 0.04), hair);
    stache.position.set(0, -0.03, 0.24);
    head.add(stache);
  } else if (def.hair === 'cap') {
    const capM = L(outfit.accent ?? 0xe74c3c);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.27, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), capM);
    dome.position.y = 0.05;
    head.add(dome);
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.03, 16, 1, false, -Math.PI / 2, Math.PI), capM);
    brim.position.set(0, 0.06, 0.18);
    head.add(brim);
    for (const s of [-1, 1]) {
      const lens = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.012, 6, 14), dark);
      lens.position.set(s * 0.085, 0.03, 0.235);
      head.add(lens);
    }
  }
  g.traverse((o) => {
    if (o.isMesh) o.castShadow = true;
  });
  return g;
}
