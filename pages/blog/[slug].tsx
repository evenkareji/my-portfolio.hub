import React, { FC } from 'react';
import getPostBySlug, { getAllSlugs } from '../../lib/api';
import ConvertDate from '../../components/atoms/convert/ConvertDate';
import ConvertBody from '../../components/atoms/convert/ConvertBody';
import PostBodyCss from '../../components/post-body';
import { Inner } from '../../components/layout/Inner';
import { Box, Heading } from '@chakra-ui/react';
import { Social } from '../../components/atoms/Social';
import extractText from '../../lib/extra-text';
import Meta from '../../components/molecules/Meta';
import { eyecatchLocal } from '../../lib/constants';
import styles from '../../styles/Home.module.css';

// import { getPlaiceholder } from 'plaiceholder';

// 思った通りにアノテーションしてくれない
// propsからtitleを分割代入しないとエラー出してほしいのに
// 出してくれない。抜けていても動いてしまう
// getStaticProps:GetStaticProps
type Props = {
  title: string;
  publish: string;
  content: string;
  eyecatch: Eyecatch;
  categories: string[];
  description: string;
};
type Eyecatch = {
  url: string;
  width: number;
  height: number;
  blurDataURL: string;
};
const Post: FC<Props> = (props) => {
  const { title, publish, content, eyecatch, categories, description } = props;
  return (
    <>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Inner>
        <Box as="article" w={{ base: '100%', md: 600 }} pb={50}>
          <PostBodyCss>
            <h1 className={styles.title}>{title}</h1>
            <ConvertDate dateISO={publish} />
            {/* <figure>
            <Image
              src={eyecatch.url}
              alt=""
              layout="responsive"
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1152px) 1152px, 100vw"
              priority
            />
           </figure> */}

            <ConvertBody contentHTML={content} />
          </PostBodyCss>
        </Box>
        <Box w={100}>
          <Heading fontSize={{ base: 1, md: 'md' }} color="gray.600">
            Contact
          </Heading>
          <Social />
        </Box>
      </Inner>
    </>
  );
};

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  const post = await getPostBySlug(slug);

  const description = extractText(post.content);

  const eyecatch = post.eyecatch ?? eyecatchLocal;

  // const { base64 } = await getPlaiceholder(eyecatch.url);
  // eyecatch.blurDataURL = base64;
  return {
    props: {
      title: post.title,
      content: post.content,
      publish: post.publishedAt,
      eyecatch: eyecatch,
      categories: post.categories,
      description: description,
    },
  };
}
export default Post;
