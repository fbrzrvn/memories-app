import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px ${({ theme }) => theme.border};
  @media screen and (max-width: 480px) {
    box-shadow: none;
    padding: 0;
  }
`;
