import { Avatar } from "@material-ui/core";
import decode from "jwt-decode";
import { func, string } from "prop-types";
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LightThemeIcon from "../../assets/wi-day-sunny.svg";
import DarkThemeIcon from "../../assets/wi-night-clear.svg";
import { signOut } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import {
  MobileIcon,
  Nav,
  NavbarBtn,
  NavbarLink,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
  ToggleBtn,
  ToggleBtnWrap,
} from "./styles";

const Navbar = ({ toggleNavbar, theme, toggleTheme }) => {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
  };

  const handleClickToggle = () => {
    toggleTheme();
    window.location.reload();
  };

  useEffect(() => {
    const { token } = currentUser;
    if (token) {
      const decodedToken = decode(token);
      decodedToken.exp * 1000 < new Date().getTime() && dispatch(signOut());
    }
  }, [currentUser, dispatch]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to={ROUTES.HOME}>Memories</NavLogo>
        <MobileIcon onClick={toggleNavbar}>
          <AiOutlineMenu />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavbarLink to={ROUTES.POSTS} exact>
              Home
            </NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to={ROUTES.CREATE}>Create</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to={ROUTES.SEARCH}>Search</NavbarLink>
          </NavItem>
          <NavItem>
            <ToggleBtnWrap onClick={handleClickToggle}>
              {theme === "dark" ? (
                <ToggleBtn src={LightThemeIcon} alt="light-theme" />
              ) : (
                <ToggleBtn src={DarkThemeIcon} alt="dark-theme" />
              )}
            </ToggleBtnWrap>
          </NavItem>
          {isAuthenticated && (
            <NavItem>
              <Avatar
                alt={currentUser?.user?.name}
                src={currentUser?.user?.imageUrl}
              >
                {currentUser?.user?.name.charAt(0)}
              </Avatar>
            </NavItem>
          )}
          <NavbarBtn>
            <Button primary onClick={handleClick}>
              {isAuthenticated ? "Logout" : "Sign In"}
            </Button>
          </NavbarBtn>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
  toggleNavbar: func.isRequired,
};

export default Navbar;
