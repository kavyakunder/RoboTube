import React from "react";
import { useData } from "../../../context/dataContext";
import { useNavigate } from "react-router-dom";
import "./video-card.css";

function VideoCard({ video }) {
  const { state, dispatch } = useData();
  const { _id, title, category } = video;
  console.log("state ", state);

  const navigate = useNavigate();

  const openSingleVideo = () => {
    navigate(`/video/${_id}`);
  };
  return (
    <>
      <div className="video-card" id={_id} onClick={openSingleVideo}>
        <div className="video-card-img">
          <img
            className="video-img"
            src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
            alt={title}
          />
          <p>{title}</p>
          <div className="cat-options">
            <p className="category-name">{category}</p>
            <div className="like-watch-options">
              {state.likes.find((prod) => prod._id === _id) ? (
                <i
                  class="fa fa-thumbs-up"
                  style={{ color: "#06b6d4" }}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-thumbs-up"
                  onClick={() => {
                    dispatch({
                      type: "LIKED_VIDEOS",
                      payload: video,
                    });
                  }}
                  aria-hidden="true"
                ></i>
              )}

              {state.watchLater.find((prod) => prod._id === _id) ? (
                <i
                  class="fa fa-clock-o"
                  style={{ color: "#06b6d4" }}
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-clock-o"
                  onClick={() => {
                    dispatch({
                      type: "WATCH_LATER",
                      payload: video,
                    });
                  }}
                  aria-hidden="true"
                ></i>
              )}

              {/* <i aria-hidden="true"></i> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
