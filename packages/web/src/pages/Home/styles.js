import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, 230px);
  }
`;
