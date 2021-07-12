import { node } from "prop-types";
import React from "react";
import MainLayout from "../MainLayout";
import { Container } from "./styles";

const FormLayout = ({ children }) => {
  return (
    <MainLayout>
      <Container>{children}</Container>
    </MainLayout>
  );
};

FormLayout.propTypes = {
  children: node.isRequired,
};

export default FormLayout;
