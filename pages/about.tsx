import React from 'react';

import Hero from '../components/layout/Hero';
import { Box, Heading } from '@chakra-ui/react';
import { Social } from '../components/atoms/Social';
import { Inner } from '../components/layout/Inner';
import eyecatch from '../images/hero.png';
import Meta from '../components/molecules/Meta';
import PostBodyCss from '../components/post-body';
const About = () => {
  return (
    <>
      <Meta
        pageTitle="アバウト"
        pageDesc="自らの使命"
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <Hero title="About" subtitle="~自らの使命〜" />

      <Inner>
        <Box w={{ base: '100%', md: 600 }} pb={50}>
          <PostBodyCss>
            <h1>
              作りたいものを作れるようになる。
              <br />
              そして、それはきっと終わらない。
              <br />
              <br />
            </h1>
            <br />
            <p>
              とか言って真面目ぶったら読んでる人眠くなるので、くだけた感じでいきやす。
              <br />
              どうぞよろしくおなしゃす
            </p>
            <h1>作りたいモノとは</h1>
            <p>
              自分が実装したいと思っているモノすべてに該当します、はい。
              え？抽象度たかすぎ？
              <br />
              でもWebアプリであれば特に差異はないです。
            </p>
            <p>続きは後ほど...</p>
            {/* <h3>Web制作における興味関心</h3>
            <p>
              もう時期流行るであろうWebGLを使ったWeb制作に高い関心があります。
              <br />
              <br />
              理由1、実装できたら嬉しくて踊り出しそう。
              <br />
              <br />
              理由2、作ったの俺なんだぜアピールができ、まわりからウザがられる。
              <br />
              <br />
              理由3、使える人がまだあまりいないし、学習コストが高く参入障壁が高いため、WebGLを扱える人材がより重宝されるため長期的に見てコスパいい技術(ここだけ真面目)
              <br />
              <br />
              学習コストが高そうなので今は手が出せる分野ではありませんが、WebGLをもちいて、企業で質の高いアウトプットを繰り返してより技術を洗練させてるのも楽しいだろうと、思う所存。
              本当にそこですね。WebGLにはロマンが詰まってる。あんま知らないけどっ。
              でもまあ、すげー綺麗じゃん？ 見た時、脳汁が止まりませんでしたっ
            </p>
            <h2>やりがいの定義とは</h2>
            <div>
              <p>
                僕のやりがいは誰か喜んでくれる人がいる事です。ずっと一人で作ってたんで、それを見せてすごいとかありがとうとか言われたい。それでお金もらえるならうれしーこった。おまけに友達なのか仲間なのかわからないけど、仲良くできるならなおよし。
                友達と仲間の境界線とは...ひぇ
              </p>
            </div>
            <div>
              <h2>企業のWebサイトを制作するということ</h2>
              <p>
                企業のWebサイトを制作するということの意義とは、僕の中である程度固まったと思う。
                企業にとってWebサイトとはある種、顔のような役割がある。
                なぜ顔だと思うのか。
                現代では気になった企業を調べる上でまず最初にgoogle検索をする。
                そこで、出てくるのが〜、そうです！ホームページ！
                <br />
                すごいね、そこを任される訳だ。 それはすごいことなんだyo
                <br />
                <br />
                やりがいは十分あるしクライアントと顧客を満足させられるようなものにしていきたい。
                <br />
                企業の顔を担う部分を任されるやりがいは尽きないと思う！
              </p>
            </div> */}
            <div>
              <p></p>
            </div>
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
export default About;
