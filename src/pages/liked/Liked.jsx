import React from "react";
import "../videos/videoCard/video-card.css";
import "./liked.css";
import { useData } from "../../context/dataContext";
import LikedCard from "../../components/liked-card/LikedCard";

function Liked({ video }) {
  console.log("here vide is", video);
  const { state, dispatch } = useData();

  console.log("state in liked page", state);
  return (
    <>
      <div className="liked-section">
        {state.likes.length === 0 ? (
          <div>
            <h2>Your liked list is empty!</h2>
          </div>
        ) : (
          <>
            {state.likes.map((video) => {
              return <LikedCard video={video} key={video._id} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Liked;
