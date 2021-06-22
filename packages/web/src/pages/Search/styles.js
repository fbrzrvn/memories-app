import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Nav = styled.nav`
  background: ${COLOR.navbar};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
  @media screen and (max-width: 576px) {
    padding: 24px;
    flex-direction: column;
  }
`;

export const NavLogo = styled(Link)`
  color: ${COLOR.text};
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  margin-left: 24px;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    margin-bottom: 16px;
  }
`;

export const SearchWrap = styled.div`
  flex: 0.9;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 24px;
`;

export const SearchInput = styled.input`
  color: ${COLOR.text};
  background-color: ${COLOR.background};
  box-shadow: inset 0.5px 0.5px 1px rgba(0, 0, 0, 0.7);
  border: 1px solid ${COLOR.textSecondary};
  border-radius: 10px;
  width: 100%;
  margin: auto;
  padding: 0.5em 1em;
  font-weight: 500;
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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 24px;
  margin: auto;
  max-width: 1100px;
`;

export const ResultH2 = styled.h2`
  color: ${COLOR.text};
  font-size: 42px;
  font-weight: 300;
  margin: auto;
`;
