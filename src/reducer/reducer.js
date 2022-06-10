export const reducer = (state, action) => {
  switch (action.type) {
    case "VIDEOS":
      return {
        ...state,
        videos: action.payload.videos,
      };
    case "CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload.category,
      };
    case "LIKED_VIDEOS":
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case "REMOVED_LIKED":
      return {
        ...state,
        likes: state.likes.filter((item) => item._id !== action.payload),
      };

    case "WATCH_LATER":
      return {
        ...state,
        watchLater: [...state.watchLater, action.payload],
      };

    case "REMOVE_WATCHLATER":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (item) => item._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
