import { bool, func } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import {
  CloseIcon,
  Icon,
  SidebarBtn,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
} from "./styles";

const Sidebar = ({ toggleNavbar, isOpen }) => {
  const { isAuthenticated } = useSelector(authSelector);
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
          <SidebarLink to={ROUTES.HOME}>Home</SidebarLink>
          <SidebarLink to={ROUTES.SEARCH}>Search</SidebarLink>
          <SidebarLink to={ROUTES.CREATE}>Create</SidebarLink>
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
};

export default Sidebar;
