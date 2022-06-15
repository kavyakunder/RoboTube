export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "VIDEOS":
      return {
        ...state,
        videos: [
          ...payload.map((video) => ({
            ...video,
            inLiked: false,
            inWatchLater: false,
            inHistory: false,
          })),
        ],
      };
    case "CATEGORIES":
      return {
        ...state,
        categories: payload.categories,
      };
    case "CATEGORY":
      return {
        ...state,
        category: payload.category,
      };
    case "ADD_TO_LIKES":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inLiked: payload.some((item) => item._id === video._id),
        })),
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inWatchLater: payload.some((item) => item._id === video._id),
        })),
      };

    case "ADD_TO_HISTORY":
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          inHistory: payload.some((item) => item._id === video._id),
        })),
      };

    case "GET_PLAYLISTS":
      return { ...state, playlists: payload.playlists };

    case "ADD_VIDEO_TO_PLAYLIST":
      return {
        ...state,

        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };

    case "DELETE_VIDEO_FROM_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === payload.playlist._id ? payload.playlist : playlist
        ),
      };

    case "SET_LOADING":
      return { ...state, isLoading: payload };

    default:
      return state;
  }
};
