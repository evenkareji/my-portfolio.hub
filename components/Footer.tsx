import React from 'react';
import Logo from './atoms/logo/Logo';
import { Box, Center, Flex, Spacer, Stack, VStack } from '@chakra-ui/react';
import { Social } from './atoms/Social';
import { Inner } from './layout/Inner';
import { BodyInner } from './layout/BodyInner';

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="gray.300"
      height={{ base: '100px', md: '130px' }}
      align="center"
    >
      <Inner>
        <Flex
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          display="flex"
          w="100%"
          justifyContent={{ base: 'center', md: 'space-between' }}
        >
          <Logo isFooter={true} />

          <Social isFooter={true} />
        </Flex>
      </Inner>
    </Flex>
  );
};
export default Footer;
