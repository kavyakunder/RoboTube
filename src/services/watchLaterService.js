import axios from "axios";
import toast from "react-hot-toast";

const addToWatchLater = async (dispatch, video, token) => {
  try {
    const {
      data: { watchlater },
    } = await axios.post(
      `/api/user/watchlater`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    watchlater && dispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater });
    toast.success("Video added to watch later!");
  } catch (error) {
    toast.error("Error occured!");
    console.log(error.message);
  }
};

const removeFromWatchLater = async (dispatch, _id, token) => {
  try {
    const {
      data: { watchlater },
    } = await axios.delete(`/api/user/watchlater/${_id}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "ADD_TO_WATCH_LATER", payload: watchlater });
    toast.success("Video removed from watch later!");
  } catch (error) {
    console.log(error);
  }
};

export { addToWatchLater, removeFromWatchLater };
