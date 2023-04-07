import React from 'react';
import Logo from './atoms/logo/logo';
import { Flex, Spacer } from '@chakra-ui/react';
import { Social } from './atoms/Social';
import { Inner } from './layout/Inner';

export const Footer = () => {
  return (
    <Flex as="footer" bg="gray.300">
      <Inner>
        <Flex>
          <Logo />
          <Spacer />
          <Social />
        </Flex>
      </Inner>
    </Flex>
  );
};
export default Footer;
