import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='sign-up-bg flex items-center justify-center'>
        <Link to="/" className="text-secondary-color text-[20px] font-[600] absolute top-10 left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center w-[40%] py-10 px-7 rounded-[8px]'>
            <p className='font-[500] text-[22px]'>Join AVA CERTIFY</p>
            <p className='my-3'>Start your certification journey today</p>
            <p className='text-ascent-color text-[20px] font-[600]'>Personal Information</p>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left mt-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>First name</label>
                    <input type="text" placeholder='First name' className='border border-[#D0D5DD] py-2 px-2 w-full rounded-[4px] outline-none text-[#667085]'/>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Last Name</label>
                    <input type="text" placeholder='Last name' className='w-full border border-[#D0D5DD] py-2 px-2 rounded-[4px] outline-none text-[#667085]'/>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                    <input type="text" placeholder='olivia@untitledui.com' className='border border-[#D0D5DD] py-2 px-2 w-full rounded-[4px] outline-none text-[#667085]'/>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Mobile Nummber</label>
                    <input type="text" placeholder='+234 90 000 0000' className='w-full border border-[#D0D5DD] py-2 px-2 rounded-[4px] outline-none text-[#667085]'/>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Designation/Job Title</label>
                    <input type="text" placeholder='Business Owner' className='border border-[#D0D5DD] py-2 px-2 w-full rounded-[4px] outline-none text-[#667085]'/>
                </div>
            </div>
            <button className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                <p>Continue</p>
            </button>
            <p className='text-white'>Have an account? <Link className='text-ascent-color' to='/login'>Login</Link> </p>
        </div>
    </div>
  )
}

export default SignUp