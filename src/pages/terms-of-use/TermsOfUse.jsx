import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const TermsOfUse = () => {
  return (
    <div className='pt-[2rem]'>
        <Navbar />
        <div className='flex flex-col md:flex-row w-[95%] mx-auto mt-[5rem] lg:px-[12rem] md:px-[9.5rem] sm:px-[4.5rem] px-[1rem] md:gap-[6rem] gap-[2rem]'>
            <div className='md:hidden block'>
                <p className='text-primary-color font-[600] text-[26px]'>Terms Of <span className='text-ascent-color'>Use</span> </p>
                <p className='text-[#333333] text-[14px]'>Last Updated : 2025-09-02</p>
            </div>
            <div className='md:mt-[10rem] ml-[1rem] md:w-[50%]'>
                <ol className='text-[#666666] text-[14px] w-full list-decimal grid gap-3'>
                    <li>Use of Platform</li>
                    <li>Certification disclaimer</li>
                    <li>Account responsibility</li>
                    <li>Termination</li>
                </ol>
            </div>
            <div>
                <div className='hidden md:block'>
                    <p className='text-primary-color font-[600] text-[60px]'>Terms Of <span className='text-ascent-color'>Use</span> </p>
                    <p className='text-[#333333] text-[14px]'>Last Updated : 2025-09-02</p>
                </div>
                <div className='md:mt-[2.8rem]'>
                    <p className='text-[#333333] text-[16px] mb-1'>Terms Of Use</p>
                    <p className='text-[#666666] text-[14px]'>Welcome to Valcertra LIMITED. By accessing or using our platform (including AVA CERTIFY), you agree to comply with and be bound by the following Terms of Use. If you do not agree to these terms, please do not use the platform.</p>
                </div>
                <div className='md:ml-0 ml-[0.5rem]'>
                    <div className='mt-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>1.</p>
                            <p>Use of Platform</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>Users may register, apply for certifications, submit supporting documents, and access their certification history through the portal.</li>
                            <li>The platform is intended for legitimate business use by exporters, manufacturers, SMEs, government agencies, and trade partners.</li>
                            <li>Users must not misuse the platform or attempt unauthorized access.</li>
                        </ol>
                    </div>
                    <div className='mt-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>2.</p>
                            <p>Certification disclaimer</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>All certifications issued by Valcertra are based on the information and documents submitted by applicants.</li>
                            <li>False declarations or forged documents will lead to disqualification and may trigger legal action.</li>
                        </ol>
                    </div>
                    <div className='mt-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>3.</p>
                            <p>Account responsibility</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>Users are responsible for safeguarding their login credentials. Valcertra will not be liable for any unauthorized access due to user negligence.Users are responsible for safeguarding their login credentials. Valcertra will not be liable for any unauthorized access due to user negligence.</li>
                        </ol>
                    </div>
                    <div className='my-[2.8rem]'>
                        <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                            <p>4.</p>
                            <p>Termination</p>
                        </div>
                        <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                            <li>Valcertra reserves the right to suspend or terminate access to the platform for violations of these terms or misuse of certification privileges.</li>
                        </ol>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default TermsOfUse