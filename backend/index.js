const express = require("express");
const { user } = require("./controllers/User.controllers");
const {connection} = require("./config/db");
const app =express();
require("dotenv").config();

app.use(express.json());
app.use("/user",user)

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

