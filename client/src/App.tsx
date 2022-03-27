import Top from './page/topPage';
import Post from './page/postPage';
import User from './page/userPage';
import Setting from './page/settingPage';
import ChangeUsername from './page/changeUserinfoPage';
import Layout from './components/templates/layout';
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
            <Route path={'/change_userInfo'} element={<ChangeUsername />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
