import React from "react";
import Navbar from "../Navbar/Navbar";
import AppGrid from "./AppGrid";
import TopSection from "./TopSection";
import TrackSection from "./TrackSection";

const Integrations = () => {
  document.title = "Time Tracking Integrations - Tracking Time";
  return (
    <>
       <Navbar/>
       <div className=" lg:ml-44 lg:w-3/4 md:text-center sm:text-center md:w-full m-auto sm:w-full ">
        <TopSection />
        <AppGrid />
        <TrackSection />
      </div>
    </>
  );
};

export default Integrations;
