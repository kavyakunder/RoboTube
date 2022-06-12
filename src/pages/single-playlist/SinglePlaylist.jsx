import "./singleplaylist.css";
import { useParams } from "react-router-dom";
import VideoCard from "../videos/videoCard/VideoCard";
import { usePlaylists } from "../../hooks/usePlaylists";

const SinglePlaylist = () => {
  const { playlistId } = useParams();
  console.log(playlistId);

  const {
    state: { playlists },
  } = usePlaylists();

  const myPlaylist = playlists.find((playlist) => {
    console.log("playlist", playlist);
    return playlist._id === playlistId;
  });

  return (
    <section className="main-section-playlist">
      <div className=" single-playlist">
        {myPlaylist.videos ? (
          <>
            <div>
              <h2>{myPlaylist.title}</h2>
              <p>{myPlaylist.videos.length} videos</p>
            </div>
            <div className="playlist-videos">
              {myPlaylist.videos.map((video, _id) => (
                <div>
                  <VideoCard video={video} key={video._id} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>No videos in Playlist</p>
        )}
      </div>
    </section>
  );
};

export { SinglePlaylist };
