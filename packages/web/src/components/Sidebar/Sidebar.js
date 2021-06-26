import { bool, func, string } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LightThemeIcon from "../../assets/wi-day-sunny.svg";
import DarkThemeIcon from "../../assets/wi-night-clear.svg";
import { signOut } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarBtnToggle,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";

const Sidebar = ({ toggleNavbar, isOpen, theme, toggleTheme }) => {
  const { isAuthenticated } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
  };

  const handleClickToggle = () => {
    toggleTheme();
    window.location.reload();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={ROUTES.HOME}>Home</SidebarLink>
          <SidebarLink to={ROUTES.CREATE}>Create</SidebarLink>
          <SidebarLink to={ROUTES.SEARCH}>Search</SidebarLink>
          <SidebarBtn onClick={handleClickToggle}>
            {theme === "dark" ? (
              <SidebarBtnToggle src={LightThemeIcon} alt="light-theme" />
            ) : (
              <SidebarBtnToggle src={DarkThemeIcon} alt="dark-theme" />
            )}
          </SidebarBtn>
          <SidebarBtn>
            <Button primary onClick={handleClick}>
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
          </SidebarBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggleNavbar: func.isRequired,
  isOpen: bool.isRequired,
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Sidebar;
