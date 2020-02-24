const bcrypt = require('bcrypt');
const router = require('express').Router();

const Users = require('../users/users-model');

router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
})

router.post('/login', (req, res) => {
    const {
        username,
        password
    } = req.body;

    Users.findBy({
            username
        })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({
                    message: `Welcome ${user.username}!`
                });
            } else {
                res.status(401).json({
                    message: 'You shall not pass!'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
})


module.exports = router;