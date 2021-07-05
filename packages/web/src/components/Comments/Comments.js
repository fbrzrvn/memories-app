import { bool, object } from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatCommentDate } from "../../helper";
import useWindowSize from "../../hooks/useWindowSize";
import { commentPost } from "../../redux/post/postActions";
import Button from "../Button";
import {
  CommentAuthor,
  CommentBody,
  CommentCard,
  CommentDate,
  CommentDivider,
  CommentHeader,
  CommentsContainer,
  CommentsForm,
  CommentsInput,
  CommentsTitle,
  CommentsWrap,
  CommentsWrapper,
} from "./styles";

const Comments = ({ post, isAuthenticated }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const currentWidth = useWindowSize();

  const handleCommentClick = () => {
    comment && dispatch(commentPost(id, comment));
  };

  return (
    <CommentsContainer>
      <CommentsWrap>
        {post.comments.length > 0 && (
          <CommentsWrapper>
            <CommentsTitle>
              {`${post.comments.length} comments to "${post.title}"`}
            </CommentsTitle>
            {post.comments.map((c) => (
              <CommentCard key={c._id}>
                <CommentHeader>
                  <CommentAuthor>{c.author.name}</CommentAuthor>
                  <CommentDivider>·</CommentDivider>
                  <CommentDate>{formatCommentDate(c.createdAt)}</CommentDate>
                </CommentHeader>
                <CommentBody>{c.comment}</CommentBody>
              </CommentCard>
            ))}
          </CommentsWrapper>
        )}
        {isAuthenticated && (
          <>
            <CommentsTitle>Leave a comment</CommentsTitle>
            <CommentsForm>
              <CommentsInput
                type="text"
                placeholder="Enter your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                small={currentWidth > 575}
                type="button"
                onClick={handleCommentClick}
              >
                Post Comment
              </Button>
            </CommentsForm>
          </>
        )}
      </CommentsWrap>
    </CommentsContainer>
  );
};

Comments.propTypes = {
  post: object.isRequired,
  isAuthenticated: bool.isRequired,
};

export default Comments;
