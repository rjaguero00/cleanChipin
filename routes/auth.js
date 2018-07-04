var db = require('../models');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

// Compare passwords for match
var comparePassword = function (candidatePassword, password) {
    return bcrypt.compareSync(candidatePassword, password)
}


//Post to sign up
router.post('/register', function (req, res) {
    // console.log(req);
    if (!req.body.email || !req.body.password) {
        res.json({ success: false, msg: 'Please pass email, full name and password.' });
    } else {
        // Find user with the same login email
        db.User.findOne({
            where: {
                email: req.body.email
            }
            // If one exists, return email already exists
        }).then(function (user) {
            if (user) {
                return res.json({ success: false, msg: 'Email already exist.' });
            }

            // Else, Save/Create new the user
            db.User.create(req.body)
                .then(function (user) {
                    // If successful, return success
                    if (user) {
                        console.log("user created")
                        return res.json({ success: true, msg: 'Successful created new user.' });
                    }
                })
                // Else if err, return error
                .catch(function (err) {
                    console.log(err);
                    return res.json({ success: false, msg: 'Something went wrong' });
                })
        })
    }
});

// Post to sign in
router.post('/userlogin', function (req, res) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (user, ) {
        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            const doPasswordsMatch = user.comparePassword(req.body.password, user.password);
            if (!doPasswordsMatch) {

                res.status(401).send({ success: false, msg: 'Authentication failed. Wrong Passwprd.' });
            } else {
                var token = jwt.sign(user.toJSON(), settings.secret);
                return res.json({ success: true, token: "jwt " + token });
            }

        }
    })
        // Else if err, return error
        .catch(function (err) {
            console.log(err);
            return res.json({ success: false, msg: 'Something went wrong' });
        })
});

// Get Active / Logged-in user with jwt
// router.post('/logincheck', passport.authenticate('jwt', { session: false }), function (req, res) {
//     console.log("arrived at jwt route");
//     var token = getToken(req.headers);
//     if (token) {
//         console.log(req.user)
//         res.status(200).send({
//             success: true,
//             user: {
//                 id: req.user.dataValues.id,
//             }
//         })
//     }
//     else {
//         return res.status(403).send({ success: false, msg: 'Unauthorized.' });
//     }

// });

module.exports = router;