const router = require('express').Router();

const items = require('./item-model');
const {validateItemId} = require('../middleware/item-mid')

router.get('/', (req,res) => {
    items.getItem()
    .then(items => {
        res.status(200).json({allItems: items})
    })
    .catch(err => {
        res.status(500).json({error:'error occured while getiing all items'})    
    })
});

router.delete('/:id', validateItemId, (req,res) => {
    const {id} = req.params;
    items.remove(id)
        .then(() => {
            res.status(202).json({message:`deleted the itemId ${id}`})
        })
        .catch(err => {
            res.status(500).json({error:`error occured while deleting itemId: ${id}`})
        });
});

router.put('/:id', validateItemId ,(req,res) => {
    const {id} = req.params;
    const changes = req.body;

    items.update(id,changes)
        .then(() => {
            res.status(200).json({message:`update the itemId: ${id}`})
        })
        .catch(err => {
            res.status(500).json({error:`error occured while updating itemId: ${id}`})
        });
});

router.get('/:id', validateItemId, (req,res) => {
    const {id} = req.params;

    items.getById(id)
        .then(item => {
            res.status(200).json({data:item})
        })
        .catch(err => {
            res.status(500).json({error: `error occured while getting the item by id: ${id}`})
        })
})

module.exports = router;