import { createSelector } from "reselect";

export const selectThemeState = (state) => state.theme;

export const themeSelector = createSelector(
  [selectThemeState],
  (theme) => theme,
);
