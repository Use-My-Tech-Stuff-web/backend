const router = require('express').Router();

const owner = require('./owner.model')

router.get('/', (req,res) => {
    owner.get()
        .then(owners => {
            res.status(200).json({data:owners})
        })
        .catch(err => {
            res.status(500).json({message:"error occured while getting all owners data"})
        })
})



module.exports = router;