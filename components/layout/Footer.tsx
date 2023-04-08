import React from 'react';
import Logo from '../atoms/logo/Logo';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { Social } from '../atoms/Social';
import { Inner } from './Inner';
import { InnerContents } from './InnerContents';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="gray.300"
      height={{ base: '100px', md: '130px' }}
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
          <Heading as="h4" fontSize={{ base: 'md', md: 'lg' }}>
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
