const passport = require('passport');
const createStrategy = require('./create-strategy.js');

const createPassport = (User) => {
    const strategy = createStrategy((accessToken, refreshToken, profile, cb) => {
        User.forge({ google_id: profile.id }).save().then((user) => {
            return cb(err, user);
        });
    });

    passport.use(strategy);

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findOne({ _id: id }, function (err, user) {
            done(err, user);
        });
    });

    return passport;
};

module.exports = createPassport;