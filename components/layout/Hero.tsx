import React, { FC, memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import hero from 'images/hero.png';

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

const Hero: FC<Props> = memo(({ title, subtitle, imageOn = false }) => {
  return (
    <Box position="relative" mb={{ base: 1, md: 2 }}>
      {imageOn && (
        <Box mb={{ base: 10, md: 20 }}>
          <Image
            src={hero}
            alt="TikTok風アプリAFim"
            objectFit="cover"
            layout="responsive"
            sizes="(min-width:1152px) 1152px,100vh"
            priority
            placeholder="blur"
            style={{ transition: '0.2s' }}
          />
        </Box>
      )}
      <Box textAlign="center">
        <Heading>{title}</Heading>
        <p>{subtitle}</p>
      </Box>
    </Box>
  );
});
export default Hero;
