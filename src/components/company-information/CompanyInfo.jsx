import React from 'react'
import { BiChevronDown, BiUser } from 'react-icons/bi'
import { BsSuitcaseLg, BsTelephone } from 'react-icons/bs'
import { CiCalendar, CiFileOn, CiLocationOn, CiMap } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { HiOutlineBuildingOffice, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CompanyInfo = ({ setPersonalInfo, setCompanyInfo, setCompanyLocation}) => {

    function prevStep() {
        setCompanyInfo(false)
        setPersonalInfo(true)
    }

    function nextStep() {
        setCompanyLocation(true)
        setCompanyInfo(false)
    }

  return (
    <div className='sign-up-bg flex items-center justify-center'>
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-0 left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center w-[40%] pb-5 pt-5 px-7 rounded-[8px]'>
            <div className='flex items-center justify-between'>
                <div onClick={prevStep} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                    <IoArrowBackOutline />
                </div>
                <p></p>
            </div>
            <p className='font-[500] text-[22px]'>Join AVA CERTIFY</p>
            <p className='my-3'>Start your certification journey today</p>
            <p className='text-ascent-color text-[20px] font-[600]'>Company Information</p>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left mt-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Company name</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <HiOutlineBuildingOffice2 className='text-[20px]' />
                        <input type="text" placeholder='Certivia' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>RC Number/ Business Reg No.</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-2'>
                        <CiFileOn />
                        <input type="text" placeholder='RC 123456' className='outline-none bg-transparent'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Country of Registration</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <img src='./NG.svg' />
                        <input type="text" placeholder='Nigeria' className='outline-none bg-transparent w-full ml-2'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Industry / Sector</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <HiOutlineBuildingOffice className='text-[20px]' />
                        <input type="text" placeholder='Agriculture' className='outline-none bg-transparent w-full ml-2'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Type Entity</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <BiUser className='text-[20px]' />
                        <input type="text" placeholder='Manufacturer' className='outline-none bg-transparent w-full ml-3'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Years in Operation</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <CiCalendar className='text-[20px]' />
                        <input type="text" placeholder='2 years' className='outline-none bg-transparent w-full ml-2'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Tax Identification Number (TIN)</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-2'>
                        <CiFileOn className='text-[20px]' />
                        <input type="text" placeholder='10012345-00001' className='outline-none bg-transparent'/>
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

export default CompanyInfo