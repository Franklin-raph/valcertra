import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import ValueAdditionCalculator from "../../components/value-addition-calculator/ValueAdditionCalculator";
import CertificateApplication from "../../components/certificate-application/CertificateApplication";
import { get } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";
import { useNavigate } from "react-router-dom";
import { BiCalculator, BiPlus } from "react-icons/bi";


const Dashboard = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [valueAddedCalculator, setValueAddedCalculator] = useState(false)
    const [certificationApplication, setCertificationApplication] = useState(false)
    const [applications, setApplications] = useState()
    const [summary, setSummary] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [allProductPrices, setAllProductPrices] = useState();
    const user = JSON.parse(localStorage.getItem('user'))
    const [userDetails, setUserDetails] = useState()
    const navigate = useNavigate()

    const getAllApplications = async () => {
      const res = await get('/application/my_applications/')
      setApplications(res?.data?.slice(0, 3))
      console.log(res);
    }

    const getSummary = async () => {
      const res = await get('/application/application_summary/')
      setSummary(res.data)
      console.log(res);
    }

    const getAllProductPrices = async () => {
      try {
          const res = await get('/product-prices/');
          setAllProductPrices(res.data);
          setIsLoading(false);
      } catch (error) {
          console.error("Error fetching product prices:", error);
          setIsLoading(false);
      }
    }

    const getUser = async () => {
      try {
          setIsLoading(true)
          const res = await get(`/profile/user/${user.id}`)
          setUserDetails(res.data)
          console.log(res.data);
      } catch (error) {
          console.error("Error fetching summary:", error);
      }finally{
          setIsLoading(false)
      }
    }

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await Promise.all([getSummary(), getAllApplications(), getAllProductPrices(), getUser()]);
        setIsLoading(false);
      };
      
      fetchData();
    }, []);
  
  return (
    <div>
      {isLoading && <FullPageLoader page="Dashboard"/>}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#666666]  text-[14px]">Welcome back,</p>
                <p className="text-[#333333] font-[500] text-[20px]">{userDetails?.company_data?.company_name}</p>
              </div>
              <div className="flex gap-2 items-center">
                <button className="hidden lg:block bg-secondary-color text-primary-color py-[8px] text-[14px] px-5 rounded-[4px] font-[500]" onClick={() => setValueAddedCalculator(true)}>Calculate Value Addition</button>
                <button className="hidden lg:block bg-primary-color text-white py-[8px] text-[14px] px-5 rounded-[4px] font-[500]" onClick={() => setCertificationApplication(true)}> + New Application</button>
                <button className="lg:hidden block bg-secondary-color text-primary-color py-[6px] text-[22px] px-[6px] rounded-[4px] font-[500]" onClick={() => setValueAddedCalculator(true)}>
                  <BiCalculator />
                </button>
                <button className="lg:hidden block bg-primary-color text-white py-[6px] text-[22px] px-[6px] rounded-[4px] font-[500]" onClick={() => setCertificationApplication(true)}> <BiPlus /> </button>
              </div>
            </div>

            <div className="w-full overflow-hidden">
              <div className="md:grid md:grid-cols-4 flex overflow-x-auto pb-3 gap-4 mt-7 scrollbar-hide">
                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-secondary-color p-3 rounded-md">
                  <img src="./file-text.svg" alt="" />
                  <div>
                    <p className="text-text-color">Total Application</p>
                    <p className="text-primary-color font-[500] text-[20px] mt-3">{summary?.total_applications}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-[#D1FADF] p-3 rounded-md">
                  <img src="./check-circle.svg" alt="" />
                  <div>
                    <p className="text-text-color">Approved Applications</p>
                    <p className="text-[#12B76A] font-[500] text-[20px] mt-3">{summary?.approved_applications}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-[#FEF0C7] p-3 rounded-md">
                  <img src="./file-dashboard.svg" alt="" />
                  <div>
                    <p className="text-text-color">Pending Applications</p>
                    <p className="text-[#F79009] font-[500] text-[20px] mt-3">{summary?.pending_applications}</p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-[#FEE4E2] p-3 rounded-md">
                  <img src="./info.svg" alt="" />
                  <div>
                    <p className="text-text-color">Rejected Applications</p>
                    <p className="text-[#D92D20] font-[500] text-[20px] mt-3">{summary?.rejected_applications}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center justify-between">
                  <p className="text-[#333333]">Recent Application</p>
                  <p onClick={() => navigate('/applications')} className="text-primary-color underline cursor-pointer">View All</p>
              </div>
                {
                  applications?.length === 0 &&
                  <div className="flex items-center justify-center mt-[5rem]">
                    <p>No Recent Applications Yet</p>
                  </div>
                }
              {
                applications?.map((application, index) => (
                  <div onClick={() => navigate(`/applications/${application.id}`)} className="border border-[#F2F4F7] md:px-4 px-2 py-[10px] mt-4 rounded-[4px] cursor-pointer">
                      <div className="flex items-center justify-between mb-4 rounded-[4px]">
                          <p className="text-[#333333] font-[600]">{application?.product_name}</p>
                          {
                            application?.status === 'pending' ?
                            (
                              <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                  <img src="./clock.svg" alt="" className="w-[16px]" />
                                  <p className="text-[14px] text-[#B54708] font-[500]">Pending</p>
                              </div>
                            ) :
                            application?.status === 'under_review' ?
                            (
                              <div className="flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                  <img src="./clock.svg" alt="" className="w-[16px]" />
                                  <p className="text-[14px] text-[#B54708] font-[500]">Under Review</p>
                              </div>
                            )
                            :
                            application?.status === 'rejected' ?
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
                      </div>
                      <div className="flex items-center justify-between md:text-[15px] text-[14px]">
                          <p className="text-text-color">Submitted: { new Date(application.created_at).toLocaleDateString() } </p>
                          <p className="text-text-color">Value Addition: {application.cva}%</p>
                      </div>
                  </div>
                ))
              }
            </div>

            {/* <div>
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
            </div> */}

          </div>
        </div>
      </>
      {
        valueAddedCalculator && <ValueAdditionCalculator setValueAddedCalculator={setValueAddedCalculator}/>
      }
      {
        certificationApplication && <CertificateApplication allProductPrices={allProductPrices} setCertificationApplication={setCertificationApplication}/>
      }
    </div>
  );
}

export default Dashboard;
