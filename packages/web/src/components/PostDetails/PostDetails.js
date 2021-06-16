import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countReadingTime, formatPostDate } from "../../helper";
import { authSelector } from "../../redux/auth/authSelector";
import { likePost } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";
import LikePost from "../LikePost";
import {
  AuthorAvatar,
  PostAuthor,
  PostAuthorName,
  PostContent,
  PostFooter,
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

const PostDetails = () => {
  const { post } = useSelector(postSelector);
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const dispatch = useDispatch();

  const readingTime = countReadingTime(post.title, post.description);

  return (
    <PostWrapper>
      <PostAuthor>
        <AuthorAvatar />
        <PostAuthorName>{post.name}</PostAuthorName>
      </PostAuthor>
      <PostHeader>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
          <PostSmall>{formatPostDate(post.createdAt)}</PostSmall>
          <PostSmall dot>·</PostSmall>
          <PostSmall>{readingTime} min read</PostSmall>
        </PostInfo>
      </PostHeader>
      <PostHero>
        <PostMedia src={post.media} alt={post.title} />
      </PostHero>
      <PostContent>
        <PostTags>{post.tags.map((tag) => `#${tag} `)}</PostTags>
        <PostP>{post.description}</PostP>
      </PostContent>
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
      </PostFooter>
    </PostWrapper>
  );
};

export default PostDetails;
