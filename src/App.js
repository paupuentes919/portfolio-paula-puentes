import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar-footer/NavBar';
import Home from './components/sections/Home';
import About from "./components/sections/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
              <Route path={'/'} element={<Home/>}></Route>
              <Route exact path={'/about'} element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
