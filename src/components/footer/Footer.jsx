import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-primary-color px-4 py-[2rem] mb-6 flex items-center justify-between flex-col'>
      <p className='text-white mb-3'>
        <img src="./complete-logo-white.svg" alt="" />
      </p>
      <ul className='flex flex-col sm:flex-row items-center md:gap-[20px] gap-[30px] mt-[1.5rem]'>
        <li>
          <Link to="/about-us" className="text-white hover:text-gray-300">About us</Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
        </li>
        {/* <li>
          <Link to="/" className="text-white hover:text-gray-300">FAQs</Link>
        </li> */}
        <li>
          <Link to="/terms-of-use" className="text-white hover:text-gray-300">Terms</Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/contact-us" className="text-white hover:text-gray-300">Contact</Link>
        </li>
        <li>
          <Link to="/liscence" className="text-white hover:text-gray-300">Licensing</Link>
        </li>
        {/* <li>
          <Link to="/" className="text-white hover:text-gray-300">How it Works</Link>
        </li> */}
      </ul>
      <div className='bg-[#EAECF0] py-[0.5px] w-[80%] mx-auto mt-[4rem]'></div>
      <div className='flex flex-col-reverse gap-[2rem] items-center justify-between w-[80%] mt-[1.5rem]'>
        <p className='text-white'> &copy; 2025 Valcertra LIMITED Powered by VALCERTRA</p>
        <ul className='flex items-center gap-[20px]'>
          {/* <li>
            <Link to="/" target='_blank' className="text-white hover:text-gray-300"> <BsTwitterX /> </Link>
          </li> */}
          <li>
            <Link to="https://www.linkedin.com/company/valcertra/" target='_blank' className="text-white hover:text-gray-300"> <FaLinkedin /> </Link>
          </li>
          <li>
            <Link to="https://www.facebook.com/profile.php?id=61575827867934" target='_blank' className="text-white hover:text-gray-300"> <FaFacebook /> </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/valcertra_?igsh=MWRtNGp0aDUwNmN2eQ==" target='_blank' className="text-white hover:text-gray-300"> <BsInstagram /> </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer