import React from "react";
import "../../pages/videos/videoCard/video-card.css";
import { useData } from "../../context/dataContext";
function LikedCard({ video }) {
  const { _id, title, category } = video;
  const { dispatch } = useData();
  return (
    <>
      <div className="video-card" id={_id}>
        <div className="video-card-img">
          <img
            className="video-img"
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            alt={title}
          />
          <p>{title}</p>
          <p className="category-name">{category}</p>
          <button
            onClick={() => dispatch({ type: "REMOVED_LIKED", payload: _id })}
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
}

export default LikedCard;
