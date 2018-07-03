var db = require('../models');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

//Post to login
router.post('/register', function (req, res) {
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

router.post('/login', function (req, res) {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(function (err, user) {
        if (err) throw err;

        if (!user) {
            return res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // check if password matches
            const doPasswordsMatch = user.comparePassword(req.body.password, user.password);
            if (!doPasswordsMatch) {
                return res.status(401).send({ success: false, msg: 'Authentication failed. Wrong Passwprd.' });
            }

        }
    });
});

module.exports = router;