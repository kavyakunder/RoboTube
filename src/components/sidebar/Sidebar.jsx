import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";
function Sidebar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#CFFAFE" : "white",
      color: isActive ? "var(--primary-color)" : "var(--secondary-dark)",
    };
  };
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="lists">
          <NavLink to="/" style={navLinkStyle}>
            <li className="sidebar-links">
              <i class="fa-solid fa-house"></i>
              Home
            </li>
          </NavLink>
          <NavLink to="/videos" style={navLinkStyle}>
            <li className="sidebar-links">
              <i class="fa-solid fa-compass"></i>
              Explore
            </li>
          </NavLink>
          <NavLink to="/playlists" style={navLinkStyle}>
            <li>
              <i class="fa-solid fa-folder-plus"></i>
              Playlist
            </li>
          </NavLink>
          <NavLink to="/liked" style={navLinkStyle}>
            <li>
              <i class="fa-solid fa-thumbs-up"></i>
              Liked
            </li>
          </NavLink>
          <NavLink to="/watchlater" style={navLinkStyle}>
            <li>
              <i class="fa-solid fa-clock"></i>
              Watch Later
            </li>
          </NavLink>
          <NavLink to="/history" style={navLinkStyle}>
            <li>
              <i class="fa-solid fa-clock-rotate-left"></i>
              History
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export { Sidebar };
