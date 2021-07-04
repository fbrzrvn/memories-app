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

export const fetchPosts = (page) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const {
      data: { data, currentPage, numberOfPages },
    } = await API.getPosts(page);
    dispatch({
      type: postTypes.FETCH_SUCCESS,
      payload: { data, currentPage, numberOfPages },
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const getPostId = (postId) => ({
  type: postTypes.GET_POST_ID,
  payload: postId,
});

export const ResetPostId = () => ({
  type: postTypes.RESET_POST_ID,
});

export const fetchPost = (id) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const {
      data: { data, relatedPosts },
    } = await API.getPost(id);
    dispatch({
      type: postTypes.FETCH_POST_BY_ID,
      payload: { data, relatedPosts },
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const { data } = await API.updatePost(id, post);
    dispatch({
      type: postTypes.UPDATE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch(postRequest());
  try {
    await API.deletePost(id);
    dispatch({
      type: postTypes.DELETE_POST,
      payload: id,
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const likePost = (id) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const { data } = await API.likePost(id);
    dispatch({
      type: postTypes.UPDATE_POST,
      payload: data,
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};

export const commentPost = (id, comment) => async (dispatch) => {
  dispatch(postRequest());
  try {
    const { data } = await API.commentPost(id, comment);
    dispatch({
      type: postTypes.COMMENT_POST,
      payload: data,
    });
  } catch (error) {
    dispatch(postError(error.message));
  }
};
