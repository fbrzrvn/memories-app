import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostCard";
import MainLayout from "../../layout/MainLayout";
import { fetchPosts } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";
import { MainWrapper } from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(postSelector);

  useEffect(() => {
    posts.length === 0 && dispatch(fetchPosts());
  }, [dispatch, posts.length]);

  return (
    <MainLayout>
      <MainWrapper>
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </MainWrapper>
    </MainLayout>
  );
};

export default Home;
