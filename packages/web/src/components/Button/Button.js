import styled from "styled-components";
import { COLOR } from "../../styles/colors";

const Button = styled.button`
  background: ${({ primary }) =>
    primary ? `${COLOR.deepPurple500}` : `${COLOR.background}`};
  color: ${({ primary }) =>
    primary ? `${COLOR.background}` : `${COLOR.deepPurple500}`};
  padding: 12px 30px;
  border: ${({ primary }) =>
    primary ? "none" : `1px solid ${COLOR.deepPurple500}`};
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
    background: ${({ primary }) =>
      primary ? `${COLOR.deepPurple400}` : `${COLOR.deepPurple500}`};
    color: ${COLOR.background};
  }
`;

export default Button;
