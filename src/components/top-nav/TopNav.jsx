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
    <div className='px-[10px] md:px-[30px] bg-white w-full fixed lg:w-[82%] border-b flex items-center justify-between py-[1.2rem] top-0 right-0 z-[99]'>
      <div className='flex items-center gap-10'>
        <div onClick={() => {
          setLogoutModal(true)
        }} className='text-[#19201D] items-center gap-3 border py-[6px] px-[8px] rounded-[4px] cursor-pointer hidden lg:flex'>
          <BiSearch fontSize={"20px"}/>
          <input type="text" placeholder='Search' className='outline-none' />
        </div>
        <IoMenuOutline className='text-primary-color text-[30px] cursor-pointer block lg:hidden' onClick={() => setToggleNav(!toggleNav)}/>
      </div>
      <p className='text-primary-color p-3 rounded-full bg-[#F9F5FF]'>
        {user?.first_name[0]}{user?.last_name[0]}
      </p>
    </div>
  )
}

export default TopNav