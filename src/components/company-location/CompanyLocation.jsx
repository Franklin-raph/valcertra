import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsBuilding } from 'react-icons/bs'
import { CiGlobe, CiMap } from 'react-icons/ci'
import { FiLoader } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'
import { FaRegFlag } from 'react-icons/fa'

const CompanyLocation = ({ setCompanyLocation, setCompanyInfo, setCreatePassword }) => {

    const regInfo = JSON.parse(localStorage.getItem('regInfo'))
    const [dropDown, setDropDown] = useState('')
    const [allCountries, setAllCountries] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchText, setSeacrhText] = useState('')
    const [country, setCountry] = useState(regInfo.country)
    const [allStates, setAllStates] = useState([])
    const [allCities, setAllCities] = useState([])
    const [state, setState] = useState(regInfo.state)
    const [city, setCity] = useState(regInfo.city)
    const [headOfficeAddress, setHeadOfficeAddress] = useState(regInfo.headOfficeAddress)
    const [website, setWebsite] = useState(regInfo.website)

    const [countryIso, setCountryIso] = useState('')

    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

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

    async function getStates(iso2){
        setLoader(true)
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${iso2}/states`,{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data.sort((a, b) => a.name.localeCompare(b.name)));
        setAllStates(data.sort((a, b) => a.name.localeCompare(b.name)))
        return data
    }

    async function getCities(iso2){
        setLoader(true)
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryIso}/states/${iso2}/cities`,{
            headers :{
                'X-CSCAPI-KEY':'VUJ1UU5aSmlLU2xiNEJxdUg0RnQ0akNZbXAyV2ZiVHlnN1F6dHA1dg=='
            }
        })
        const data = await response.json()
        if(response) setLoader(false)
        console.log(data.sort((a, b) => a.name.localeCompare(b.name)));
        setAllCities(data.sort((a, b) => a.name.localeCompare(b.name)))
        return data
    }

    useEffect(() => {
        // getAllCountruies()
        getAllCountries()
    },[])

    function prevStep() {
        setCompanyInfo(true)
        setCompanyLocation(false)
        console.log("Company False, Personal True");
    }
    
    function nextStep() {
        if(!headOfficeAddress || !country || !state || !city){
            setMsg("Please fill in all fields")
            setAlertType('error')
        }else{
            // Get existing registration data from localStorage
            const existingData = JSON.parse(localStorage.getItem('regInfo')) || {}
            
            // Update only the personal information fields while preserving other data
            const updatedData = {
                ...existingData, // Keep all existing data (including company info if present)
                headOfficeAddress,
                country,
                state,
                city,
                website
            }
            
            // Save updated data back to localStorage
            localStorage.setItem('regInfo', JSON.stringify(updatedData))
            setCompanyLocation(false)
            setCreatePassword(true)
        }
    }

  return (
    <div className='sign-up-bg flex items-center justify-center'>
        {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[13%] left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center lg:w-[40%] md:w-[70%] w-[95%] pb-10 pt-7 md:px-7 px-3 rounded-[8px]'>
            <div className='flex items-center justify-between'>
                <div onClick={prevStep} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                    <IoArrowBackOutline />
                </div>
                <p></p>
            </div>
            <p className='font-[500] text-[22px]'>Join Valcertra</p>
            <p className='my-3'>Start your certification journey today</p>
            <p className='text-ascent-color text-[20px] font-[600]'>Company Location</p>
            <div className='flex items-center justify-center gap-2 mt-3'>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                <div className='w-[30px] h-[5px] bg-[#F9F6EB] rounded'></div>
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left mt-6'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Head Office Address</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <BsBuilding />
                        <input onChange={e => setHeadOfficeAddress(e.target.value)} value={headOfficeAddress} type="text" placeholder='Addicert' className='outline-none bg-transparent'/>
                    </div>
                </div>
                <div className='w-full relative'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Country of Registration</label>
                    <div className='cursor-pointer border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <FaRegFlag />
                        <input type="text" placeholder='Nigeria' value={country} className='outline-none bg-transparent w-full ml-2 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer' onClick={() => setDropDown(dropDown === "country" ? false : "country")}/>
                        {
                            dropDown === 'country' &&
                            <div className='bg-white w-full absolute top-[70px] rounded-[4px] border border-gray-300 h-[280px] z-10 overflow-x-hidden overflow-y-scroll left-0 px-2 py-3 cursor-pointer'>
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
                                                    setCountry(country.name)
                                                    getStates(country.iso2)
                                                    setCountryIso(country.iso2)
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
            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center text-left my-6'>
                <div className='w-full relative'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>State/Province/Region</label>
                    <div className='cursor-pointer border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <CiMap className='text-[20px]' />
                        <input type="text" placeholder='Anambra' value={state} className='outline-none bg-transparent w-full ml-3 cursor-pointer'/>
                        <BiChevronDown className='text-[22px] cursor-pointer' onClick={() => setDropDown(dropDown === "state" ? false : "state")}/>
                        {
                            dropDown === "state" &&
                            <div className='bg-white w-full absolute z-[12] top-[70px] rounded-[4px] border border-gray-300 h-[200px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search State' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                <div>
                                {
                                        loader ?
                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                            <FiLoader className='text-[28px] animate-spin'/>
                                            <p className='text-gray-500 text-[14px]'>Fetching States Please Wait...</p>
                                        </div>
                                        :
                                        <>
                                        {
                                            allStates?.filter(state => state.name.toLowerCase().includes(searchText.toLowerCase()))
                                            .map((state) => (
                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                    setDropDown(false)
                                                    setState(state.name)
                                                    getCities(state.iso2)
                                                }}>
                                                    <p>{state.name}</p>
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
                <div className='w-full relative'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>City</label>
                    <div className='cursor-pointer border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center justify-between'>
                        <CiMap className='text-[20px]' />
                        <input type="text" placeholder='Onitsha' value={city} className='outline-none bg-transparent w-full ml-3 cursor-pointer'/>
                        <BiChevronDown onClick={() => setDropDown(dropDown === "city" ? false : "city")} className='text-[22px] cursor-pointer'/>
                        {
                            dropDown === "city" &&
                            <div className='bg-white w-full absolute top-[70px] rounded-[4px] border border-gray-300 h-[200px] overflow-x-hidden overflow-y-scroll left-0 px-2 py-3'>
                                <input type="text" onChange={e => setSeacrhText(e.target.value)} placeholder='Search City' className='border border-gray-300 w-full placeholder:text-[13px] text-[13px] outline-none px-[4px] rounded mb-1 py-[5px]'/>
                                <div>
                                {
                                        loader ?
                                        <div className='flex items-center justify-center flex-col gap-3 mt-[7rem]'>
                                            <FiLoader className='text-[28px] animate-spin'/>
                                            <p className='text-gray-500 text-[14px]'>Fetching Cities Please Wait...</p>
                                        </div>
                                        :
                                        <>
                                        {
                                            allCities?.filter(city => city.name.toLowerCase().includes(searchText.toLowerCase()))
                                            .map((city) => (
                                                <div className='flex items-center gap-2 hover:bg-gray-300 cursor-pointer p-[5px] text-[14px] text-gray-500'onClick={() => {
                                                    setDropDown(false)
                                                    setCity(city.name)
                                                }}>
                                                    <p>{city.name}</p>
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
            </div>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Website (If available)</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <CiGlobe />
                        <input onChange={e => setWebsite(e.target.value)} value={website} type="text" placeholder='www.untitledui.com' className='outline-none bg-transparent w-full'/>
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