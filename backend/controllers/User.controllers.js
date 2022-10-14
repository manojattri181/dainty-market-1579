const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.models");
const authentication = require("../middleware/authentication");
const user = express.Router();

user.get("/",authentication, async(req,res)=>{
    // console.log(req.body)
    let data = await UserModel.findOne({_id:req.body.user_id})
    res.json({"msg":"Data found sucessfull", "user":data})
})

user.post("/signup", async (req,res)=>{
    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    const {email,password} = req.body;
    let user_data = await UserModel.findOne({email:email});
    if(user_data){
        res.send({isError:{msg:"Email is already present"}})
    }else if (!password.match(passw)) {
          res.send({isError:{msg:"Password must be strong"}});
    }
    else{
        let user_password = await bcrypt.hash(password,4);
        let user_details = new UserModel({email:email,password:user_password})
        await user_details.save();
        res.status(200).send({data:{msg:"Signup successfully"}});
    }
})



user.post("/login", async (req,res)=>{
    let {email,password} = req.body;
    let user_data = await UserModel.findOne({email:email});
    if(user_data==null){
        console.log("User Not Found Please SignUp")
        res.send({"msg":"User Not Found Please SignUp"})
    }
    else {
        let hash = user_data.password; 
    if(hash){
        bcrypt.compare(password, hash, (err, result)=> {
            if(result){
                var token = jwt.sign({user_id:user_data._id}, `${process.env.secret_key}`,{expiresIn:"12h"});
                res.status(200).send({data:{"msg":"Login successfull", "token" : token}})
            }else{
                res.send({data:{msg:"Login Failed ,Please give correct email and password"}});
            }
        });
    }else{
        res.send({data:{msg:"Login Failed ,Please give correct email and password"}});
    }
        
    }
    
    })

module.exports = {user}; 