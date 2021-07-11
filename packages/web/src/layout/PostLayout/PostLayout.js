import { node } from "prop-types";
import React from "react";
import { PostGrid } from "./styles";

const PostLayout = ({ children }) => {
  return <PostGrid>{children}</PostGrid>;
};

PostLayout.propTypes = {
  children: node.isRequired,
};

export default PostLayout;
