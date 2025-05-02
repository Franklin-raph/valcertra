import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const PrivacyPolicy = () => {
  return (
    <div className='pt-[2rem]'>
        <Navbar />
        <div className='flex w-[95%] mx-auto mt-[5rem] px-[12rem] gap-[6rem]'>
            <div className='mt-[10rem]'>
                <ol className='text-[#666666] text-[14px] list-decimal grid gap-3'>
                    <li>Data we collect</li>
                    <li>Use of data</li>
                    <li>Data sharing</li>
                    <li>Security measures</li>
                    <li>User rights</li>
                </ol>
            </div>
            <div>
                <div>
                    <p className='text-primary-color font-[600] text-[60px]'>Privacy <span className='text-ascent-color'>Policy</span> </p>
                    <p className='text-[#333333] text-[14px]'>Last Updated : 2025-09-02</p>
                </div>
                <div className='mt-[2.8rem]'>
                    <p className='text-[#333333] text-[16px] mb-1'>Privacy Policy</p>
                    <p className='text-[#666666] text-[14px]'>Your privacy is important to us. This policy explains how we collect, use, and protect your data.</p>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>1.</p>
                        <p>Data We Collect</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>Personal identification information (name, company, email, phone)</li>
                        <li>Business documents (invoices, raw material records, export records)</li>
                        <li>Usage and technical data (IP address, device type, cookies)</li>
                    </ol>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>2.</p>
                        <p>Use of Data</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>To verify applications and issue certifications</li>
                        <li>To improve platform performance and analytics</li>
                        <li>To communicate updates, notifications, and compliance alerts</li>
                    </ol>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>3.</p>
                        <p>Data Sharing</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>We do not sell or rent your data.</li>
                        <li>We may share data with regulatory or compliance agencies upon request, in accordance with applicable law.</li>
                    </ol>
                </div>
                <div className='mt-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>4.</p>
                        <p>Security Measures</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>All data is encrypted at rest and in transit.</li>
                        <li>Multi-factor authentication and fraud-detection tools are implemented to prevent breaches.</li>
                    </ol>
                </div>
                <div className='my-[2.8rem]'>
                    <div className='flex items-center gap-2 text-[#333333] text-[16px] mb-1'>
                        <p>5.</p>
                        <p>User Rights</p>
                    </div>
                    <ol className='text-[#666666] text-[14px] list-disc grid gap-3 ml-3'>
                        <li>You may request access, correction, or deletion of your data by contacting us at [Insert Contact Email].</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrivacyPolicy