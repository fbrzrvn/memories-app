import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const MainContainer = styled.div`
  background: ${COLOR.background};
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  min-height: 100vh;
  max-width: 1100px;
  margin: auto;
`;
