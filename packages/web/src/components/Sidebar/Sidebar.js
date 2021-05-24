import { bool, func } from "prop-types";
import React from "react";
import * as ROUTES from "../../routes";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { authSelector } from "../../redux/auth/authSelector";
import Button from "../Button";
import SearchBar from "../SearchBar";
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
  // const { isAuthenticated } = useSelector(authSelector);
  // const history = useHistory();
  // const dispatch = useDispatch();

  const handleClick = () => {
    // isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
    console.log("click");
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleNavbar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarLink to={ROUTES.SEARCH}>
          <SearchBar />
        </SidebarLink>
        <SidebarMenu>
          <SidebarLink to="" onClick={toggleNavbar}>
            Gifs
          </SidebarLink>
          <SidebarLink to="" onClick={toggleNavbar}>
            Jokes
          </SidebarLink>
          <SidebarLink to="" onClick={toggleNavbar}>
            Memes
          </SidebarLink>
          <SidebarLink to="" onClick={toggleNavbar}>
            Upload
          </SidebarLink>
          <SidebarBtn>
            <Button primary onClick={handleClick}>
              {/* {isAuthenticated ? "Logout" : "Login"} */}
              login
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
