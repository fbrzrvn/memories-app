import { Link, NavLink } from "react-router-dom";
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
  @media screen and (max-width: 968px) {
    transition: all 800ms ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
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
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 87%);
    font-size: 1.8rem;
    color: ${COLOR.text};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const NavbarLink = styled(NavLink)`
  color: ${COLOR.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;
  height: 100%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${COLOR.deepPurple700};
    transition: all 300ms ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${COLOR.deepPurple500};
  }
`;

export const NavbarBtn = styled.div`
  margin-left: 16px;
`;
