import {
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import moment from "moment";
import { object, string } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { fetchPost } from "../../redux/post/postActions";
import { fetchUserById } from "../../redux/user/userActions";
import { DELETE, LIKE, UPDATE } from "../../utils/constant";
import BtnIcon from "../IconBtn";
import LikePost from "./LikePost";
import {
  Card,
  PostFooter,
  PostFooterActions,
  PostFooterAuthor,
  PostHero,
  PostImg,
  PostInfo,
  PostP,
  PostSpan,
  PostTitle,
} from "./styles";

const PostsCard = ({ post, type }) => {
  const { currentUser } = useSelector(authSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (postId) => {
    dispatch(fetchPost(postId));
    history.push(`/posts/${postId}`);
  };

  const handleUserClick = (userId) => {
    dispatch(fetchUserById(userId));
    history.push(`/users/${userId}`);
  };

  return (
    <Card>
      <PostHero onClick={() => handleClick(post._id)}>
        <PostImg src={post.media} alt={post.title} />
        <PostInfo>
          <PostP>{post.tags.map((tag) => `#${tag} `)}</PostP>
          <PostTitle>{post.title}</PostTitle>
        </PostInfo>
      </PostHero>
      <PostFooter>
        <PostFooterAuthor>
          <PostSpan spanLink onClick={() => handleUserClick(post?.author?._id)}>
            {post?.author?.name}
          </PostSpan>
          <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
        </PostFooterAuthor>
        <PostFooterActions reccomended={type}>
          <BtnIcon
            action={LIKE}
            post={post}
            currentUser={currentUser}
            icon={<LikePost post={post} currentUser={currentUser.user} />}
          />
          {currentUser?.user?._id === post?.author?._id && (
            <>
              <BtnIcon
                action={UPDATE}
                post={post}
                currentUser={currentUser}
                icon={<MoreVertIcon />}
              />
              <BtnIcon
                action={DELETE}
                post={post}
                currentUser={currentUser}
                icon={<DeleteIcon />}
              />
            </>
          )}
        </PostFooterActions>
      </PostFooter>
    </Card>
  );
};

PostsCard.propTypes = {
  post: object.isRequired,
  type: string,
};
PostsCard.defaultProps = {
  type: "",
};

export default PostsCard;
