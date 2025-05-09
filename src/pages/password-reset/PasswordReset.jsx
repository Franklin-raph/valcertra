import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../components/alert/Alert'
import { post } from '../../utils/axiosHelpers'
import BtnLoader from '../../components/btnLoader/BtnLoader'

const PasswordReset = () => {

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const regInfo = JSON.parse(localStorage.getItem('regInfo'))
    const token = localStorage.getItem('token')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const resetPassword = async () => {
        try {
            if(!password || !confirmPassword){
                setMsg("Please fill in all fields")
                setAlertType('error')
            } else if (password !== confirmPassword) {
                setMsg("Passwords do not match")
                setAlertType('error')
            }else{
                setLoading(true)
                const response = await post('/set-new-password', {email: regInfo.email, token, password})
                console.log(response);
                
                navigate('/login')
            }
            
        } catch (error) {
            setMsg(error?.response?.data?.message)
            setAlertType('error')
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-5 left-[50%] right-[50%] translate-x-[-50%]">
                <img src="./logo.svg" className='w-full h-full' alt="" />
            </Link>
            <div className='bg-[#001433B2] text-white text-center w-[40%] pb-10 pt-7 px-7 rounded-[8px]'>
                {/* <div className='flex items-center justify-between'>
                    <div onClick={prevStep} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                        <IoArrowBackOutline />
                    </div>
                    <p></p>
                </div> */}
                <p className='font-[500] text-[22px]'>New Password</p>
                <p className='mb-3'>Please enter your new password and proceed to Login</p>
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
                            />
                            <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                                {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    loading ?
                    <div className='mt-[40.4px] mb-[0.5rem]'>
                        <BtnLoader />
                    </div>
                    :
                    <button onClick={resetPassword} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                        <p>Submit</p>
                    </button>
                }
            </div>
        </div>
    )
}

export default PasswordReset