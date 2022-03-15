import { VFC } from 'react';
import { Helmet } from 'react-helmet-async';

type Props = {
  title?: string;
  description?: string;
  path?: string;
};

export const HeadBlock: VFC<Props> = (props) => {
  const { title, description, path } = props;
  return (
    <Helmet>
      <title>{title ?? 'デフォルトのタイトルです'}</title>
      <meta
        name="description"
        content={description ?? 'デフォルトの説明文です'}
      />
      <link rel="canonical" href={`https:hoge.com/${path ?? ''}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
