import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "../pages/splash";
import Login from "../pages/login";
import Home from "../pages/home";
import Services from "../pages/services";
import Collab from "../pages/collab";
import Help from "../pages/help";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/collab" element={<Collab />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
