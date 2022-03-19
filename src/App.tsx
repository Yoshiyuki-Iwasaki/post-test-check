import Top from './app/page/topPage';
import Post from './app/page/postPage';
import User from './app/page/userPage';
import Setting from './app/page/settingPage';
import Layout from './app/components/templates/layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path={'/'} element={<Top />} />
            <Route path={'/user'} element={<User />} />
            <Route path={'/post'} element={<Post />} />
            <Route path={'/setting'} element={<Setting />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
