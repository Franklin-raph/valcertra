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
import Applications from './pages/applications/Applications';
import ApplicationView from './pages/application-view/ApplicationView';
import Certificates from './pages/certificates/Certificates';
import CertificateView from './pages/certificate-view/CertificateView';
import Payments from './pages/payments/Payments';
import PendingPayments from './pages/pending-payments/PendingPayments';
import PaidApplicationsPayments from './pages/paid-application-payments/PaidApplicationsPayments';
import Profile from './pages/profile/Profile';

function App() {
  
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
        <Route path='/applications' element={<Applications />}/>
        <Route path='/certificates' element={<Certificates />}/>
        <Route path='/payments' element={<Payments />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/payments/pending-payments' element={<PendingPayments />}/>
        <Route path='/payments/paid' element={<PaidApplicationsPayments />}/>
        <Route path='/certificates/:id' element={<CertificateView />}/>
        <Route path='/applications/:id' element={<ApplicationView />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/password-reset' element={<PasswordReset />}/>
        <Route path='/verify-email' element={<ForgotPasswordEmailVerify />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;