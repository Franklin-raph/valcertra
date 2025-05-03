import React from 'react'
import { BsSuitcaseLg, BsTelephone } from 'react-icons/bs'
import { FiUser } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const PersonalInfo = ({setPersonalInfo, setCompanyInfo}) => {

    function nextStep() {
        setPersonalInfo(false)
        setCompanyInfo(true)
        console.log("Personal False, Company True");
    }

  return (
    <div className='sign-up-bg flex items-center justify-center'>
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-5 left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center w-[40%] pb-10 pt-7 px-7 rounded-[8px]'>
            <div className='flex items-center justify-between'>
                <div className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                    <IoArrowBackOutline />
                </div>
                <p></p>
            </div>
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
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <FiUser />
                        <input type="text" placeholder='First name' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Last Name</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <FiUser />
                        <input type="text" placeholder='Last name' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <MdOutlineMailOutline />
                        <input type="text" placeholder='olivia@untitledui.com' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Mobile Nummber</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <BsTelephone />
                        <input type="text" placeholder='+234 90 000 0000' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Designation/Job Title</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <BsSuitcaseLg />
                        <input type="text" placeholder='Business Owner' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <button onClick={nextStep} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                <p>Continue</p>
            </button>
            <p className='text-white'>Have an account? <Link className='text-ascent-color' to='/login'>Login</Link> </p>
        </div>
    </div>
  )
}

export default PersonalInfo