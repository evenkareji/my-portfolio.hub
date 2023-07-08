import { Box, Wrap } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <Wrap justify={{ base: 'center', lg: 'flex-start' }} spacing="10px">
      {posts.map(({ title, slug, eyecatch }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <Box
                width={{ base: '280px', md: '260px' }}
                height={{ base: '280px', md: '260px' }}
                p={0}
                bg="white"
                shadow="md"
              >
                <SImage
                  src={eyecatch?.url}
                  alt=""
                  objectFit="cover"
                  layout="responsive"
                  width="260px"
                  height="260px"
                  priority
                />
              </Box>
              <span>{title}</span>
            </a>
          </Link>
        </article>
      ))}
    </Wrap>
  );
};
const SImage = styled(Image)`
  &:hover {
    transform: scale(110%);
  }
  transition: 0.2s;
`;
export default Posts;
