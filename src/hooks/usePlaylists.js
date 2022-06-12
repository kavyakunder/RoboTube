import toast from "react-hot-toast";
import { useData } from "../context/dataContext";

import {
  addNewPlaylistService,
  deletePlaylistService,
  addVideoToPlaylistService,
  deleteVideoFromPlaylistService,
} from "../services/playlistService";
import { useAuth } from "../context/auth-context";

const usePlaylists = () => {
  const { state, dispatch } = useData();

  const {
    auth: { token },
  } = useAuth();

  const createNewPlaylist = async ({ newPlaylistName, video }) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      const { data, status } = await addNewPlaylistService({
        token,
        newPlaylistName,
      });

      if (status === 201) {
        toast.success("New playlist created");

        dispatch({
          type: "GET_PLAYLISTS",
          payload: { playlists: data.playlists },
        });

        if (video)
          addVideoToPlaylist({
            playlist: data.playlists[data.playlists.length - 1],
            video,
          });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
      console.error(err.response);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const addVideoToPlaylist = async ({ playlist, video }) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data, status } = await addVideoToPlaylistService({
        token,
        playlist,
        video,
      });

      if (status === 201) {
        toast.success("Video added to playlist");

        dispatch({
          type: "ADD_VIDEO_TO_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      toast.error("Error occured.");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const deleteVideoFromPlaylist = async ({ videoInPlaylist, playlist }) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data, status } = await deleteVideoFromPlaylistService({
        token,
        playlist,
        videoInPlaylist,
      });

      if (status === 200) {
        toast.success("Video deleted from playlist");

        dispatch({
          type: "DELETE_VIDEO_FROM_PLAYLIST",
          payload: { playlist: data.playlist },
        });
      }
    } catch (err) {
      toast.error(err);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const deletePlaylist = async (playlistId) => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const { data, status } = await deletePlaylistService({
        token,
        playlistId,
      });

      if (status === 200) {
        toast.success("Playlist deleted");
        dispatch({
          type: "GET_PLAYLISTS",
          payload: { playlists: data.playlists },
        });
      }
    } catch (err) {
      toast.error("Error occured. Try again later.");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return {
    state,
    dispatch,
    createNewPlaylist,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    deletePlaylist,
  };
};

export { usePlaylists };
