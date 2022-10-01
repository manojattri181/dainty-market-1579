import React from "react";
import MidCols from "./MidCols";
import Sidebar from "./Sidebar";

import { DndProvider } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";

const Projects = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <div className="text-left  space-x-80 px-1.5">
            <h2 className=" font-bold text-2xl mt-4 mb-2">
              Project A [Sample]
            </h2>
          </div>
          <div className="flex flex-row">
            <div>
              <DndProvider>
                <MidCols />
              </DndProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
