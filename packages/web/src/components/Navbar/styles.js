import { Avatar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.navbar};
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
  padding: 0 16px;
  z-index: 1;
`;

export const NavLogo = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(calc(-100% + 16px), 78%);
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const NavbarLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 28px;
  text-transform: uppercase;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transition: all 300ms ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.primary};
  }
`;
export const UserAvatar = styled(Avatar)`
  && {
    background-color: ${COLOR.deepPurple500};
    border: 1px solid ${({ theme }) => theme.background};
    font-size: 20px;
    font-weight: 500;
  }
`;

export const NavbarBtn = styled.div`
  margin-left: 16px;
`;
