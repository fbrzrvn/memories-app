import React from "react";
import PostForm from "../../components/PostForm";
import MainLayout from "../../layout/MainLayout";
import { Container } from "./styles";

const UpdatePost = () => {
  return (
    <MainLayout>
      <Container>
        <PostForm action="Update" />
      </Container>
    </MainLayout>
  );
};

export default UpdatePost;
