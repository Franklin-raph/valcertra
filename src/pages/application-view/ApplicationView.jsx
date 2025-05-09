import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { get } from "../../utils/axiosHelpers";
import { useParams } from "react-router-dom";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";


const ApplicationView = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [applicationInfo, setApplicationInfo] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    const getApplicationInfo = async () => {
        try {
            setIsLoading(true)
            const res = await get(`/application/${id}/retrieve_application/`)
            setApplicationInfo(res.data)
            console.log(res);
        } catch (error) {
            console.error("Error fetching applications:", error);
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getApplicationInfo()
    },[])
  
  return (
    <div>
        {isLoading && <FullPageLoader />}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            <div className="flex items-center gap-4">
                {
                    applicationInfo?.status === 'pending' ?
                    (
                    <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                        <img src="./clock.svg" alt="" className="w-[16px]" />
                        <p className="text-[14px] text-[#B54708] font-[500]">Pending</p>
                    </div>
                    ) :
                    applicationInfo?.status === 'under_review' ?
                    (
                    <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                        <img src="./clock.svg" alt="" className="w-[16px]" />
                        <p className="text-[14px] text-[#B54708] font-[500]">Under Review</p>
                    </div>
                    )
                    :
                    applicationInfo?.status === 'rejected' ?
                    (
                    <div className="flex items-center gap-2 bg-[#FEF3F2] rounded-full py-[6px] px-[10px]">
                        <img src="./x-circle.svg" alt="" className="w-[16px]" />
                        <p className="text-[14px] text-[#B42318] font-[500]">Rejected</p>
                    </div>
                    )
                    :
                    <div className="flex items-center gap-2 bg-[#ECFDF3] rounded-full py-[6px] px-[10px]">
                        <img src="./check-circle.svg" alt="" className="w-[16px]" />
                        <p className="text-[14px] text-[#027A48] font-[500]">Certified</p>
                    </div>
                }
                {/* <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                    <img src="./clock.svg" alt="" className="w-[16px]" />
                    <p className="text-[14px] text-[#B54708] font-[500]">Under Review</p>
                </div> */}
                <p className="text-[#666666]">Submitted on { new Date(applicationInfo?.created_at).toDateString() }</p>
            </div>

            <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px]">
                <div>
                    <p className="text-[#666666]">Application ID: CERT-2025-0012</p>
                    <p className="text-text-color font-[600] text-[30px] mt-[6px]">View Certification Application</p>
                </div>
                <div className="flex items-center gap-3 mt-[40px]">
                    <p className="text-primary-color">Application Details</p>
                    <p className="text-[#999999]">Timeline</p>
                </div>

                <div className="mt-[3.5rem] flex gap-[2rem] justify-between">
                    <div className="w-full">
                        <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pl-[20px] pb-3">Product Details</p>
                        <div className="pl-[20px] mt-5 grid gap-7 text-[14px]">
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Product Name</p>
                                <p className="text-[#666666] mt-[2px]">{applicationInfo?.product_name}</p>
                            </div>
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Product Category</p>
                                <p className="text-[#666666] mt-[2px]">{applicationInfo?.product_category}</p>
                            </div>
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Date Applied</p>
                                <p className="text-[#666666] mt-[2px]">{ new Date(applicationInfo?.created_at).toDateString() }</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 pl-[20px]">Processing Information</p>
                        <div className="pl-[20px] mt-5 grid gap-7 text-[14px]">
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Stage of Processing</p>
                                <p className="text-[#666666] mt-[2px]">Final Production</p>
                            </div>
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Export Status</p>
                                <p className="text-[#666666] mt-[2px]">Ready for export</p>
                            </div>
                            <div>
                                <p className="text-text-color font-[500] text-[16px]">Export Capacity</p>
                                <p className="text-[#666666] mt-[2px]">5,000 Units per Month</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[3.5rem] flex gap-[2rem] justify-between">
                    <div className="w-full">
                        <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pl-[20px] pb-3">Product Documents</p>
                        <div className="pl-[20px] mt-5 grid gap-7">
                            <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                <div className="flex items-start gap-3">
                                    <img src="./file-text.svg" alt="" />
                                    <div>
                                        <p className="text-[#344054]">Certificate of Incorporation.pdf</p>
                                        <p className="text-[#475467] mt-[4px]">200 KB</p>
                                    </div>
                                </div>
                                <img src="./eye.svg" alt="" />
                            </div>
                            <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                <div className="flex items-start gap-3">
                                    <img src="./image.svg" alt="" />
                                    <div>
                                        <p className="text-[#344054]">Product Sample.png</p>
                                        <p className="text-[#475467] mt-[4px]">200 KB</p>
                                    </div>
                                </div>
                                <img src="./eye.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 pl-[20px]">Supplier Invoices</p>
                        <div className="pl-[20px] mt-5 grid gap-7">
                            {
                                applicationInfo?.invoices?.map((invoice, index) => (
                                    <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                        <div className="flex items-start gap-3">
                                            <img src="./file-text.svg" alt="" />
                                            <div>
                                                <p className="text-[#344054]">Cement Invoice.pdf</p>
                                                <p className="text-[#475467] mt-[4px]">200 KB</p>
                                            </div>
                                        </div>
                                        <img src="./eye.svg" alt="" />
                                    </div>
                                ))
                            }
                            {/* <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                <div className="flex items-start gap-3">
                                    <img src="./image.svg" alt="" />
                                    <div>
                                        <p className="text-[#344054]">Granite Invoice.png</p>
                                        <p className="text-[#475467] mt-[4px]">200 KB</p>
                                    </div>
                                </div>
                                <img src="./eye.svg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </>
    </div>
  );
}

export default ApplicationView;
