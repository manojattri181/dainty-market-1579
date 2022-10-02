import React from "react";
import MidCols from "./MidCols";
import Sidebar from "./Sidebar";
import TerminalNavbar from "../TerminalNavbar/TerminalNavbar";

const Projects = () => {
  return (
    <>
      <TerminalNavbar />
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <div className="text-left  space-x-80 px-8">
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
