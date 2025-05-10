import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OTPInput from 'react-otp-input'
import { post } from '../../utils/axiosHelpers'
import Cookies from 'js-cookie';
import Alert from '../../components/alert/Alert'
import BtnLoader from '../../components/btnLoader/BtnLoader';

const ForgotPasswordEmailVerify = () => {

    const [otp, setOtp] = useState('')
    const [verifyModal, setVerifyModal] = useState(false)
    const regInfo = JSON.parse(localStorage.getItem('regInfo'))
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const navigate = useNavigate()

    const resendVerificationToken = async () => {
        try {
            setLoading(true)
            const response = await post('/resend-activation-token', {email: regInfo.email})
            setMsg(response.message)
            setAlertType('success')
        } catch (error) {
            setMsg(error.message)
            setAlertType('error')
        } finally{
            setLoading(false)
            console.log(loading);
            
        }
    }
    
    const verifyToken = async () => {
        try {
            setLoading(true)
            const response = await post('/verify-token', {email: regInfo.email, token:otp})
            localStorage.setItem('token', otp)
            navigate('/password-reset')
            
        } catch (error) {
            setMsg(error.message)
            setAlertType('error')
        } finally{
            setLoading(false)
            console.log(loading);
            
        }
    }

  return (
    <div className='sign-up-bg flex items-center justify-center'>
        {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[15%] left-[50%] right-[50%] translate-x-[-50%]">
            <img src="./logo.svg" className='w-full h-full' alt="" />
        </Link>
        <div className='bg-[#001433B2] text-white text-center lg:w-[40%] md:w-[70%] w-[95%] pb-10 pt-7 md:px-7 px-3 rounded-[8px]'>
            <p className='font-[500] text-[22px]'>Verify Email</p>
            <p className='my-3'>Please enter the 4-digit code sent to your email</p>
            <div className='flex items-center gap-4 justify-center text-left'>
                <div className='w-full'>
                    <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <OTPInput
                        value={otp}
                        inputType='number'
                        onChange={setOtp}
                        numInputs={4}
                        renderSeparator={<span style={{ visibility:'hidden' }}>---</span>}
                        renderInput={(props) => <input {...props} placeholder='0' style={{ width:"71px" }} className='text-center text-primary-color outline-none font-[500] h-[58px] rounded-[4px] w-[71px] border placeholder:text-[#BDBDBD59] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'/>}
                    />
                    </div>
                    <p className='text-center mt-5'>00:59</p>
                </div>
            </div>
            {
                loading ?
                <div className='mt-[40.4px] mb-[0.5rem]'>
                    <BtnLoader />
                </div>
                :
                <>
                    <button onClick={verifyToken} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-[90px] mb-3'>
                        <p>Verify Token</p>
                    </button>
                    <p onClick={resendVerificationToken} className='text-center text-ascent-color text-[18px] font-[500] cursor-pointer'>Resend</p>
                </>
            }
        </div>
    </div>
  )
}

export default ForgotPasswordEmailVerify