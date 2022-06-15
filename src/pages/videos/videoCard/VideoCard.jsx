import React from "react";
import { useData } from "../../../context/dataContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addToLiked,
  removeFromLiked,
} from "../../../services/likedVideoService";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../../services/watchLaterService";

import { useAuth } from "../../../context/auth-context";
import { PlaylistModal } from "../../../components/playlist/playlist-modal/PlaylistModal";
import "./video-card.css";

function VideoCard({ video }) {
  const { state, dispatch } = useData();
  const { _id, title, category, inLiked, inWatchLater } = video;
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);

  console.log("state ", state);
  const {
    auth: { isAuth, token },
  } = useAuth();

  const likeHandler = () => {
    if (token) {
      if (inLiked) {
        removeFromLiked(dispatch, _id, token);
      } else {
        addToLiked(dispatch, video, token);
        console.log("added to liked");
      }
    } else {
      navigate("/login");
    }
  };

  const watchLaterHandler = () => {
    if (token) {
      if (inWatchLater) {
        removeFromWatchLater(dispatch, _id, token);
      } else {
        addToWatchLater(dispatch, video, token);
        console.log("added to watch later");
      }
    } else {
      navigate("/login");
    }
  };

  const navigate = useNavigate();

  const openSingleVideo = () => {
    navigate(`/video/${_id}`);
  };
  return (
    <>
      <div className="video-card" id={_id}>
        <div className="video-card-img">
          <img
            onClick={openSingleVideo}
            className="video-img"
            src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
            alt={title}
          />
          <p>{title}</p>
          <div className="cat-options">
            <p className="category-name">{category}</p>
            <div className="like-watch-options">
              <span onClick={likeHandler}>
                {inLiked ? (
                  <i
                    class="fa fa-thumbs-up  video-icons"
                    style={{ color: `var(--secondary-dark)` }}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i
                    class="fa fa-thumbs-up  video-icons"
                    aria-hidden="true"
                  ></i>
                )}
              </span>

              <span onClick={watchLaterHandler}>
                {inWatchLater ? (
                  <i
                    class="fa fa-clock-o  video-icons"
                    style={{ color: `var(--secondary-dark)` }}
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i class="fa fa-clock-o video-icons" aria-hidden="true"></i>
                )}
              </span>
              <span
                onClick={() => {
                  isAuth ? setShowPlaylistModal(true) : navigate("/login");
                }}
              >
                <i class="fas fa-folder-plus folder-color video-icons"></i>
              </span>
              {showPlaylistModal ? (
                <PlaylistModal
                  video={video}
                  setShowPlaylistModal={setShowPlaylistModal}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
