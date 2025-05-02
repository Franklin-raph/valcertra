import React, { useState } from 'react'
import GoogleTranslateElement from '../GoogleTranslateElement';
import CustomGoogleTranslate from '../CustomGoogleTranslate';
import './translate-styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [useCustomUI, setUseCustomUI] = useState(false);

  // <div className="flex items-center space-x-4">
  //   <div>
  //     {useCustomUI ? (
  //       <CustomGoogleTranslate />
  //     ) : (
  //       <GoogleTranslateElement />
  //     )}
  //   </div>
  // </div>

  return (
    <div>
      <div className="bg-primary-color shadow rounded-lg px-4 py-4 mb-6 flex items-center justify-between w-[95%] mx-auto">
        <p className='text-secondary-color'>Logo</p>
        <ul className='flex items-center gap-[20px]'>
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          </li>
          <li>
            <Link to="/about-us" className="text-white hover:text-gray-300">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us" className="text-white hover:text-gray-300">Contact Us</Link>
          </li>
        </ul>
        <div className='flex items-center gap-5'>
          <GoogleTranslateElement />
          <button className='bg-secondary-color px-[20px] py-[5px] rounded-[4px]'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar