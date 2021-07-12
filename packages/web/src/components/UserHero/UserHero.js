import { array, object } from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
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
  const { currentUser } = useSelector(authSelector);
  const { id } = useParams();
  const history = useHistory();
  const [isFollow, setIsFollow] = useState(
    user?.following?.findIndex(
      (userId) => String(userId) === String(currentUser.user._id),
    ) !== -1,
  );

  const isMe = String(currentUser?.user?._id) === String(id);

  const handleClick = () => {
    if (isMe) history.push(ROUTES.UPDATE_PROFILE);
    dispatch(followUser(id));
    setIsFollow(!isFollow);
  };

  const followed = isFollow ? "Unfollow" : "Follow";

  return (
    <AuthorHero>
      <AuthorInfo>
        <AuthorAvatar src={user?.imageUrl} alt={user?.name} />
        <AuthorHeaders>
          <AuthorTitle>{user?.username || user?.name}</AuthorTitle>
          <AuthorSubtitle>{user?.bio}</AuthorSubtitle>
          <AuthorActionBtn onClick={() => handleClick()}>
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
