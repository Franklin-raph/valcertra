import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import Alert from '../alert/Alert'

const CreatePassword = ({ setVerifyEmail, setCompanyLocation, setCreatePassword }) => {

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

    async function handleSubmit(e) {
        // For debugging
        console.log("Terms accepted:", checkBox);
        
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
            setVerifyEmail(true)
            setCreatePassword(false)
        }
    }

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[18%] left-[50%] right-[50%] translate-x-[-50%]">
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
                <button onClick={handleSubmit} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                    <p>Verify Email</p>
                </button>
            </div>
        </div>
    )
}

export default CreatePassword