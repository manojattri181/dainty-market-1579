import React, { useState } from 'react'
import DatePicker from "react-datepicker";

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
  } from '@chakra-ui/react'

  import {useDisclosure} from "@chakra-ui/hooks"
import { useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getApi, PostApi } from './Reducer/action'
import {GrAdd} from "react-icons/gr"
import Showdata from './Showadata'

const Monday = ({week}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };
    // const {isAuth} = useSelector((state)=>state.login)
    // const {data} = useSelector((state)=>state.task)
    //  const dispatch = useDispatch() 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title,settitle] = useState("")
    const [dis,setdis] = useState("")
    const [hour,sethour] = useState(1)
   

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }



const handlepost =()=>{
   const datas ={
        title:title,
        dis:dis,
        status:false,
        time:hour,
        id:v4(),
        day:"monday"
   }
 
  // data.mon.push(datas)
//    dispatch(PostApi(datas))
  
}

function handleStart(date)
{
    setStartDate(date)
    console.log("s",startDate)
}

function handleEnd(date)
{
    setEndDate(date)
    console.log("e",endDate)
    var diff = endDate.valueOf() - startDate.valueOf();
    // console.log(Math.round((endDate-startDate)/(1000 * 60)))
    console.log(diff)
}

  return (
    <div className=' w-1/5 '>
        
       
      <div className=" bg-teal-500 text-white rounded-md py-2 font-medium">Monday {week} </div>
      {/* <Showdata day={"monday"} /> */}
   
<Button onClick={onOpen} w="250px"><GrAdd /></Button>
<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>{week} Monday</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
        <Box>
        <Input  placeholder="Title of Project" name="task"  onChange={(e)=>settitle(e.target.value)} value={title}/>
        </Box>
     
   <div>
   {/* slider */}
   <div class="flex justify-evenly gap-2 mb-2 mt-2 text-xs font-medium text-gray-900 dark:text-gray-400" style={{border:"1px solid red"}}>
        <div class="w-1/2" >
        <DatePicker    selected={startDate} onChange={handleStart} showTimeSelect filterTime={filterPassedTime}  dateFormat="MMMM d, yyyy h:mm aa"    />
        </div>
        <div class="w-1/2" >
        <DatePicker  selected={endDate}  onChange={handleEnd}   showTimeSelect  filterTime={filterPassedTime} dateFormat="MMMM d, yyyy h:mm aa" />
        </div>
       
    </div>
    <h3>{startDate.getTime()}</h3>
    <h3>{endDate.getTime()}</h3>
    <h3>{(endDate.getTime()-startDate.getTime())/(1000 * 60)}</h3>
   <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an option</label>
<select onChange={(e)=>sethour(e.target.value)} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose Duration</option>
  <option value={1} >1 hour</option>
  <option value={2} >2 hour</option>
  <option value={3} >3 hour</option>
  <option value={4} >4 hour</option>
</select>
   </div>
     <div className='mt-4 '>
        <div>
        <textarea rows="5" cols="60" name="text" placeholder="Discription of Project" className=' h-48 w-full placeholder:pt-1 placeholder:pl-1' onChange={(e)=>setdis(e.target.value)} value={dis} />
        </div>
    </div>
    </ModalBody>
    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={handlepost}>
        Save
      </Button>
      {/* <Button onClick={onClose}></Button> */}
    </ModalFooter>
  </ModalContent>
</Modal>
  
    </div>
  )
}

export default Monday