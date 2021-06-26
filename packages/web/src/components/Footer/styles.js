import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 80px;
  background-color: ${({ theme }) => theme.footer};
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  max-width: 1100px;
  margin: auto;
`;

export const FooterCopy = styled.small`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
`;
