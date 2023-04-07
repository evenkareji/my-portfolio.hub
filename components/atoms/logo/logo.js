import React from 'react';
import { Heading } from '@chakra-ui/react';
import Link from 'next/link';

import styles from './logo.module.css';

export default function Logo() {
  return (
    <Link href="/">
      <Heading
        as="h1"
        w={100}
        fontSize={{ base: 'lg', md: 'xl' }}
        align="center"
        _hover={{ cursor: 'poiter' }}
        py={2}
        px={{ base: '4', md: '6' }}
        // className={styles.logoColor}
      >
        <a>TM</a>
      </Heading>
    </Link>
  );
}
