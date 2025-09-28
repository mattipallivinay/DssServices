// BottomNav.tsx
import { useState } from "react";
import { Home, FileText, Users, HelpCircle } from "lucide-react";
import styled from "styled-components";

const navItems = [
  { id: "home", label: "Home", icon: <Home size={28} /> },
  { id: "feed", label: "Feed", icon: <FileText size={28} /> },
  { id: "collab", label: "Collab", icon: <Users size={28} /> },
  { id: "help", label: "Help", icon: <HelpCircle size={28} /> },
];

const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  z-index: 50;
`;

const NavButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.active ? "#FFD700" : "#888")};
  transition: all 0.3s;

  &:hover {
    color: #FFD700;
  }

  div {
    background-color: ${(props) => (props.active ? "#FFD700" : "transparent")};
    padding: 8px;
    border-radius: 50%;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    margin-top: 4px;
    font-size: 12px;
  }
`;

const BottomNav = () => {
  const [active, setActive] = useState("home");

  return (
    <BottomNavWrapper>
      {navItems.map((item) => (
        <NavButton
          key={item.id}
          active={active === item.id}
          onClick={() => setActive(item.id)}
        >
          <div>{item.icon}</div>
          <span>{item.label}</span>
        </NavButton>
      ))}
    </BottomNavWrapper>
  );
};

export default BottomNav;
