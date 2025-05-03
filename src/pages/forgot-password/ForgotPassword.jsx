import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    
    const navigate = useNavigate();

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[13%] left-[50%] right-[50%] translate-x-[-50%]">
                <img src="./logo.svg" className='w-full h-full' alt="" />
            </Link>
            <div className='bg-[#001433B2] text-white text-center w-[40%] pb-10 pt-7 px-7 rounded-[8px]'>
                <div className='flex items-center justify-between'>
                    <div onClick={() => navigate('/')} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                        <IoArrowBackOutline />
                    </div>
                    <p></p>
                </div>
                <p className='font-[500] text-[22px]'>Forget Password</p>
                <p className='mb-3'>Please enter your email for verification</p>
                <div className='w-full text-left my-5'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <MdOutlineMailOutline />
                        <input type="text" placeholder='olivia@untitledui.com' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <button onClick={() => navigate('/verify-email')} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                    <p>Continue</p>
                </button>
            </div>
        </div>
    )
}

export default ForgotPassword