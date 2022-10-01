const express = require("express");
const authentication = require("../middleware/authentication");
const { ProjectModel } = require("../model/projects.model");
const { UserModel } = require("../model/user.models");

const projects = express.Router();

projects.get("/",authentication,async (req,res)=>{
     let data = await ProjectModel.find({user_id:req.body.user_id});
     res.status(200).send({data:[...data]});
})


projects.post("/add", authentication,async(req,res)=>{
    let newTask = new ProjectModel(req.body);
    await newTask.save();
    res.status(200).json({data:{"msg":"Project Added Sucessfully",project:req.body}})
})


projects.delete("/:id", async(req,res)=>{
    console.log(req.params);
   res.send("delete find successfully");
})

module.exports = {projects}