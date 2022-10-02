const express = require("express");
const mongoose = require("mongoose");
const authentication = require("../middleware/authentication");
const { ProjectModel } = require("../model/projects.model");
const { UserModel } = require("../model/user.models");

const projects = express.Router();


// * Get Request
projects.get("/",authentication,async (req,res)=>{
     let data = await ProjectModel.find({user_id:req.body.user_id});
     res.status(200).send({data:[...data]});
})

// * Post Request
projects.post("/add", authentication,async(req,res)=>{
    let newTask = new ProjectModel(req.body);
    await newTask.save();
    res.status(200).json({data:{"msg":"Project Added Sucessfully",project:req.body}})
})

// * Patch Request
projects.patch("/:id",async(req,res)=>{
    let {id} = req.params;
    // console.log(req.body);
    const patchData = await ProjectModel.findByIdAndUpdate({_id:id},req.body);
    res.send({data:{msg:"Updated successfully",data:patchData}})
})

////for tasks
projects.patch("/addtask/:id",async(req,res)=>{
    let {id} = req.params;
    // console.log(req.body.taskId)
    let data = await ProjectModel.findOne({_id:id})
    data.tasks.push(req.body.taskId)
    await data.save()
    console.log(data.tasks)
    res.send({data:{msg:"Updated successfully"}})
    
})
////for tasks
projects.delete("/deletetask/:id",async(req,res)=>{
    let {id} = req.params;
    let data = await ProjectModel.findById({_id:id})
    data.tasks.pull(mongoose.Types.ObjectId(req.body.taskId))
    await data.save()
    // console.log(data.tasks)
    res.send({data:{msg:"task deleted sucessfully"}})
    
})

// * Delete Request
projects.delete("/:id", async(req,res)=>{
    let {id} = req.params;
    // console.log(id);
    const delteddata = await ProjectModel.findByIdAndDelete({_id:req.params.id})
    // console.log(delteddata);
    res.send({data:{msg:"Deleted successfully",deleted:delteddata}});
})


module.exports = {projects}