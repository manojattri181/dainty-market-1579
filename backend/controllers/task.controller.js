const express = require("express");
const authentication = require("../middleware/authentication");
const { TaskModel } = require("../model/task.model");

const taskRoute = express.Router();

taskRoute.get("/",authentication,async (req,res)=>{
    // console.log(req.body)
     let data = await TaskModel.find({user_id:req.body.user_id}).populate("projectId","project")
    //  console.log(data)
     res.status(200).send(data)
})

taskRoute.post("/addTask",authentication ,async(req,res)=>{
    // console.log(req.body)
    var taskId
    let newTask = new TaskModel(req.body);
    await newTask.save((err, room) => {
        if (err) return `Error occurred while saving ${err}`;
      
        const { _id } = room;
        // console.log(`New room id: ${_id}`);
      
        // return room;
        res.status(200).json({"msg":"Task Added Sucessfully","taskId": _id})
      });
    
})

taskRoute.patch("/update/:taskid",async(req,res)=>{
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
        // res.send({data:{msg:"task deleted sucessfully"}})
        res.status(200).json({"msg":"Task Deleted Sucessfully"})
    }
    catch(err){
        res.status(404).json({"msg":err})
    }
    
})

module.exports = {taskRoute}