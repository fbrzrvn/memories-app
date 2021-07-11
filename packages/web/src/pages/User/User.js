import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PostCard from "../../components/PostsCard";
import UserHero from "../../components/UserHero";
import { getEndPoint } from "../../helper";
import MainLayout from "../../layout/MainLayout";
import { fetchCurrentUser, fetchUserById } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSelector";
import { PostsWrapper } from "./styles";

const User = () => {
  const { pathname } = useLocation();
  const { posts, user } = useSelector(userSelector);
  const dispatch = useDispatch();

  const endPoint = getEndPoint(pathname);

  useEffect(() => {
    endPoint === "me"
      ? dispatch(fetchCurrentUser())
      : dispatch(fetchUserById(endPoint));
  }, [dispatch, endPoint]);

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
