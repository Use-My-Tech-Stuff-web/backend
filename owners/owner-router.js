const router = require('express').Router();


const owners = require('./owner-model');
const {validateUserId} = require('../middleware/user-mid');

router.get('/', (req,res) => {
    owners.get()
        .then(owners => {
            res.status(200).json({data:owners});
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting all owners data"});
        });
});

router.get('/:id',validateUserId, (req,res) => {
    const id = req.params.id;
    owners.getById(id)
        .then(owner => {
                res.status(200).json({data:owner});
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting owner by ID"});
        });
});

router.get('/:id/items',validateUserId ,(req,res) => {
    const {id} = req.params;
    owners.getItems(id)
    .then(items => {
        if(items.length === 0){
            res.status(404).json({message:`there are no items belong to this userID: ${id}`});
        } else {
            res.status(200).json({userItems:items})
        }
    })
    .catch(err => {
        res.status(500).json({message:"error occured while getting user items"});
    });
});

router.post('/:id/items', validateUserId, (req,res) => {
    const {id} = req.params;
    const body = req.body;
    owners.postItem(body,id)
    .then(() => {
        res.status(201).json({Success:`added new item to the userId ${id}`});
    })
    .catch(err => {
        res.status(500).json({message:"error occured while posting new item"});
    });
});

module.exports = router;