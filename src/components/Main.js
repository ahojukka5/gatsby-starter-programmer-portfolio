import React from 'react';
import Container from '@material-ui/core/Container';

const Main = ({ children }) => {
  return (
    <main>
      <Container maxWidth="md">{children}</Container>
    </main>
  );
};

export default Main;
