import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../routes";
import Button from "../Button";
import { Card, CardBody, CardTitle, LinkWrap } from "./styles";

const LoginCard = () => {
  const history = useHistory();

  return (
    <Card>
      <CardTitle>Sign up to continue</CardTitle>
      <CardBody>You&apos;ll need to sign in before upload any content</CardBody>
      <Button primary onClick={() => history.push(ROUTES.SIGN_IN)}>
        Sign In
      </Button>
      <LinkWrap>
        <Link to={ROUTES.SIGN_UP}>Don&apos;t have an account? Sign Up</Link>
      </LinkWrap>
    </Card>
  );
};

export default LoginCard;
