import React, { useEffect, useState } from 'react'
import { IoMenuOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';


const TopNav = ({toggleNav, setToggleNav}) => {

  const [logoutModal, setLogoutModal] = useState(false)
  const [notificationCount, setNotificationCount] = useState(0)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <div className='px-[10px] md:px-[30px] bg-white fixed lg:w-[82%] border-b flex items-center justify-between py-[1.2rem] top-0 right-0 z-[99]'>
      <div className='flex items-center gap-10'>
        <div onClick={() => {
          setLogoutModal(true)
        }} className='text-[#19201D] items-center gap-3 border py-[6px] px-[8px] rounded-[4px] cursor-pointer hidden lg:flex'>
          <BiSearch fontSize={"20px"}/>
          <input type="text" placeholder='Search' className='outline-none' />
        </div>
        <IoMenuOutline className='text-white text-[30px] cursor-pointer block lg:hidden' onClick={() => setToggleNav(!toggleNav)}/>
      </div>
      <div className='flex items-center gap-5'>
        <div onClick={() => navigate('/#')} className='text-[20px] text-[#19201D] w-[40px] h-[40px] flex relative items-center justify-center cursor-pointer rounded-full'>
          <IoNotificationsOutline className='text-[25px]'/>
          {/* <div className='absolute top-[-10px] text-[14px] right-[-8px] border-2 border-[#1E2522] bg-gray-200 px-[6px] rounded-full'>
            1
          </div> */}
        </div>
        <img src="./Avatar.svg" onClick={() => navigate('/orgz-profile')} className='w-[30px] h-[30px] cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default TopNav