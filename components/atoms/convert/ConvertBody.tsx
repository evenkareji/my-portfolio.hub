import Image from 'next/image';
import parse from 'html-react-parser';

const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node: any) => {
      // domNode
      if (node.name === 'img') {
        const { src, alt } = node.attribs;

        return (
          <Image
            layout="responsive"
            src={src}
            width="768px"
            height="332px"
            alt={alt}
            sizes="(min-width: 768px) 768px ,100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
};
export default ConvertBody;
