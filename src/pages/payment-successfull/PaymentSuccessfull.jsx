import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccessfull = () => {

    const navigate = useNavigate()

  return (
    <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-[500]">
            <img src="./logo-black.svg" className='w-[3%] mb-10' alt="" />
        <div className="w-24 h-24 relative mb-4">
            {/* Main animated circle */}
            {/* Inner pulsing logo */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img src="./check-circle.svg" className='w-[100%]' alt="" />
            </div>
        </div>
        
        {/* Loading text */}
        <p className="text-gray-700 font-medium">Payment Verified Successfully</p>
        <button className='bg-primary-color text-secondary-color py-2 rounded px-4 mt-2' onClick={() => navigate('/dashboard')}>Continue to dashboard</button>
    </div>
  )
}

export default PaymentSuccessfull