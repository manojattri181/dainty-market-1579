const mongoose = require("mongoose");
const { taskSchema } = require("./task.model");

const ProjectSchema = new mongoose.Schema({
    
    "project":{type:String},
    "status":{type:Boolean,default:false},
    "tasks": [{ type : mongoose.Schema.Types.ObjectId, ref: 'task' }],
    "client":{type:String},
    "notes":{type:String},
    "duration":{type:String},
    "day":{type:String},
    "date":{type:String},
    "startDate":{type:String},
    "endDate":{type:String},
    "user_id":{ type : mongoose.Schema.Types.ObjectId, ref: 'user' },
},
{
 timestamps:true,
 versionKey:false
});

const ProjectModel = mongoose.model("project",ProjectSchema);

module.exports = {ProjectModel};

