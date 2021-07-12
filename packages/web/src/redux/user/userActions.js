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

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const { data } = await API.getCurrentUser();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};

export const fetchUserById = (id) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const { data } = await API.getUserById(id);
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};

export const updateUserProfile = (user) => async (dispatch) => {
  dispatch(fetchUserRequest());
  try {
    const { data } = await API.updateUserProfile(user);
    dispatch({ type: userTypes.UPDATE_USER, payload: data });
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};

export const followUser = (id) => async (dispatch) => {
  try {
    const { data } = await API.followUser(id);
    dispatch({
      type: userTypes.UPDATE_USER,
      payload: data,
    });
  } catch (error) {
    dispatch(fetchUserError(error.message));
  }
};
