import "./new-playlist.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { usePlaylists } from "../../../hooks/usePlaylists";

const NewPlaylistForm = ({ setShowModalForm, video }) => {
  const [newPlaylistName, setNewPlaylistName] = useState("");
  console.log("setPlaylistname", setNewPlaylistName);
  const { createNewPlaylist } = usePlaylists();

  const submitPlaylistHandler = (e) => {
    e.preventDefault();

    if (newPlaylistName) {
      setShowModalForm(false);
      createNewPlaylist({ newPlaylistName, video });
    } else {
      setShowModalForm(false);
      toast.error("Playlist name cannot be empty");
    }
  };

  return (
    <div className="new-playlist-form">
      <div className="input-playlist">
        <input
          className="input-playlists"
          autoFocus
          type="text"
          placeholder="Type here..."
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <br />
      </div>

      <div className="new-playlist-action">
        <button
          className="btn-playlist-options"
          type="button"
          onClick={() => {
            setShowModalForm(false);
            setNewPlaylistName("");
          }}
        >
          Cancel
        </button>

        <button
          className="btn-playlist-options"
          type="submit"
          onClick={submitPlaylistHandler}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export { NewPlaylistForm };
