import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OTPInput from 'react-otp-input'
import { post } from '../../utils/axiosHelpers'
import Alert from '../alert/Alert'
import BtnLoader from '../btnLoader/BtnLoader'
import Cookies from 'js-cookie';

const VerifyEmail = () => {

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
    
    const verifyAccount = async () => {
        try {
            setLoading(true)
            const response = await post('/verify-account', {email: regInfo.email, token:otp})
            Cookies.set('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            setVerifyModal(true)
            
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
                    <button onClick={verifyAccount} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-[90px] mb-3'>
                        <p>Verify Email</p>
                    </button>
                    <p onClick={resendVerificationToken} className='text-center text-ascent-color text-[18px] font-[500] cursor-pointer'>Resend</p>
                </>
            }
        </div>

        { verifyModal && 
          <>
              <div className="h-full w-full fixed top-0 left-0 z-[99] bg-[#101828] bg-opacity-70 backdrop-blur-sm" ></div>
              <div className="flex items-center flex-col text-center justify-center gap-3 rounded-[12px] bg-white md:w-[400px] w-[95%] fixed top-[50%] left-[50%] py-[30px] px-[2rem] z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
                  <img src="./verifiedCheck.svg" alt="" />
                  <p className='text-text-color font-[500]'>Verification Successful</p>
                  <p className='text-[#6F7975] text-[14px]'> Your email verification is successful, You can now to proceed to login.</p>
                  <button className='text-white bg-primary-color rounded-[4px] w-full mt-[1.5rem] py-[10px] text-center mx-auto' onClick={() => {navigate('/dashboard')}} >Proceed to Dashboard</button>
              </div>
          </>
        }
    </div>
  )
}

export default VerifyEmail