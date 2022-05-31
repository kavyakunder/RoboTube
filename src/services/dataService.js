import axios from "axios";

const getVideos = async () => {
  try {
    const response = await axios.get("/api/videos");
    if (response.status === 200) return response.data;
  } catch (e) {
    console.error("error:fetching videos", e);
  }
};

const getCategories = async () => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200) return response.data;
  } catch (e) {
    console.error("error:fetching categories", e);
  }
};

export { getCategories, getVideos };
