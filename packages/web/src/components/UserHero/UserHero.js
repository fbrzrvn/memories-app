import { array, object } from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { followUser } from "../../redux/user/userActions";
import * as ROUTES from "../../routes";
import {
  AuthorActionBtn,
  AuthorAvatar,
  AuthorHeaders,
  AuthorHero,
  AuthorInfo,
  AuthorP,
  AuthorSmall,
  AuthorStats,
  AuthorSubtitle,
  AuthorTitle,
} from "./styles";

const UserHero = ({ user, userPosts }) => {
  const dispatch = useDispatch();
  const { isAuthenticated, currentUser } = useSelector(authSelector);
  const history = useHistory();
  const [isFollow, setIsFollow] = useState(
    user?.followers?.findIndex(
      (userId) => String(userId) === String(currentUser?.user?._id),
    ) !== -1,
  );

  const isMe = String(currentUser?.user?._id) === String(user?._id);

  const handleClick = () => {
    if (isMe) {
      history.push(ROUTES.UPDATE_PROFILE);
    } else {
      dispatch(followUser(user?._id));
      setIsFollow(!isFollow);
    }
  };

  const followed = isFollow ? "Unfollow" : "Follow";

  return (
    <AuthorHero>
      <AuthorInfo>
        <AuthorAvatar src={user?.imageUrl} alt={user?.name} />
        <AuthorHeaders>
          <AuthorTitle>{user?.username || user?.name}</AuthorTitle>
          <AuthorSubtitle>{user?.bio}</AuthorSubtitle>
          <AuthorActionBtn
            onClick={() => handleClick()}
            disabled={!isAuthenticated}
          >
            {isMe ? "Edit Profile" : followed}
          </AuthorActionBtn>
        </AuthorHeaders>
      </AuthorInfo>
      <AuthorStats>
        <div>
          <AuthorP>{userPosts?.length}</AuthorP>
          <AuthorSmall>{userPosts?.length > 1 ? "posts" : "post"}</AuthorSmall>
        </div>
        <div>
          <AuthorP>{user?.followers?.length}</AuthorP>
          <AuthorSmall>
            {user?.followers?.length > 1 ? "followers" : "follower"}
          </AuthorSmall>
        </div>
        <div>
          <AuthorP>{user?.following?.length}</AuthorP>
          <AuthorSmall>following</AuthorSmall>
        </div>
      </AuthorStats>
    </AuthorHero>
  );
};

UserHero.propTypes = {
  user: object,
  userPosts: array.isRequired,
};

UserHero.defaultProps = {
  user: {},
};

export default UserHero;
