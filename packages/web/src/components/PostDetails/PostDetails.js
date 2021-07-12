import {
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import { sanitize } from "dompurify";
import parse from "html-react-parser";
import { object } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { countReadingTime, formatPostDate } from "../../helper";
import { authSelector } from "../../redux/auth/authSelector";
import { fetchUserById } from "../../redux/user/userActions";
import { DELETE, LIKE, UPDATE } from "../../utils/constant";
import BtnIcon from "../IconBtn";
import LikePost from "../PostsCard/LikePost";
import {
  AuthorAvatar,
  AuthorName,
  AuthorWrap,
  PostActions,
  PostAuthor,
  PostContent,
  PostHeader,
  PostHero,
  PostInfo,
  PostMedia,
  PostP,
  PostSmall,
  PostTags,
  PostTitle,
  PostWrapper,
} from "./styles";

const PostDetails = ({ post }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentUser } = useSelector(authSelector);
  const readingTime = countReadingTime(post.title, post.description);
  const cleanHTML = sanitize(post.description, {
    USE_PROFILES: { html: true },
  });

  const handleUserClick = (userId) => {
    dispatch(fetchUserById(userId));
    history.push(`/users/${userId}`);
  };

  return (
    <PostWrapper>
      <PostAuthor>
        <AuthorAvatar src={post.author?.imageUrl} alt={post.author?.name}>
          {post.author?.name.charAt(0).toUpperCase()}
        </AuthorAvatar>
        <AuthorWrap onClick={() => handleUserClick(post?.author?._id)}>
          <AuthorName>{post.author.username || post.author.name}</AuthorName>
          <PostSmall>{post.author?.bio}</PostSmall>
        </AuthorWrap>
      </PostAuthor>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          <PostSmall>{formatPostDate(post.createdAt)}</PostSmall>
          <PostSmall dot>·</PostSmall>
          <PostSmall>{readingTime} min read</PostSmall>
          <PostActions>
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
          </PostActions>
        </PostInfo>
      </PostHeader>
      <PostHero>
        <PostMedia src={post.media} alt={post.title} />
      </PostHero>
      <PostContent>
        <PostTags>{post.tags.map((tag) => `#${tag} `)}</PostTags>
        <PostP>{parse(cleanHTML)}</PostP>
      </PostContent>
    </PostWrapper>
  );
};

PostDetails.propTypes = {
  post: object.isRequired,
};

export default PostDetails;
