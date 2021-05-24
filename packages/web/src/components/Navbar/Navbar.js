import { func } from "prop-types";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import useWindowSize from "../../hooks/useWindowSize";
import * as ROUTES from "../../routes";
// import { authSelector } from "../../redux/auth/authSelector";
import Button from "../Button";
import SearchBar from "../SearchBar";
import {
  MobileIcon,
  Nav,
  NavbarBtn,
  NavbarLink,
  NavContainer,
  NavItem,
  NavLogo,
  NavMenu,
} from "./styles";

const Navbar = ({ toggleNavbar }) => {
  const width = useWindowSize();
  // const { isAuthenticated } = useSelector(authSelector);
  // const history = useHistory();
  // const dispatch = useDispatch();

  const handleClick = () => {
    // isAuthenticated ? dispatch(signOut()) : history.push(ROUTES.SIGN_IN);
    console.log("click");
  };

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">Jokes App</NavLogo>
        <MobileIcon onClick={toggleNavbar}>
          <AiOutlineMenu />
        </MobileIcon>
        {width > 768 && (
          <NavbarLink to={ROUTES.SEARCH}>
            <SearchBar />
          </NavbarLink>
        )}
        <NavMenu>
          <NavItem>
            <NavbarLink to="">Gifs</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="">Jokes</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="">Memes</NavbarLink>
          </NavItem>
          <NavItem>
            <NavbarLink to="">Upload</NavbarLink>
          </NavItem>
          <NavbarBtn>
            <Button primary onClick={handleClick}>
              {/* {isAuthenticated ? "Logout" : "Sign In"} */}
              login
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
