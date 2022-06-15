import "./playlist-card.css";
import { useNavigate } from "react-router-dom";
import { usePlaylists } from "../../../hooks/usePlaylists";

const PlaylistCard = ({ playlist }) => {
  const { _id, title, videos } = playlist;
  const { deletePlaylist } = usePlaylists();
  const navigate = useNavigate();

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlists/${_id}`)}
    >
      <img
        src={`http://i1.ytimg.com/vi/${playlist.videos[0]._id}/0.jpg`}
        alt={title}
        className="overlay-image"
      />
      <div className="playlist-body">
        <div className="playlist-length">{videos.length}</div>
      </div>
      <br />
      <span className="playlist-name">{title}</span>
      <i
        onClick={(e) => {
          e.stopPropagation();
          deletePlaylist(_id);
        }}
        className="fa-solid fa-trash trash-cls"
      ></i>
    </div>
  );
};

export { PlaylistCard };
