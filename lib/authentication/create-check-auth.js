const createCheckAuth = (User, isProduction) => {
    return (req, res, next) => {
        if (!isProduction) {
            req.user = User.forge({ id: 1 });
        }

        if (!req.user) {
            res.json({ title: "You must be logged in to see this page" });
        }

        next();
    };
};

module.exports = createCheckAuth;