import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.css";
function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="lists">
          <Link to="/">
            <li className="sidebar-links">Home</li>
          </Link>
          <Link to="/videos">
            <li className="sidebar-links">Explore</li>
          </Link>
          <Link to="/playlist">
            <li> Playlist</li>
          </Link>
          <Link to="/liked">
            <li>Liked</li>
          </Link>
          <Link to="/watchlater">
            <li>Watch Later</li>
          </Link>
          <Link to="/history">
            <li>History</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export { Sidebar };
