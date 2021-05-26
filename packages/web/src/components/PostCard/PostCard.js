import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import moment from "moment";
import { object } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/authSelector";
import {
  Card,
  PostFooter,
  PostH2,
  PostImg,
  PostInfo,
  PostOverlay,
  PostOverlay2,
  PostP,
  PostSpan,
} from "./styles";

const PostCard = ({ post }) => {
  const { currentUser } = useSelector(authSelector);

  return (
    <Card>
      <PostImg src={post.media} alt={post.title} />
      <PostOverlay>
        <PostSpan>{post.name}</PostSpan>
        <PostSpan>{moment(post.createdAt).fromNow()}</PostSpan>
      </PostOverlay>
      <PostOverlay2>
        {(currentUser?.user?.googleId === post?.author ||
          currentUser?.user?._id === post?.author) && (
          <Button style={{ color: "#F5F6F7" }} size="small">
            <MoreVertIcon />
          </Button>
        )}
      </PostOverlay2>
      <PostInfo>
        <PostP>{post.tags.map((tag) => `#${tag} `)}</PostP>
        <PostH2>{post.title}</PostH2>
        <PostFooter>
          <Button size="small" color="primary">
            <ThumbUpAltOutlined fontSize="small" />
            &nbsp; Like
          </Button>
          {(currentUser?.user?.googleId === post?.author ||
            currentUser?.user?._id === post?.author) && (
            <Button size="small" color="primary">
              <DeleteIcon fontSize="small" />
              &nbsp; Delete
            </Button>
          )}
        </PostFooter>
      </PostInfo>
    </Card>
  );
};

PostCard.propTypes = {
  post: object.isRequired,
};

export default PostCard;
