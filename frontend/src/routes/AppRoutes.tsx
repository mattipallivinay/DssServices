import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home"; 
import Collab from "../pages/collab";
import Services from "../pages/services";
import Help from "../pages/help";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
