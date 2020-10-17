const users = require('../users/user-model');

module.exports = {
    validateUserId,
}

function validateUserId(req,res,next){
    const id = Number(req.params.id)

    users.get()
        .then(users => {
            if(users.find(user => user.id === id)){
                next()
            }else {
                res.status(404).json({message: "invalid user id"})
            }
        })
        .catch(err => {
            res.status(500).json({error:'error occured while validating user id'})
        })
}