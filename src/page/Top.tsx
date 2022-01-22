import PostList from '../components/PostList';
import Sidebar from '../components/Sidebar';
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
