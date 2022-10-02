import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "../weekly-modals/modal.modular.css";

import "react-datepicker/dist/react-datepicker.css";
import { v4 } from "uuid";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Editable,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/AppReducer/action";

const AddTaskModel = ({ week, date, day, icon }) => {
  const [alertStatus, setAlertStatus] = useState(false);


  const data = useSelector((store)=>store.AppReducer.data);
  // console.log("data",data)
  const dispatch = useDispatch();
  const [info,setInfo] = useState([])
  useEffect(() => {
    dispatch(GET_DATA());
    setInfo([...data])
    // console.log("task", task)
  }, []);

  // console.log("info",info)


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    return currentDate.getTime() < selectedDate.getTime();
  };

  let milliseconds = Math.abs(
    new Date(`${endDate}`).getTime() - new Date(`${startDate}`).getTime()
  );
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  // let days = hours % 24

  let dispMinutes = minutes < 10 ? `0${minutes}` : minutes;

  let dispHours = hours < 10 ? `0${hours}` : hours;
  const [duration, setDuration] = useState(0);
  let projects = ["Project-A", "Project-B", "Project-C", "Project-D"];

  const [notes, SetNotes] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState("");

  const handlepost = async () => {
    
    // let {_id} = project.split(":")[1]
    const datas = {
      projectId:project.split(":")[1],
      project: project.split(":")[0],
      startDate: startDate,
      endDate: endDate,
      duration: `${dispHours}:${dispMinutes}`,
      notes: notes,
      day: day,
      date: date,
      status: false,
    };

    setDuration(`${dispHours}:${dispMinutes}`);
    if (startDate > endDate) {
      return alert("Task Invalid");
    }
    console.log(datas);
    var taskId;
    await fetch("http://localhost:8080/task/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(datas),
    }).then((res) => res.json()).then((res) => {console.log(res);  taskId=res.taskId; console.log("t",taskId)}).catch((err) => console.log(err));
    // console.log("hello", taskId)

    fetch(`http://localhost:8080/project/addtask/${project.split(":")[1]}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify({taskId}),
    }).then((res) => res.json())
      .then((res) => {setAlertStatus(true) })
      .catch((err) => console.log(err));

    setTimeout(()=>{window.location.reload()},1000)
  };

  return (
    <div>
      
      {/* <div className=" bg-teal-500 text-white rounded-md py-2 font-medium">Monday {week} </div> */}
      {/* <Showdata day={"monday"} /> */}

      <Button
        onClick={onOpen}
        w="90%"
        h="15px"
        p="10px"
        display="flex"
        margin="auto"
      >
        {icon}
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{week}</ModalHeader>
          <ModalHeader></ModalHeader>
          {alertStatus? <Alert status='success' variant='left-accent'><AlertIcon />  Task Added Successfully</Alert>:""}
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select Project
              </label>
              <select
                onChange={(e) => setProject(e.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value>Select Project</option>
                {data.map((el, i) => (
                  <option key={i} value={`${el.project}:${el._id}`}>
                    {el.project}
                  </option>
                ))}
              </select>
              {/* <Input  placeholder="Title of Project" name="task"  onChange={(e)=>settitle(e.target.value)} value={title}/> */}
            </Box>

            <div>
              <div className="flex justify-evenly  mb-2 mt-2 text-xs font-medium text-gray-900 dark:text-gray-400">
                <div className="flex flex-col w-2/4">
                  <h5 className="flex justify-center">Start Date/Time</h5>
                  <div className="border border-inhert">
                  <DatePicker
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  </div>
                  
                  {/* <DatePicker wrapperClassName="datePicker"    selected={startDate} onChange={handleStart()} showTimeSelect filterTime={filterPassedTime}  dateFormat="MMMM d, yyyy h:mm aa"    /> */}
                  <h5 className="flex justify-center">End Date/Time</h5>
                  <div className="border border-inhert">
                  <DatePicker
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={(date) => setEndDate(date)}
                  />
                  </div>
                  
                  {/* <DatePicker  selected={endDate}  onChange={handleEnd}   showTimeSelect  filterTime={filterPassedTime} dateFormat="MMMM d, yyyy h:mm aa" /> */}
                </div>
                <div
                  className="flex flex-col justify-center items-center w-1/4 border border-inherit "
                  
                >
                  <h5 className="flex justify-center">Duration</h5>
                  {startDate < endDate ? (
                    <p>{`${dispHours}:${dispMinutes}`}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 ">
              <div>
                <textarea
                  rows="5"
                  cols="60"
                  name="text"
                  placeholder="Description of Project"
                  className=" h-48 w-full placeholder:pt-1 placeholder:pl-1 border border-black"
                  onChange={(e) => SetNotes(e.target.value)}
                  value={notes}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlepost}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       
    </div>
  );
};

export default AddTaskModel;
