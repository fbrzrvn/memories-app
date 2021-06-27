import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: opacity(0);
    -moz-transform: opacity(0);
  }
  50% {
    opacity: 0.5;
    -webkit-transform: opacity(0.5);
    -moz-transform: opacity(0.5);
  }
  100% {
    transform: rotate(360deg);
    opacity: 1;
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: opacity(1);
    -moz-transform: opacity(1);
  }
`;

export const ToggleBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToggleBtn = styled.img`
  height: 32px;
  width: 32px;
  animation: ${({ isAnimate }) =>
    isAnimate &&
    css`
      ${spin} 1s ease-in-out alternate
    `};
  /*Animation code for older Chrome, Safari, Opera*/
  -webkit-animation: ${({ isAnimate }) =>
    isAnimate &&
    css`
      ${spin} 1s ease-in-out alternate
    `};
  /*Animation code for older Firefox*/
  -moz-animation: ${({ isAnimate }) =>
    isAnimate &&
    css`
      ${spin} 1s ease-in-out alternate
    `};
`;
