import { DeleteIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/AppReducer/action";

const Showdata = ({ week, day, date }) => {
  const [alertStatus, setAlertStatus] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const [task, setTask] = useState([]);
  
  function getTask() {
    fetch("http://localhost:8080/task")
      .then((res) => res.json())
      .then((res) => {
        setTask([...task, ...res]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getTask();
     // console.log("task", task)
  }, []);

  

  let p = task.filter((el) => el.day === day && el.date === date);
  // console.log(p)

  const handleDelete = (e) => {
    console.log(e._id)
    let taskId = e._id
    fetch(`http://localhost:8080/task/delete/${e._id}`, {
      method: "DELETE",
      // headers:{
      //     "content-type":"application/json"
      // },
      // body:JSON.stringify(e._id)setTimeout(()=>{setAlertMsg(res.msg)},500)
    }).then((res) => res.json())
      .then((res) => {console.log("1",res.msg);setAlertMsg(res.msg);setTimeout(()=>{setAlertStatus(true)},500)})
      .catch((err) => console.log(err));

    fetch(`http://localhost:8080/project/deletetask/${e.projectId}`, {
      method: "DELETE",
      headers:{
          "content-type":"application/json"
      },
      body:JSON.stringify({taskId})
    }).then((res) => res.json())
      .then((res) => {console.log("2",res.msg);})
      .catch((err) => console.log(err));

      setTimeout(()=>{window.location.reload()},1000);
  };

  function getTime(str) {
    let h = new Date(`${str}`).getHours();
    h = h > 12 ? h % 12 : h;
    h = h < 10 ? `0${h}` : h;
    let m = new Date(`${str}`).getMinutes();
    m = m < 10 ? `0${m}` : m;
    return `${h}:${m}`;
  }

  function handleToggle(e) {
    fetch(`http://localhost:8080/task/update/${e._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...e, status: !e.status }),
    })
      .then((res) => res.json())
      .then((res) => {console.log("3",res.msg);setAlertMsg(res.msg);setTimeout(()=>{setAlertStatus(true)},500)})
      .catch((err) => console.log(err));
    setTimeout(()=>{window.location.reload()},1000);
  }
  

  return (
    <div key={Math.floor(1000 * Math.random())}>
      {/* <Button onClick={onOpen}  w="80%" h="10px"  display='flex' margin="auto" mb="5px" mt="5px" ></Button> */}
      {alertStatus? <Alert  status='success' variant='left-accent' ><AlertIcon />  {alertMsg}</Alert>:""}
      {p.map((e) => (
        <div
          className=" rounded-xl px-2 py-2 my-2 hover:border border-black text-white"
          key={e._id}
          style={{ background: e.id % 2 === 0 ? "#95bef4" : "#95bef4" }}
        >
          <div className="flex justify-between">
            <div className="flex align-">
              {/* <div><MdTimer style={{ width: "20px", height: "20px", color: "teal" }} /></div> */}
              <div className="text-2xl font-mono ">{e.project} </div>
            </div>
            {/* <button onClick={() => handleDelete(e.id)} ><ImCross style={{ color: "teal" }} /></button>*/}
          </div>
          <div className=" font-bold font-mono text-sm my-3">{e.notes}</div>
          <div className="flex justify-between ">
            <h5 className="font-mono">{`${getTime(e.startDate)} - ${getTime(
              e.endDate
            )}`}</h5>
            <h5 className="font-mono">{e.duration}</h5>
          </div>
          {/* <div className=' text-sm'>{e.dis}</div> */}
          <div className="flex justify-between cursor-pointer">
            <DeleteIcon
              onClick={(el) => handleDelete(e)}
              color="tomato"
              mt="5px"
              mb="5px"
              h="20px"
            />

            <button
              className="text-sm font-mono font-semibold cursor-pointer"
              onClick={() => handleToggle(e)}
              style={{ color: e.status ? "green" : "tomato" }}
            >
              {e.status ? "COMPLETED" : "PENDING"}
            </button>
            {/* <Button className='text-rose-500 text-xs font-bold mt-5 mb-5  border border-red'  onClick={(el)=>handleDelete(e)}><DeleteIcon /> </Button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showdata;
