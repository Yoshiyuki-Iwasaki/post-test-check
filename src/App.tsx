import Top from './app/page/topPage';
import Post from './app/page/postPage';
import User from './app/page/userPage';
import Layout from './app/components/templates/layout';
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
