const express = require("express");
const { TaskModel } = require("../model/task.model");

const taskRoute = express.Router();

taskRoute.get("/",async (req,res)=>{
     let data = await TaskModel.find();
     res.status(200).send(data)
})

taskRoute.post("/addTask", async(req,res)=>{
    let newTask = new TaskModel(req.body);
    await newTask.save();
    res.status(200).json({"msg":"Task Added Sucessfully"})
})

taskRoute.patch("/update/:taskid", async(req,res)=>{
    try{
        await TaskModel.findByIdAndUpdate(req.params.taskid, req.body)
        res.status(200).json({"msg":"Task Updated Sucessfully"})
    }
    catch(err){
        res.status(404).json({"msg":err})
    }
})

taskRoute.delete("/delete/:taskid", async(req,res)=>{
   
    try{
        await TaskModel.findByIdAndDelete(req.params.taskid)
        res.status(200).json({"msg":"Task Deleted Sucessfully"})
    }
    catch(err){
        res.status(404).json({"msg":err})
    }
    
})

module.exports = {taskRoute}