import { PlaylistCard } from "../../components/playlist/playlistCard/PlaylistCard";
import { usePlaylists } from "../../hooks/usePlaylists";
import "./playlist.css";
const Playlists = () => {
  const {
    state: { playlists },
  } = usePlaylists();

  return (
    <section>
      <div className="playlists-container">
        {playlists.length ? (
          playlists.map((playlist) => (
            <PlaylistCard playlist={playlist} key={playlist._id} />
          ))
        ) : (
          <h2>Playlist isn't created!</h2>
        )}
      </div>
    </section>
  );
};

export { Playlists };
