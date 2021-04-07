import { Container } from '@material-ui/core';

import Header from '../../components/Header';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <Container style={{ margin: '32px auto' }}>{children}</Container>
    </>
  );
};

export default Main;
