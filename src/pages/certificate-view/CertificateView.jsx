import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";


const CertificateView = () => {

    const [toggleNav, setToggleNav] = useState(false)
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-text-color font-[600] text-[30px] mt-[6px]">Value Addition Certificate</p>
                    <p className="text-[#666666]">AfCFTA Compliant Value Addition Certification</p>
                </div>
                <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                    <img src="./check-circle.svg" alt="" className="w-[16px]" />
                    <p className="text-[14px] text-[#027A48] font-[500]">Active</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4 mt-8 justify-between">
                <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
                    <p className="text-text-color font-[500]">Certificate #CERT-AFR-234567-NGR</p>
                    <div className="text-[#666666] flex items-center gap-5 mb-5 mt-2 text-[14px]">
                        <p>Issued: 2025-02-26</p>
                        <div className="p-1 bg-[#D0D5DD] rounded-full"></div>
                        <p>Expires: 2026-02-26</p>
                    </div>
                    <div className="bg-[#D9D9D9] w-full h-[300px]"></div>
                    <p className="text-[#666666] text-[15px] text-center mt-3">Value Addition: 46%</p>
                    <button className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full">
                        <img src="./download.svg" alt="" />
                        <p>Download</p>
                    </button>
                </div>

                <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
                    <div className="flex items-center gap-4 mb-4 justify-center">
                        <img src="./bell.svg" alt="" />
                        <p className="text-text-color font-[500]">QR Code</p>
                    </div>
                    <p className="text-[14px] text-center text-[#666666]">Scan this code to instantly verify the certificate's authenticity</p>
                    <img src="./QR-Code.svg" alt="" className="mx-auto my-7" />
                    <button className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full">
                        <img src="./download.svg" alt="" />
                        <p>Download QR Code</p>
                    </button>
                </div>
            </div>

            <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
                <div className="flex items-center gap-4">
                    <img src="./arrow-up-right.svg" alt="" />
                    <p className="text-[#333333] font-[500] text-[18px]">Public Verification</p>
                </div>
                <p className="text-[#666666] mt-2 text-[15px]">Anyone can verify this certificate using the secure link below or by scanning the QR code.</p>
                <div className="flex items-center gap-4 mt-4">
                    <p className="text-[#667085] border border-[#D0D5DD] w-full py-[6px] px-3 rounded-[4px]">https://Addicert.org/verify/CERT-AFR-234567-NGR</p>
                    <button className="bg-primary-color text-white py-[6px] text-[14px] px-8 rounded-[4px] font-[500] flex items-center justify-center gap-2">
                        <img src="./copy.svg" alt="" />
                        <p>Copy</p>
                    </button>
                </div>
            </div>

          </div>
        </div>
      </>
    </div>
  );
}

export default CertificateView;
