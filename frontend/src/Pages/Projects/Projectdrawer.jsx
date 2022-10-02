import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {GrFormClose} from "react-icons/gr";
import { useDispatch} from "react-redux";
import { GET_DATA, POST_DATA } from "../../Redux/AppReducer/action";

var now = new Date();
const days = ["SU","MA","TU","WE","TH","FR","SA"];
let ans = days[ now.getDay() ];
console.log(ans)

const schema = {
    "project":"",
    "status":false,
    "client":"",
    "notes":"",
    "duration":"1:00",
    "day": ans,
    "startDate":"",
    "endDate":"",
}

const Projectdrawer = ({handleDrawer}) => {
    const [data,setData] = useState(schema);
    const dispatch =useDispatch();
    const [ myproject, setProject ] = useState('Project name');
    const [startdatetime,setStartDatetime]  = useState( "");
    const [enddatetime,setEndDatetime]  = useState(  "");
    const [mynotes,setNotes] = useState("");
    const [mystatus,setStatus] = useState(false);
    
    function handleStart(ev) {
     const [date,time]  = ev.target.value.split("T");
     const dt = ev.target['value'] + ':00.000Z';
        setStartDatetime(dt)
    }

    function handleEnd(ev) {
     const [date,time]  = ev.target.value.split("T");
     const dt = ev.target['value'] + ':00.000Z';
        setEndDatetime(dt)
    }

    console.log(enddatetime,startdatetime);
  
    function handleCreate(){
        let payload = {...schema,endDate:enddatetime,project:myproject,startDate:startdatetime,notes:mynotes,status:mystatus};
      
        setTimeout(()=>{
            dispatch(POST_DATA(payload)).then(()=>{
                    handleDrawer(false);
                    dispatch(GET_DATA())
                })
            },1000)
    }
    
  

  return (
    <div className="w-full h-screen   fixed z-10 top-0  flex justify-between">
        <div className="w-[70%] opacity-70 bg-black hover:cursor-default" onClick={()=>handleDrawer(false)}></div>
<div  className="relative z-50 w-[30%] bg-white px-8 py-4"  aria-hidden="true">
    <div className="flex justify-between items-center">
        <button type="button" onClick={()=>handleDrawer(false)}  className="text-gray-400 bg-transparent hover:bg-gray-200">
        <GrFormClose size={"25px"}/>
        </button>

   <div className="flex justify-items-end items-end flex-col">
        <h1 className="text-black text-sm font-bold">Manoj Attri</h1>
        <h1 className="text-gray-600  text-sm font-semibold">manojattri181@gmail.com</h1>
   </div>
    </div>

    {/* operations */}
<div className="mt-2">

     <div>
        <div className="px-2 py-1 border border-solid border-gray-200 rounded-md">
        <p className="text-sm font-light">Project/Task</p>
        <div className="mt-1">
        <p className="font-bold text-base text-black">Project name</p>
        <input className="font-xs font-semibold text-gray-800 outline-none  focus:outline-none" type="text" placeholder="" value={myproject}  onChange={(e)=>setProject(e.target.value)} required="true"/>
        </div>
     </div>
  {/* Time tags */}
     <div className="flex gap-x-4 mt-6 px-2 py-1">
     <div className="border border-solid border-gray-200 rounded-md">
          <p className="text-base font-semibold">Start Time</p>
          <input type="datetime-local"  value={(startdatetime || '').toString().substring(0, 16)}  onChange={handleStart} required="true"/>
     </div>
     <div className="border border-solid border-gray-200 rounded-md">
          <p className="text-base font-semibold">End Time</p>
          <input type="datetime-local"   value={(enddatetime || '').toString().substring(0, 16)}  onChange={handleEnd}  required="true"/>
     </div>
     </div>
         
    <div className="mt-4  px-2 py-1"> 
    <textarea  onChange={(e)=>setNotes(e.target.value)}   rows="3" class="px-0 py-1 w-full text-sm text-gray-900  bg-white border  focus:outline focus:outline-blue-300 rounded-lg  border-gray-200" placeholder="Notes.." required="true"></textarea>
    </div>
     {/* Status */}
    <div className="px-2 py-1 w-fit flex gap-x-12 items-center border border-solid border-gray-200 rounded-md">
    <p className="font-bold text-base text-black">Status</p>
         <select className=" font-semibold text-sm text-black hover:cursor-pointer" defaultValue={mystatus} onChange={(e)=>setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value={true} >Done</option>
            <option value={false}>Pending</option>
         </select>
    </div>
    
    {/* Delete option */}
    {/* <div className="px-2 py-1 w-fit flex gap-x-2 items-center mt-4 hover:cursor-pointer" onClick={()=>handleDelete(_id)}>
        <FaTrashAlt size="16px" color="red" />
        <p className="text-base font-semibold text-red-600 uppercase">Delete</p>
    </div> */}
   {/* Cancel and save */}
  
   <div className="fixed bottom-6 right-10 flex gap-x-10 items-center" onClick={handleCreate}>
      <p className="text-xs font-semibold text-gray-600 hover:underline hover:text-gray-900 hover:cursor-pointer" onClick={()=>handleDrawer(false)}>CANCEL</p>
      <button className="w-28 p-2 bg-black text-white hover:text-gray-400 rounded-lg">SAVE</button>
   </div>

   </div>
  </div>
</div>
    </div>
  )
}

export default Projectdrawer;