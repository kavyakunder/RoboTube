import axios from "axios";
import toast from "react-hot-toast";

const addToLiked = async (dispatch, video, token) => {
  try {
    const {
      data: { likes },
    } = await axios.post(
      `/api/user/likes`,
      { video },
      {
        headers: { authorization: token },
      }
    );
    likes && dispatch({ type: "ADD_TO_LIKES", payload: likes });
    toast.success("Video added to liked!");
  } catch (error) {
    toast.error("Error occured!");
    console.log(error.message);
  }
};

const removeFromLiked = async (dispatch, _id, token) => {
  try {
    const {
      data: { likes },
    } = await axios.delete(`/api/user/likes/${_id}`, {
      headers: { authorization: token },
    });
    dispatch({ type: "ADD_TO_LIKES", payload: likes });
    toast.success("Video removed from liked!");
  } catch (error) {
    console.log(error);
  }
};

export { addToLiked, removeFromLiked };
