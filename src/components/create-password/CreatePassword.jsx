import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../alert/Alert'
import { post } from '../../utils/axiosHelpers'
import BtnLoader from '../btnLoader/BtnLoader'

const CreatePassword = ({ setVerifyEmail, setCompanyLocation, setCreatePassword }) => {

    const navigate = useNavigate()
    const [modal, setModal] = useState()

    function prevStep() {
        setCreatePassword(false)
        setCompanyLocation(true)
    }

    function nextStep() {
        setVerifyEmail(true)
        setCreatePassword(false)
    }

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [loading, setLoading] = useState(false)
    const regInfo = JSON.parse(localStorage.getItem('regInfo'))

    async function handleSubmit(e) {
        try {
            
            if(!password || !confirmPassword){
                setMsg("Please fill in all fields")
                setAlertType('error')
            } else if (password !== confirmPassword) {
                e.preventDefault();
                setMsg("Passwords do not match")
                setAlertType('error')
            } else if (!checkBox) {
                setMsg("You must agree to the Terms of use and Privacy Policy")
                setAlertType('error')
            } else {
                setLoading(true)
                const response = await post('/register', {  email:regInfo.email, password, first_name:regInfo.firstName, last_name:regInfo.lastName, 
                                                            phone:regInfo.phone, company_name:regInfo.companyName, company_size:regInfo.companySize, 
                                                            contact_person: regInfo.contactPerson, contact_email:regInfo.contactEmail, company_number:regInfo.companyNumber, 
                                                            rc_number:regInfo.RcNumber, reg_country:regInfo.regCountry, sector:regInfo.industry, 
                                                            start_of_operation_year:regInfo.startYearOfOperation, type_entity:regInfo.entityType, ownership_type:regInfo.ownerShipType,
                                                            tax_identification_number:regInfo.tin, head_office_address:regInfo.headOfficeAddress, head_office_city:regInfo.city,
                                                            head_office_state_province_region: regInfo.state, head_office_country:regInfo.country, website:regInfo.website, role:"user"
                                                        });
                console.log({ email:regInfo.email, password, first_name:regInfo.firstName, last_name:regInfo.lastName, 
                    phone:regInfo.phone, company_name:regInfo.companyName, company_size:regInfo.companySize, 
                    contact_person: regInfo.contactPerson, contact_email:regInfo.contactEmail, company_number:regInfo.companyNumber, 
                    rc_number:regInfo.RcNumber, reg_country:regInfo.regCountry, sector:regInfo.industry, 
                    start_of_operation_year:regInfo.startYearOfOperation, type_entity:regInfo.entityType, ownership_type:regInfo.ownerShipType,
                    tax_identification_number:regInfo.tin, head_office_address:regInfo.headOfficeAddress, head_office_city:regInfo.city,
                    head_office_state_province_region: regInfo.state, head_office_country:regInfo.country, website:regInfo.website, role:"user"
                },response);
            
                
                setVerifyEmail(true)
                setCreatePassword(false)
            }
        } catch (error) {
            if(error.response?.data?.message === 'Error with email: user with this email already exists.'){
                setModal('email exist')
                setMsg(error?.response?.data?.message)
            }
            // setMsg(error.response?.data?.message || 'An error occurred');
            // setAlertType('error');
            // console.log(error)
            // setMsg(error?.response?.data?.message)
            // setAlertType('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[18%] left-[50%] right-[50%] translate-x-[-50%]">
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
                <p className='text-ascent-color text-[20px] font-[600]'>Create Password</p>
                <div className='flex items-center justify-center gap-2 mt-3'>
                    <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                    <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                    <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
                    <div className='w-[30px] h-[5px] bg-ascent-color rounded'></div>
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
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <div className='w-full'>
                        <label className='block mb-1 text-[15px] text-[#fff]'>Confirm Password</label>
                        <div className='flex items-center justify-between border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085]'>
                            <LuLock />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder='********' 
                                className='outline-none bg-transparent w-full ml-3'
                                onChange={e => setConfirmPassword(e.target.value)}
                                value={confirmPassword}
                            />
                            <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-3 justify-start text-left'>
                        <input 
                            type="checkbox" 
                            id="termsCheckbox"
                            checked={checkBox}
                            onChange={e => setCheckBox(e.target.checked)}
                        />
                        <label htmlFor="termsCheckbox" className="cursor-pointer">
                            You agree to our Terms of use and Privacy Policy
                        </label>
                    </div>
                </div>
                {
                    loading ?
                    <div className='mt-[40.4px] mb-[0.5rem]'>
                        <BtnLoader />
                    </div>
                    :
                    <button onClick={handleSubmit} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                        <p>Verify Email</p>
                    </button>
                }
            </div>
            {
                modal === 'email exist' &&
                <>
                    <div className="h-full w-full fixed top-0 left-0 z-[99] bg-[#101828] bg-opacity-70 backdrop-blur-sm" ></div>
                    <div className="flex items-center flex-col text-center justify-center gap-3 rounded-[12px] bg-white md:w-[400px] w-[95%] fixed top-[50%] left-[50%] py-[30px] px-[2rem] z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
                        <img src="./verifiedCheck.svg" alt="" />
                        <p className='text-text-color font-[500]'>Email</p>
                        <p className='text-[#6F7975] text-[14px]'> Error with email: user with this email already exists. </p>
                        <button className='text-white bg-primary-color rounded-[4px] w-full mt-[1.5rem] py-[10px] text-center mx-auto' onClick={() => navigate('/login')} >Proceed to Login</button>
                    </div>
                </>
            }
        </div>
    )
}

export default CreatePassword