import PostList from '../components/organisms/postList';
import Sidebar from '../components/organisms/sidebar/Sidebar';
import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  width: 400px;
`;

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
