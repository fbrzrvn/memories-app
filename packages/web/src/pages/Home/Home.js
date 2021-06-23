import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import PostsCard from "../../components/PostsCard";
import SpinnerWrap from "../../components/Spinner";
import MainLayout from "../../layout/MainLayout";
import { fetchPosts } from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";
import { MainWrapper } from "./styles";

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
  }, [dispatch, page]);

  return (
    <>
      {isLoading ? (
        <SpinnerWrap />
      ) : (
        <MainLayout>
          <MainWrapper>
            {posts.map((post) => (
              <PostsCard key={post._id} post={post} />
            ))}
          </MainWrapper>
          <Pagination page={Number(page)} />
        </MainLayout>
      )}
      <Footer />
    </>
  );
};

export default Home;
