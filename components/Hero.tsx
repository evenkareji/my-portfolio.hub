import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <>
      {imageOn && <figure>[画像]</figure>}
      <Box textAlign="center" position="relative">
        <Heading>{title}</Heading>
        <p>{subtitle}</p>
      </Box>
    </>
  );
}
