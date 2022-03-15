import { VFC } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeadType } from '../head/type';

export const HeadBlock: VFC<HeadType> = (props) => {
  const { title, description, path } = props;
  return (
    <Helmet>
      <title>{title ?? 'デフォルトのタイトルです'}</title>
      <meta
        name="description"
        content={description ?? 'デフォルトの説明文です'}
      />
      <link rel="canonical" href={`post-test-check.vercel.app/${path ?? ''}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
