import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../components/PostsCard";
import UserHero from "../../components/UserHero";
import MainLayout from "../../layout/MainLayout";
import { authSelector } from "../../redux/auth/authSelector";
import { fetchUserPosts } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSelector";
import { PostsWrapper } from "./styles";

const User = () => {
  const dispatch = useDispatch();
  const {
    currentUser: { user },
  } = useSelector(authSelector);
  const { posts } = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);

  return (
    <MainLayout>
      <UserHero user={user} userPosts={posts} />
      <PostsWrapper>
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </PostsWrapper>
    </MainLayout>
  );
};

export default User;
