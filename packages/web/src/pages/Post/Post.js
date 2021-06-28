import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostDetails from "../../components/PostDetails";
import PostRecommended from "../../components/PostRecommended";
import Spinner from "../../components/Spinner";
import MainLayout from "../../layout/MainLayout";
import { fetchPost } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";

const Post = () => {
  const { id } = useParams();
  const { isLoading, post, relatedPosts } = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  if (!post) return false;

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <MainLayout>{post && <PostDetails post={post} />}</MainLayout>
      {relatedPosts.length > 0 && (
        <PostRecommended reccomendedPosts={relatedPosts} />
      )}
    </>
  );
};

export default Post;
