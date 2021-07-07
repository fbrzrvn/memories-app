import {
  Delete as DeleteIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import { sanitize } from "dompurify";
import parse from "html-react-parser";
import { object } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { countReadingTime, formatPostDate } from "../../helper";
import { authSelector } from "../../redux/auth/authSelector";
import { DELETE, LIKE, UPDATE } from "../../utils/constant";
import BtnIcon from "../IconBtn";
import LikePost from "../PostsCard/LikePost";
import {
  AuthorAvatar,
  PostActions,
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
  const { currentUser } = useSelector(authSelector);
  const readingTime = countReadingTime(post.title, post.description);
  const cleanHTML = sanitize(post.description, {
    USE_PROFILES: { html: true },
  });

  return (
    <PostWrapper>
      <PostAuthor>
        <AuthorAvatar />
        <PostAuthorName>{post.author.name}</PostAuthorName>
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
