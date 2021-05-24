import React from "react";
import { SignInForm } from "../../components/AuthForm";
import AuthLayout from "../../layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
