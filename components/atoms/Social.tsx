import { Button, Flex } from '@chakra-ui/react';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

export const Social = () => {
  return (
    <Flex as="ul" alignItems="center">
      <Link href="https://twitter.com">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link href="https://github.com">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Flex>
  );
};
