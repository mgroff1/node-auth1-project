const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');
const restricted = require('../auth/midware');

router.use('/auth', authRouter);
router.use('/users', restricted, usersRouter);

router.get('/', (req, res) => {
    res.send('API is running');
})

module.exports = router;