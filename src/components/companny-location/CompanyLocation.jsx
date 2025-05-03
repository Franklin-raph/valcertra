import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsBuilding, BsSuitcaseLg, BsTelephone } from 'react-icons/bs'
import { CiGlobe, CiLocationOn, CiMap } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CompanyLocation = ({ setCompanyLocation, setCompanyInfo, setCreatePassword }) => {

    function prevStep() {
        setCompanyInfo(true)
        setCompanyLocation(false)
        console.log("Company False, Personal True");
    }
    
    function nextStep() {
        setCompanyLocation(false)
        setCreatePassword(true)
        // Handle the next step after company info
        console.log("Company completed, moving to next step");
        // Add your next step here
    }

  return (
    <div className='sign-up-bg flex items-center justify-center'>
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-5 left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center w-[40%] pb-10 pt-7 px-7 rounded-[8px]'>
            <div className='flex items-center justify-between'>
                <div onClick={prevStep} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                    <IoArrowBackOutline />
                </div>
                <p></p>
            </div>
            <p className='font-[500] text-[22px]'>Join AVA CERTIFY</p>
            <p className='my-3'>Start your certification journey today</p>
            <p className='text-ascent-color text-[20px] font-[600]'>Company Location</p>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left mt-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Head Office Address</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <BsBuilding />
                        <input type="text" placeholder='Certivia' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Country</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <img src='./NG.svg' />
                        <input type="text" placeholder='Nigeria' className='outline-none bg-transparent w-full ml-3'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>State/Province/Region</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <CiMap />
                        <input type="text" placeholder='Anambra' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>City</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <CiLocationOn />
                        <input type="text" placeholder='Onitsha' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Website (If available)</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <CiGlobe />
                        <input type="text" placeholder='www.untitledui.com' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <button onClick={nextStep} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                <p>Continue</p>
            </button>
        </div>
    </div>
  )
}

export default CompanyLocation