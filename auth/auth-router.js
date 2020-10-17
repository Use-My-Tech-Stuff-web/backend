const router = require('express').Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require('../api/config');
const users = require('../users/user-model');

const {validateRegister, validateLogin} = require('../middleware/auth-mid');

router.post('/register',validateRegister, (req,res) => {
    const credentials = req.body;
    
    const rounds = Number(process.env.BCRYPT_ROUNDS) || 8;

    const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash;

    users.add(credentials)
        .then(() => {
            res.status(201).json({message: "successfully added new user"});
        })
        .catch(() => {
            res.status(500).json({error:'something gone wrong while registering'});
        });
});

router.post('/login',validateLogin, (req,res) => {
    const {username, password} = req.body;

    users.getBy({username})
        .then(user => {
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = getJwt(user);
                res.status(200).json({ message: "Welcome", token });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
          });
});

function getJwt(user) {
    const payload = {
        username: user.username,
    };
  
    const jwtOptions = {
        expiresIn: "8h",
    };
  
    return jwt.sign(payload, config.jwtSecret, jwtOptions);
  }

module.exports = router;