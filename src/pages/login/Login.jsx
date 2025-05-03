import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
                <p className='font-[500] text-[22px]'>Welcome back to AVA CERTIFY</p>
                <p className='mb-3'>Continue your certification journey today </p>
                <div className='w-full text-left my-5'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <MdOutlineMailOutline />
                        <input type="text" placeholder='olivia@untitledui.com' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='flex items-center gap-4 justify-center text-left'>
                    <div className='w-full'>
                        <label className='block mb-1 text-[15px] text-[#fff]'>Password</label>
                        <div className='flex items-center justify-between border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085]'>
                            <LuLock />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder='********' 
                                className='outline-none bg-transparent w-full ml-3'
                            />
                            <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                            </div>
                        </div>
                        <Link to="/forgot-password" className='text-ascent-color text-[14px] font-[500] mt-2 text-right block'>Forgot Password</Link>
                    </div>
                </div>
                <button onClick={() => navigate('/dashboard')} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                    <p>Login</p>
                </button>
            </div>
        </div>
    )
}

export default Login