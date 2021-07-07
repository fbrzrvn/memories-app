import { array } from "prop-types";
import React from "react";
import PostsCard from "../PostsCard";
import {
  PostRecommendedContainer,
  PostRecommendedGrid,
  PostRecommendedH2,
  PostRecommendedWrap,
} from "./styles";

const PostRecommended = ({ reccomendedPosts }) => {
  return (
    <PostRecommendedContainer>
      <PostRecommendedWrap>
        <PostRecommendedH2>You may also like:</PostRecommendedH2>
        <PostRecommendedGrid>
          {reccomendedPosts.map((rp) => (
            <PostsCard key={rp._id} post={rp} type="reccomended" />
          ))}
        </PostRecommendedGrid>
      </PostRecommendedWrap>
    </PostRecommendedContainer>
  );
};

PostRecommended.propTypes = {
  reccomendedPosts: array.isRequired,
};

export default PostRecommended;
