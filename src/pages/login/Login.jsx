import React, { useState } from 'react'
import { FaRegEyeSlash } from 'react-icons/fa'
import { IoArrowBackOutline, IoEyeOutline } from 'react-icons/io5'
import { LuLock } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../../components/alert/Alert'
import BtnLoader from '../../components/btnLoader/BtnLoader'
import { post } from '../../utils/axiosHelpers'
import Cookies from 'js-cookie';
import VerifyEmail from '../../components/verify-email/VerifyEmail'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modal, setModal] = useState('')

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = (e) => {
        // This must be the first line to prevent default form submission
        e.preventDefault();
        
        // Clear previous error messages
        setMsg('');
        setAlertType('');
        
        // Form validation
        if(!email || !password) {
            setMsg('Please enter your email and password.');
            setAlertType('error');
            return;
        }
        
        // Attempt login - Now using a separate function to handle the API call
        attemptLogin();
    }
    
    // Separate the API call logic from the event handler
    const attemptLogin = async () => {
        try {
            setLoading(true);
            const response = await post('/login', {email, password});
            
            // Handle successful login
            Cookies.set('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/dashboard');
        } catch (error) {
            // Properly handle errors without causing page reload
            console.error('Login error:', error);
            
            // Extract error message from response if available
            const errorMessage = 
                error.response?.data?.message || 
                'Unable to login. Please check your internet connection and try again.';
                if(errorMessage.includes('inactive')){
                    setModal('inactive account')
                    localStorage.setItem('regInfo', JSON.stringify({email}))
                }
            setMsg(errorMessage);
            setAlertType('error');
        } finally {
            setLoading(false);
        }
    }

    function reactivateAccount(){
        // navigate('/sign-up')
        setModal("verifyEmail")
    }

    return (
        <div className='sign-up-bg flex items-center justify-center'>
            {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
            {
                modal !== "verifyEmail"
                ?
                <>
                    <Link to="/" className="text-secondary-color w-[50px] h-[50px] text-[20px] font-[600] absolute top-[13%] left-[50%] right-[50%] translate-x-[-50%]">
                        <img src="./logo.svg" className='w-full h-full' alt="" />
                    </Link>
                    <div className='bg-[#001433B2] text-white text-center lg:w-[40%] md:w-[70%] w-[95%] pb-10 pt-7 md:px-7 px-3 rounded-[8px]'>
                        <div className='flex items-center justify-between'>
                            <div onClick={() => navigate('/')} className='p-3 text-[20px] rounded-[4px] bg-primary-color cursor-pointer'>
                                <IoArrowBackOutline />
                            </div>
                            <p></p>
                        </div>
                        <p className='font-[500] text-[22px]'>Welcome back to Valcertra</p>
                        <p className='mb-3'>Continue your certification journey today </p>
                        <div>
                            <div className='w-full text-left my-5'>
                                <label className='block mb-1 text-[15px] text-[#fff]'>Email</label>
                                <div className='border border-[#D0D5DD] bg-white py-2 px-2 w-full rounded-[4px] text-[#667085] flex items-center gap-3'>
                                    <MdOutlineMailOutline />
                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} 
                                        type="text" 
                                        placeholder='olivia@untitledui.com' 
                                        className='w-full outline-none bg-transparent'
                                    />
                                </div>
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
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        <div onClick={togglePasswordVisibility} className='cursor-pointer'>
                                            {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
                                        </div>
                                    </div>
                                    <Link to="/forgot-password" className='text-ascent-color text-[14px] font-[500] mt-2 text-right block'>Forgot Password</Link>
                                </div>
                            </div>
                            {
                                loading ?
                                <div className='mt-[40.4px] mb-[0.5rem]'>
                                    <BtnLoader />
                                </div>
                                :
                                <button 
                                    onClick={handleSignIn}
                                    type="button"
                                    className='bg-primary-color w-full py-[10px] rounded-[4px] text-white mt-8 mb-3'
                                >
                                    <p>Login</p>
                                </button>
                            }
                        </div>
                        <p>Don`t have an account? <Link to="/sign-up" className='text-ascent-color'>Signup</Link> </p>
                    </div>
                    {
                        modal === 'inactive account' &&
                        <>
                            <div className="h-full w-full fixed top-0 left-0 z-[99] bg-[#101828] bg-opacity-70 backdrop-blur-sm" ></div>
                            <div className="flex items-center flex-col text-center justify-center gap-3 rounded-[12px] bg-white md:w-[400px] w-[95%] fixed top-[50%] left-[50%] py-[30px] px-[2rem] z-[100]" style={{ transform: "translate(-50%, -50%)" }}>
                                <img src="./verifiedCheck.svg" alt="" />
                                <p className='text-text-color font-[500]'>Inactive Account</p>
                                <p className='text-[#6F7975] text-[14px]'> Your account is inactive. Please activate your account to log in. </p>
                                <button className='text-white bg-primary-color rounded-[4px] w-full mt-[1.5rem] py-[10px] text-center mx-auto' onClick={reactivateAccount} >Continue</button>
                            </div>
                        </>
                    }
                </>
                :
                <VerifyEmail />
            }
        </div>
    )
}

export default Login