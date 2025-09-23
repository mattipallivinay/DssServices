import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Services from "../pages/services";
import Collab from "../pages/collab";
import Help from "../pages/help";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
