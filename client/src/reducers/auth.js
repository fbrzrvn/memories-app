import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('userProfile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem('userProfile');
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
