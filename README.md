# Website Sairi Bangun Mandiri

Website company profile untuk **Sairi Bangun Mandiri** dengan fokus layanan:
- Membran Bakar
- Waterproofing Coating
- Injeksi Beton
- Grouting System
- Epoxy Lantai
- Coring Beton

## Teknologi
Website ini dibuat sebagai static website:
- HTML5
- CSS3
- JavaScript vanilla

Tidak membutuhkan database, Node.js, PHP, atau framework.

## Struktur
```text
sbm-website/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── logo-sbm.jpg
```

## Cara upload ke GitHub
1. Buat repository baru, misalnya `sbm-website`.
2. Upload seluruh isi folder ini.
3. Pastikan `index.html` berada di root repository.
4. Untuk GitHub Pages:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Simpan, lalu GitHub akan memberikan alamat website.

## Domain
Domain:
`www.jasaperbaikandakbocor.com`

Setelah GitHub Pages aktif, domain tersebut dapat diarahkan ke GitHub Pages melalui pengaturan DNS domain.

## WhatsApp
Nomor yang digunakan:
`085716499600`

Link WhatsApp sudah dipasang pada tombol dan form konsultasi.

## Mengganti foto
Foto demo saat ini menggunakan URL gambar eksternal untuk membuat tampilan langsung terlihat. Untuk website produksi, sebaiknya diganti dengan foto pekerjaan asli Sairi Bangun Mandiri.

Cari class berikut di `style.css`:
- `.hero`
- `.img-membrane`
- `.img-coating`
- `.img-injection`
- `.img-grouting`
- `.img-epoxy`
- `.img-coring`
- `.about-image`
- `.p1` sampai `.p6`
- `.contact-bg`

Kemudian ganti `background-image` dengan file foto milik sendiri, misalnya:
`url("assets/foto-injeksi-1.jpg")`

## Catatan SEO
Meta title, description, dan keywords dasar sudah disiapkan. Setelah domain aktif, tambahkan:
- Google Search Console
- Google Business Profile
- Sitemap
- robots.txt
- foto proyek asli dengan nama file/deskripsi yang relevan

## Penting
Angka statistik seperti "6 layanan" dan "20+ tahun pengalaman tim" mengikuti informasi yang diberikan untuk website ini. Hindari menambahkan angka proyek, jumlah klien, atau klaim lain yang belum dikonfirmasi.
