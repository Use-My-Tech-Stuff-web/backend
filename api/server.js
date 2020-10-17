const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const ownerRouter = require('../owners/owner-router')

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/owners', ownerRouter)

server.get('/', (req,res) => {
    res.status(200).json({API: 'up'});
});

module.exports = server;