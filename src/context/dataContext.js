import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import { reducer } from "../reducer/reducer";
import { useAuth } from "./auth-context";
import { getCategories, getVideos } from "../services/dataService";
import { getPlaylistsService } from "../services/playlistService";
const categoryChoice = {
  videos: [],
  categories: [],
  category: "All",
  likes: [],
  watchLater: [],
  playlists: [],
  loading: false,
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const {
    auth: { token, isAuth },
  } = useAuth();
  const [state, dispatch] = useReducer(reducer, categoryChoice);
  const [playlistModal, setPlaylistModal] = useState(false);

  useEffect(
    () =>
      (async () => {
        const newVideos = await getVideos();
        dispatch({
          type: "VIDEOS",
          payload: [...newVideos.videos],
        });
        const newCategories = await getCategories();
        dispatch({
          type: "CATEGORIES",
          payload: { categories: newCategories.categories },
        });
      })(),
    []
  );

  useEffect(() => {
    isAuth &&
      (async () => {
        try {
          dispatchPlaylists({ type: "SET_LOADING", payload: true });

          const { data, status } = await getPlaylistsService(token);

          if (status === 200) {
            dispatch({
              type: "GET_PLAYLISTS",
              payload: { playlists: data.playlists },
            });
          }
        } catch (err) {
          console.error(err);
        } finally {
          dispatch({ type: "SET_LOADING", payload: false });
        }
      })();
  }, [token]);

  return (
    <DataContext.Provider
      value={{ state, dispatch, setPlaylistModal, playlistModal }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
