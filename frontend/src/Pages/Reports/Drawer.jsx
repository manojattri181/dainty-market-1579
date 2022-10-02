import { useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import {GrFormClose} from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_DATA, GET_DATA, PATCH_DATA } from "../../Redux/AppReducer/action";

const Drawer = ({handleDrawer,data}) => {
    const dispatch =useDispatch();
    const {client,duration,endDate,startDate,status,project,task,_id,notes} = data;

    const [ myproject, setProject ] = useState(project||'Tracking Time');

    const [startdatetime,setStartDatetime]  = useState( startDate ||"");
    
    const [enddatetime,setEndDatetime]  = useState( endDate|| "");

    const [mynotes,setNotes] = useState(notes|| "");
    const [mystatus,setStatus] = useState(status|| false);
    
    function handleStart(ev) {
     console.log(ev.target.value)
     const [date,time]  = ev.target.value.split("T");
     const dt = ev.target['value'] + ':00.000Z';
        setStartDatetime(dt)
    }

    function handleEnd(ev) {
     const [date,time]  = ev.target.value.split("T");
     const dt = ev.target['value'] + ':00.000Z';
        setEndDatetime(dt)
    }

    function handleDelete(id){
        dispatch(DELETE_DATA(id)).then(()=>{
           handleDrawer(false);
           GET_DATA()
         });
    }
  
    function handlePatch(id){
        let payload = {...data,endDate:enddatetime,project:myproject,startDate:startdatetime,notes:mynotes,status:mystatus};
        console.log(id,payload)
        dispatch(PATCH_DATA({id,payload})).then(()=>{
            handleDrawer(false);
            GET_DATA()
        })
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
        <input className="font-xs font-semibold text-gray-800 outline-none  focus:outline-none" type="text" placeholder="" value={myproject}  onChange={(e)=>setProject(e.target.value)}/>
        </div>
     </div>
  {/* Time tags */}
     <div className="flex gap-x-4 mt-6 px-2 py-1">
     <div className="border border-solid border-gray-200 rounded-md">
          <p className="text-base font-semibold">Start Time</p>
          <input type="datetime-local" defaultValue={startDate} value={(startdatetime || '').toString().substring(0, 16)}  onChange={handleStart} />
     </div>
     <div className="border border-solid border-gray-200 rounded-md">
          <p className="text-base font-semibold">End Time</p>
          <input type="datetime-local"  defaultValue={endDate} value={(enddatetime || '').toString().substring(0, 16)}  onChange={handleEnd} />
     </div>
     </div>
         
    <div className="mt-4  px-2 py-1"> 
    <textarea value={mynotes} onChange={(e)=>setNotes(e.target.value)}   rows="3" class="px-0 py-1 w-full text-sm text-gray-900  bg-white border  focus:outline focus:outline-blue-300 rounded-lg  border-gray-200" placeholder="Notes.."></textarea>
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
    <div className="px-2 py-1 w-fit flex gap-x-2 items-center mt-4 hover:cursor-pointer" onClick={()=>handleDelete(_id)}>
        <FaTrashAlt size="16px" color="red" />
        <p className="text-base font-semibold text-red-600 uppercase">Delete</p>
    </div>
   {/* Cancel and save */}
  
   <div className="fixed bottom-6 right-10 flex gap-x-10 items-center" onClick={()=>handlePatch(_id)}>
      <p className="text-xs font-semibold text-gray-600 hover:underline hover:text-gray-900 hover:cursor-pointer" onClick={()=>handleDrawer(false)}>CANCEL</p>
      <button className="w-28 p-2 bg-black text-white hover:text-gray-400 rounded-lg">SAVE</button>
   </div>

   </div>
  </div>
</div>
    </div>
  )
}

export default Drawer;