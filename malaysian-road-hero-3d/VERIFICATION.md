# Status Pengesahan Maklumat Peraturan — MALAYSIAN ROAD HERO 3D

DEVELOPER: ADAM ZAKWAN

Dokumen ini merekod status setiap fakta peraturan jalan raya yang dipaparkan dalam game.
Game ini ialah projek pendidikan bebas dan **bukan aplikasi rasmi JPJ**.

## 1. Apa yang berlaku semasa pembangunan

| Sumber rasmi | Percubaan | Keputusan |
|---|---|---|
| https://www.jpj.gov.my/ | WebFetch & curl dari persekitaran pembangunan | **Gagal** — DNS tidak dapat diselesaikan / proksi menolak (403) |
| https://www.jpj.gov.my/pusat-media-3/soalan-lazim/soalan-lazim-keselamatan-jalan-raya/ | WebFetch | **Gagal** (sama seperti di atas) |
| https://www.jpj.gov.my/wp-content/uploads/2025/04/Akta-333_15-Okt-2023.pdf | curl | **Gagal** (403 dari proksi) |

Oleh sebab dokumen rasmi **tidak dapat dibaca**, tiada satu pun fakta undang-undang dalam game
ditanda sebagai "Disahkan". Status yang digunakan:

| Status (dalam kod) | Label dalam game | Maksud |
|---|---|---|
| `VERIFIED` | Disahkan dengan sumber rasmi | **Tidak digunakan** buat masa ini |
| `COMMON` | Maksud lazim — belum disemak semula dengan dokumen rasmi JPJ | Maksud umum papan tanda standard |
| `PENDING` | Perlu pengesahan | Rujukan undang-undang yang belum disemak |
| `NA` | Peraturan simulasi (bukan undang-undang) | Peraturan yang ditetapkan oleh game |

Setiap mesej juga dilabel mengikut kategori: **Undang-undang / larangan rasmi**, **Arahan papan tanda**,
**Nasihat keselamatan**, atau **Peraturan simulasi**.

## 2. Perkara yang TIDAK dipaparkan (sengaja)

- Jumlah denda (RM)
- Mata demerit / sistem KEJARA
- Larangan memandu / penggantungan lesen
- Nombor seksyen Akta 333 atau nombor kaedah Kaedah-Kaedah Lalu Lintas Jalan 1959

Ujian automatik `tests/core.test.js` menyemak bahawa data game tidak mengandungi jumlah RM,
nombor seksyen atau nombor kaedah, dan tiada rekod ditanda `VERIFIED`.

## 3. Sumber sekunder yang ditemui (untuk membantu penyemak manusia — BUKAN sumber rasmi)

| Topik | Sumber sekunder | Dakwaan | Status |
|---|---|---|---|
| Memotong di garisan berkembar | Kosmo (kosmo.com.my/?p=290935) | Laporan media merujuk satu kaedah khusus dalam Kaedah-Kaedah Lalu Lintas Jalan 1959 | **Perlu disahkan** terhadap teks rasmi; nombor kaedah tidak dipaparkan dalam game |
| Garisan berkembar — larangan lain | paultan.org (30 Jun 2022) | Melintas garisan berkembar untuk memotong, pusingan U dan tukar lorong dilarang | Perlu disahkan |
| Kekal di kiri, potong di kanan | Malay Mail (1 Sep 2026) memetik MIROS | Kenderaan perlahan perlu di sebelah kiri; memotong di sebelah kanan | Perlu disahkan |
| Memotong di sebelah kiri | Malay Mail (2015), blog sekolah memandu | Memotong di sebelah kiri tidak dibenarkan | Perlu disahkan |

## 4. Senarai semak untuk penyemak (tindakan diperlukan)

Untuk setiap rekod di `src/data/roadSignData.js` dan `src/data/roadRuleData.js`:

1. Dapatkan teks rasmi terkini Akta 333 (termasuk pindaan) dan Kaedah-Kaedah Lalu Lintas Jalan 1959
   daripada JPJ / Jabatan Peguam Negara. Pastikan versi yang digunakan ialah versi berkuat kuasa.
2. Sahkan maksud setiap papan tanda yang digunakan (BERHENTI, BERI LALUAN, HAD LAJU, DILARANG MASUK,
   DILARANG MEMOTONG, AMARAN SELEKOH, KAWASAN SEKOLAH, LINTASAN PEJALAN KAKI, JALAN LICIN) terhadap
   bahan rasmi JPJ / JKR. Reka bentuk papan dalam game ialah ilustrasi simulasi.
3. Jika disahkan, kemas kini `meaningStatus` / `legalRef.status` kepada `VERIFIED` dan tambah
   rujukan tepat (dokumen, versi, tarikh semakan).
4. Jangan tambah denda atau mata demerit kecuali disahkan daripada sumber rasmi berkuat kuasa.

## 5. Peraturan simulasi (bukan undang-undang)

| Peraturan | Nilai dalam game | Asas |
|---|---|---|
| Had laju kawasan | Perumahan 30, bandar 50 (jalan sehala 40), sekolah 30, kampung 70, lebuh raya 110 km/j | Ditetapkan oleh simulasi; dipaparkan pada papan tanda dalam dunia game |
| Amaran melebihi had laju | > had + 3 km/j selama 1.5 s | Toleransi simulasi |
| Berhenti penuh di BERHENTI | ≤ 2 km/j dalam 14 m sebelum garisan | Ambang simulasi |
| Jarak terlalu dekat | < 1.0 s jarak masa selama 2 s pada > 30 km/j | Berdasarkan nasihat "peraturan 2 saat"; ambang simulasi |
| Semak cermin sebelum tukar lorong | Toleh ke cermin sisi (Z/C) dalam 6 s sebelum menukar lorong | Peraturan simulasi berdasarkan nasihat keselamatan |
| Signal sebelum membelok / tukar lorong | Signal aktif dalam 4–6 s sebelum tindakan | Nasihat keselamatan; peruntukan undang-undang perlu pengesahan |
| Trafik bertentangan terlalu hampir | Masa-ke-perlanggaran < 3.5 s ketika di lorong bertentangan | Ambang simulasi |
| Jalan licin | Brek kurang berkesan dalam zon | Kesan simulasi |
| Perlanggaran | Sebarang sentuhan dengan kenderaan/pejalan kaki = GAME OVER; objek statik ≥ 5 km/j = GAME OVER | Peraturan simulasi |
