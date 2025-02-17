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

## 🎯 Fitur Utama
🔹 Pendaftaran Anggota Konsulat: Mahasiswi dapat mendaftar sebagai anggota konsulat.
🔹 CRUD Data Konsulat: Admin dapat menambah, mengedit, dan menghapus data konsulat.
🔹 Manajemen Pengumuman: Setiap konsulat dapat mengunggah dan mengelola pengumuman.
🔹 Halaman Beranda: Berisi banner, dan pengumuman persyaratan pulang dll.
🔹 Halaman Join: Fitur join konsulat, daftar anggota.
🔹 Halaman Our Team: Berisi para pengembang website .
🔹 Keamanan Data: Data pengguna dienkripsi untuk memastikan keamanan.
🔹 Autentikasi: Login menggunakan OAuth2 untuk keamanan tambahan.

## 🛠️ Teknologi yang Digunakan
1. HTML, CSS (Responsif) JavaScript (ES6+) → FrontEnd
2. Node.js + Express.js → Backend API
3. MongoDB + Mongoose → Database
4. JWT (JSON Web Token) → Autentikasi
5. Dotenv → Konfigurasi variabel lingkungan
6. Nodemon (Opsional) → Auto-restart server 6. saat ada perubahan kode

## 🚀 Instalasi & Penggunaan
### 1️⃣ Clone Repository
```sh
 git clone https://github.com/username/repository.git
 cd repository
```
### 2️⃣ Instalasi Depedensi
``` sh
npm install
```
### 3️⃣ Konfigurasi Lingkungan
Buat file .env dan tambahkan konfigurasi berikut 
```sh
 MONGO_URI=your_mongodb_connection_string
 OAUTH_CLIENT_ID=your_oauth_client_id
 OAUTH_CLIENT_SECRET=your_oauth_client_secret
 SESSION_SECRET=your_secret_key
```
### 4️⃣ Menjalankan Sever
```sh
npm start
```
atau
```sh
node server.js
```
## 📌 API Endpoints
 - GET = ```sh /api/konsulat ``` - Mendapatkan daftar konsulat
 - POST = ```sh /api/konsulat ``` - Menambah konsulat baru
 - PUT = ```sh /api/konsulat/:id ``` - Memperbarui informasi konsulat
 - DELETE = ```sh /api/konsulat/:id ``` - Menghapus konsulat
 - POST = ```sh /api/auth/login ``` - Login menggunakan OAuth2

## 📌 Fitur Utama
- ✅ CRUD anggota konsulat (Tambah, Edit, Hapus, Lihat)
- ✅ Manajemen data perpulangan mahasiswi
- ✅ API berbasis Express.js
- ✅ Koneksi database MongoDB dengan Mongoose
- ✅ Autentikasi JWT untuk keamanan data


