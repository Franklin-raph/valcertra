import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Liscence = () => {
  return (
    <div className='pt-[2rem]'>
        <Navbar />
        <div className='flex w-[95%] mx-auto mt-[5rem] px-[12rem] gap-[5rem]'>
            <div className='mt-[14.5rem] w-[50%]'>
                <ol className='text-[#666666] text-[14px] w-full list-decimal grid gap-3'>
                    <li>Ownership</li>
                    <li>Platform license</li>
                    <li>Use of CERTIVIA seals</li>
                </ol>
            </div>
            <div>
                <div>
                    <p className='text-primary-color font-[600] text-[60px]'>Licensing & Intellectual <span className='text-ascent-color'>Property</span> </p>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>1.</p>
                        <p>Ownership</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>All content, data models, algorithms, trademarks, and technology used on this platform are the intellectual property of CERTIVIA LIMITED and are protected under local and international IP laws.</li>
                    </ol>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>2.</p>
                        <p>Platform license</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>CERTIVIA grants users a limited, non-exclusive, non-transferable license to use the AVA CERTIFY platform for certification purposes only.</li>
                        <li>Reproduction, modification, or reverse engineering of the platform is strictly prohibited.</li>
                    </ol>
                </div>
                <div className='my-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>3.</p>
                        <p>Use of CERTIVIA seals</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>Certified companies may display CERTIVIA's certification badge subject to continued compliance.</li>
                        <li>Misuse of certification labels may lead to revocation and legal penalties.</li>
                    </ol>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Liscence