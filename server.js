const path = require("path");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require('./models/User');
const GitHubStrategy = require("passport-github2").Strategy;
const cors = require("cors");
require("dotenv").config();
require("./db");
// require("./passport");

const app = express();
app.use(express.json());
app.use(cors());

// Koneksi MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Model Konsulat
const KonsulatSchema = new mongoose.Schema({
  nama: String,
  deskripsi: String,
});
const Konsulat = mongoose.model("Konsulat", KonsulatSchema);

// Endpoint GET semua konsulat
app.get("/api/konsulat", async (req, res) => {
  const konsulat = await Konsulat.find();
  res.json(konsulat);
});

// Endpoint POST untuk menambah konsulat
app.post("/api/konsulat", async (req, res) => {
  const konsulat = new Konsulat(req.body);
  await konsulat.save();
  res.json({ message: "Konsulat ditambahkan" });
});

//menghubungkan route
const anggotaroutes = require("./routes/anggotaroutes");
app.use("/api/anggota", anggotaroutes);

// Middleware session
app.use(session({
  secret: process.env.SESSION_SECRET,  // Bisa diganti dengan SESSION_SECRET dari .env
  resave: false,
  saveUninitialized: true
}));

// Middleware Passport
app.use(passport.initialize());
app.use(passport.session());

// Route Login GitHub
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

// Callback setelah login GitHub
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    res.send(`<h1>Welcome, ${req.user.username}!</h1>`);
  }
);

// Logout
app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/login.html');
  });
});

// // Create user
// app.post('/users', async (req, res) => {
//   try {
//     const user = new User(req.body);
//     await user.save();
//     res.status(201).send(user);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Get all users
// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).send(users);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //untuk mengecek apakah user sudah login
// app.get('/profile', (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json({ loggedIn: true, user: req.user });
//   } else {
//     res.json({ loggedIn: false });
//   }
// });


// // Melayani file statis dari folder "public"
// app.use(express.static(path.join(__dirname, "public")));


// Jalankan Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
