import * as AuthTypes from "./authTypes";

export const AuthInitialState = {
  isSigningUp: false,
  isSignUpError: null,
  isAuthenticated: false,
  currentUser: {},
};

const AuthReducer = (state = AuthInitialState, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignUpError: null,
      };
    }
    case AuthTypes.SIGN_UP_ERROR: {
      return {
        ...state,
        isSigningUp: false,
        isSignUpError: action.payload,
      };
    }
    case AuthTypes.SIGN_UP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        isSigningUp: false,
        isSignUpError: null,
        currentUser: action.payload,
      };
    }
    case AuthTypes.SIGN_OUT: {
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
      };
    }
    case AuthTypes.RESET_AUTH_STATE: {
      return {
        ...state,
        isSigningUp: false,
        isSignUpError: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default AuthReducer;
