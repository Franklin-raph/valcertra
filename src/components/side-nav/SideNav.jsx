import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { FiAward, FiCreditCard, FiFileText, FiUser } from 'react-icons/fi';
import LogOutModal from '../logout-modal/LogOutModal';


const SideNav = ({toggleNav, setToggleNav}) => {

  const location = useLocation()
  const [logoutModal, setLogoutModal] = useState(false);
  
  // Function to handle navigation item clicks
  // import { useEffect } from 'react';

  // Inside the SideNav component
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setToggleNav(true); // auto-close on route change for mobile
    }
  }, [location.pathname]);
  
  
  return (
    <div className={toggleNav ? `bg-[#002E72] z-[100] scrollbar lg:w-[18%] w-[100%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden lg:left-0 left-[100%] responsive-nav transition-[0.5s]` : `bg-[#002E72] scrollbar lg:w-[18%] w-[100%] h-[100vh] top-0 fixed overflow-y-auto py-5 overflow-x-hidden left-0 z-[100] transition-[0.5s]`}>
        <div className='px-5 lg:pb-5 flex items-center justify-between mt-[25px]'>
            <img src="./dashboard-logo.svg" className='lg:mx-auto lg:mt-[20px]' alt="" />
            <p onClick={() => setToggleNav(true)} className='text-white text-[32px] cursor-pointer lg:hidden block'>&times;</p>
        </div>
        <div className="lg:pl-[32px] my-5 text-white text-[17px] ml-[30px]">
          <Link to='/dashboard' className={ location.pathname.includes('dashboard') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
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
          <Link to='/payments' className={ location.pathname.includes('payment') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <FiCreditCard />
                <p className="">Payment</p>
            </div>
          </Link>
          <Link to='/profile' className={ location.pathname.includes('profile') ? `flex items-center justify-between py-[10px] text-[#fff] border-r-[3px] w-full` :`text-[#D0D5DD] flex items-center justify-between py-[10px]`}>
            <div className="flex items-center gap-2">
                <FiUser className='text-[20px]'/>
                <p className="">Profile</p>
            </div>
          </Link>
        </div>
        <div className="lg:pl-[32px] my-5 text-white text-[17px] ml-[30px] lg:mt-[23rem] mt-[19rem]">
          <button className='text-[#D0D5DD] flex items-center justify-between py-[10px]' onClick={() => setLogoutModal(true)}>
            <div className="flex items-center gap-2">
                <img src="./logout.svg" alt="" />
                <p className="">Logout</p>
            </div>
          </button>
        </div>
        {
          logoutModal && <LogOutModal setLogoutModal={setLogoutModal}/>
        }
    </div>
  )
}

export default SideNav