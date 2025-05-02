import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-primary-color px-4 py-[2rem] mb-6 flex items-center justify-between flex-col'>
      <p>Logo</p>
      <ul className='flex items-center gap-[20px] mt-[1.5rem]'>
        <li>
          <Link to="/" className="text-white hover:text-gray-300">About us</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Services</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:text-gray-300">FAQs</Link>
        </li>
        <li>
          <Link to="/terms-of-use" className="text-white hover:text-gray-300">Terms</Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/" className="text-white hover:text-gray-300">Contact</Link>
        </li>
      </ul>
      <div className='bg-[#EAECF0] py-[0.5px] w-[80%] mx-auto mt-[4rem]'></div>
      <div className='flex items-center justify-between w-[80%] mt-[1.5rem]'>
        <p className='text-white'>© 2025 CERTIVIA LIMITED Powered by AVA CERTIFY</p>
        <ul className='flex items-center gap-[20px]'>
          <li>
            <Link to="/" className="text-white hover:text-gray-300"> <BsTwitterX /> </Link>
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-300"> <FaLinkedin /> </Link>
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-300"> <FaFacebook /> </Link>
          </li>
          <li>
            <Link to="/" className="text-white hover:text-gray-300"> <FaGithub /> </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer