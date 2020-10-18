const items = require('../items/item-model');

module.exports ={
    validateItemId
};

function validateItemId(req,res,next){
    const id = Number(req.params.id)

    items.get()
        .then(items => {
            if(items.find(item => item.id === id)){
                next()
            }else {
                res.status(404).json({message: "invalid item id"})
            }
        })
        .catch(err => {
            res.status(500).json({error:'error occured while validating item id'})
        })
}