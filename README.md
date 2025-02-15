# BACKEND-PERPULANGAN
📌 Deskripsi Proyek
Sistem backend untuk mengelola perpulangan mahasiswi asrama berdasarkan konsulat. Proyek ini mencakup fitur CRUD anggota konsulat, autentikasi, dan manajemen data perpulangan.

## Struktur Folder
```sh
BACKEND-PERPULANGAN/
│── assets/            # File gambar dan aset frontend
│── models/            # Model database (MongoDB)
│── routes/            # Routing API
│── node_modules/      # Dependensi Node.js (otomatis dari npm install)
│── .env               # Variabel lingkungan (konfigurasi database, secret key, dll.)
│── db.js              # Koneksi database MongoDB
│── package.json       # Informasi proyek dan dependensi
│── server.js          # File utama backend (Express.js)
│── README.md          # Dokumentasi proyek
```
## 🚀 Instalasi & Menjalankan Proyek
### 1️⃣ Install Dependensi
npm install
### 2️⃣ Konfigurasi Environment
Buat file .env di root folder, lalu tambahkan konfigurasi berikut:
``` sh
MONGO_URI=your-mongodb-connection-string
PORT=5000
```
### 3️⃣ Jalankan Server
```sh
node server.js  # Menjalankan server secara normal
npm run dev     # Jika menggunakan Nodemon untuk auto-restart
```

## 🛠️ Teknologi yang Digunakan

1. Node.js + Express.js → Backend API
2. MongoDB + Mongoose → Database
3. JWT (JSON Web Token) → Autentikasi
4. Dotenv → Konfigurasi variabel lingkungan
5. Nodemon (Opsional) → Auto-restart server 6. saat ada perubahan kode

## 📌 Fitur Utama
✅ CRUD anggota konsulat (Tambah, Edit, Hapus, Lihat)
✅ Manajemen data perpulangan mahasiswi
✅ API berbasis Express.js
✅ Koneksi database MongoDB dengan Mongoose
✅ Autentikasi JWT untuk keamanan data


