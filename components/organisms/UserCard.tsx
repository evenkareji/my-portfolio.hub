import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import hero from 'images/hero.png';
const UserCard = () => {
  return (
    <Box
      width={{ base: '360px', md: '260px' }}
      height={{ base: '360px', md: '260px' }}
      p={0}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{
        cursor: 'pointer',
        boxShadow: 'none',
        transform: 'translateY(-20px)',
      }}
      transition="0.2s"
    >
      <Image
        style={{ borderRadius: '5px', overflow: 'hidden' }}
        src={hero}
        alt="TikTok風アプリAFim"
        objectFit="cover"
        layout="responsive"
        width="260px"
        height="260px"
        priority
        placeholder="blur"
      />
    </Box>
  );
};
export default UserCard;
