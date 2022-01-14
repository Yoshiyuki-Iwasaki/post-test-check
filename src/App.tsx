import styled from "styled-components";
import Top from "./page/Top";
import Post from "./page/Post";
import User from "./page/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Main = styled.div`
  background: #282c34;
  height: 100vh;
`;
const Inner = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1000px;
  position: relative;
`;

function App() {
  return (
    <>
      <Main>
        <Inner>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Top />} />
              <Route path="/user" element={<User />} />
              <Route path="/post" element={<Post />} />
            </Routes>
          </BrowserRouter>
        </Inner>
      </Main>
    </>
  );
}

export default App;
