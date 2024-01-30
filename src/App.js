import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/navbar-footer/NavBar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import "../src/App.css";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.querySelector('body').classList.remove("body-img-about");
      document.querySelector('body').classList.add("body-img-home");
    } else if (location.pathname === '/about') {
      document.querySelector('body').classList.remove("body-img-home");
      document.querySelector('body').classList.add("body-img-about");
    }
  }, [location.pathname]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
