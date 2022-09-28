const express = require("express");

const user = express.Router();

user.post("/signup",(req,res)=>{
    res.status(200).send({data:"Welcome to TrackingTime",msg:"Signup Successfull"})
});
user.post("/login",(req,res)=>{
    res.status(200).send({data:"Welcome to TrackingTime",msg:"Login Successfull"})
});


module.exports = {user};