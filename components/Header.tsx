import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import Logo from './atoms/logo/logo';
import Nav from './molecules/Nav';
import { MenuDrawer } from './molecules/MenuDrawer';
import { MenuIconButton } from './atoms/button/MenuIconButton';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
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
