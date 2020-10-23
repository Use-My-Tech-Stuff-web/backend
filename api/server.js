const express = require('express');
const cors = require('cors');
const helmet = require('helmet');


const server = express();

const authRouter = require('../auth/auth-router');
const ownerRouter = require('../owners/owner-router');
const renterRouter = require('../renters/renter-router');
const usersRouter = require('../users/user-router');
const rentalRouter = require('../items/item-router')
const auth = require('../auth/auth-middleware');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter)
server.use('/items', auth , rentalRouter);
server.use('/owners', auth, ownerRouter);
server.use('/renters', auth, renterRouter);
server.use('/users', auth, usersRouter);

server.get('/', (req,res) => {
    res.status(200).json({API: 'up'});
});


module.exports = server;