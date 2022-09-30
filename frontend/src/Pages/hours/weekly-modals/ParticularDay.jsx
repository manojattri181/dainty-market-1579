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
  } from '@chakra-ui/react'

  import {useDisclosure} from "@chakra-ui/hooks"
import { useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getApi, PostApi } from './Reducer/action'
import {GrAdd} from "react-icons/gr"
import Showdata from './Showadata'
import AddTaskModel from './AddTaskModel';

const ParticularDay = ({week,day, date}) => {
  return (
      
    <div className='flex  flex-col  justify-center content-center w-1/6 border border-inherit' >
      <div className="flex jutify-start text-xs text-neutral-900 rounded-md py-2 font-medium border border-inherit" > <h6 className="ml-2" >{day}<br/> {week}</h6></div>
          <Showdata  key={1} date={date} day={day} week={week} />
          <AddTaskModel  key={2} date={date} day={day} />
    </div>
    
  )
}

export default ParticularDay