import React from "react";
import "../videos/videoCard/video-card.css";
import "../liked/liked.css";
import { useData } from "../../context/dataContext";
import LikedCard from "../../components/liked-card/LikedCard";

function WatchLater({ video }) {
  console.log("here vide is", video);
  const { state } = useData();

  console.log("state in liked page", state);
  return (
    <>
      <div className="liked-section">
        {state.watchLater.length === 0 ? (
          <div>
            <h2>Your watch later list is empty!</h2>
          </div>
        ) : (
          <>
            {state.watchLater.map((video) => {
              return <LikedCard video={video} key={video._id} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default WatchLater;
