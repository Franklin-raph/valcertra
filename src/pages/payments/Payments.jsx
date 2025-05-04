import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";


const Payments = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            <p className="text-[#333333] font-[500] text-[20px]">Payment</p>
            
            <div className="border border-[#EAECF0] mt-7 rounded-[10px]">
                <div className="flex items-center gap-4 mt-8 justify-between px-6 pb-4">
                    <p className="text-[#101828] text-[18px]">Pending Payment Applications</p>
                    <p className="text-primary-color text-[14px] py-[5px] px-[12px] bg-secondary-color rounded-full cursor-pointer" onClick={() => navigate('/payments/pending-payments')}>View All</p>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                            <tr>
                                <th scope="col" class="px-6 py-3 font-[600] flex gap-1 items-center">
                                    <div className="p-[8px] border border-[#D0D5DD] rounded-[3px]"></div>
                                    <p>Application ID</p>
                                </th>
                                <th scope="col" class="px-6 py-3 font-[600]">Product Name</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Saved Date</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Amount</th>
                                <th scope="col" class="px-2 py-3 font-[600]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828] flex gap-1 items-center">
                                    <div className="p-[8px] border border-[#D0D5DD] rounded-[4px]"></div>
                                    <p>CERT-2025-0012</p>
                                </td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Marble Slabs</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">28 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#100,000</td>
                                <td class="py-4 text-[12px] md:text-[16px]">
                                    <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                        <img src="./clock.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#B54708] font-[500]">Saved</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828] flex gap-1 items-center">
                                    <div className="p-[8px] border border-[#D0D5DD] rounded-[4px]"></div>
                                    <p>CERT-2025-0012</p>
                                </td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Sandstone Pavers</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">27 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#50,000</td>
                                <td class="py-4 text-[12px] md:text-[16px]">
                                    <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                        <img src="./clock.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#B54708] font-[500]">Saved</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828] flex gap-1 items-center">
                                    <div className="p-[8px] border border-[#D0D5DD] rounded-[4px]"></div>
                                    <p>CERT-2025-0012</p>
                                </td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Concrete Mix</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">26 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#70,000</td>
                                <td class="py-4 text-[12px] md:text-[16px]">
                                    <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                        <img src="./clock.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#B54708] font-[500]">Saved</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="border border-[#EAECF0] rounded-[10px] mt-[3rem]">
                <div className="flex items-center gap-4 mt-8 justify-between px-6 pb-4">
                    <p className="text-[#101828] text-[18px]">Paid Applications</p>
                    <p className="text-primary-color text-[14px] py-[5px] px-[12px] bg-secondary-color rounded-full cursor-pointer" onClick={() => navigate('/payments/paid')}>View All</p>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                            <tr>
                                <th scope="col" class="px-6 py-3 font-[600]">Application ID</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Product Name</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Saved Date</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Amount</th>
                                <th scope="col" class="px-2 py-3 font-[600]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Granite Tiles</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">23 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#100,000</td>
                                <td class="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                    <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                        <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 bg-[#EFF8FF] rounded-full py-[6px] px-[10px]">
                                        <p className="text-[14px] text-[#175CD3] font-[500]">Certified</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Cement Mix</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">15 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#50,000</td>
                                <td class="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                    <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                        <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                        <p className="text-[14px] text-[#B54708] font-[500]">Under review</p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">CERT-2025-0012</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">Concrete Mix</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">02 Apr 2025</td>
                                <td class="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">#70,000</td>
                                <td class="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                    <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                        <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 bg-[#EFF8FF] rounded-full py-[6px] px-[10px]">
                                        <p className="text-[14px] text-[#175CD3] font-[500]">Certified</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Payments;
