const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", (req, res, next) => {
    // Encrypt password
    bcrypt = hash(req.body.passwor, 10)
        .then(hash => {
            // create new user and store in database
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: "User created!",
                        result: result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
});

module.exports = router;