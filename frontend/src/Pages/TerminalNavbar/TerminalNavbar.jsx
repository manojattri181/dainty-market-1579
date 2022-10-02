import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/signup/logo.svg";

import {BsClock} from "react-icons/bs";
import {BiPieChartAlt} from "react-icons/bi";
import {TbReport} from "react-icons/tb";
import {AiOutlineUser} from "react-icons/ai";
import {SiProgress} from "react-icons/si";
import {GiProgression} from "react-icons/gi";
import {MdOutlineAddLink} from "react-icons/md";
import {CgBox} from "react-icons/cg";
import {HiOutlineBriefcase} from "react-icons/hi";
import {MdOutlinePeopleAlt} from "react-icons/md";
import {GrShieldSecurity} from "react-icons/gr";
import { FaPlayCircle,FaPauseCircle } from "react-icons/fa";
import {BsFillArrowDownSquareFill } from "react-icons/bs";
import {FiUser } from "react-icons/fi";

const TerminalNavbar = () => {
   const [reports ,setReports] = useState(false);
   const [manage ,setManage] = useState(false);

  return (
    <div className='min-w-full h-10 px-4 py-3 flex justify-between items-center bg-gray-100'>
     <div className="flex items-center justify-start">
          <Link to="/">
            <img  className="w-36" src={logo} alt="" />
          </Link>
            <div className="w-fit flex pl-8 text-center items-center justify-start gap-x-2">
                <Link to="/hours">
                   <p className="w-fit px-2 py-2 font-bold text-sm  text-gray-700 rounded-md hover:bg-gray-200   hover:cursor-pointer" >Hours</p>
                </Link>
                <Link to="/projects">
                   <p className="w-fit px-2 py-2 font-bold text-sm  text-gray-700 rounded-md hover:bg-gray-200   hover:cursor-pointer" >Projects</p>
                </Link>
      
      <div className="relative">

        <button className="w-fit px-2 py-2 font-bold text-sm  text-gray-700 rounded-md hover:bg-gray-200    hover:cursor-pointer" onMouseOver={()=>setReports(true)}  onMouseLeave={()=>setReports(false)}>Reports</button>
      { reports &&   <div className="absolute z-30">
          <div className="w-48  pb-1 z-40 -ml-14 rounded-xl bg-white justify-center items-center shadow shadow-gray-300 "  onMouseOver={()=>setReports(true)} onMouseLeave={()=>setReports(false)}>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
           <Link to="/reports">
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-blue-100 rounded-sm">
                 <BsClock color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Timesheets</p>
            </li>
               </Link>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <BiPieChartAlt color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Dashboard</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <TbReport color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Project reports</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <AiOutlineUser color="black"  size="14px"/>
                 <p className="text-xs font-semibold">User reports</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <GiProgression color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Pace</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <SiProgress color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Shared reports</p>
            </li>
            </ul>
          </div>
         </div>
     }

     </div>
      <div className="relative">
        <button className="w-fit px-2 py-2 font-bold text-sm  text-gray-700 rounded-md hover:bg-gray-200 hover:cursor-pointer" onMouseOver={()=>setManage(true)}  onMouseLeave={()=>setManage(false)}>Manage</button>
      { manage &&   <div className="absolute z-30">
          <div className="w-48  pb-1 z-40 -ml-14 rounded-xl bg-white justify-center items-center shadow shadow-gray-300 "  onMouseOver={()=>setManage(true)} onMouseLeave={()=>setManage(false)}>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <MdOutlinePeopleAlt color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Team</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <BsClock color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Work schedules</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <HiOutlineBriefcase color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Clients</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <CgBox color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Custom fields</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <GrShieldSecurity color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Tracking policies</p>
            </li>
            <li className="w-full overflow-hidden flex justify-start items-center gap-x-2 pl-4 py-2 hover:cursor-pointer hover:bg-gray-100 rounded-sm">
                 <MdOutlineAddLink color="black"  size="14px"/>
                 <p className="text-xs font-semibold">Add-ons</p>
            </li>
            </ul>
          </div>
         </div>
     }
     </div>
   </div>
     </div>
  
    <div className="flex justify-between items-center gap-x-4">
         <button className="rounded-full bg-gray-300"><FaPlayCircle  size="20px"/></button>
         <button className="hidden rounded-full bg-gray-300"><FaPauseCircle  size="20px"/></button>
         <button className="w-fit px-3 py-1  text-white rounded-md font-semibold text-sm bg-gradient-to-r from-red-600 to-red-400">GET PRO</button>
         <button className="rounded-full  bg-white"><BsFillArrowDownSquareFill color="#00cccc"  size="25px"/></button>
         <button className="rounded-full  border-solid border border-black"><FiUser   size="25px"/></button>
    </div>
    </div>
  )
}

export default TerminalNavbar;