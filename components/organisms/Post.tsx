import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Wrap } from '@chakra-ui/react';
const Posts = ({ posts }) => {
  return (
    <Wrap justify={{ base: 'center', lg: 'flex-start' }} spacing="10px">
      {posts.map(({ title, slug, eyecatch }) => (
        <article key={slug}>
          <Link href={`/blog/${slug}`}>
            <a>
              <Box
                width={{ base: '360px', md: '260px' }}
                height={{ base: '360px', md: '260px' }}
                p={0}
                bg="white"
                // bosrderRadius="10px"
                shadow="md"
                _hover={{
                  cursor: 'pointer',
                  boxShadow: 'none',
                  transform: 'translateY(-20px)',
                }}
                transition="0.2s"
              >
                <Image
                  style={{ borderRadius: '5px', overflow: 'hidden' }}
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

    // {posts.map(({ title, slug, eyecatch }) => (
    //   <article key={slug}>
    //     <Link href={`/blog/${slug}`}>
    //       <a>
    //         <h2>{title}</h2>
    //         <figure>
    //           <Image
    //             src={eyecatch?.url}
    //             alt=""
    //             layout="responsive"
    //             width={eyecatch?.width}
    //             height={eyecatch?.height}
    //           />
    //         </figure>
    //       </a>
    //     </Link>
    //   </article>
    // ))}
  );
};
export default Posts;
