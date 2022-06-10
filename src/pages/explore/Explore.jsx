import React from "react";
import { Sidebar } from "../../components";
import { Navbar } from "../../components/navbar/Navbar";
// import Navbar from "../../components/navbar/Navbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import VideoList from "../videos/videoList/VideoList";

function Explore() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <VideoList />
    </div>
  );
}

export default Explore;
