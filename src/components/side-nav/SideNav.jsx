import React, { useState } from 'react'
import { IoChevronDownOutline, IoIdCardOutline } from 'react-icons/io5'
import { LuScanLine } from "react-icons/lu";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { PiFileArrowUpThin } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { HiCodeBracketSquare, HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { IoIosLogOut } from 'react-icons/io';
import { RiAiGenerate } from "react-icons/ri";
import { BiLocationPlus } from 'react-icons/bi';
import { FaUsersRays } from 'react-icons/fa6';
import { FiAward, FiCreditCard, FiFileText } from 'react-icons/fi';


const SideNav = ({toggleNav, setToggleNav}) => {

  const [tradeDropDown, setTradeDropDown] = useState(false)
  const [monitorDropDown, setMonitorDropDown] = useState(false)
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const location = useLocation()

  // console.log(user);

//     setInterval(() => {
//     fetch('https://api-gotruhub.onrender.com/')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error));
// }, 180000); // 180000 milliseconds = 3 minutes

// bg-[#19201D] scrollbar w-[22%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden left-0

  return (
    <div className={!toggleNav ? `bg-[#002E72] scrollbar lg:w-[18%] w-[100%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden lg:left-0 left-[100%] transition-[0.5s]` : `bg-[#002E72] z-[10] scrollbar lg:w-[22%] w-[100%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden lg:left-0 left-[100%] responsive-nav transition-[0.5s]`}>
        <div className='px-5 pb-5 flex items-center justify-between'>
            <img src="./dashboard-logo.svg" className='mx-auto mt-[20px]' alt="" />
            <p onClick={() => setToggleNav(false)} className='text-white text-[22px] cursor-pointer lg:hidden block'>&times;</p>
        </div>
        <div className="pl-[32px] my-5 text-white text-[17px] ml-[30px]">
          <Link to='/dashboard' className={ location.pathname.includes('/dashboard') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
              <RxDashboard />
              <p className="">Dashboard</p>
            </div>
          </Link>
          <Link to='/applications' className={ location.pathname.includes('application') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <FiFileText />
                <p className="">Applications</p>
            </div>
          </Link>
          <Link to='/certificates' className={ location.pathname.includes('certificate') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <FiAward />
                <p className="">Certificates</p>
            </div>
          </Link>
          <Link to='#' className={ location.pathname.includes('application') ? `flex items-center justify-between py-[10px] text-[#fff]` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <FiCreditCard />
                <p className="">Payment</p>
            </div>
          </Link>
          <Link to='#' className={ location.pathname.includes('application') ? `flex items-center justify-between py-[10px] text-[#fff]` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <HiOutlineCog6Tooth className='text-[20px]'/>
                <p className="">Settings</p>
            </div>
          </Link>
        </div>
        
    </div>
  )
}

export default SideNav