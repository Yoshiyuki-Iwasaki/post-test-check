import PostList from '../../components/organisms/postList';
import Sidebar from '../../components/organisms/sidebar';
import { Content } from './style';

const Top = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <PostList />
      </Content>
    </>
  );
};

export default Top;
