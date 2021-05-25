import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authSelector } from "../../redux/auth/authSelector";
import { createPost } from "../../redux/post/postActions";
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

const UploadForm = () => {
  const { currentUser } = useSelector(authSelector);
  const initialState = {
    title: "",
    description: "",
    media: "",
    tags: [],
    author: currentUser.user.name.split(" ")[0],
  };

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
    history.push("/");
    setFormData(initialState);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Create a new post</FormH1>
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
            <Button primary>Send</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default UploadForm;
