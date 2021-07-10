import * as API from "../../api";
import * as userTypes from "./userTypes";

export const fetchUserRequest = () => ({ type: userTypes.FETCH_USER_REQUEST });

export const fetchUserError = (error) => ({
  type: userTypes.FETCH_USER_ERROR,
  payload: error,
});

export const fetchUserSuccess = (data) => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload: data,
});

export const fetchUserPosts = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const { data } = await API.getUserPosts();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};
