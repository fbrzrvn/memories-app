import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Pagination from "../../components/Pagination";
import PostsCard from "../../components/PostsCard";
import SpinnerWrap from "../../components/Spinner";
import MainLayout from "../../layout/MainLayout";
import PostLayout from "../../layout/PostLayout";
import { fetchPosts } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector(postSelector);
  const query = useQuery();
  const page = query.get("page") || 1;

  useEffect(() => {
    page && dispatch(fetchPosts(page));
  }, [dispatch, page, posts.length]);

  return isLoading ? (
    <SpinnerWrap />
  ) : (
    <MainLayout>
      <PostLayout>
        {posts.map((post) => (
          <PostsCard key={post._id} post={post} />
        ))}
      </PostLayout>
      <Pagination page={Number(page)} />
    </MainLayout>
  );
};

export default Home;
