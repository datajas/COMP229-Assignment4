import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav>
      <div className="container nav-inner">
        <div className="logo">
          <img src="/favicon.svg" alt="JS logo" />
          <span>Jasmine • Portfolio</span>
        </div>

        <div className="nav-links">

          {/* Public Links */}
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* Auth Links */}
          {!user && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          )}

          {/* Admin Links */}
          {user?.role === "admin" && (
            <>
              <NavLink to="/admin/dashboard">Dashboard</NavLink>
            </>
          )}

          {/* Logout */}
          {user && (
            <button 
              onClick={handleLogout} 
              style={{ marginLeft: "10px", cursor: "pointer" }}
              className="logout-btn"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
