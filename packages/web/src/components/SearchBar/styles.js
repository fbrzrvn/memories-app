import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > * {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SearchInput = styled.input`
  color: ${COLOR.text};
  background-color: ${COLOR.background};
  box-shadow: inset 0.5px 0.5px 1px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  border: 1px solid ${COLOR.textSecondary};
  margin: auto;
  padding: 0.5em 1em;
  font-weight: 500;
  overflow: hidden;
  outline: none;
  &::placeholder {
    color: ${COLOR.textSecondary};
    opacity: 0.8;
  }
  &:focus,
  &:hover {
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0.5em;
  color: ${COLOR.text};
  cursor: pointer;
`;
