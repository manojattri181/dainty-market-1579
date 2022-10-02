import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "../../hours/weekly-modals/modal.modular.css";

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
} from "@chakra-ui/react";

const RightDrawer = ({ week, date, day, icon }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  let dispMinutes = minutes < 10 ? `0${minutes}` : minutes;

  let dispHours = hours < 10 ? `0${hours}` : hours;
  const [duration, setDuration] = useState(0);
  let projects = ["Project-A", "Project-B", "Project-C", "Project-D"];

  const [notes, SetNotes] = useState();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [project, setProject] = useState("");

  const handlepost = () => {
    const datas = {
      project: project,
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

    fetch("http://localhost:8080/task/addtask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(datas),
    })
      .then((res) => res.json())
      .then((res) => console.log(res.msg))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  return (
    <div>
      <Button style={{ marginRight: "1rem" }}>All tasks</Button>
      <Button ref={btnRef} colorScheme="gray" onClick={onOpen}>
        + Tasks
      </Button>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{week} Monday</ModalHeader>
          <ModalHeader>User Name</ModalHeader>
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
                {projects.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </select>
              {/* <Input  placeholder="Title of Project" name="task"  onChange={(e)=>settitle(e.target.value)} value={title}/> */}
            </Box>

            <div>
              <div className="flex justify-evenly  mb-2 mt-2 text-xs font-medium text-gray-900 dark:text-gray-400">
                <div className="flex flex-col w-2/4">
                  <h5 className="flex justify-center">Start Date/Time</h5>
                  <DatePicker
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  {/* <DatePicker wrapperClassName="datePicker"    selected={startDate} onChange={handleStart()} showTimeSelect filterTime={filterPassedTime}  dateFormat="MMMM d, yyyy h:mm aa"    /> */}
                  <h5 className="flex justify-center">End Date/Time</h5>
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
                  {/* <DatePicker  selected={endDate}  onChange={handleEnd}   showTimeSelect  filterTime={filterPassedTime} dateFormat="MMMM d, yyyy h:mm aa" /> */}
                </div>
                <div
                  className="flex flex-col justify-center items-center w-1/4 "
                  style={{ border: "1px solid black" }}
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

      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ fontSize: "16px" }}>
            <input type="radio" /> Mark as done
          </DrawerHeader>

          <DrawerBody style={{ fontWeight: "bold" }}>
            <Input placeholder="Task name" />
            <Text
              style={{
                fontSize: "12px",
                color: "gray",
                marginTop: "5px",
              }}
            >
              Add details...
            </Text>
            <Text style={{ fontSize: "16px", marginTop: "6%" }}>
              Project A [sample]
            </Text>
            <Flex style={{ marginTop: "6%" }}>
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="gray"
                  class="bi bi-list-ul"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                  />
                </svg>
              </Box>
              <Box style={{ marginLeft: "1%" }}>
                <Text style={{ fontSize: "10px" }}>Add to task list</Text>
              </Box>
            </Flex>

            <div
              className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
              style={{ marginTop: "6%" }}
            >
              <ul className="flex flex-wrap -mb-px">
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-2 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                    aria-current="page"
                  >
                    Information
                  </a>
                </li>
                <li className="mr-2">
                  <a
                    href="#"
                    className="inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  >
                    Hours
                  </a>
                </li>
              </ul>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </div>
  );
};

export default RightDrawer;
