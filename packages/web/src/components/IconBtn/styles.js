import styled, { css } from "styled-components";

export const BtnIcon = styled.button`
  height: 28px;
  width: 28px;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: color 300ms ease-in-out;
    ${(props) =>
      props.disabled &&
      css`
        color: ${({ theme }) => theme.textSecondary};
      `}
  }
`;
