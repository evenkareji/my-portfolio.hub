import React from 'react';
import { Box, Flex, IconButton, Spacer } from '@chakra-ui/react';
import Link from 'next/link';

export default function Nav() {
  return (
    <Flex as="nav" bg="white" color="black" align="center">
      <Flex
        as="ul"
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: 'none', md: 'flex' }}
        justify="space-between"
      >
        <Box as="li" p={3} mr={42}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Box>
        <Box as="li" p={3} mr={42}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Box>
        <Box as="li" p={3} mr={42}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}
