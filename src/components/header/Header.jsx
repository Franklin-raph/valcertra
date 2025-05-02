import React from 'react'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className='h-[70vh] pt-[2rem] header-bg'>
        <Navbar />
        <div className='text-center mt-[6rem] w-[65%] mx-auto  text-white'>
            <p className='text-[55px] font-bold mb-2'>Africa's Seal of Value. <span className='text-ascent-color'>Certified</span> .</p>
            <p className='text-[18px]'>Empowering African exporters and manufacturers with trusted value addition certification to compete and thrive under AfCFTA and global trade rules.</p>
            <div className='mt-10 flex gap-4 justify-center items-center'>
                <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px]'>Get Certified Now</button>
                <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
            </div>
        </div>
    </div>
  )
}

export default Header