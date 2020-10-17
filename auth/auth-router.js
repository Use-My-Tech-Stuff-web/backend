const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require('../api/config');
const users = require('../users/user-model')

const {validateRegister} = require('../middleware/auth-mid')

router.post('/register',validateRegister, (req,res) => {
    const credentials = req.body;
    
    const rounds = Number(process.env.BCRYPT_ROUNDS) || 8;

    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    users.add(credentials)
        .then(() => {
            res.status(201).json({message: "successfully added new user"})
        })
        .catch(() => {
            res.status(500).json({error:'something gone wrong while registering'})
        })  
})

module.exports = router;