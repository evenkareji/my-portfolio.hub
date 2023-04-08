import { Box } from '@chakra-ui/react';
import Hero from '../../components/layout/Hero';
import React from 'react';
import Meta from '../../components/molecules/Meta';

export default function Blog() {
  return (
    <Box mb={{ base: 20, md: 32 }}>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="~クソブログ~" />
    </Box>
  );
}
