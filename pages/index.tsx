import Hero from '../components/layout/Hero';

import { InnerContents } from '../components/layout/InnerContents';
import { Box, Wrap } from '@chakra-ui/react';
import Meta from '../components/molecules/Meta';
import { getAllPosts } from '../lib/api';
import { eyecatchLocal } from '../lib/constants';
import Posts from '../components/organisms/Post';
export const Home = ({ posts }) => {
  return (
    <Box mb={{ base: 20, md: 32 }}>
      <Meta />
      <Hero title="Works" subtitle="~喜んでもらえるものを作る~" imageOn />

      <InnerContents>
        <Posts posts={posts} />
      </InnerContents>
    </Box>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPosts(4);
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
};

export default Home;
