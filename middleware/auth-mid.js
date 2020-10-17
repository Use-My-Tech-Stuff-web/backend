module.exports = {
    validateRegister,
    validateLogin
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

function validateLogin(req,res,next){
    const body = req.body;
    if(Object.keys(body).length === 0){
        res.status(400).json({message: "missing login inputs"})
    } else if (!body.username || !body.password){
        res.status(400).json({error:"Missing password or username"})
    }else {
        next()
    };
}