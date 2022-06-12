import React from "react";
import "../videos/videoCard/video-card.css";
import "../liked/liked.css";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import VideoCard from "../videos/videoCard/VideoCard";

function History() {
  const { auth } = useAuth();
  const { state } = useData();

  const historyList = state.videos.filter((video) => video.inHistory);

  return (
    <>
      {auth.isAuth === true ? (
        <div className="liked-section">
          {historyList.length === 0 ? (
            <div>
              <h2>Your history is empty!</h2>
            </div>
          ) : (
            <>
              {historyList.map((video) => {
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

export default History;
