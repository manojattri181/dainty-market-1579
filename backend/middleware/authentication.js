const jwt = require("jsonwebtoken");
require('dotenv').config()

const authentication = (req,res,next)=>{

    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
     jwt.verify(token, process.env.secret_key,(err,decoded)=>{
        if(err){
            res.status(401).json({"msg":"Please login to access the information"})
        }else{
            req.body.user_id = decoded.user_id;
            next()
        }
     }) 
    }

}

module.exports = authentication;  