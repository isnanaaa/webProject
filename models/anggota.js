const mongoose = require("mongoose");

const AnggotaSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  konsulat: {
    type: String,
    required: true,
  },
  tanggalDaftar: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Anggota", AnggotaSchema);
