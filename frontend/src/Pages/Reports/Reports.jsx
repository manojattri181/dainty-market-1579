import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_DATA } from '../../Redux/AppReducer/action';
import TerminalNavbar from '../TerminalNavbar/TerminalNavbar';
import Drawer from './Drawer';
const Reports = () => {
  const data = useSelector((store)=>store.AppReducer.data);
  const dispatch = useDispatch();
  const [drawer,setDrawer] = useState(false);

  const handleDrawer =(prop)=>{
    console.log("data");
    setDrawer(prop);
   }
   console.log(data);

   useEffect(()=>{
     dispatch(GET_DATA());
   },[])

  return (
    <div>
      <TerminalNavbar />
      <div className='w-full flex justify-start items-center'>
        <div className="flex justify-start items-center gap-x-4 pl-4 m-1">
          <p className='text-base font-bold  text-black'>Timesheets</p>
             
    <div class="relative">
      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
      </div>
      <input type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date"/>
    </div>

        </div>
      </div>
      <div>    
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="max-w-screen-md text-sm text-left text-gray-500  overflow-hidden ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300 "/>
                              <label for="checkbox-all" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="py-3 px-6">
                        USER
                      </th>
                      <th scope="col" className="py-3 px-6">
                          PROJECT
                      </th>
                      <th scope="col" className="py-3 px-6">
                          TASK
                      </th>
                      <th scope="col" className="py-3 px-6">
                        DONE
                      </th>
                      <th scope="col" className="py-3 px-6">
                        CLIENT
                      </th>
                      <th scope="col" className="py-3 px-6">
                          NOTES
                      </th>
                      <th scope="col" className="py-3 px-6">
                          DATE
                      </th>
                      <th scope="col" className="py-3 px-6">
                          DURATION
                      </th>
                      <th scope="col" className="py-3 px-6">
                          FROM
                      </th>
                      <th scope="col" className="py-3 px-6">
                        TO
                      </th>
                    
                  </tr>
              </thead>
              <tbody >
                {   data?.map((items)=>(
    
                     <tr className="bg-gray-200 border-b  hover:bg-gray-300 hover:cursor-pointer overflow-hidden " onClick={()=>handleDrawer(true)}>

                      <td className="p-4 w-4" >
                          <div className="flex items-center">
                              <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 rounded border-gray-300"/>
                              <label for="checkbox-table-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="py-1   truncate text-sm  px-1 ">
                        Manoj Attri
                      </th>
                      <td className="py-1 truncate   text-sm   px-4">
                         {items.project}
                      </td>
                      <td className="py-1  w-20   text-sm truncate  px-4">
                        {items.task}
                      </td>
                      <td className="py-2  px-4  -ml-4">
                        {
                          items.status==="Done"? 
                          <div className="h-2.5 w-2.5 rounded-full ml-4 bg-green-400 mr-2"></div> 
                          : <div className="h-2.5 w-2.5 rounded-full ml-4 bg-gray-500 mr-2"></div> 
                        }
                      </td>
                      <td className="py-1 w-20 text-sm   truncate  px-4">
                          {items.client}
                      </td>
                      <td className="py-1   w-10 overflow-hidden  text-sm  truncate px-4">
                          {items.notes}
                      </td>
                      <td className="py-1  w-20  text-sm  truncate px-4">
                          {items.startDate}
                      </td>
                      <td className="py-1  text-sm  px-4">
                          {items.duration}
                      </td>
                      <td className="py-1  w-20 text-sm  truncate px-4">
                        {items.startTime}
                      </td>
                      <td className="py-1 w-20 text-sm  truncate px-4">
                          {items.endTime}
                      </td>
                  </tr>
                ))
              }
              {drawer && <Drawer  handleDrawer={handleDrawer} /> }
              </tbody>
          </table>
      </div>

     
      </div>
    </div>
  )
}

export default Reports;



{/* <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> */}