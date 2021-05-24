import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const MainContainer = styled.div`
  background: ${COLOR.background};
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  min-height: 100vh;
  max-width: 1100px;
  margin: auto;
  @media screen and (max-width: 768px) {
    min-height: 1100px;
  }
  @media screen and (max-width: 480px) {
    min-height: 1300px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
