import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SpinnerWrap from "../../components/Spinner";
import UserCard from "../../components/UserCard";
import UserHero from "../../components/UserHero";
import { getEndPoint } from "../../helper";
import MainLayout from "../../layout/MainLayout";
import PostLayout from "../../layout/PostLayout";
import { fetchCurrentUser, fetchUserById } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSelector";

const User = () => {
  const { pathname } = useLocation();
  const { posts, user, isLoading } = useSelector(userSelector);
  const dispatch = useDispatch();

  const endPoint = getEndPoint("users", pathname);

  useEffect(() => {
    endPoint === "me"
      ? dispatch(fetchCurrentUser())
      : dispatch(fetchUserById(endPoint));
  }, [dispatch, endPoint]);

  return isLoading ? (
    <SpinnerWrap />
  ) : (
    <MainLayout>
      <UserHero user={user} userPosts={posts} />
      <PostLayout>
        {posts?.map((post) => (
          <UserCard key={post._id} post={post} />
        ))}
      </PostLayout>
    </MainLayout>
  );
};

export default User;
