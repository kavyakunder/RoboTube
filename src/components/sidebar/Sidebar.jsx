import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="lists">
          <Link to="/">
            <li className="sidebar-links">
              <i class="fa-solid fa-house"></i>
              Home
            </li>
          </Link>
          <Link to="/videos">
            <li className="sidebar-links">
              <i class="fa-solid fa-compass"></i>
              Explore
            </li>
          </Link>
          <Link to="/playlists">
            <li>
              <i class="fa-solid fa-folder-plus"></i>
              Playlist
            </li>
          </Link>
          <Link to="/liked">
            <li>
              <i class="fa-solid fa-thumbs-up"></i>
              Liked
            </li>
          </Link>
          <Link to="/watchlater">
            <li>
              <i class="fa-solid fa-clock"></i>
              Watch Later
            </li>
          </Link>
          <Link to="/history">
            <li>
              <i class="fa-solid fa-clock-rotate-left"></i>
              History
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export { Sidebar };
