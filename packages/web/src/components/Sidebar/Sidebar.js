import { bool, func } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import ToggleThemeBtn from "../ToggleThemeBtn";
import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";

const Sidebar = ({ toggleNavbar, isOpen }) => {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to={ROUTES.POSTS}>Home</SidebarLink>
          <SidebarLink to={ROUTES.SEARCH}>Search</SidebarLink>
          {currentUser?.user && (
            <>
              <SidebarLink to={ROUTES.CREATE}>Create</SidebarLink>
              <SidebarLink to={ROUTES.ME}>Profile</SidebarLink>
            </>
          )}
          <ToggleThemeBtn toggleNavbar={toggleNavbar} />
          <Button primary={!isAuthenticated} small onClick={handleClick}>
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  toggleNavbar: func.isRequired,
  isOpen: bool.isRequired,
};

export default Sidebar;
