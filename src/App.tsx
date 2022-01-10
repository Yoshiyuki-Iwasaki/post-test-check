import PostList from "./components/PostList";
import styled from "styled-components";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
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
        <Title>Post-Test-Check</Title>
        <PostList />
      </Main>
    </>
  );
}

export default App;
