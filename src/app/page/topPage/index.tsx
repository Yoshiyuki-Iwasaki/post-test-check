import PostList from '../../components/organisms/postList';
import Sidebar from '../../components/organisms/sidebar';
import { Content } from './style';
import { HeadBlock } from '../../components/organisms/head';

const Top = () => {
  return (
    <>
      <HeadBlock />
      <Sidebar />
      <Content>
        <PostList />
      </Content>
    </>
  );
};

export default Top;
