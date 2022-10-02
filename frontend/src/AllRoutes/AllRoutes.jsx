import { Routes, Route } from "react-router-dom";

import Onlinetimesheet from "../Pages/Features/OnlineTimeSheet";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";
import Login from "../Pages/Login";
import Projects from "../Pages/Projects/Projects";
import Reports from "../Pages/Reports/Reports";
import Signup from "../Pages/Signup";
import Timecards from "../Pages/Features/Timecards";
import AddTaskModel from "../Pages/hours/weekly-modals/AddTaskModel";
import Hours from "../Pages/hours/weekly-modals/Hours";
import Blog from "../Pages/Blog/Blog";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/blog" element={<Blog />} />


        {/* featurespages */}
        {/* <Route path="/features/attendancetracking" element={<Attendancetracking />} />  */}
        <Route path="/features/timecards" element={<Timecards />} />
        <Route path="/features/onlinetimesheet" element={<Onlinetimesheet />} />

        {/* Private routes */}
        <Route path="/hours" element={<Hours />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
