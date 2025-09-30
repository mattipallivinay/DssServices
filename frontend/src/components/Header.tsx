import { useState } from "react";
import { Menu } from "lucide-react";
import "../components/Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo at left */}
      <div className="logo-container">
        <img
          src="https://imagefa.st/images/2025/09/30/IMG_1322.jpg"
          alt="Logo"
          className="logo"
        />
      </div>

      {/* Company name centered */}
      <h1 className="company-name">DSS SERVICES</h1>

      {/* Menu at right */}
      <div className="menu-wrapper">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={28} />
        </button>

        {menuOpen && (
          <div className="dropdown">
            <a href="/user-login">User Login</a><br></br>
            <a href="/manager-login">Manager Login</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
