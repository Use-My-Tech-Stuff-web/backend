const router = require('express').Router();

const renter = require('./renter-model')

router.get('/', (req,res) => {
    renter.get()
        .then(renters => {
            res.status(200).json({data:renters})
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting all owners data"})
        });
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    renter.getById(id)
        .then(renter => {
            if(renter.length === 0){
                res.status(400).json({error:'wrong ID'})
            } else {
                res.status(200).json({data:renter})
            }
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting owner by ID"})
        })
})



module.exports = router;