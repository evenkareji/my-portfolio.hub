import Hero from '../components/layout/Hero';
import UserCard from '../components/organisms/userCard';

import { InnerContents } from '../components/layout/InnerContents';
import { Box, Wrap } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box mb={{ base: 8, md: 12 }}>
      <Hero title="Works" subtitle="~喜んでもらえるものを作る~" imageOn />

      <InnerContents>
        <Wrap>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </Wrap>
      </InnerContents>
    </Box>
  );
};

export default Home;
