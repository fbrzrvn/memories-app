import { node } from "prop-types";
import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import useNavbar from "../../hooks/useNavbar";
import useTheme from "../../hooks/useTheme";
import { MainContainer } from "./styles";

const MainLayout = ({ children }) => {
  const [isOpen, toggleNavbar] = useNavbar();
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleNavbar={toggleNavbar}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Navbar
        toggleNavbar={toggleNavbar}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
