const router = require('express').Router();

const owner = require('./owner-model')

router.get('/', (req,res) => {
    owner.get()
        .then(owners => {
            res.status(200).json({data:owners})
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting all owners data"})
        });
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    owner.getById(id)
        .then(owner => {
            if(owner.length === 0){
                res.status(400).json({error:'wrong ID'})
            } else {
                res.status(200).json({data:owner})
            }
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting owner by ID"})
        })
})


module.exports = router;