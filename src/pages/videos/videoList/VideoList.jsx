import React from "react";
import { useData } from "../../../context/dataContext";
import VideoCard from "../videoCard/VideoCard";
import "./video-list.css";

function VideoList() {
  const { state, dispatch } = useData();
  const dispatchHandler = (category) => {
    dispatch({ type: "CATEGORY", payload: { category } });
  };

  function getFilteredVideos() {
    let filteredVideos = [];
    if (state.category === "All") {
      filteredVideos = state.videos;
    } else {
      filteredVideos = state.videos.filter(
        (singleVideo) => singleVideo.category === state.category
      );
    }
    return filteredVideos;
  }

  return (
    <>
      <div className="btns">
        {state.categories.map((category) => (
          <button
            key={category._id}
            onClick={() => dispatchHandler(category.categoryName)}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
      <div className="video-cards">
        {getFilteredVideos().map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </>
  );
}

export default VideoList;
