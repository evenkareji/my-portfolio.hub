import Image from 'next/image';
import parse from 'html-react-parser';

const ConvertBody = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node: any) => {
      // domNode
      if (node.name === 'img') {
        const { src, alt } = node.attribs;
        // ここにwidthがくるのだが、今のmicrocmsは来てくれない
        console.log(node.attribs);
        return (
          <Image
            layout="responsive"
            src={src}
            width="100%"
            height="100%"
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
