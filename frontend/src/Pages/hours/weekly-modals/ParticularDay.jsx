import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "../weekly-modals/modal.modular.css"

import "react-datepicker/dist/react-datepicker.css";
import {v4} from "uuid"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button,Box,Input,Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Editable,
    Spacer,
  } from '@chakra-ui/react'

  import {useDisclosure} from "@chakra-ui/hooks"
import { useEffect} from 'react'
import {GrAdd} from "react-icons/gr"
import Showdata from './Showadata'
import AddTaskModel from './AddTaskModel';
import { TimeIcon } from '@chakra-ui/icons';

const ParticularDay = ({week,day, date}) => {
  const [task,setTask] = useState([])
    function getTask(){
        fetch("http://localhost:8080/task").then((res)=>res.json()).then((res)=>{setTask([...task,...res])}).catch((err)=> console.log(err))
    }
    useEffect(()=>{
        getTask()        
    },[])
    let ans = []
let t = task.filter((el) => (el.day === day && el.date===date))
for(var i=0;i<t.length;i++){
    ans.push(new Date(`${t[i].endDate}`).getTime()-new Date(`${t[i].startDate}`).getTime())
}
var sum = 0;
for(var i=0;i<ans.length;i++){
    sum=sum+ans[i]
}

      let seconds = Math.floor(sum / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      minutes = (minutes % 60)
      // let days = hours % 24    
      let dispMinutes = minutes<10? `0${minutes}`: minutes
      let dispHours = hours<10? `0${hours}`: hours
      let total = `${dispHours}:${dispMinutes}`;
 
      
      // let d = new Date(new Date()+2).toISOString().slice(0, 10)
       let d = new Date()
       let one = d.getDate()
       let two = parseInt(date.split("-")[2])
   
  return (
      
    <div className='flex  flex-col  justify-center content-center w-1/6 border border-inherit' style={{background: one==two? "#fbfbf4":"" }} >
      <div className="flex justify-between jutify-start text-xs text-neutral-900 rounded-md py-2 font-medium border border-inherit" >
         <h6 className="ml-2" >{day}<br/> {week} </h6>
         <div><TimeIcon /> <Spacer />  {total}</div>
      </div>
          <Showdata  key={1} date={date} day={day} week={week} />
          <AddTaskModel  key={2} date={date} day={day} icon={<GrAdd h="90%" />} />
    </div>
    
  )
}

export default ParticularDay