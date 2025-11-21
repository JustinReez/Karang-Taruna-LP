# Landing Page Karang Taruna — Next.js

Struktur ini menetapkan fondasi teknis proyek tanpa narasi pemasaran.

## Tujuan

Menampilkan profil, kegiatan, dokumentasi, dan kontak Karang Taruna dalam format statis-dinamis dengan rendering cepat dan struktur komponen terukur.

## Teknologi

* Next.js
* React Server Components
* Tailwind CSS 
* Image Optimization Next.js
* API Routes untuk formulir kontak jika dibutuhkan

## Fitur

* Halaman beranda dengan hero section, ringkasan organisasi, dan highlight kegiatan.
* Halaman profil berisi visi, misi, struktur organisasi.
* Halaman kegiatan dengan daftar aktivitas dan detail setiap acara.
* Galeri foto dengan optimasi gambar.
* Kontak dengan api whatsapp.
* Routing menggunakan App Router.
* Metadata bawaan Next.js untuk SEO dasar.

## Instruksi Pengembangan

1. Instal dependensi.

   ```
   npm install
   ```
2. Jalankan server pengembangan.

   ```
   npm run dev
   ```
3. Build untuk produksi.

   ```
   npm run build
   ```
4. Jalankan hasil build.

   ```
   npm start
   ```

## Penyesuaian

* Edit metadata di `app/layout.jsx`.
* Edit komponen visual di direktori `components`.
* Tambah atau ubah konten di setiap halaman sesuai kebutuhan organisasi.
