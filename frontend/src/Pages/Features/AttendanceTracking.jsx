import React, { useState } from 'react'
import CSS from "../Features/Timetracker.module.css"
import { Button, createIcon,Stack, HStack, Input, FormControl,Container, Box, Image,Text, VStack, Heading, border, textDecoration, Spacer, color} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

const img = [
    require("../Features/Images/google-key.png"),
    require("../Features/Images/attendancetracking/img1.jpg"),
    require("../Features/Images/attendancetracking/img2.jpg"),
    require("../Features/Images/attendancetracking/img3.jpg"),
    require("../Features/Images/attendancetracking/img4.jpg"),
    require("../Features/Images/attendancetracking/img5.jpg"),
    require("../Features/Images/attendancetracking/img6.jpg")

    
   
    
]

const btnimg = [
    require("../Features/Images/attendancetracking/imgA.jpg"),
    require("../Features/Images/attendancetracking/imgB.jpg"),
    require("../Features/Images/attendancetracking/imgC.jpg"),
]


export const img1=[
    require("../Features/Images/timetracking/img6-1.jpg"), //[5]
    require("../Features/Images/timetracking/img7-1.jpg"),  //[6]
    require("../Features/Images/timetracking/img8-1.jpg"), //[7]
    require("../Features/Images/timetracking/img9-1.jpg"),
]


 
const logo1 = "https://trackingtime.co/wp-content/uploads/2020/07/Home-office-and-remote-working-solutions-for-team-collaboration.svg";

const Attendancetracking = () => {
    
    const [id,setId] = useState(0);
    const [status1, setStatus1] = useState(false)
    const [status2, setStatus2] = useState(false)
    const [status3, setStatus3] = useState(false)

    const handleClick1 =()=>{
        setStatus1(true)
        setStatus2(false)
        setStatus3(false)
        setId(0)
    }
    const handleClick2 =()=>{
       setStatus1(false)
        setStatus2(true)
        setStatus3(false)
        setId(1)
    }
    const handleClick3 =()=>{
       setStatus1(false)
        setStatus2(false)
        setStatus3(true)
        setId(2)
    }

    
  return <></>
}

export default Attendancetracking