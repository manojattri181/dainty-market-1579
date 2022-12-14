import React from "react";
import { useWindowSize } from "../Integrations/useWindowSizeHook";
import { AppGridData } from "./AppGrid.data";
function AppGrid() {
  const size = useWindowSize();
  console.log(size);
  return (
    <div className=" grid sm:grid lg:grid-cols-3 grid-cols-2 mt-14 md:w-11/12 md:m-auto gap-8 sm:w-11/12 sm:m-auto">
      {AppGridData.map((e, i) => (
        <div className="flex flex-col items-center justify-center mt-10 cursor-pointer m-auto" key={i}>
          <div className=" p-4 shadow-xl w-20 h-20 rounded-lg">
            <img src={e.img} className=" lg:ml-0 md:ml-0 " alt="app" />
          </div>
          {size.width  && (
            <>
              <p className=" font-bold  mt-6 mb-6">{e.name}</p>
              {size.width > 920? <p className=" font-medium text-base text-gray-500">{e.des}</p> : ""}
              
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default AppGrid;
