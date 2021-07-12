import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUserProfile } from "../../redux/user/userActions";
import { userSelector } from "../../redux/user/userSelector";
import * as ROUTES from "../../routes";
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
  username: "",
  name: "",
  bio: "",
  imageUrl: "",
};

const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const [userData, setUserData] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(userData));
    history.push(ROUTES.ME);
  };

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>User Profile Form</FormH1>
          <FormWrap onSubmit={handleSubmit}>
            <FormLabel>Profile picture</FormLabel>
            <FileInputWrap>
              <FileBase
                name="imageUrl"
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setUserData({ ...userData, imageUrl: base64 })
                }
              />
            </FileInputWrap>
            <FormLabel>Username</FormLabel>
            <FormInput
              name="username"
              type="text"
              placeholder="Enter a username"
              defaultValue={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <FormLabel>Name</FormLabel>
            <FormInput
              name="name"
              type="text"
              placeholder="Enter a name"
              defaultValue={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <FormLabel>Bio</FormLabel>
            <FormTextarea
              name="bio"
              placeholder="Enter a bio"
              rows={2}
              cols={5}
              defaultValue={userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
            />
            <Button primary>Update</Button>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default UserForm;
