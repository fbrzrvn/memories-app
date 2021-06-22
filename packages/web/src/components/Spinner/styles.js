import styled, { keyframes } from "styled-components";
import { COLOR } from "../../styles/colors";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
  }
`;

export const SpinnerWrap = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
`;

export const SpinnerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border: 4px solid ${COLOR.navbar};
  border-top: 4px solid ${COLOR.deepPurple500};
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  /*Animation code for older Chrome, Safari, Opera*/
  -webkit-animation: ${rotate} 2s linear infinite;
  /*Animation code for older Firefox*/
  -moz-animation: ${rotate} 2s linear infinite;
`;
