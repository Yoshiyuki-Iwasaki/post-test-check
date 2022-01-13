import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
`;
const Content = styled.div`
  margin: 0 auto;
  width: 400px;
`;
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  position: relative;
`;
const Title = styled.h1`
  padding-top: 20px;
  text-align:center;
  font-size: 22px;
  color: #fff;
`;

function App() {
  return (
    <>
      <Main>
        <Inner>
          <Sidebar />
          <Content>
            <Title>Post-Test-Check</Title>
            <PostList />
          </Content>
        </Inner>
      </Main>
    </>
  );
}

export default App;
