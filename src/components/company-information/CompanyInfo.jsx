import React, { useEffect, useState } from 'react'
import { BiChevronDown, BiPhone, BiUser } from 'react-icons/bi'
import { BsSuitcaseLg, BsTelephone } from 'react-icons/bs'
import { CiCalendar, CiFileOn, CiLocationOn, CiMap } from 'react-icons/ci'
import { FiLoader, FiUser } from 'react-icons/fi'
import { HiOutlineBuildingOffice, HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'
import { FaRegFlag } from 'react-icons/fa'

const CompanyInfo = ({ setPersonalInfo, setCompanyInfo, setCompanyLocation}) => {

    const [dropDown, setDropDown] = useState('')
    const [allCountries, setAllCountries] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchText, setSeacrhText] = useState('')
    const [country, setCountry] = useState('')

    const regInfo = JSON.parse(localStorage.getItem('regInfo'))

    const [companyName, setCompanyName] = useState(regInfo.companyName)
    const [companySize, setCompanySize] = useState(regInfo.companySize)
    const [contactPerson, setContactPerson] = useState(regInfo.contactPerson)
    const [contactEmail, setContactEmail] = useState(regInfo.contactEmail)
    const [companyNumber, setCompanyNumber] = useState(regInfo.companyNumber)
    const [RcNumber, setRcNumber] = useState(regInfo.RcNumber)
    const [regCountry, setRegCountry] = useState(regInfo.regCountry)
    const [industry, setIndustry] = useState(regInfo.industry)
    const [entityType, setEntityType] = useState(regInfo.entityType)
    const [startYearOfOperation, setStartYearOfOperation] = useState(regInfo.startYearOfOperation)
    const [ownerShipType, setOwnerShipType] = useState(regInfo.ownerShipType)
    const [tin, setTin] = useState(regInfo.tin)

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

    const companySizeArray = ["Small", "Medium", "Large"]
    const contactPersonArray = ["CEO", "CTO", "Manager", "Secretary"]
    const sectorArray = ["agriculture", "solid_minerals", "energy_resources"]
    const entityTypeArray = ["manufacturer", "exporter", "aggregator", "sme", "govt_agency"]
    const ownershipTypeArray = ["local"]

    async function getAllCountries(){
        setLoader(true)
        const response = await fetch('https://api.countrystatecity.in/v1/countries',{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data);
        setAllCountries(data)
        return data
    }

    useEffect(() => {
        // getAllCountruies()
        getAllCountries()
    },[])

    function prevStep() {
        setCompanyInfo(false)
        setPersonalInfo(true)
    }

    function nextStep() {
        if(!companyName || !companySize || !contactPerson || !contactEmail || !companyNumber || !RcNumber || !regCountry || !industry || !entityType || !startYearOfOperation || !tin || !ownerShipType){
            setMsg("Please fill in all fields")
            setAlertType('error')
        }else{
            // Get existing data from localStorage
            const existingData = JSON.parse(localStorage.getItem('regInfo'))
            
            // Update with new company info while preserving personal info
            const updatedData = {
                ...existingData,
                companyName,
                companySize,
                contactPerson,
                contactEmail,
                companyNumber,
                RcNumber,
                regCountry,
                industry,
                entityType,
                startYearOfOperation,
                ownerShipType,
                tin
            }
            
            // Save updated data back to localStorage
            localStorage.setItem('regInfo', JSON.stringify(updatedData))
            
            // Move to next step
            setCompanyLocation(true)
            setCompanyInfo(false)
        }
    }



  return (
    <div className='sign-up-bg flex items-center justify-center'>
        {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-0 left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center lg:w-[40%] md:w-[70%] w-[95%] pb-5 pt-5 md:px-7 px-3 mt-12 rounded-[8px]'>
            <div className='flex items-center justify-between'>
                <div onClick={prevStep} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                    <IoArrowBackOutline />
                </div>
                <p></p>
            </div>
            <p className='font-[500] text-[22px]'>Join Valcertra</p>
            <p className='my-3'>Start your certification journey today</p>
            <p className='text-ascent-color text-[20px] font-[600]'>Company Information</p>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left mt-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Company name</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <HiOutlineBuildingOffice2 className='text-[20px]' />
                        <input value={companyName} onChange={e => setCompanyName(e.target.value)}  type="text" placeholder='Valcertra' className='outline-none bg-transparent w-full'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Company Size</label>
                    <div onClick={() => setDropDown(dropDown === "companySize" ? false : "companySize")} className='cursor-pointer relative border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <BiUser className='text-[20px]' />
                        <input  type="text" placeholder='Micro/Small' value={companySize} className='cursor-pointer outline-none bg-transparent w-full ml-3'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "companySize" &&
                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] border border-gray-300 h-[120px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <div>
                                {
                                    companySizeArray.map((size) => (
                                        <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                            setDropDown(false)
                                            setCompanySize(size)
                                        }}>
                                            <p>{size}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Company Number</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-2'>
                        <BiPhone />
                        <input value={companyNumber} onChange={e => setCompanyNumber(e.target.value)} type="text" placeholder='+234 90 000 0000' className='outline-none bg-transparent w-full'/>
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>RC Number/ Business Reg No.</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-2'>
                        <CiFileOn />
                        <input value={RcNumber} onChange={e => setRcNumber(e.target.value)} type="text" placeholder='RC 123456' className='outline-none bg-transparent w-full'/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Contact Person</label>
                    <div onClick={() => setDropDown(dropDown === "contactPerson" ? false : "contactPerson")} className='relative cursor-pointer border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <BiUser className='text-[20px]' />
                        <input value={contactPerson} type="text" placeholder='CEO' className='outline-none bg-transparent w-full ml-3 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "contactPerson" &&
                            <div className='bg-white w-full absolute top-[45px] z-[11] rounded-[4px] border border-gray-300 h-[120px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <div>
                                {
                                    contactPersonArray.map((person) => (
                                        <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                            setDropDown(false)
                                            setContactPerson(person)
                                        }}>
                                            <p>{person}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Contact Email</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <CiCalendar className='text-[20px]' />
                        <input value={contactEmail} onChange={e => setContactEmail(e.target.value)} type="text" placeholder='olivia@untitledui.com' className='outline-none bg-transparent w-full ml-2'/>
                        {/* <BiChevronDown className='text-[22px] cursor-pointer'/> */}
                    </div>
                </div>
            </div>


            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left my-6'>
                <div className='w-full relative'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Country of Registration</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between cursor-pointer'>
                        <FaRegFlag />
                        <input type="text" placeholder='Nigeria' value={regCountry} className='outline-none bg-transparent w-full ml-2 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer' onClick={() => setDropDown(dropDown === "country" ? false : "country")} />
                        {
                            dropDown === 'country' &&
                            <div className='bg-white w-full absolute top-[70px] rounded-[4px] border border-gray-300 h-[280px] z-10 overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search Country' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                <div>
                                    {
                                        loader ?
                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                            <FiLoader className='text-[28px] animate-spin'/>
                                            <p className='text-gray-500 text-[14px]'>Fetching Countries Please Wait...</p>
                                        </div>
                                        :
                                        <>
                                        {
                                            allCountries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
                                            .map((country) => (
                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                    setDropDown(false)
                                                    setCountry(country)
                                                    setRegCountry(country.name)
                                                }}>
                                                    <p>{country.emoji}</p>
                                                    <p>{country.name}</p>
                                                </div>
                                            ))
                                        }
                                        </>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Industry / Sector</label>
                    <div onClick={() => setDropDown(dropDown === "sectorType" ? false : "sectorType")} className='relative border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between cursor-pointer'>
                        <HiOutlineBuildingOffice className='text-[20px]' />
                        <input type="text" value={industry} placeholder='Agriculture' className='outline-none bg-transparent w-full ml-2 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "sectorType" &&
                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] border border-gray-300 h-[120px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3 z-[100]'>
                                <div>
                                {
                                    sectorArray.map((sector) => (
                                        <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                            setDropDown(false)
                                            setIndustry(sector)
                                        }}>
                                            <p>{sector}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left my-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Type Entity</label>
                    <div onClick={() => setDropDown(dropDown === "entityType" ? false : "entityType")} className='relative cursor-pointer border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <BiUser className='text-[20px]' />
                        <input value={entityType} type="text" placeholder='Manufacturer' className='cursor-pointer outline-none bg-transparent w-full ml-3'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "entityType" &&
                            <div className='bg-white w-full absolute top-[45px] z-[11] rounded-[4px] border border-gray-300 h-[120px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <div>
                                {
                                    entityTypeArray.map((entity) => (
                                        <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                            setDropDown(false)
                                            setEntityType(entity)
                                        }}>
                                            <p>{entity}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Start of Operation (year)</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <CiCalendar className='text-[20px]' />
                        <input value={startYearOfOperation} onChange={e => setStartYearOfOperation(e.target.value)} type="date" placeholder='2 years' className='outline-none bg-transparent w-full ml-2'/>
                        {/* <BiChevronDown className='text-[22px] cursor-pointer'/> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Ownership Type</label>
                    <div onClick={() => setDropDown(dropDown === "ownershipType" ? false : "ownershipType")} className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between relative cursor-pointer'>
                        <BiUser className='text-[20px]' />
                        <input value={ownerShipType} type="text" placeholder='CEO' className='outline-none bg-transparent w-full ml-3 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "ownershipType" &&
                            <div className='bg-white w-full absolute top-[45px] rounded-[4px] border border-gray-300 h-[120px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <div>
                                {
                                    ownershipTypeArray.map((owner) => (
                                        <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                            setDropDown(false)
                                            setOwnerShipType(owner)
                                        }}>
                                            <p>{owner}</p>
                                        </div>
                                    ))
                                }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Tax Identification Number (TIN)</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-2'>
                        <CiFileOn className='text-[20px]' />
                        <input value={tin} onChange={e => setTin(e.target.value)} type="text" placeholder='10012345-00001' className='outline-none bg-transparent w-full'/>
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