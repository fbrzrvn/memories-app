import * as API from "../../api";
import * as postTypes from "./postTypes";

export const postRequest = () => ({ type: postTypes.POST_REQUEST });

export const postError = (error) => ({
  type: postTypes.POST_ERROR,
  payload: error,
});

export const postSuccess = (post) => ({
  type: postTypes.POST_SUCCESS,
  payload: post,
});

export const resetPostState = () => ({
  type: postTypes.RESET_POST_STATE,
});

export const createPost = (post) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const { data } = await API.createPost(post);
    dispatch(postSuccess(data));
  } catch (error) {
    dispatch(postError(error.message));
  }
  dispatch(resetPostState());
};

export const fetchSuccess = (posts) => ({
  type: postTypes.FETCH_SUCCESS,
  payload: posts,
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(postRequest());
  try {
    const { data } = await API.getPosts();
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(postError(error.message));
  }
};
