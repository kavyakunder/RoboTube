import axios from "axios";
import toast from "react-hot-toast";

const addToHistory = async (dispatch, video, token) => {
  try {
    const {
      data: { history },
    } = await axios.post(
      `/api/user/history`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    history && dispatch({ type: "ADD_TO_HISTORY", payload: history });
    toast.success("Video added to history!");
  } catch (error) {
    toast.error("Error occured!");
    console.log(error.message);
  }
};

const removeFromHistory = async (dispatch, _id, token) => {
  try {
    const {
      data: { history },
    } = await axios.delete(`/api/user/history/${_id}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "ADD_TO_HISTORY", payload: history });
    toast.success("Video removed from history!");
  } catch (error) {
    console.log(error);
  }
};

export { addToHistory, removeFromHistory };
