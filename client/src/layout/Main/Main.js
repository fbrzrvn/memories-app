import { Container } from '@material-ui/core';

import Header from '../../components/Header';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Main;
