import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import PostForm from "../../components/PostForm";
import MainLayout from "../../layout/MainLayout";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import { Card, CardBody, CardTitle, Container, LinkWrap } from "./styles";

const FormPost = () => {
  const { isAuthenticated } = useSelector(authSelector);
  const history = useHistory();

  const handleClick = () => {
    history.push(ROUTES.SIGN_IN);
  };

  return (
    <MainLayout>
      {isAuthenticated ? (
        <Container>
          <Card>
            <PostForm />
          </Card>
        </Container>
      ) : (
        <Card>
          <CardTitle>Sign up to continue</CardTitle>
          <CardBody>
            You&apos;ll need to sign in before upload any content
          </CardBody>
          <Button primary onClick={handleClick}>
            Sign In
          </Button>
          <LinkWrap>
            <Link to={ROUTES.SIGN_UP}>Don&apos;t have an account? Sign Up</Link>
          </LinkWrap>
        </Card>
      )}
    </MainLayout>
  );
};

export default FormPost;
