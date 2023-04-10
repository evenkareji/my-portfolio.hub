import { Box, Wrap } from '@chakra-ui/react';
import Hero from '../../components/layout/Hero';
import React from 'react';
import Meta from '../../components/molecules/Meta';
import { getAllPosts } from '../../lib/api';

import Posts from '../../components/organisms/Post';
import { InnerContents } from '../../components/layout/InnerContents';
import { eyecatchLocal } from '../../lib/constants';

export const Blog = ({ posts }) => {
  return (
    <Box mb={{ base: 20, md: 32 }}>
      <Meta pageTitle="All&nbsp;Works" pageDesc="ポートフォリオの記事一覧" />
      <Hero title="All&nbsp;Works" subtitle="~全ての作品~" />

      <InnerContents>
        <Posts posts={posts} />
      </InnerContents>
    </Box>
  );
};

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal;
    }
  }
  return {
    props: {
      posts: posts,
    },
  };
}
export default Blog;
