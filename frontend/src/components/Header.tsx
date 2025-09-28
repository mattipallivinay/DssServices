// Header.tsx
import { Menu } from "lucide-react";
import "../components/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo at left */}
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Company name centered */}
      <h1 className="company-name">DSS SERVICES</h1>

      {/* Menu at right */}
      <button className="menu-button">
        <Menu size={28} />
      </button>
    </header>
  );
};

export default Header;
