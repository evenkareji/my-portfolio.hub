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
    <Box position="relative" mb={{ base: 5, md: 7 }}>
      {imageOn && (
        <Box py={5} mb={{ base: 10, md: 14 }}>
          <Image
            src={hero}
            alt="TikTok風アプリAFim"
            objectFit="cover"
            layout="responsive"
            sizes="(min-width:1152px) 1152px,100vh"
            priority
            placeholder="blur"
          />
        </Box>
      )}
      <Box textAlign="center" pt={20} pb={0}>
        <Heading as="h2" fontSize={{ base: 60, md: 100 }}>
          {title}
        </Heading>
        <p>{subtitle}</p>
      </Box>
    </Box>
  );
});
export default Hero;
