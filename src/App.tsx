import PostItem from "./components/PostItem";
import styled from "styled-components";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <>
      <Main>
        <PostItem />
      </Main>
    </>
  );
}

export default App;
