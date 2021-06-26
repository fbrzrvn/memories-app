import styled from "styled-components";
// import { COLOR } from "../../styles/colors";

const Button = styled.button`
  background: ${({ primary, theme }) =>
    primary ? `${theme.primary}` : ` ${theme.background}}`};
  color: ${({ primary, theme }) =>
    primary ? `${theme.background}` : `${theme.primary}`};
  padding: 12px 30px;
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  border-radius: 10px;
  font-size: 16px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transition: all 300ms ease-in-out;
    background: ${({ primary, theme }) =>
      primary ? `${theme.background}` : `${theme.primary}`};
    /* color: ${({ theme }) => theme.background}; */
    color: ${({ primary, theme }) =>
      primary ? `${theme.primary}` : `${theme.background}`};
  }
`;

export default Button;
