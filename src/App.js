import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { LayOut } from './components/LayOut';
import { Main } from "./view/Main";

import './App.css';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path='/' element={<Main />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
