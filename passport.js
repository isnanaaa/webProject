// require('dotenv').config();
// const passport = require('passport');
// const GitHubStrategy = require('passport-github2').Strategy;

// passport.use(new GitHubStrategy({
//   clientID: process.env.GITHUB_CLIENT_ID,  // Ambil dari .env
//   clientSecret: process.env.GITHUB_CLIENT_SECRET,  // Ambil dari .env
//   callbackURL: "http://localhost:5000/auth/github/callback"
// },
// function(accessToken, refreshToken, profile, done) {
//   return done(null, profile);
// }));

// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });
