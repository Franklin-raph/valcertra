import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import About from './pages/about/About';
import Header from './components/header/Header';
import Footer from './components/Footer/Footer';
import Contact from './pages/contact/Contact';
import PrivacyPolicy from './pages/privacy-policy/PrivacyPolicy';
import TermsOfUse from './pages/terms-of-use/TermsOfUse';
import Liscence from './pages/liscence/Liscence';
import SignUp from './pages/sign-up/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ForgotPasswordEmailVerify from './pages/forgot-password-email-verify/ForgotPasswordEmailVerify';
import PasswordReset from './pages/password-reset/PasswordReset';

function App() {
  const [useCustomUI, setUseCustomUI] = useState(false);
  
  return (
    <HashRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/about-us' element={<About />}/>
        <Route path='/contact-us' element={<Contact />}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        <Route path='/terms-of-use' element={<TermsOfUse />}/>
        <Route path='/liscence' element={<Liscence />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/password-reset' element={<PasswordReset />}/>
        <Route path='/verify-email' element={<ForgotPasswordEmailVerify />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;