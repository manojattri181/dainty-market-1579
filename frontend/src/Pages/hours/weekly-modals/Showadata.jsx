import { Button, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { DeleteApi, getApi, ToggleApi } from './Reducer/action'
import { ImCross } from "react-icons/im"
import { MdTimer } from "react-icons/md"
const Showdata = ({week,day, date}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const { data } = useSelector((state) => state.task)
    const [task,setTask] = useState([])
    function getTask(){
        fetch("http://localhost:8080/task").then((res)=>res.json()).then((res)=>{setTask([...task,...res])}).catch((err)=> console.log(err))
    }

    useEffect(()=>{
        getTask()
        // console.log("task", task)
        
    },[])
    
let p = task.filter((el) => (el.day === day))
    // const dispatch = useDispatch()




    const handleDelete = (e) => {
        // dispatch(DeleteApi(id))
       
        fetch(`http://localhost:8080/task/delete/${e._id}`,{
            method:"DELETE",
            // headers:{
            //     "content-type":"application/json"
            // },
            // body:JSON.stringify(e._id)
        }).then((res)=>res.json()).then((res)=>console.log(res.msg)).catch((err)=> console.log(err))

        window.location.reload()


    }
    const handleToggle = (id, status) => {
        console.log(status)
        data.map((el)=>{
            if(el.id===id){
                
                return ({...el,status:!status})
            }
            else{
                return el
            }
        })
        
        // dispatch(ToggleApi(id, status))
    }
    
    return (

        <div  >
            <Button onClick={onOpen}  w="80%" h="10px"  display='flex' margin="auto" mb="5px" mt="5px" ></Button>
            {p.map((e) => (
                <div className=" rounded-xl px-2 py-2 my-2 hover:border border-black text-white" key={e.id} style={{background:(e.id)%2===0? "#3cbcfb":"#3cbcfb"}}>
                    <div className="flex justify-between">
                        <div className="flex align-">
                            {/* <div><MdTimer style={{ width: "20px", height: "20px", color: "teal" }} /></div> */}
                            <div className='text-2xl '>{e.project}  </div>
                        </div>
                        {/* <button onClick={() => handleDelete(e.id)} ><ImCross style={{ color: "teal" }} /></button>*/}</div> 
                    <div className=" font-bold text-sm my-3">{e.notes}</div>
                    <div className='flex justify-between '>
                        <h5>{`${e.startDate} - ${e.endDate}`}</h5>
                        <h5>{e.duration}</h5>

                    </div>
                    {/* <div className=' text-sm'>{e.dis}</div> */}
                    <div className='flex justify-start'>
                     {/* <button onClick={()=>handleToggle(e.id,e.status)} style={{color:e.status?"green":"tomato"}} className=" font-medium">{e.status?"Completed":"Pending"}</button> */}
                     <button className='text-rose-500 font-bold' onClick={(el)=>handleDelete(e)}>Delete</button>
                   </div>
                </div>
            ))}
             
        </div>
    )
}

export default Showdata