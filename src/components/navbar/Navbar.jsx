import React, { useState } from 'react'
import GoogleTranslateElement from '../GoogleTranslateElement';
import CustomGoogleTranslate from '../CustomGoogleTranslate';
import './translate-styles.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [useCustomUI, setUseCustomUI] = useState(false);
  const [openNav, setOpeNav] = useState(false);

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
      <div className="bg-primary-color shadow sm:rounded-lg px-4 py-4 mb-6 flex items-center justify-between sm:w-[95%] mx-auto">
        <Link to="/" className="text-secondary-color text-[20px] font-[600]">Logo</Link>
        <img src="./open-nav.svg" className='cursor-pointer block sm:hidden' alt="" onClick={() => setOpeNav(true)}/>
        {
          openNav &&
          <div className='fixed top-0 right-0 w-full h-screen bg-[#00000087] z-50'>
            <div className='flex items-center justify-between bg-white w-full px-4 py-4 mt-7'>
              <Link to="/" className="text-[20px] text-primary-color font-[600]">Logo</Link>
              <img src="./close-nav.svg" className='cursor-pointer block sm:hidden' alt="" onClick={() => setOpeNav(false)}/>
            </div>
            <div className='bg-white w-full ml-auto pb-[2.5rem] pt-[1rem]'>
              <ul className='flex flex-col items-left px-4 gap-[20px]'>
                <li>
                  <Link to="/" className="text-[#666666] hover:text-gray-300">Home</Link>
                </li>
                <li>
                  <Link to="/services" className="text-[#666666] hover:text-gray-300">Services</Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-[#666666] hover:text-gray-300">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="text-[#666666] hover:text-gray-300">Contact Us</Link>
                </li>
              </ul>
              <div className='flex flex-col items-left px-4 mt-[20px] gap-5'>
                <GoogleTranslateElement />
                <button className='bg-secondary-color px-[20px] py-[5px] rounded-[4px] w-[142px]'>Login</button>
              </div>
            </div>
          </div>
        }

        <ul className='hidden sm:flex items-center gap-[20px]'>
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
        <div className='hidden sm:flex items-center gap-5'>
          <GoogleTranslateElement />
          <button className='bg-secondary-color px-[20px] py-[5px] rounded-[4px]'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar