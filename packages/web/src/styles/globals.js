import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    line-height: 1;
    transition: all 1s ease;
 }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const LightTheme = {
  primary: COLOR.lightPrimary,
  background: COLOR.lightBackground,
  navbar: COLOR.lightNavbar,
  navbarLink: COLOR.lightNavbarLink,
  text: COLOR.lightText,
  textSecondary: COLOR.lightTextSecondary,
  footer: COLOR.lightFooter,
  border: COLOR.lightBorder,
};

export const DarkTheme = {
  primary: COLOR.darkPrimary,
  background: COLOR.darkBackground,
  navbar: COLOR.darkNavbar,
  navbarLink: COLOR.darkNavbarLink,
  text: COLOR.darkText,
  textSecondary: COLOR.darkTextSecondary,
  footer: COLOR.darkFooter,
  border: COLOR.darkBorder,
};
