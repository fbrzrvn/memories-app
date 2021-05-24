import { node } from "prop-types";
import React from "react";

const AuthLayout = ({ children }) => {
  return <section>{children}</section>;
};

AuthLayout.propTypes = {
  children: node.isRequired,
};

export default AuthLayout;
