export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "VIDEOS":
      return {
        ...state,
        videos: [
          ...payload.map((video) => ({
            ...video,
            inLiked: false,
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
    // case "LIKED_VIDEOS":
    //   return {
    //     ...state,
    //     likes: [...state.likes, action.payload],
    //   };
    // case "REMOVED_LIKED":
    //   return {
    //     ...state,
    //     likes: state.likes.filter((item) => item._id !== action.payload),
    //   };

    // case "WATCH_LATER":
    //   return {
    //     ...state,
    //     watchLater: [...state.watchLater, action.payload],
    //   };

    // case "REMOVE_WATCHLATER":
    //   return {
    //     ...state,
    //     watchLater: state.watchLater.filter(
    //       (item) => item._id !== action.payload
    //     ),
    //   };
    default:
      return state;
  }
};
