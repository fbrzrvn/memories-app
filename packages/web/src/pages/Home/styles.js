import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (max-width: 968px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, 230px);
  }
`;
