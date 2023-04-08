import { Container } from '@chakra-ui/react';
import React from 'react';

export const BodyInner = (props) => {
  const { children } = props;
  return (
    <Container
      maxW={800}
      minW={300}
      py={100}
      px={0}
      display="flex"
      w="fit-content"
      flexDirection={{ base: 'column', md: 'row' }}
    >
      {children}
    </Container>
  );
};
