const router = require('express').Router();

const renter = require('./renter-model')

router.get('/', (req,res) => {
    renter.get()
        .then(renters => {
            res.status(200).json({data:renters})
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting all owners data"})
        })
})



module.exports = router;