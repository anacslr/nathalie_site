import "./navbar.css";

import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <h1 className="navbar-title">Nathalie Guy</h1>
      <ul>
        <li className="nav-item">
          <NavLink
            to="/actualites"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Mes actualités
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
