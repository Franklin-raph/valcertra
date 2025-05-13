import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";


const PaidApplicationsPayments = () => {

    const [toggleNav, setToggleNav] = useState(false);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const getAllApplications = async () => {
        try {
                setLoading(true)
                const res = await get('/application/my_applications/?paid=false')
                setApplications(res)
                console.log(res);
            } catch (error) {
                console.error("Error fetching applications:", error);
            }finally{
                setLoading(false)
            }
        }
  
        useEffect(() => {
            getAllApplications()
        }, []);

        // Empty state component
        const EmptyState = ({ text }) => (
            <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-[#475467]">
                    <p className="text-lg">{text}</p>
                </td>
            </tr>
        );
  return (
    <div>
        {loading && <FullPageLoader />}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            {/* <p className="text-[#333333] font-[500] text-[20px]">Payment</p> */}
            
            <div className="border border-[#EAECF0] mt-[8rem] rounded-[10px]">
                <div className="flex items-center gap-4 mt-4 justify-between px-6 pb-4">
                    <p className="text-[#101828] text-[18px]">Paid Applications</p>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-left">
                        <thead class="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                            <tr>
                                <th scope="col" class="px-6 py-3 font-[600] flex gap-1 items-center">Application ID</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Product Name</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Saved Date</th>
                                <th scope="col" class="px-6 py-3 font-[600]">Amount</th>
                                <th scope="col" class="px-2 py-3 font-[600]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.data?.length > 0 ? (
                              applications?.data?.map((application, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{application.application_number}</td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{application.product_name}</td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{ new Date(application.created_at).toDateString() }</td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">{application.product_category.product_amount}</td>
                                  <td className="py-4 text-[12px] md:text-[16px] flex gap-2 items-center">
                                    <div className="inline-flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                                      <img src="./arrow-up.svg" alt="" className="w-[16px]" />
                                      <p className="text-[14px] text-[#027A48] font-[500]">Paid</p>
                                    </div>
                                    <div className={`inline-flex items-center gap-2 ${
                                      application.current_review_stage === "completed" ? "bg-[#EFF8FF]" : "bg-[#FFFAEB]"
                                    } rounded-full py-[6px] px-[10px]`}>
                                      <p className={`text-[14px] ${
                                        application.status === "completed" ? "text-[#175CD3]" : "text-[#B54708]"
                                      } font-[500]`}>{application.current_review_stage === 'completed' ? "Certtified" : "Under Review" }</p>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <EmptyState text="No paid applications found." />
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between px-6 my-4">
                    <div className="flex items-center gap-3 py-2 px-4 border text-[14px] rounded-[6px] cursor-pointer">
                        <img src="./arrow-left.svg" alt="" />
                        <p>Previous</p>
                    </div>
                    {/* <div></div> */}
                    <div className="flex items-center gap-3 py-2 px-4 border text-[14px] rounded-[6px] cursor-pointer">
                        <p>Next</p>
                        <img src="./arrow-right.svg" alt="" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default PaidApplicationsPayments;
