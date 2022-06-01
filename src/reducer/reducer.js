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
    default:
      return state;
  }
};
