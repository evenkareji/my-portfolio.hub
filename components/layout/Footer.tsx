import React from 'react';

import { Box, Flex, Heading } from '@chakra-ui/react';
import { Social } from '../atoms/Social';

import { InnerContents } from './InnerContents';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="gray.300"
      height={{ base: '200px', md: '280px' }}
      align="center"
    >
      <InnerContents>
        <Flex
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          display="flex"
          w="100%"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <Heading as="h4" fontSize={{ base: 20, md: 30 }}>
            TM
          </Heading>

          <Box width={100}>
            <Social isFooter={true} />
          </Box>
        </Flex>
      </InnerContents>
    </Flex>
  );
};
export default Footer;
