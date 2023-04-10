import React from 'react';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

export default function Logo(props) {
  const { isFooter = false } = props;
  return (
    <Link href="/">
      <Heading
        as="h1"
        w={100}
        fontSize={{ base: 'lg', md: 'xl' }}
        textAlign="center"
        _hover={{ cursor: 'pointer' }}
        py={2}
        color={isFooter ? '#000000' : '#fff'}
        bg={isFooter ? 'gray.300' : '#E74040'}
      >
        <a>TM</a>
      </Heading>
    </Link>
  );
}
