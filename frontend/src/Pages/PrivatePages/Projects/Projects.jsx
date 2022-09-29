import React from "react";
import MidCols from "./MidCols";
// import RightDrawer from "./RightDrawer";
import Sidebar from "./Sidebar";

const Projects = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <div className="text-left">
            <h2 className=" font-bold text-2xl mt-4 mb-6">
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
