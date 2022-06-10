import React from "react";
import { useState, useEffect } from "react";
import { fetchSingleVideo } from "../../services/fetchSingleVideo";
import { useNavigate, useParams } from "react-router-dom";
import { useData } from "../../context/dataContext";
import "./single-video.css";
import ReactPlayer from "react-player";

function SingleVideo() {
  const { state } = useData();
  console.log("Single video page", state.videos);
  const { videoId } = useParams();

  const [singleVideo, setSingleVideo] = useState({});

  useEffect(() => {
    fetchSingleVideo(videoId, setSingleVideo);
  }, [videoId]);

  return (
    <div className="big-flex">
      <div className="playing-video">
        <ReactPlayer
          width="54rem"
          height="38rem"
          url={`https://www.youtube.com/watch?v=${singleVideo._id}`}
          controls={true}
        />
        <h2>{singleVideo.title}</h2>
        <div className="video-options">
          <button className="btn-options">
            <i
              class="fa-regular fa-thumbs-up video-btns"
              aria-hidden="true"
            ></i>
            Like
          </button>
          <button className="btn-options">
            <i class="fa fa-clock-o video-btns" aria-hidden="true"></i>
            Watch Later
          </button>
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
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${eachVideo._id}`}
                    width="24rem"
                    height="20rem"
                  />
                  <p>{eachVideo.title}</p>
                </div>
              );
            }
          })
          .slice(0, 4)}
      </div>
    </div>
  );
}

export default SingleVideo;
