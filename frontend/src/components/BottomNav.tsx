import { useState } from "react";
import { Home, FileText, Users, HelpCircle } from "lucide-react";
import "./bottomnav.css"; // make sure to create this file

const BottomNav = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={26} /> },
    { id: "feed", label: "Feed", icon: <FileText size={26} /> },
    { id: "collab", label: "Collab", icon: <Users size={26} /> },
    { id: "help", label: "Help", icon: <HelpCircle size={26} /> },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`nav-btn ${active === item.id ? "active" : ""}`}
        >
          <div className="icon">{item.icon}</div>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
