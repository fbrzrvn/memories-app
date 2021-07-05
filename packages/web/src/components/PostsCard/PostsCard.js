import {
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import moment from "moment";
import { object } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import {
  deletePost,
  fetchPost,
  getPostId,
  likePost,
} from "../../redux/post/postActions";
import * as ROUTES from "../../routes";
import LikePost from "./LikePost";
import {
  Card,
  PostFooter,
  PostFooterActions,
  PostFooterAuthor,
  PostFooterButton,
  PostHero,
  PostImg,
  PostInfo,
  PostP,
  PostSpan,
  PostTitle,
} from "./styles";

const PostsCard = ({ post }) => {
  const { currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGetClick = (postId) => {
    dispatch(fetchPost(postId));
    history.push(`/posts/${postId}`);
  };

  const handleUpdateClick = (postId) => {
    dispatch(getPostId(postId));
    history.push(ROUTES.UPDATE);
  };

  return (
    <Card>
      <PostHero onClick={() => handleGetClick(post._id)}>
        <PostImg src={post.media} alt={post.title} />
        <PostInfo>
          <PostP>{post.tags.map((tag) => `#${tag} `)}</PostP>
          <PostTitle>{post.title}</PostTitle>
        </PostInfo>
      </PostHero>
      <PostFooter>
        <PostFooterAuthor>
          <PostSpan>{post?.author?.name}</PostSpan>
          <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
        </PostFooterAuthor>
        <PostFooterActions>
          <PostFooterButton
            disabled={!currentUser.user}
            onClick={() => dispatch(likePost(post._id))}
          >
            <LikePost post={post} currentUser={currentUser.user} />
          </PostFooterButton>
          {(currentUser?.user?.googleId === post?.author?._id ||
            currentUser?.user?._id === post?.author?._id) && (
            <>
              <PostFooterButton
                disabled={!currentUser.user}
                onClick={() => handleUpdateClick(post._id)}
              >
                <MoreVertIcon />
              </PostFooterButton>
              <PostFooterButton
                disabled={!currentUser.user}
                onClick={() => dispatch(deletePost(post._id))}
              >
                <DeleteIcon />
              </PostFooterButton>
            </>
          )}
        </PostFooterActions>
      </PostFooter>
    </Card>
  );
};

PostsCard.propTypes = {
  post: object.isRequired,
};

export default PostsCard;
