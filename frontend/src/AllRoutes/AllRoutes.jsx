import React from "react";
import { Routes, Route } from "react-router-dom";
import Attendancetracking from "../Pages/Features/Attendancetracking";
import Onlinetimesheet from "../Pages/Features/OnlineTimeSheet";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/integrations" element={<Integrations />} />
        {/* featurespages */}
        <Route path="/features/attendancetracking" element={<Attendancetracking />} />
        <Route path="/features/onlinetimesheet" element={<Onlinetimesheet />} />
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
