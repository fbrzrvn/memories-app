import decode from "jwt-decode";
import { func } from "prop-types";
import React, { useEffect } from "react";
import { AiOutlineForm, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import ToggleThemeBtn from "../ToggleThemeBtn";
import {
  MobileIcon,
  Nav,
  NavbarBtn,
  NavbarLink,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
  UserAvatar,
} from "./styles";

const Navbar = ({ toggleNavbar }) => {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
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
        <NavLogo to={ROUTES.POSTS}>Memories</NavLogo>
        <MobileIcon onClick={toggleNavbar}>
          <AiOutlineMenu />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavbarLink to={ROUTES.SEARCH}>
              <AiOutlineSearch />
            </NavbarLink>
          </NavItem>
          {currentUser?.user && (
            <NavItem>
              <NavbarLink to={ROUTES.CREATE}>
                <AiOutlineForm />
              </NavbarLink>
            </NavItem>
          )}
          <NavItem>
            <ToggleThemeBtn />
          </NavItem>
          {currentUser?.user && (
            <NavItem>
              <UserAvatar
                alt={currentUser.user?.name}
                src={currentUser.user?.imageUrl}
                onClick={() => history.push(ROUTES.ME)}
              >
                {currentUser.user?.name.charAt(0)}
              </UserAvatar>
            </NavItem>
          )}
          <NavbarBtn>
            <Button primary={!isAuthenticated} onClick={handleClick}>
              {isAuthenticated ? "Logout" : "Sign In"}
            </Button>
          </NavbarBtn>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: func.isRequired,
};

export default Navbar;
