import "./playlist-modal.css";
import { useState } from "react";
import { NewPlaylistForm } from "../newPlaylistForm/NewPlaylistForm";
import { usePlaylists } from "../../../hooks/usePlaylists";

const PlaylistModal = ({ video, setShowPlaylistModal }) => {
  const [showModalForm, setShowModalForm] = useState(false);
  const {
    state: { playlists, isLoading },
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
  } = usePlaylists();

  return (
    <div className="basic-card">
      <div className="add-close">
        <h2>Add to Playlists</h2>
        <i
          class="fa-solid fa-xmark"
          onClick={() => setShowPlaylistModal(false)}
        ></i>
      </div>

      <div className="form-group">
        {isLoading ? null : (
          <div className="input-group">
            {playlists.map((playlist) => {
              const videoInPlaylist = playlist.videos.find(
                (playlistVideo) => playlistVideo._id === video._id
              );

              return (
                <label key={playlist._id} className="checkbox-cls">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={videoInPlaylist ? true : false}
                    onChange={() =>
                      videoInPlaylist
                        ? deleteVideoFromPlaylist({
                            videoInPlaylist,
                            playlist,
                          })
                        : addVideoToPlaylist({ video, playlist })
                    }
                  />

                  {playlist.title}
                </label>
              );
            })}
            <br />
          </div>
        )}

        {!showModalForm ? (
          <button
            className="button-cls"
            type="button"
            onClick={() => setShowModalForm(true)}
          >
            Create New Playlist
          </button>
        ) : null}

        {showModalForm ? (
          <NewPlaylistForm video={video} setShowModalForm={setShowModalForm} />
        ) : null}
      </div>
    </div>
  );
};

export { PlaylistModal };
