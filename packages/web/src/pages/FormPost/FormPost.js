import React from "react";
import { useLocation } from "react-router-dom";
import PostForm from "../../components/PostForm";
import { getEndPoint } from "../../helper";
import MainLayout from "../../layout/MainLayout";
import {
  ACTION_CREATE,
  ACTION_UPDATE,
  ENDPOINT_CREATE,
} from "../../utils/constant";
import { Container } from "./styles";

const FormPost = () => {
  const { pathname } = useLocation();
  const endPoint = getEndPoint("posts", pathname);
  const actionType =
    endPoint === ENDPOINT_CREATE ? ACTION_CREATE : ACTION_UPDATE;

  return (
    <MainLayout>
      <Container>
        <PostForm action={actionType} />
      </Container>
    </MainLayout>
  );
};

export default FormPost;
