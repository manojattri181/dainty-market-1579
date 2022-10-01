const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    "project":{type:String,required:true},
    "status":{type:String,default:"Pending"},
    "task":{type:String},
    "client":{type:String},
    "notes":{type:String},
    "duration":{type:String},
    "startDate":{type:String,required:true},
    "startTime":{type:String,required:true},
    "endDate":{type:String,required:true},
    "endTime":{type:String,required:true},
    "user_id":{type:String,required:true},
},
{
 timestamps:true,
 versionKey:false
});

const ProjectModel = mongoose.model("project",ProjectSchema);

module.exports = {ProjectModel};