import styled from "styled-components";

export const MainWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;
