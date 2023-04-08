import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import hero from 'images/hero.png';
const UserCard = () => {
  return (
    <Box
      width="260px"
      height="260px"
      p={0}
      bg="white"
      borderRadius="10px"
      shadow="md"
      _hover={{ cursor: 'pointer', boxShadow: 'none' }}
    >
      <div
        style={{
          borderRadius: '5px',
          overflow: 'hidden',
          transition: '0.2s',
        }}
      >
        <Image
          src={hero}
          alt="TikTok風アプリAFim"
          objectFit="cover"
          layout="responsive"
          width="260px"
          height="260px"
          priority
          placeholder="blur"
        />
      </div>
    </Box>
  );
};
export default UserCard;
