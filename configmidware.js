const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const knexStore = require('connect-session-knex')(session);

const knex = require('./data/db-config');

const sessionConfig = {
    name: 'maybe',
    secret: 'STFU',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
    },
    store: new knexStore({
        knex,
        tablename: 'knexsession',
        createTable: true,
        sidfieldname: 'sid',
        clearInterval: 2 * 24 * 60 * 60 * 1000
    })
}

module.exports = server => {
    server.use(helmet());
    server.use(express.json());
    server.use(cors());
    server.use(session(sessionConfig));
};