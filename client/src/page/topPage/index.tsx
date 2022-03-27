import { FC } from 'react';
import PostList from '../../components/organisms/postList';
import Sidebar from '../../components/organisms/sidebar';
import { HeadBlock } from '../../components/organisms/head';

const TopPage: FC = () => {
  return (
    <>
      <HeadBlock />
      <Sidebar />
      <PostList />
    </>
  );
};

export default TopPage;
