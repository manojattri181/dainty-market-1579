import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Integrations from "../Pages/Integrations/Integrations";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/integrations" element={<Integrations />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
