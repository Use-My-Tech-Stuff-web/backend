const router = require('express').Router();


const users = require('./user-model');
const {validateUserId} = require('../middleware/user-mid')

router.get('/',(req,res) => {
    users.get()
    .then(users => {
        res.status(200).json({data:users})
    })
    .catch(err => {
        res.status(500).json({error: 'occured while getting users'})
    });
});

router.get('/items', (req,res) => {
    users.getItem()
    .then(items => {
        res.status(200).json({allItems: items})
    })
    .catch(err => {
        res.status(500).json({error:'error occured while getiing all items'})    
    })
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


router.put('/:id', (req,res) => {
    const {id} = req.params;
    const changes = req.body;

   users.getById(id)
    .then(user => {
        if(user){
            users.update(changes,id)
            .then(updatedUser => {
                res.status(200).json({update: updatedUser})
            });
        } else {
            res.status(404).json({ message: 'Could not find user with given id' })
        };
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to update owner' })
    });
});

router.delete('/:id',validateUserId, (req,res) => {
    const {id} = req.params;
    users.remove(id)
    .then(deleted => {
        if(deleted){
            res.status(202).json({success:`deleted userID : ${id}`});
        } else{
            res.status(404).json({ message: 'Could not find user with given id' });
        };
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete user' });
      });
});

module.exports = router;