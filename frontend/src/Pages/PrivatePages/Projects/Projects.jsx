import React, { useEffect, useState } from "react";
import MidCols from "./MidCols";
import Sidebar from "./Sidebar";
import TerminalNavbar from '../../TerminalNavbar/TerminalNavbar';
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../../../Redux/AppReducer/action";

const Projects = () => {
  const dispatch = useDispatch();
  const storedata = useSelector((store)=>store.AppReducer.data);
  console.log(storedata)

  useEffect(()=>{
   dispatch(GET_DATA());
  },[])
  return (
    <>
       <TerminalNavbar  />
      <div className="flex flex-row">
     
        <Sidebar storeprojects={storedata} />
        <div>
          <div className="text-left  space-x-80 px-1.5">
            <h2 className=" font-bold text-2xl mt-4 mb-2">
              Project A [Sample]
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <MidCols />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
