import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import ValueAdditionCalculator from "../../components/value-addition-calculator/ValueAdditionCalculator";


const Dashboard = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [valueAddedCalculator, setValueAddedCalculator] = useState(false)
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#666666]  text-[14px]">Welcome back,</p>
                <p className="text-[#333333] font-[500] text-[20px]">Timber Industries Ltd</p>
              </div>
              <div>
                <button className="bg-secondary-color text-primary-color py-[8px] text-[14px] px-5 rounded-[4px] font-[500]" onClick={() => setValueAddedCalculator(true)}>Calculate Value Addition</button>
                <button className="bg-primary-color text-white py-[8px] text-[14px] px-5 rounded-[4px] font-[500] ml-4"> + New Application</button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-7">
              <div className="flex items-start gap-5 bg-secondary-color p-3">
                <img src="./file-text.svg" alt="" />
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
                <p className="text-[#333333]">Recent Application</p>
                <p className="text-primary-color underline cursor-pointer">View All</p>
              </div>
              <div className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px]">
                <div className="flex items-center justify-between mb-4 rounded-[4px]">
                  <p className="text-[#333333] font-[600]">Processed Cocoa Product</p>
                  <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                    <img src="./check-circle.svg" alt="" className="w-[16px]" />
                    <p className="text-[14px] text-[#027A48] font-[500]">Certified</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[15px]">
                  <p className="text-text-color">Submitted: 2025-02-26</p>
                  <p className="text-text-color">Value Addition: 46%</p>
                </div>
              </div>
              <div className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px]">
                <div className="flex items-center justify-between mb-4 rounded-[4px]">
                  <p className="text-[#333333] font-[600]">Leather Goods</p>
                  <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                    <img src="./clock.svg" alt="" className="w-[16px]" />
                    <p className="text-[14px] text-[#B54708] font-[500]">Under Review</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[15px]">
                  <p className="text-text-color">Submitted: 2025-02-26</p>
                  <p className="text-text-color">Value Addition: 46%</p>
                </div>
              </div>
              <div className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px]">
                <div className="flex items-center justify-between mb-4 rounded-[4px]">
                  <p className="text-[#333333] font-[600]">Textile Products</p>
                  <div className="flex items-center gap-2 bg-[#F2F4F7] rounded-full py-[6px] px-[10px]">
                    <p className="text-[14px] text-[#344054] font-[500]">Draft</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[15px]">
                  <p className="text-text-color">Submitted: - </p>
                  <p className="text-text-color">Value Addition: -</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#FEC84B] py-[10px] px-[10px] mt-12 rounded-t-[4px] flex items-center justify-between">
                <p className="text-[#7A2E0E]">Upcoming Renewal</p>
              </div>
              <div className="bg-[#FEF0C7] px-4 py-[10px] rounded-b-[4px] pt-[1.8rem]">
                <div className="flex items-center justify-between mb-4 rounded-[4px]">
                  <p className="text-[#333333] font-[600]">Processed Cocoa Product</p>
                  <p className="text-[#F79009] text-[15px]">30 days Remaining</p>
                </div>
                <div className="flex items-center justify-between text-[15px]">
                  <p className="text-text-color">Expires: 2025-02-26</p>
                  <button className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500]"> Renew Now</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
      {
        valueAddedCalculator && <ValueAdditionCalculator setValueAddedCalculator={setValueAddedCalculator}/>
      }
    </div>
  );
}

export default Dashboard;
