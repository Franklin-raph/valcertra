import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [useCustomUI, setUseCustomUI] = useState(false);
  
  return (
    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about-us' element={<About />}/>
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;