import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { getEndPoint } from "../../helper";
import {
  createPost,
  resetPostId,
  updatePost,
} from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";
import { ENDPOINT_UPDATE } from "../../utils/constant";
import Button from "../Button";
import {
  Container,
  FileInputWrap,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormTextarea,
  FormWrap,
  FormWrapper,
} from "./styles";

const initialState = {
  title: "",
  description: "",
  media: "",
  tags: [],
};

const PostForm = ({ action }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { posts, currentPostId } = useSelector(postSelector);
  const { pathname } = useLocation();
  const history = useHistory();

  const currentPost = posts.find((post) => post._id === currentPostId);
  const endPoint = getEndPoint("posts", pathname);

  useEffect(() => {
    if (currentPost && endPoint === ENDPOINT_UPDATE) setFormData(currentPost);
  }, [currentPost, endPoint]);

  const clear = () => {
    setFormData(initialState);
    dispatch(resetPostId());
    history.push("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentPostId === null) {
      dispatch(createPost(formData));
    } else {
      dispatch(updatePost(currentPostId, formData));
    }
    clear();
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>{action} a new post</FormH1>
          <FormWrap onSubmit={handleSubmit}>
            <FormLabel>Title</FormLabel>
            <FormInput
              name="title"
              type="text"
              placeholder="Enter a title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <FormLabel>Description</FormLabel>
            <FormTextarea
              name="description"
              placeholder="Enter a description"
              rows={5}
              cols={5}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            />
            <FormLabel>Tags</FormLabel>
            <FormInput
              name="tags"
              type="text"
              placeholder="Enter tags separated by comma ex: tag1,tag2,tag3"
              value={formData.tags}
              onChange={(e) =>
                setFormData({ ...formData, tags: e.target.value.split(",") })
              }
            />
            <FileInputWrap>
              <FormLabel>Upload a file</FormLabel>
              <FileBase
                type="file"
                name="media"
                multiple={false}
                onDone={({ base64 }) =>
                  setFormData({ ...formData, media: base64 })
                }
              />
            </FileInputWrap>
            <Button primary>{action}</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

PostForm.propTypes = {
  action: string.isRequired,
};

export default PostForm;
