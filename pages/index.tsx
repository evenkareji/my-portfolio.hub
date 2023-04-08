import Hero from '../components/layout/Hero';
import UserCard from '../components/organisms/userCard';

import { InnerContents } from '../components/layout/InnerContents';
import { Box, Wrap } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Box mb={{ base: 20, md: 32 }}>
      <Hero title="Works" subtitle="~喜んでもらえるものを作る~" imageOn />

      <InnerContents>
        <Wrap justify={{ base: 'center', lg: 'flex-start' }} spacing="10px">
          <UserCard />
          <UserCard />
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
