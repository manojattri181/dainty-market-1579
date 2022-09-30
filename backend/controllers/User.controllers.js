const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.models");
const user = express.Router();

user.post("/signup", async (req,res)=>{
    const {email,password} = req.body;
    let user_data = await UserModel.findOne({email:email});
    if(user_data){
        res.send({msg:"email is already present"})
    }else{
        let user_password = await bcrypt.hash(password,4);
        let user_details = new UserModel({email:email,password:user_password})
        await user_details.save();
        res.status(200).send({msg:"Signup successfully"});
    }
})


user.post("/login", async (req,res)=>{
    let {email,password} = req.body;
    let user_data = await UserModel.findOne({email:email});
    let hash = user_data.password; 
    bcrypt.compare(password, hash, (err, result)=> {
        if(result){
            var token = jwt.sign({email:email}, `${process.env.secret_key}`,{expiresIn:"12h"});
                res.status(200).send({data:{"msg":"Login successfull", "token" : token}})
            }else{
                res.send({msg:"Login Failed ,Please give correct email and password"});
            }
    });
})

module.exports = {user}; 