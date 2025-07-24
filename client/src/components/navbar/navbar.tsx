import "./navbar.css";

import { useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen((open) => !open);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav>
      <h1 className="navbar-title">Nathalie Guy</h1>
      <button
        className={`burger ${menuOpen ? "open" : ""}`}
        onClick={handleBurgerClick}
        aria-label="Ouvrir le menu"
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav-list ${menuOpen ? "show" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/actualites"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            Mes actualités
          </NavLink>
          <NavLink
            to="/apropos"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleLinkClick}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
