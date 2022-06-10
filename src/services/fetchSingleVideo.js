import axios from "axios";

const fetchSingleVideo = async (videoId, setSingleVideo) => {
  try {
    const {
      data: { video },
    } = await axios.get(`/api/video/${videoId}`);
    setSingleVideo(video);
  } catch (error) {
    console.log(error);
  }
};

export { fetchSingleVideo };
