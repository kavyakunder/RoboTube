import React from "react";
import "../videos/videoCard/video-card.css";
import "./liked.css";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import VideoCard from "../videos/videoCard/VideoCard";

function Liked() {
  const { auth } = useAuth();
  const { state } = useData();

  const likedList = state.videos.filter((video) => video.inLiked);

  return (
    <>
      {auth.isAuth === true ? (
        <div className="liked-section">
          {likedList.length === 0 ? (
            <div>
              <h2>Your liked list is empty!</h2>
            </div>
          ) : (
            <>
              {likedList.map((video) => {
                return <VideoCard video={video} key={video._id} />;
              })}
            </>
          )}
        </div>
      ) : (
        <h1>
          <Link to="/login"></Link>
        </h1>
      )}
    </>
  );
}

export default Liked;
