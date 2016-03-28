const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '';
const GOOGLE_CLIENT_SECRET = '';

const strategyOptions = {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
};

const createStrategy = (strategyCallback) => {
    new GoogleStrategy(strategyOptions, strategyCallback);
};

module.exports = createStrategy;
