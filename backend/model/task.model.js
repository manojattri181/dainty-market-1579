const mongoose = require("mongoose");

 const taskSchema = new mongoose.Schema({
    projectId:{type: mongoose.Schema.Types.ObjectId, ref:"project"},
    project:String,
    startDate:String,
    endDate:String,
    duration:String,
    notes:String,
    day:String,
    date:String,
    status:Boolean,
    taskId:String
},
{
 versionKey:false
});

const TaskModel = mongoose.model("task",taskSchema);

module.exports = {TaskModel, taskSchema};

