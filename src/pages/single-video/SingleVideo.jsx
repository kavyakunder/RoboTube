import React from "react";
import { useState, useEffect } from "react";
import { fetchSingleVideo } from "../../services/fetchSingleVideo";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/dataContext";
import { useAuth } from "../../context/auth-context";
import { addToLiked, removeFromLiked } from "../../services/likedVideoService";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../services/watchLaterService";
import { addToHistory, removeFromHistory } from "../../services/historyService";
import ReactPlayer from "react-player";
import "./single-video.css";
import VideoCard from "../videos/videoCard/VideoCard";

function SingleVideo() {
  const { state, dispatch } = useData();
  const { videoId } = useParams();
  const {
    auth: { token },
  } = useAuth();
  const { navigate } = useNavigate();
  const [singleVideo, setSingleVideo] = useState({});

  const getSingleVideo = state.videos?.find((video) => video._id === videoId);
  const inLiked = getSingleVideo && getSingleVideo.inLiked;
  const inWatchLater = getSingleVideo && getSingleVideo.inWatchLater;
  const inHistory = getSingleVideo && getSingleVideo.inHistory;

  useEffect(() => {
    fetchSingleVideo(videoId, setSingleVideo);
  }, [videoId]);

  const likeHandler = () => {
    if (token) {
      if (inLiked) {
        removeFromLiked(dispatch, getSingleVideo._id, token);
      } else {
        addToLiked(dispatch, getSingleVideo, token);
        console.log("added to liked");
      }
    } else {
      navigate("/login");
    }
  };

  const watchLaterHandler = () => {
    if (token) {
      if (inWatchLater) {
        removeFromWatchLater(dispatch, getSingleVideo._id, token);
      } else {
        addToWatchLater(dispatch, getSingleVideo, token);
        console.log("added to liked");
      }
    } else {
      navigate("/login");
    }
  };

  const historyHandler = () => {
    if (token) {
      if (inHistory) {
        removeFromHistory(dispatch, getSingleVideo._id, token);
      } else {
        addToHistory(dispatch, getSingleVideo, token);
        console.log("added to history");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="big-flex">
      <div className="playing-video">
        <ReactPlayer
          onClick={historyHandler}
          width="54rem"
          height="38rem"
          url={`https://www.youtube.com/watch?v=${singleVideo._id}`}
          controls={true}
        />
        <h2>{singleVideo.title}</h2>
        <div className="video-options">
          <span onClick={likeHandler}>
            {inLiked ? (
              <button className="btn-options-clicked">
                <i
                  class="fa-solid fa-thumbs-up video-btns"
                  aria-hidden="true"
                ></i>
                Liked
              </button>
            ) : (
              <button className="btn-options">
                <i
                  class="fa-regular fa-thumbs-up video-btns"
                  aria-hidden="true"
                ></i>
                Like
              </button>
            )}
          </span>

          <span onClick={watchLaterHandler}>
            {inWatchLater ? (
              <button className="btn-options-clicked">
                <i class="fa-solid fa-clock video-btns" aria-hidden="true"></i>
                Watch Later
              </button>
            ) : (
              <button className="btn-options">
                <i class="fa fa-clock-o video-btns" aria-hidden="true"></i>
                Watch Later
              </button>
            )}
          </span>

          <button className="btn-options">
            <i class="fa fa-floppy-o video-btns" aria-hidden="true"></i>
            Save to playlist
          </button>
        </div>
        <hr />

        <p>{singleVideo.description}</p>
      </div>
      <div className="flex-box">
        {state.videos
          .map((eachVideo) => {
            if (eachVideo.id !== singleVideo.id) {
              return (
                <div className="flex-card">
                  <VideoCard key={eachVideo._id} video={eachVideo} />
                </div>
              );
            }
          })
          .slice(0, 5)}
      </div>
    </div>
  );
}

export default SingleVideo;
