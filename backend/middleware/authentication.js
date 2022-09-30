const jwt = require("jsonwebtoken");

const authentication = (req,res,next)=>{

    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
     jwt.verify(token, process.env.secret_key,(err,decoded)=>{
        if(err){
            res.status(401).send("Please login to access the information")
        }else{
            req.body.email = decoded.email;
            next()
        }
     }) 
    }

}

module.exports = authentication;  