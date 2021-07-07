import { createGlobalStyle } from "styled-components";
import { COLOR } from "./colors";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
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
    font-weight: 400;
    transition: all 1s ease;
 }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.8;
    margin: 16px 0;
    padding: 18px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.navbar};
    color: ${({ theme }) => theme.textSecondary};
  }

  & h2 {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.8;
    letter-spacing: 0.00735em;
    margin: 0.25em 0;
  }
  & h3 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 0.00735em;
    margin: 0.25em 0;
  }
  & h4 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.8;
    letter-spacing: 0.00735em;
  }
  & h5 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.25;
    margin: 0.5em 0;
  }
  & h6 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.8;
    margin: 0.5em 0;
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
