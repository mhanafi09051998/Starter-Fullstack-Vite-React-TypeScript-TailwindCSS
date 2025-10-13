Perbedaan Kunci: npm run dev vs npm run build
Penting untuk memahami perbedaan antara dua perintah ini.

npm run dev:
Tujuan: Untuk pengembangan (development).
Proses: Menjalankan server lokal yang cepat dengan HMR.
Output: Tidak ada file yang dihasilkan, semua berjalan di memori untuk kecepatan maksimal.

npm run build:
Tujuan: Untuk produksi (production).
Proses: Mengompilasi dan mengoptimalkan semua kode Anda (HTML, CSS, JS) menjadi file statis yang ringkas dan siap untuk diunggah ke hosting.
Output: Menghasilkan folder dist yang berisi versi final dari situs web Anda. 🚀
Jadi, singkatnya: gunakan npm run dev selama Anda menulis kode, dan gunakan npm run build hanya sekali di akhir ketika Anda sudah siap untuk mempublikasikan situs web Anda.
