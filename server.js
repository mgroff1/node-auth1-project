const express = require('express');

const apiRouter = require('./api/api-router');
const configMiddleware = require('./configmidware');

const server = express();

configMiddleware(server);

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('Server is running')
})

module.exports = server;