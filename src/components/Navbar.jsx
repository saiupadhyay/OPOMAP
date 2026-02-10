import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left" onClick={() => navigate("/")}>
        🚒 <span className="brand" clickable>OPOMAP</span>
      </div>

      {/* CENTER */}
      <nav className="nav-center">
        <NavLink to="/app" end>
          🏠 Home
        </NavLink>
        <NavLink to="/app/profile">👤 Profile</NavLink>
        <NavLink to="/app/subscription">💳 Subscription</NavLink>
      </nav>

      {/* RIGHT (USER SECTION) */}
      <div className="nav-user">
        <div className="user-info">
          {/* <span className="user-icon">🌐</span> */}
          <div className="user-text">
            <span className="user-name">User Google</span>
            <span className="user-email">user@gmail.com</span>
          </div>
        </div>

        <button
          className="logout-btn"
          title="Logout"
          onClick={() => navigate("/signin")}
        >
          ↪
        </button>
      </div>
    </header>
  );
}
