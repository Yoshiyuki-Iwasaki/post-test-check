import Top from './page/top';
import Post from './page/post';
import User from './page/user';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path={'/'} element={<Top />} />
            <Route path={'/user'} element={<User />} />
            <Route path={'/post'} element={<Post />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
