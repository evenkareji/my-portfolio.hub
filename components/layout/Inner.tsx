import { Box } from '@chakra-ui/react';
import React from 'react';

export const Inner = (props) => {
  const { children } = props;
  return (
    <Box mx="auto" w="93%">
      {children}
    </Box>
  );
};
