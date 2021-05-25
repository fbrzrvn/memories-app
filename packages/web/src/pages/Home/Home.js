import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { fetchPosts } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <MainLayout>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </MainLayout>
  );
};

export default Home;
