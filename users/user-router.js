const router = require('express').Router();

const users = require('./user-model');

router.get('/',(req,res) => {
    users.get()
    .then(users => {
        res.status(200).json({data:users})
    })
    .catch(err => {
        res.status(500).json({error: 'occured while getting users'})
    });
});

router.get('/:id',(req,res) => {
    const id = req.params.id
    users.getById(id)
    .then(user => {
        res.status(200).json({data:user})
    })
    .catch(err => {
        res.status(500).json({error: 'occured while getting user by ID'})
    });
});

module.exports = router;