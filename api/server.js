const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../auth/auth-router');
const ownerRouter = require('../owners/owner-router');
const renterRouter = require('../renters/renter-router');
const usersRouter = require('../users/user-router')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter)
server.use('/owners', ownerRouter);
server.use('/renters', renterRouter);
server.use('/users',usersRouter);

server.get('/', (req,res) => {
    res.status(200).json({API: 'up'});
});

module.exports = server;