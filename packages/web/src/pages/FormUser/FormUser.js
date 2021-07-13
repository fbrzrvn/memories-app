import React from "react";
import UserForm from "../../components/UserForm";
import AuthErrorLayout from "../../layout/AuthErrorLayout";
import FormLayout from "../../layout/FormLayout/FormLayout";

const FormUser = () => {
  return (
    <FormLayout>
      <AuthErrorLayout>
        <UserForm />
      </AuthErrorLayout>
    </FormLayout>
  );
};

export default FormUser;
