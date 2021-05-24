import React from "react";
import { SignUpForm } from "../../components/AuthForm";
import AuthLayout from "../../layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUp;
