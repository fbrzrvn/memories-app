import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { object } from "prop-types";
import React from "react";

const LikePost = ({ post, currentUser }) => {
  if (post?.likes?.length > 0) {
    return post.likes.find(
      (like) => like === currentUser?.user?.googleId || currentUser?.user?._id,
    ) ? (
      <>
        <ThumbUpAltIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
      </>
    ) : (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
      </>
    );
  }
  return (
    <>
      <ThumbUpAltOutlined fontSize="small" />
      &nbsp;Like
    </>
  );
};

LikePost.propTypes = {
  post: object.isRequired,
  currentUser: object.isRequired,
};

export default LikePost;
