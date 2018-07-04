var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var db = require('../models');
var settings = require('../config/settings'); 

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        db.User.findOne({
            where: {
                id: jwt_payload.id
            }
        }).then(function (user) {
            if (!user) {
                console.log("passport.js error. no user");
                return done(null, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};