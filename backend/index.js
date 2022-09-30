const express = require("express");
const { user } = require("./controllers/User.controllers");
const {connection} = require("./config/db");
const { taskRoute } = require("./controllers/task.controller");
const app =express();
require("dotenv").config();
const cors = require("cors")
app.use(cors())

app.use(express.json());



app.use("/user",user)
app.use("/task", taskRoute)

app.get("/",(req,res)=>{
    res.send("welcome to Backend Server of TrackingTime");
})

app.listen(8080, async ()=>{
    try{
        await connection;
        console.log("✓ connected to Database Successfully");
    }
    catch(err){
        console.log("Error while Conneting to Database",err);
    }
    console.log("✓ connected to live server at 8080");
})

