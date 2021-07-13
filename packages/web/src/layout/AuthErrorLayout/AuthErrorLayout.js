import { node } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import LoginCard from "../../components/LoginCard";
import { authSelector } from "../../redux/auth/authSelector";

const AuthErrorLayout = ({ children }) => {
  const { isAuthenticated } = useSelector(authSelector);
  return isAuthenticated ? { children } : <LoginCard />;
};

AuthErrorLayout.propTypes = {
  children: node.isRequired,
};

export default AuthErrorLayout;
