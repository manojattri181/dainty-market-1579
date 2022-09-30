const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    project:String,
    startDate:String,
    endDate:String,
    duration:String,
    notes:String,
    day:String,
    date:String,
},
{
 versionKey:false
});

const TaskModel = mongoose.model("task",taskSchema);

module.exports = {TaskModel};

// // const datas ={
// //     project:project,
// startDate:startDate,
// endDate:endDate,
// duration:duration,
// notes:notes,
// day:"monday""
// // }