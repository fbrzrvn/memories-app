import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import { object } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { deletePost, getPostId, likePost } from "../../redux/post/postActions";
import * as ROUTES from "../../routes";
import LikePost from "./LikePost";
import {
  Card,
  PostFooter,
  PostH2,
  PostImg,
  PostInfo,
  PostOverlay,
  PostOverlay2,
  PostP,
  PostSpan,
} from "./styles";

const PostCard = ({ post }) => {
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (postId) => {
    dispatch(getPostId(postId));
    history.push(ROUTES.UPDATE);
  };

  return (
    <Card>
      <PostImg src={post.media} alt={post.title} />
      <PostOverlay>
        <PostSpan>{post.name}</PostSpan>
        <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
      </PostOverlay>
      <PostOverlay2>
        {(currentUser?.user?.googleId === post?.author ||
          currentUser?.user?._id === post?.author) && (
          <Button
            style={{ color: "#F5F6F7" }}
            size="small"
            onClick={() => handleClick(post._id)}
          >
            <MoreVertIcon />
          </Button>
        )}
      </PostOverlay2>
      <PostInfo>
        <PostP>{post.tags.map((tag) => `#${tag} `)}</PostP>
        <PostH2>{post.title}</PostH2>
        <PostFooter>
          {isAuthenticated && (
            <Button
              size="small"
              color="primary"
              disabled={!currentUser.user}
              onClick={() => dispatch(likePost(post._id))}
            >
              <LikePost post={post} currentUser={currentUser} />
            </Button>
          )}
          {(currentUser?.user?.googleId === post?.author ||
            currentUser?.user?._id === post?.author) && (
            <Button
              size="small"
              color="primary"
              disabled={!currentUser.user}
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize="small" />
              &nbsp; Delete
            </Button>
          )}
        </PostFooter>
      </PostInfo>
    </Card>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
