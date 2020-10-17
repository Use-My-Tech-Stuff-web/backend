const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require('../api/config');
const owners = require('../owners/owner-model');
const renters = require('../renters/renter-model');

const {validateRegister} = require('../middleware/auth-mid')

router.post('/register',validateRegister, (req,res) => {
    const credentials = req.body;

    const rounds = process.env.BCRYPT_ROUNDS || 8;

    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    if(credentials.role === owner){
        owners.insert(credentials)
            .then(() => {
                res.status(201).json({message: "successfully added new owner"})
            })
            .catch(() => {
                res.status(500).json({error: 'error occured while adding new owner'})
            })
    } else if (credentials.role === renter){
        renters.insert(credentials)
            .then(() => {
                res.status(201).json({message: "successfully added new renter"})
            })
            .catch(() => {
                res.status(500).json({error: 'error occured while adding new renter'})
            })
    } else {
        res.status(500).json({error:'something gone wrong while registering'})
    }
})