require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const BACKEND_URL = process.env.BACKEND_URL;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://userauthback-8kgy.onrender.com/google/callback",
      scope: ["profile", "email"],
      accessType: "offline",
    },
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ email: profile.emails[0].value });
      if (!user) {
        user = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: "google-auth",
          avatar: profile.photos?.[0]?.value,
        });
      }
      console.log(user, "<<< this is the user from google strategy");
      return done(null, user);
    }
  )
);

// const { google } = require("googleapis");

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET
// );

// oauth2Client.setCredentials({
//   access_token: accessToken,
//   refresh_token: refreshToken,
// });

// async function getNewAccessToken() {
//   const { credentials } = await oauth2Client.refreshAccessToken();
//   return credentials.access_token;
// }
