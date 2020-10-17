module.exports = {
    validateRegister,
};

function validateRegister(req,res,next) {
    const body = req.body;
    if(Object.keys(body).length === 0){
        res.status(400).json({message: "missing register inputs"})
    } else if (!body.username || !body.password || !body.role){
        res.status(400).json({error:"required fields are missing"})
    }else {
        next()
    };
};