import PostList from "./components/PostList";
import styled from "styled-components";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Main>
        <PostList />
      </Main>
    </>
  );
}

export default App;
