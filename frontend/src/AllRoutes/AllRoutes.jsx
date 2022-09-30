import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Attendancetracking from "../Pages/Features/AttendanceTracking";
import Timecards from "../Pages/Features/Timecards"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/featues/attendancetracking" element={<Attendancetracking/>}/>
        <Route path="/featues/timecards" element={<Timecards/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
