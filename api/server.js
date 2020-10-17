const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const ownerRouter = require('../owners/owner-router')
const renterRouter = require('../renters/renter-router')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/owners', ownerRouter)
server.use('/renters', renterRouter)

server.get('/', (req,res) => {
    res.status(200).json({API: 'up'});
});

module.exports = server;