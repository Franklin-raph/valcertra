import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Liscence = () => {
  return (
    <div className='pt-[2rem]'>
        <Navbar />
        <div className='flex flex-col md:flex-row w-[95%] mx-auto mt-[5rem] lg:px-[12rem] md:px-[9.5rem] sm:px-[4.5rem] px-[1rem] md:gap-[6rem] gap-[2rem]'>
            <div className='md:hidden block'>
                <p className='text-primary-color font-[600] text-[26px]'>Licensing & Intellectual <span className='text-ascent-color'>Property</span> </p>
                <p className='text-[#333333] text-[14px]'>Last Updated : 2025-09-02</p>
            </div>
            <div className='md:mt-[14.5rem] ml-[1rem]  md:w-[50%]'>
                <ol className='text-[#666666] text-[14px] w-full list-decimal grid gap-3'>
                    <li>Ownership</li>
                    <li>Platform license</li>
                    <li>Use of Valcertra seals</li>
                </ol>
            </div>
            <div>
                <div className='hidden md:block'>
                    <p className='text-primary-color font-[600] text-[60px]'>Licensing & Intellectual <span className='text-ascent-color'>Property</span> </p>
                </div>
                <div className='md:ml-0 ml-[0.5rem]'>
                    <div className='md:mt-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>1.</p>
                            <p>Ownership</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>All content, data models, algorithms, trademarks, and technology used on this platform are the intellectual property of Valcertra LIMITED and are protected under local and international IP laws.</li>
                        </ol>
                    </div>
                    <div className='mt-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>2.</p>
                            <p>Platform license</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>Valcertra grants users a limited, non-exclusive, non-transferable license to use the AVA CERTIFY platform for certification purposes only.</li>
                            <li>Reproduction, modification, or reverse engineering of the platform is strictly prohibited.</li>
                        </ol>
                    </div>
                    <div className='my-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>3.</p>
                            <p>Use of Valcertra seals</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>Certified companies may display Valcertra's certification badge subject to continued compliance.</li>
                            <li>Misuse of certification labels may lead to revocation and legal penalties.</li>
                        </ol>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Liscence