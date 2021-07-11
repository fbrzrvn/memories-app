import { object } from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPost } from "../../redux/post/postActions";
import { Card, PostHero, PostImg, PostInfo, PostP, PostTitle } from "./styles";

const UserCard = ({ post }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (postId) => {
    dispatch(fetchPost(postId));
    history.push(`/posts/${postId}`);
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
    </Card>
  );
};

UserCard.propTypes = {
  post: object.isRequired,
};

export default UserCard;
