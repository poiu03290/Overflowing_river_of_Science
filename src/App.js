import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactGA from 'react-ga';

import { LayOut } from './components/LayOut';
import { Main } from "./view/Main";
import { PostDetail } from './view/PostDetail';
import { Post } from './view/Post';
import { About } from './view/About';

import './App.css';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
ReactGA.initialize(TRACKING_ID, { debug: true });
ReactGA.pageview(window.location.pathname);

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />}></Route>
            <Route path='/post/:postId' element={<PostDetail />}></Route>
            <Route path='/post' element={<Post />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
