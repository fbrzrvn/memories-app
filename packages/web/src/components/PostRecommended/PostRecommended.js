import { array } from "prop-types";
import React from "react";
import PostsCard from "../PostsCard";
import {
  PostRecommendedGrid,
  PostRecommendedH2,
  PostRecommendedWrap,
} from "./styles";

const PostRecommended = ({ reccomendedPosts }) => {
  return (
    <PostRecommendedWrap>
      <PostRecommendedH2>You may also like:</PostRecommendedH2>
      <PostRecommendedGrid>
        {reccomendedPosts.map((rp) => (
          <PostsCard key={rp._id} post={rp} />
        ))}
      </PostRecommendedGrid>
    </PostRecommendedWrap>
  );
};

PostRecommended.propTypes = {
  reccomendedPosts: array.isRequired,
};

export default PostRecommended;
