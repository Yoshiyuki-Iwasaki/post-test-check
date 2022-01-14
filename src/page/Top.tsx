import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Content = styled.div`
  margin: 0 auto;
  width: 400px;
`;
const Title = styled.h1`
  padding-top: 20px;
  text-align: center;
  font-size: 22px;
  color: #fff;
`;

const Top = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Title>Post-Test-Check</Title>
        <PostList />
      </Content>
    </>
  );
};

export default Top;
