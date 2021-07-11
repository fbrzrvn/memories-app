import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {
  resetAuthState,
  signUp,
  signUpError,
} from "../../redux/auth/authActions";
import { authSelector } from "../../redux/auth/authSelector";
import * as ROUTES from "../../routes";
import Button from "../Button";
import {
  Container,
  ErrorMsg,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  FormWrapper,
  GoogleBtn,
  GoogleIcon,
  LinkWrap,
} from "./styles";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { isSigningUp, isSignUpError, isAuthenticated } = useSelector(
    authSelector,
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onBlur",
  });

  useEffect(() => {
    dispatch(resetAuthState());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(signUp(data));
  };

  const googleSuccess = async (res) => {
    const user = res.profileObj;
    dispatch(signUp(user));
  };

  const googleFailure = () => {
    dispatch(signUpError("Google Sign Up was unsuccessful. Try again later."));
  };

  if (isAuthenticated) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <Container>
      <FormWrapper>
        <FormContent>
          <FormH1>Sign Up</FormH1>
          <FormWrap onSubmit={handleSubmit(onSubmit)}>
            <FormLabel>Fist Name</FormLabel>
            <FormInput
              name="givenName"
              type="text"
              placeholder="Enter your first name"
              autoComplete="given-name"
              onChange={(e) => setValue("givenName", e.target.value)}
              {...register("givenName", {
                required: "Please enter your first name",
              })}
              error={errors.givenName}
            />
            {errors.givenName && (
              <ErrorMsg>{errors.givenName.message}</ErrorMsg>
            )}

            <FormLabel>Last Name</FormLabel>
            <FormInput
              name="familyName"
              type="text"
              placeholder="Enter your last name"
              autoComplete="family-name"
              onChange={(e) => setValue("familyName", e.target.value)}
              {...register("familyName", {
                required: "Please enter your last name",
              })}
              error={errors.familyName}
            />
            {errors.familyName && (
              <ErrorMsg>{errors.familyName.message}</ErrorMsg>
            )}

            <FormLabel>Email</FormLabel>
            <FormInput
              name="email"
              type="text"
              placeholder="Enter your email"
              autoComplete="email"
              onChange={(e) => setValue("email", e.target.value)}
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a correct email address",
                },
                required: "Please enter your email",
              })}
              error={errors.email}
            />
            {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            <FormLabel>Password</FormLabel>
            <FormInput
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="new-password"
              onChange={(e) => setValue("password", e.target.value)}
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password must be al least 6 char long",
                },
                required: "Please enter a password",
              })}
              error={errors.password}
            />
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
            <FormLabel>Confirm Password</FormLabel>
            <FormInput
              name="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
              onChange={(e) => setValue("confirmPassword", e.target.value)}
              {...register("confirmPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be al least 6 char long",
                },
                required: "Please enter a repeated password",
              })}
              error={errors.confirmPassword}
            />
            {errors.confirmPassword && (
              <ErrorMsg>{errors.confirmPassword.message}</ErrorMsg>
            )}
            {isSignUpError && <ErrorMsg>{isSignUpError}</ErrorMsg>}
            <Button primary disabled={isSigningUp}>
              Sign Up
            </Button>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_AUTH_ID}
              render={(renderProps) => (
                <GoogleBtn
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <GoogleIcon />
                  Sign Up with Google
                </GoogleBtn>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <LinkWrap>
              <Link to={ROUTES.SIGN_IN}>Already have an account? Sign In</Link>
            </LinkWrap>
          </FormWrap>
        </FormContent>
      </FormWrapper>
    </Container>
  );
};

export default SignUpForm;
