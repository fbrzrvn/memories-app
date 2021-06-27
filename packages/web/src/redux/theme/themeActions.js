import * as themeTypes from "./themeTypes";

export const changeTheme = (theme) => ({
  type: themeTypes.CHANGE_THEME,
  payload: theme,
});
