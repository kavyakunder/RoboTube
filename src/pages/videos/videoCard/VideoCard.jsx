import React from "react";
import "./video-card.css";

function VideoCard({ video }) {
  return (
    <>
      <div className="video-card">
        <div className="video-card-img">
          <img
            className="video-img"
            src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
            alt={video.title}
          />
          <p>{video.title}</p>
          <p className="category-name">{video.category}</p>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
