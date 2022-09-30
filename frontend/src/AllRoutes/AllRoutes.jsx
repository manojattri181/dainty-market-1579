import React from "react";
import { Routes, Route } from "react-router-dom";
import AttendanceTracking from "../Pages/Features/AttendanceTracking";
import Onlinetimesheet from "../Pages/Features/OnlineTimeSheet";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
import Projects from "../Pages/PrivatePages/Projects/Projects";
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
        <Route
          path="/features/attendanceTracking"
          element={<AttendanceTracking />}
        />
        <Route path="/features/onlinetimesheet" element={<Onlinetimesheet />} />

        {/* Private routes */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
