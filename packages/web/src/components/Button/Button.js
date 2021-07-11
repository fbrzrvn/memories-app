import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  width: ${({ small }) => (small ? "120px" : "100%")};
  margin: auto;
  white-space: nowrap;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.primary}`};
  background: ${({ primary, theme }) =>
    primary ? `${theme.primary}` : "transparent"};
  color: ${({ primary, theme }) => (primary ? `#f5f6f7` : `${theme.primary}`)};
  outline: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    transition: all 300ms ease-in-out;
    background: ${({ primary, theme }) =>
      primary ? "transparent" : `${theme.primary}`};
    color: ${({ primary, theme }) =>
      primary ? `${theme.primary}` : `#f5f6f7`};
  }
`;

export default Button;
