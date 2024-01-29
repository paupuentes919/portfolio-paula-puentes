import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar-footer/NavBar';
import Home from './components/sections/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
              <Route path={'/'} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
