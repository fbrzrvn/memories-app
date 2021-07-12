import { Delete as DeleteIcon } from "@material-ui/icons";
import { bool, object } from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { formatCommentDate } from "../../helper";
import useWindowSize from "../../hooks/useWindowSize";
import { authSelector } from "../../redux/auth/authSelector";
import { commentPost, deleteComment } from "../../redux/post/postActions";
import { fetchUserById } from "../../redux/user/userActions";
import Button from "../Button";
import {
  AuthorAvatar,
  CommentAuthor,
  CommentBody,
  CommentCard,
  CommentDate,
  CommentDeleteButton,
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
  const { currentUser } = useSelector(authSelector);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const history = useHistory();
  const currentWidth = useWindowSize();

  const commentsCount = post?.comments?.length;

  const handleCommentClick = () => {
    comment && dispatch(commentPost(id, comment));
  };

  const handleUserClick = (userId) => {
    dispatch(fetchUserById(userId));
    history.push(`/users/${userId}`);
  };

  return (
    <CommentsContainer>
      <CommentsWrap>
        {commentsCount > 0 && (
          <CommentsWrapper>
            <CommentsTitle>
              {`${
                commentsCount > 1
                  ? `${commentsCount} comments`
                  : `${commentsCount} comment`
              } to "${post.title}"`}
            </CommentsTitle>
            {post.comments.map((c) => (
              <CommentCard key={c._id}>
                <CommentHeader>
                  <AuthorAvatar src={c.author.imageUrl} alt={c.author.name}>
                    {c.author.name.charAt(0).toUpperCase()}
                  </AuthorAvatar>
                  <CommentAuthor onClick={() => handleUserClick(c.author._id)}>
                    {c.author.name}
                  </CommentAuthor>
                  <CommentDivider>·</CommentDivider>
                  <CommentDate>{formatCommentDate(c.createdAt)}</CommentDate>
                  {currentUser?.user?._id === c?.author?._id && (
                    <CommentDeleteButton
                      type="button"
                      onClick={() => dispatch(deleteComment(post._id, c._id))}
                    >
                      <DeleteIcon />
                    </CommentDeleteButton>
                  )}
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
