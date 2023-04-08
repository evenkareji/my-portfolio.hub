import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Logo from '../atoms/logo/Logo';
import Nav from '../molecules/Nav';
import { MenuDrawer } from '../molecules/MenuDrawer';
import { MenuIconButton } from '../atoms/button/MenuIconButton';
import { Inner } from './Inner';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box px={{ base: 4, md: 8 }} py={{ base: 2, md: 4 }}>
      <Flex
        as="header"
        align="center"
        padding={{ base: 3 }}
        gap={128}
        position="relative"
      >
        <Logo />
        <Nav />
        <MenuIconButton onOpen={onOpen} />
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
      </Flex>
    </Box>
  );
}
