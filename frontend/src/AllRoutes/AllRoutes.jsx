import React from "react";
import { Routes, Route } from "react-router-dom";
import Onlinetimesheet from "../Pages/Features/OnlineTimeSheet";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
// import Kanban from "../Pages/PrivatePages/Kanban/Kanban";
import Projects from "../Pages/PrivatePages/Projects/Projects";
import Reports from "../Pages/Reports/Reports";
import Signup from "../Pages/Signup";
import Timecards from "../Pages/Features/Timecards"
import AttendanceTracking from "../Pages/Features/AttendanceTracking";


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/featues/timecards" element={<Timecards/>}/>
        {/* featurespages */}
        <Route path="/features/attendanceTracking" element={<AttendanceTracking />} />
        <Route path="/features/onlinetimesheet" element={<Onlinetimesheet />} />
        {/* Private routes */}
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/kanban" element={<Kanban />} /> */}
        {/* Terminal Routes */}
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
