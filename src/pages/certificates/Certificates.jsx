import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/axiosHelpers";


const Certificates = () => {

    const [toggleNav, setToggleNav] = useState(false)

    const getCertificates = async () => {
      try {
        const res = await get('application/my_applications/?status=under_review&paid=false')
        console.log(res);
        
      } catch (error) {
        
      }
    }

    useEffect(() => {
      getCertificates()
    },[])

    const navigate = useNavigate()
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">

            <div className="flex items-center justify-between">
              <p className="text-[#333333] font-[500] text-[20px]">Certificates</p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-7">
              <div className="flex items-start gap-5 bg-secondary-color p-3">
                <img src="./award.svg" alt="" />
                <div>
                  <p className="text-text-color">Total Application</p>
                  <p className="text-primary-color font-[500] text-[20px] mt-3">4</p>
                </div>
              </div>
              <div className="flex items-start gap-5 bg-[#D1FADF] p-3 rounded-[4px]">
                <img src="./check-circle.svg" alt="" />
                <div>
                  <p className="text-text-color">Active Certificate</p>
                  <p className="text-[#12B76A] font-[500] text-[20px] mt-3">4</p>
                </div>
              </div>
              <div className="flex items-start gap-5 bg-[#FEF0C7] p-3 rounded-[4px]">
                <img src="./file-dashboard.svg" alt="" />
                <div>
                  <p className="text-text-color">Pending Review</p>
                  <p className="text-[#F79009] font-[500] text-[20px] mt-3">2</p>
                </div>
              </div>
              <div className="flex items-start gap-5 bg-[#FEE4E2] p-3 rounded-[4px]">
                <img src="./info.svg" alt="" />
                <div>
                  <p className="text-text-color">Requires Action</p>
                  <p className="text-[#D92D20] font-[500] text-[20px] mt-3">1</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
                <div className="flex items-center justify-between">
                    <p className="text-[#333333]">Products Certificate</p>
                </div>
                <div onClick={() => navigate('/certificates/123')} className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer">
                    <div className="flex items-center justify-between mb-4 rounded-[4px]">
                        <p className="text-[#333333] font-[600]">Processed Cocoa Product</p>
                        <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                            <img src="./check-circle.svg" alt="" className="w-[16px]" />
                            <p className="text-[14px] text-[#027A48] font-[500]">Active</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between text-[15px] text-[#666666]">
                        <div>
                            <p className="text-text-color mb-2">Issued: 2025-02-26</p>
                            <p className="text-text-color">Expires: 2026-02-26</p>
                        </div>
                        <p className="text-text-color">Value Addition: 46%</p>
                    </div>
                </div>
                <div onClick={() => navigate('/certificates/123')} className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer">
                    <div className="flex items-center justify-between mb-4 rounded-[4px]">
                        <p className="text-[#333333] font-[600]">Processed Cocoa Product</p>
                        <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                            <img src="./check-circle.svg" alt="" className="w-[16px]" />
                            <p className="text-[14px] text-[#027A48] font-[500]">Active</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between text-[15px] text-[#666666]">
                        <div>
                            <p className="text-text-color mb-2">Issued: 2025-02-26</p>
                            <p className="text-text-color">Expires: 2026-02-26</p>
                        </div>
                        <p className="text-text-color">Value Addition: 46%</p>
                    </div>
                </div>

                <div onClick={() => navigate('/certificates/123')} className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer">
                    <div className="flex items-center justify-between mb-4 rounded-[4px]">
                        <p className="text-[#333333] font-[600]">Raw Goods</p>
                        <div className="flex items-center gap-2 bg-[#FEF3F2] rounded-full py-[6px] px-[10px]">
                            <img src="./x-circle.svg" alt="" className="w-[16px]" />
                            <p className="text-[14px] text-[#B42318] font-[500]">Expired</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between text-[15px] text-[#666666]">
                        <div>
                            <p className="text-text-color mb-2">Issued: 2025-02-26</p>
                            <p className="text-text-color">Expires: 2026-02-26</p>
                        </div>
                        <p className="text-text-color">Value Addition: 46%</p>
                    </div>
                </div>
                <div onClick={() => navigate('/certificates/123')} className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer">
                    <div className="flex items-center justify-between mb-4 rounded-[4px]">
                        <p className="text-[#333333] font-[600]">Raw Goods</p>
                        <div className="flex items-center gap-2 bg-[#FEF3F2] rounded-full py-[6px] px-[10px]">
                            <img src="./x-circle.svg" alt="" className="w-[16px]" />
                            <p className="text-[14px] text-[#B42318] font-[500]">Expired</p>
                        </div>
                    </div>
                    <div className="flex items-end justify-between text-[15px] text-[#666666]">
                        <div>
                            <p className="text-text-color mb-2">Issued: 2025-02-26</p>
                            <p className="text-text-color">Expires: 2026-02-26</p>
                        </div>
                        <p className="text-text-color">Value Addition: 46%</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </>
    </div>
  );
}

export default Certificates;
