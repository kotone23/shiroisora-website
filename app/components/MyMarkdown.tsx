import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import Link from 'next/link';

const MyMarkdown = ({ markdown }: { markdown: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        // aタグに対するカスタムコンポーネントを定義
        a: ({node, ...props}) => {
          // hrefが"/"で始まる場合はNext.jsのLinkコンポーネントを使用
          if (props.href?.startsWith("/")) {
            return <Link href={props.href} className="underline">{props.children}</Link>;
          }
          // 外部リンクの場合は通常の<a>タグを使用
          return <a {...props} rel="noreferrer" target="_blank" className="underline" />;
          }
        } as Components
      }
    >{markdown}</ReactMarkdown>  
  );
};

export default MyMarkdown;
