const items = require('../items/item-model');

module.exports ={
    validateItemId,
    validateItems
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
        });
};

function validateItems(req,res,next){
    const body = req.body;
    if(Object.keys(body).length === 0){
        res.status(400).json({message: "missing items inputs"})
    } else if (!body.price || !body.description){
        res.status(400).json({error:"missing Price or Description"})
    } else {
        next()
    };
    
}