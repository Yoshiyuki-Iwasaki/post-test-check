import Top from "./page/Top";
import Post from "./page/Post";
import User from "./page/User";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path={"/"} element={<Top />} />
            <Route path={"/user"} element={<User />} />
            <Route path={"/post"} element={<Post />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
