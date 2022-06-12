import React from "react";
import "../videos/videoCard/video-card.css";
import "../liked/liked.css";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import VideoCard from "../videos/videoCard/VideoCard";

function WatchLater() {
  const { auth } = useAuth();
  const { state } = useData();

  const watchLaterList = state.videos.filter((video) => video.inWatchLater);

  return (
    <>
      {auth.isAuth === true ? (
        <div className="liked-section">
          {watchLaterList.length === 0 ? (
            <div>
              <h2>Your watch later list is empty!</h2>
            </div>
          ) : (
            <>
              {watchLaterList.map((video) => {
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

export default WatchLater;
