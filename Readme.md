# 🚀 Panduan Lengkap Proyek Gaharjus

Selamat datang! Dokumen ini adalah panduan lengkap untuk memulai, mengembangkan, dan memahami alur kerja proyek Gaharjus. Panduan ini mencakup penjelasan perintah kunci serta langkah-langkah instalasi dari awal.

---

## 💡 Memahami Perintah Kunci: `dev` vs `build`

Dalam pengembangan web modern, dua perintah yang akan sering Anda temui adalah `npm run dev` dan `npm run build`. Memahami kapan dan mengapa menggunakan masing-masing perintah sangatlah penting untuk alur kerja yang efisien.

### 🆚 Perbandingan Head-to-Head

| Fitur                 | `npm run dev`                                         | `npm run build`                                             |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| 🎯 **Tujuan Utama** | **Pengembangan (Development)** | **Produksi (Production)** |
| ⚙️ **Proses** | Menjalankan server lokal dengan Hot Module Replacement (HMR) | Mengompilasi & mengoptimalkan semua aset (JS, CSS, gambar) |
| 📁 **Output** | Berjalan di memori untuk kecepatan maksimal (tidak ada file output) | Menghasilkan folder `dist/` berisi file statis final      |
| ⚡ **Kecepatan** | Sangat Cepat, perubahan tampil instan                 | Lebih lambat, karena melakukan optimasi menyeluruh        |
| 👨‍💻 **Kapan Digunakan** | Saat menulis kode, mendesain, dan menguji coba fitur     | Saat aplikasi sudah siap untuk di-deploy ke server hosting |

### 🤔 Jadi, Kapan Saya Harus Menggunakannya?

#### 💻 Gunakan `npm run dev`...
...setiap saat Anda sedang dalam proses pengembangan. Perintah ini adalah teman terbaik Anda saat:
- Menulis kode baru.
- Memperbaiki bug.
- Mendesain tampilan UI.
- Menguji coba fungsionalitas secara langsung di browser.

#### 🌐 Gunakan `npm run build`...
...hanya ketika semua proses pengembangan telah selesai dan Anda siap untuk "Go Live!". Perintah ini Anda jalankan sebagai langkah terakhir sebelum:
- Mengunggah file website Anda ke layanan hosting.
- Memberikan hasil akhir proyek kepada klien.

> **Kesimpulan Sederhana:** Gunakan `npm run dev` selama Anda **mengerjakan** aplikasi, dan jalankan `npm run build` hanya sekali saat Anda siap untuk **mempublikasikan** aplikasi Anda.

---
