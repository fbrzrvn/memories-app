import { object } from "prop-types";
import React from "react";
import { countReadingTime, formatPostDate } from "../../helper";
import {
  AuthorAvatar,
  PostAuthor,
  PostAuthorName,
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
    </PostWrapper>
  );
};

PostDetails.propTypes = {
  post: object.isRequired,
};

export default PostDetails;
