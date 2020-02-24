const bcrypt = require('bcrypt');

const Users = require('../users/users-model');

module.exports = (req, res, next) => {
    const {
        username,
        password
    } = req.headers;

    if (username && password) {
        Users.findBy({
                username
            })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    next();
                } else {
                    res.status(401).json({
                        message: 'Invalid credentials, roll over 3 times!'
                    });
                }
            })
            .catch(({
                name,
                message,
                stack
            }) => {
                res.status(500).json({
                    name,
                    message,
                    stack
                });
            });
    } else {
        res.status(400).json({
            message: 'Please put your hands up and provide credentials '
        });
    }
}