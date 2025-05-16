import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import ValueAdditionCalculator from "../../components/value-addition-calculator/ValueAdditionCalculator";
import CertificateApplication from "../../components/certificate-application/CertificateApplication";
import { get } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";
import { BiCalculator, BiPlus } from "react-icons/bi";


const Applications = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const filters = [ "All", "Draft", "Certified", "Under Review", "Rejected" ]
    const navigate = useNavigate()
    const [valueAddedCalculator, setValueAddedCalculator] = useState(false)
    const [certificationApplication, setCertificationApplication] = useState(false)
    const [applications, setApplications] = useState()
    const [summary, setSummary] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [searchText, setSearchText] = useState('')
    const [allProductPrices, setAllProductPrices] = useState();

    const getAllApplications = async () => {
      try {
        const res = await get('/application/my_applications/')
        setApplications(res)
        console.log(res);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    }

    const getSummary = async () => {
      try {
        const res = await get('/application/application_summary/')
        setSummary(res.data)
        console.log(res);
      } catch (error) {
        console.error("Error fetching summary:", error);
      }
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

    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        await Promise.all([getSummary(), getAllApplications(), getAllProductPrices()]);
        setIsLoading(false);
      };
      
      fetchData();
    }, []);
    
    // Filter applications based on search text
    const filteredApplications = applications?.data?.filter(application => 
      application?.product_name.toLowerCase().includes(searchText.toLowerCase())
    );

    // Check if there are no matching applications
    const noMatchingApplications = searchText && filteredApplications?.length === 0;
  
  return (
    <div>
      {isLoading && <FullPageLoader page="Applications"/>}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">

            <div className="flex items-center justify-between">
              <p className="text-[#333333] font-[500] text-[20px]">Applications</p>
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

            {/* <div className="flex items-center gap-4 mt-8">
                {
                    filters.map((filter, index) => (
                        <p key={index} className="text-[#999999] cursor-pointer">{filter}</p>
                    ))
                }
            </div> */}

            <div className="mt-12">
                <div className="flex items-center justify-between">
                    <p className="text-[#333333]">Recent Application</p>
                    <input className="outline-none border py-[4px] px-3 w-[300px]" placeholder="Search by application name" type="text" onChange={e => setSearchText(e.target.value)}/>
                    {/* <p className="text-primary-color underline cursor-pointer">View All</p> */}
                </div>
                  {
                    applications?.data?.length === 0 &&
                    <div className="flex items-center justify-center mt-[5rem]">
                      <p>No Recent Applications Yet</p>
                    </div>
                  }

                  {/* Show message when no applications match search text */}
                  {
                    noMatchingApplications &&
                    <div className="flex items-center justify-center mt-[5rem]">
                      <p>No applications match the name "{searchText}"</p>
                    </div>
                  }

                  {/* Display applications when available and not showing "no matches" message */}
                  {
                    !noMatchingApplications && filteredApplications?.map((application, index) => (
                      <div key={application.id} onClick={() => navigate(`/applications/${application.id}`)} className="border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer">
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
                          <div className="flex items-center justify-between text-[15px]">
                              <p className="text-text-color">Submitted: { new Date(application.created_at).toLocaleDateString() } </p>
                              <p className="text-text-color">Value Addition: {application.cva} %</p>
                          </div>
                      </div>
                    ))
                  }
            </div>

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

export default Applications;