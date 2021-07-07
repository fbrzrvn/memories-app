import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { object } from "prop-types";
import React from "react";

const LikePost = ({ post, currentUser }) => {
  return post?.likes?.findIndex((likeId) => likeId === currentUser?._id) !==
    -1 ? (
    <ThumbUpAltIcon />
  ) : (
    <ThumbUpAltOutlined />
  );
};

LikePost.propTypes = {
  post: object.isRequired,
  currentUser: object,
};

LikePost.defaultProps = {
  currentUser: null,
};

export default LikePost;
