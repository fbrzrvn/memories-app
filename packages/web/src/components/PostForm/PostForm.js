import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  createPost,
  ResetPostId,
  updatePost,
} from "../../redux/post/postActions";
import { postSelector } from "../../redux/post/postSelector";
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

const PostForm = ({ action }) => {
  const { posts, currentPostId } = useSelector(postSelector);
  const currentPost = posts.find((post) => post._id === currentPostId);

  const initialState = {
    title: "",
    description: "",
    media: "",
    tags: [],
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (currentPost) setFormData(currentPost);
  }, [currentPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentPostId === null) {
      dispatch(createPost(formData));
    } else {
      dispatch(updatePost(currentPostId, formData));
    }
    clear();
  };

  const clear = () => {
    setFormData(initialState);
    dispatch(ResetPostId());
    history.push("/");
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
