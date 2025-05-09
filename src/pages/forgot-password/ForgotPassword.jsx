import React, { useState } from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import BtnLoader from '../../components/btnLoader/BtnLoader'
import Alert from '../../components/alert/Alert'
import { post } from '../../utils/axiosHelpers'

const ForgotPassword = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

    const forgotPasswordToken = async () => {
        try {
            setLoading(true)
            const response = await post('/request-password-reset', {email})
            navigate('/verify-email')
            localStorage.setItem('regInfo', JSON.stringify({email}))
        } catch (error) {
            setMsg(error.message)
            setAlertType('error')
        } finally{
            setLoading(false)
        }
    }

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[13%] left-[50%] right-[50%] translate-x-[-50%]">
                <img src="./logo.svg" className='w-full h-full' alt="" />
            </Link>
            <div className='bg-[#001433B2] text-white text-center w-[40%] pb-10 pt-7 px-7 rounded-[8px]'>
                <div className='flex items-center justify-between'>
                    <div onClick={() => navigate('/')} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                        <IoArrowBackOutline />
                    </div>
                    <p></p>
                </div>
                <p className='font-[500] text-[22px]'>Forget Password</p>
                <p className='mb-3'>Please enter your email for verification</p>
                <div className='w-full text-left my-5'>
                    <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                    <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                        <MdOutlineMailOutline />
                        <input type="text" placeholder='olivia@untitledui.com' onChange={e => setEmail(e.target.value)} className='outline-none bg-transparent w-full'/>
                    </div>
                </div>
                {
                    loading ?
                    <div className='mt-[40.4px] mb-[0.5rem]'>
                        <BtnLoader />
                    </div>
                    :
                    <button onClick={forgotPasswordToken} className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'>
                        <p>Continue</p>
                    </button>
                }
            </div>
        </div>
    )
}

export default ForgotPassword