import React from "react";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul className="lists">
          <li>Home</li>
          <li>Explore</li>
          <li>Playlist</li>
          <li>Liked</li>
          <li>History</li>
          <li>WatchLater</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
