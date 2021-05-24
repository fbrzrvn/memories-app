import * as API from "../../api";
import * as AuthTypes from "./authTypes";

export const signUpRequest = () => ({
  type: AuthTypes.SIGN_UP_REQUEST,
});

export const signUpError = (message) => ({
  type: AuthTypes.SIGN_UP_ERROR,
  payload: message,
});

export const signUp = (formData) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const { data } = await API.signUp(formData);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(signUpError(error.response.data.message));
  }
};

export const signIn = (formData) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const { data } = await API.signIn(formData);
    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(signUpError(error.response.data.message));
  }
};

export const signUpSuccess = (user) => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signOut = () => async (dispatch) => {
  return dispatch({ type: AuthTypes.SIGN_OUT });
};

export const resetStoreAndLogOut = () => ({
  type: AuthTypes.RESET_STORE_AND_LOG_OUT,
});

export const resetAuthState = () => ({
  type: AuthTypes.RESET_AUTH_STATE,
});
