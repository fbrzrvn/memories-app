import { node } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { themeSelector } from "../../redux/theme/themeSelector";
import { DARK } from "../../redux/theme/themeTypes";
import { DarkTheme, GlobalStyles, LightTheme } from "../../styles/globals";

const Theme = ({ children }) => {
  const { theme } = useSelector(themeSelector);
  const themeMode = theme === DARK ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: node.isRequired,
};

export default Theme;
