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
            

          </div>
        </div>
      </>
    </div>
  );
}

export default CertificateView;
