import * as themeTypes from "./themeTypes";

const themeInitialState = {
  theme: themeTypes.DARK,
};

const themeReducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case themeTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
