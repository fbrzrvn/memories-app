import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const MainContainer = styled.div`
  background: ${COLOR.background};
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  max-width: 1100px;
  min-height: calc(100vh - 160px);
  margin: auto;
`;
