import { object } from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { commentPost } from "../../redux/post/postActions";
import Button from "../Button";
import {
  CommentAuthor,
  CommentCard,
  CommentsContainer,
  CommentsForm,
  CommentsInput,
  CommentsTitle,
  CommentsWrap,
  CommentsWrapper,
} from "./styles";

const Comments = ({ post }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const handleCommentClick = () => {
    comment && dispatch(commentPost(id, comment));
  };

  return (
    <CommentsContainer>
      <CommentsWrap>
        <CommentsTitle>Leave a reply</CommentsTitle>
        <CommentsWrapper>
          {post.comments.length > 0 &&
            post.comments.map((c) => (
              <CommentCard key={c._id}>
                <CommentAuthor>{c.author.name}</CommentAuthor>
                {c.comment}
              </CommentCard>
            ))}
        </CommentsWrapper>
        <CommentsForm>
          <CommentsInput
            type="text"
            placeholder="Type a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button small type="button" onClick={handleCommentClick}>
            Add
          </Button>
        </CommentsForm>
      </CommentsWrap>
    </CommentsContainer>
  );
};

Comments.propTypes = {
  post: object.isRequired,
};

export default Comments;
