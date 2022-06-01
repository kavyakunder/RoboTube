import { useContext, useReducer, useEffect, createContext } from "react";
import { reducer } from "../reducer/reducer";
import { getCategories, getVideos } from "../services/dataService";

const categoryChoice = {
  videos: [],
  categories: [],
  category: "All",
};
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, categoryChoice);

  useEffect(
    () =>
      (async () => {
        const newVideos = await getVideos();
        dispatch({
          type: "VIDEOS",
          payload: { videos: newVideos.videos },
        });
        const newCategories = await getCategories();
        console.log("categories", newCategories.categories);
        dispatch({
          type: "CATEGORIES",
          payload: { categories: newCategories.categories },
        });
      })(),
    []
  );
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
