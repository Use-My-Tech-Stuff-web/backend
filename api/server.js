const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const authRouter = require('../auth/auth-router');
const ownerRouter = require('../owners/owner-router');
const renterRouter = require('../renters/renter-router');
const usersRouter = require('../users/user-router');
const rentalRouter = require('../items/item-router')
const protected = require('../auth/auth-middleware');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter)
server.use('/items', rentalRouter);
server.use('/owners', protected, ownerRouter);
server.use('/renters', protected, renterRouter);
server.use('/users', protected, usersRouter);

server.get('/', (req,res) => {
    res.status(200).json({API: 'up'});
});

module.exports = server;