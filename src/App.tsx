import Top from "./page/Top";
import Post from "./page/Post";
import User from "./page/User";
import Layout from "./Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/user" element={<User />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
