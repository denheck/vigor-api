const express = require('express');
const createPassport = require('./authentication/create-passport.js');
const createCheckAuth = require('./authentication/create-check-auth.js');

const startApi = (port, Models, isProduction, onListen) => {
    const app = express();
    const User = Models.User;
    const checkAuth = createCheckAuth(User, isProduction);

    if (isProduction) {
        const passport = createPassport(User);

        app.use(passport.initialize());
        app.use(passport.session());

        app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

        app.get('/auth/success', (req, res) => {
            const user = req.user;

            res.json({ title: "You succesfully logged in with email: " + user.get('email') });
        });

        app.get('/auth/failure', (req, res) => {
            res.json({ title: "You failed to login" });
        });

        app.get(
            '/auth/google/callback',
            passport.authenticate('google', {
                failureRedirect: '/auth/failure',
                successRedirect: '/auth/success'
            })
        );
    }

    app.get('/', (req, res) => {
        res.json({ title: "Welcome to the Vigor API, please login" });
    });

    app.get('/user', checkAuth, (req, res) => {
        const user = req.user;

        user.fetch().then((fetchedUser) => {
            res.json({
                user: fetchedUser.toJSON()
            });
        });
    });

    app.listen(port, onListen);
};

module.exports = startApi;