import { Box } from '@chakra-ui/react';
import React from 'react';

export const InnerContents = (props) => {
  const { children } = props;
  return (
    <Box
      mx="auto"
      maxW={800}
      minW={300}
      px={0}
      display="flex"
      w="80%"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};
