const express = require("express");
const router = express.Router();
const Anggota = require("../models/anggota");

// ✅ GET: Ambil semua anggota
router.get("/", async (req, res) => {
  try {
    const anggota = await Anggota.find();
    res.json(anggota);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // ✅ POST: Tambah anggota baru
// router.post("/", async (req, res) => {
//   const { nama, email, konsulat } = req.body;
//   try {
//     const anggotaBaru = new Anggota({ nama, email, konsulat });
//     await anggotaBaru.save();
//     res.json({ message: "Anggota berhasil ditambahkan!" });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

 // ✅ POST: Tambah anggota barulangsung dengan nama konsulat
 router.post("/", async (req, res) => {
  const { nama, email, konsulat } = req.body;

  try {
    const anggotaBaru = new Anggota({
      nama,
      email,
      konsulat, // 🔹 Simpan nama konsulat langsung
    });

    await anggotaBaru.save();
    res.json({ message: "Anggota berhasil ditambahkan!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

// ✅ DELETE: Hapus anggota berdasarkan id
router.delete("/:id", async (req, res) => {
  console.log("🔹 Request DELETE diterima untuk ID:", req.params.id);
  try {
      const anggota = await Anggota.findByIdAndDelete(req.params.id);
      if (!anggota) {
          return res.status(404).json({ message: "Anggota tidak ditemukan!" });
      }
      res.json({ message: "Anggota berhasil dihapus!" });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


module.exports = router;
