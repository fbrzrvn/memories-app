import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LoginCard from "../../components/LoginCard";
import Spinner from "../../components/Spinner";
import UserCard from "../../components/UserCard";
import UserHero from "../../components/UserHero";
import { getEndPoint } from "../../helper";
import MainLayout from "../../layout/MainLayout";
import PostLayout from "../../layout/PostLayout";
import { authSelector } from "../../redux/auth/authSelector";
import { fetchCurrentUser, fetchUserById } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSelector";

const User = () => {
  const { pathname } = useLocation();
  const { posts, user, isLoading } = useSelector(userSelector);
  const { isAuthenticated } = useSelector(authSelector);
  const dispatch = useDispatch();

  const endPoint = getEndPoint("users", pathname);

  useEffect(() => {
    isAuthenticated && endPoint === "me" && dispatch(fetchCurrentUser());
    endPoint !== "me" && dispatch(fetchUserById(endPoint));
  }, [dispatch, endPoint, isAuthenticated]);

  return isLoading ? (
    <Spinner />
  ) : (
    <MainLayout>
      {!isAuthenticated && endPoint === "me" ? (
        <LoginCard />
      ) : (
        <>
          <UserHero user={user} userPosts={posts} />
          <PostLayout>
            {posts?.map((post) => (
              <UserCard key={post._id} post={post} />
            ))}
          </PostLayout>
        </>
      )}
    </MainLayout>
  );
};

export default User;
