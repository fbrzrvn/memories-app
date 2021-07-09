import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "../../layout/MainLayout";
import { authSelector } from "../../redux/auth/authSelector";
import {
  AuthorAvatar,
  AuthorHeaders,
  AuthorHero,
  AuthorInfo,
  AuthorStats,
  AuthorSubtitle,
  AuthorTitle,
} from "./styles";

const User = () => {
  const {
    currentUser: { user },
  } = useSelector(authSelector);

  return (
    <MainLayout>
      <AuthorHero>
        <AuthorInfo>
          <AuthorAvatar src={user?.imageUrl} alt={user?.name} />
          <AuthorHeaders>
            <AuthorTitle>{user?.name}</AuthorTitle>
            <AuthorSubtitle>{user?.email}</AuthorSubtitle>
          </AuthorHeaders>
        </AuthorInfo>
        <AuthorStats>
          <div>
            <p>5</p>
            <p>posts</p>
          </div>
          <div>
            <p>5</p>
            <p>followers</p>
          </div>
          <div>
            <p>5</p>
            <p>following</p>
          </div>
        </AuthorStats>
      </AuthorHero>
    </MainLayout>
  );
};

export default User;
