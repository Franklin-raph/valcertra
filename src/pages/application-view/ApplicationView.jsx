import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { get, post } from "../../utils/axiosHelpers";
import { useParams } from "react-router-dom";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";
import DocumentsView from "../../components/documents-view/DocumentsView";


const ApplicationView = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const [applicationInfo, setApplicationInfo] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const tabs = ["Application Details", "Uploaded Documents"]
    const [selectedTab, setSelectedTab] = useState(tabs[0])
    const [viewDocument, setViewDocument] = useState('')
    const [fileToView, setFileToView] = useState('')
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

    const makePayment = async () => {
        console.log({application_ids: [id]});
        
        try {
          // Ensure id is converted to an array of strings
          const res = await post('/application/pay_application/', {
            application_ids: [id], 
            success_url: 'https://valcertra.com/#/paymment-verification'
          });
          
          // Handle successful payment response
          console.log('Payment response:', res);
          window.location.assign(res.data.data.link)
          
        } catch (error) {
          // Handle payment error
          console.error('Payment error:', error);
        }
      };

    useEffect(() => {
        getApplicationInfo()
    },[])
  
  return (
    <div>
      {isLoading && <FullPageLoader page="Application"/>}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            <div className="flex items-center justify-between">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
                    <p className="text-[#666666] text-[14px] sm:text-[16px]">Submitted on { new Date(applicationInfo?.updated_at).toDateString() }</p>
                </div>
                {
                    applicationInfo?.paid === false &&
                    <button onClick={makePayment} className="bg-primary-color text-secondary-color py-[5px] px-3 rounded text-[14px] sm:text-[16px]">Make Payment</button>
                }
            </div>

            <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px]">
                <div>
                    <p className="text-[#666666]">Application Number: {applicationInfo?.application_number}</p>
                    <p className="text-text-color font-[600] sm:text-[30px] text-[20px] mt-[6px]">View Certification Application</p>
                </div>
                <div className="flex items-center gap-3 mt-[40px]">
                    {
                        tabs.map(tab => (
                            <p onClick={() => setSelectedTab(tab)} className={selectedTab === tab ? "text-primary-color cursor-pointer text-[14px] sm:text-[16px]" : "text-[#999999] cursor-pointer sm:text-[16px] text-[14px]"}>{tab}</p>
                        ))
                    }
                </div>

                {
                    selectedTab === "Application Details" &&
                    <div className="mt-[3.5rem] flex flex-col gap-[2rem] justify-between">
                        <div className="w-full">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] md:pl-[20px] pb-3">Product Details</p>
                            <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px]">
                                <div>
                                    <p className="text-text-color font-[500] text-[16px]">Product Name</p>
                                    <p className="text-[#666666] mt-[2px]">{applicationInfo?.product_name}</p>
                                </div>
                                <div>
                                    <p className="text-text-color font-[500] text-[16px]">Product Category</p>
                                    <p className="text-[#666666] mt-[2px]">{applicationInfo?.product_category?.product_category}</p>
                                </div>
                                <div>
                                    <p className="text-text-color font-[500] text-[16px]">Date Applied</p>
                                    {
                                        applicationInfo?.paid === true ?
                                        <p className="text-[#666666]">{ new Date(applicationInfo?.updated_at).toDateString() }</p>
                                        :
                                        "N/A"
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:pl-[20px]">Processing Information</p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Primary raw materials used</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.primary_materials_used}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Source location (Country/Region)</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.source_location}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Do you own or lease the resources base</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.do_you_own_or_lease}</p>
                                    </div>
                                    <div className="w-full flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                        <div className="flex items-start gap-3">
                                            <img src="./file-text.svg" alt="" />
                                            <div>
                                                <p className="text-[#344054]">Process flow diagram</p>
                                                {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                            </div>
                                        </div>
                                        <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                            setViewDocument('Process flow diagram')
                                            setFileToView(applicationInfo?.process_flow_diagram?.media)
                                        }}/>
                                    </div>
                                </div>
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Stage of value addition conducted locally</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.stage_of_value_addition_conducted_locally}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Final product value</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.final_product_value}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual output produced</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_output}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual volume of raw materials utilized</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_volume_of_raw_material_utilized}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-6">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:pl-[20px]">Local Value Added Metrics</p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">% of raw materials processed locally</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.pct_of_material_processed_locally}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">% of raw materials imported</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.pct_of_material_imported}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual Spend on imported raw materials</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_spend_on_imported_raw_materials}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual Spend on locally sourced raw materials</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_spend_on_locally_sourced_materials}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Use of local suppliers </p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.use_of_local_suppliers}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Final product cost</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.final_product_cost}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual expenditure on local procurement and service</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.do_you_own_or_lease}</p>
                                    </div>
                                </div>
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">% of Components/input sourced locally</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.pct_of_components_sourced_locally}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">% of Components/input imported</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.pct_of_components_imported}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Total workforce size</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.total_work_force}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">% of local (National) workforce</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.pct_of_local_workforce}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">List major local suppliers/partners</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.list_major_local_suppliers}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Raw material cost</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.raw_material_cost}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Calculated value addition (%)</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.cva}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:pl-[20px] mt-5 grid gap-1 text-[14px] w-full">
                                <p className="text-text-color font-[500] text-[16px]">Investment in local training or infrastructure</p>
                                <p className="text-[#666666] mt-[2px]">{applicationInfo?.investment_in_local_training_or_infrastructure}</p>
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:pl-[20px]">Environmental Impact and Susstainability</p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual water consumption estimate (Litres)</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_water_consumption_estimate}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Green technologies or practices used</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.green_technology_or_practices_used}</p>
                                    </div>
                                    
                                </div>
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Annual energy consumption estimate (kWh)</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.annual_energy_consumption_estimate}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Compliance with national/international standards</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.compliance_with_national_international_standards}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full md:gap-[2rem] gap-5 mt-5 md:pl-[20px]">
                                <div className="w-full flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Environmental Impact Assessment Report</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer"/>
                                </div>
                                <div className="w-full flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Emissions and Pollution Data</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer"/>
                                </div>
                            </div>
                            <div className="md:pl-[20px] mt-5 grid gap-1 text-[14px] w-full">
                                <p className="text-text-color font-[500] text-[16px]">Describe waste management practices</p>
                                <p className="text-[#666666] mt-[2px]">{applicationInfo?.waste_management_practices}</p>
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:pl-[20px]">Social and Community Sustainability</p>
                            <div className="flex flex-col sm:flex-row justify-between">
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Do you run or fund community development project</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.do_you_run_or_fund_community_development_project.toString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Project description</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.community_development_project_description}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Estimated annual tax paid to host country</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.estimated_annual_tax_paid_to_host_country}</p>
                                    </div>
                                </div>
                                <div className="md:pl-[20px] mt-5 grid gap-7 text-[14px] w-full">
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Grievance mechanism description</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.grievance_mechanism_description.toString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Grievance description</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.grievance_mechanism_details}</p>
                                    </div>
                                    <div>
                                        <p className="text-text-color font-[500] text-[16px]">Employee welfare programs</p>
                                        <p className="text-[#666666] mt-[2px]">{applicationInfo?.employee_welfare_program}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-full gap-[2rem] mt-5 md:pl-[20px]">
                                <div className="w-full flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Occupational Health and Safety Policies</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    selectedTab === "Uploaded Documents" &&

                    <div className="mt-[3.5rem] flex flex-col gap-[2rem] justify-between">
                        <div className="w-full">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:pl-[20px]">Product Documents</p>
                            <div className="md:px-[20px] mt-5 grid sm:grid-cols-2 sm:gap-7 gap-3">
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Certificate of Company Registration</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Certificate of Company Registration')
                                        setFileToView(applicationInfo?.certificate_of_company_registration?.media)
                                    }}/>
                                </div>
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Environmental Impact Assessment Report</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Environmental Impact Assessment Report')
                                        setFileToView(applicationInfo?.environmental_impact_assessment_report?.media)
                                    }}/>
                                </div>
                            </div>
                            <div className="md:px-[20px] mt-5 grid sm:grid-cols-2 sm:gap-7 gap-3">
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Operational Process Flowchart</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Operational Process Flowchart')
                                        setFileToView(applicationInfo?.operational_process_flowchart?.media)
                                    }}/>
                                </div>
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Corporate Social Responsibility Report</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Corporate Social Responsibility Report')
                                        setFileToView(applicationInfo?.corporate_social_responsibility_report?.media)
                                    }}/>
                                </div>
                            </div>
                            <div className="md:px-[20px] mt-5 grid sm:grid-cols-2 sm:gap-7 gap-3">
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Any Industry Certificate</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Any Industry Certificate')
                                        setFileToView(applicationInfo?.any_industry_certifications?.media)
                                    }}/>
                                </div>
                                <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                    <div className="flex items-start gap-3">
                                        <img src="./file-text.svg" alt="" />
                                        <div>
                                            <p className="text-[#344054]">Photos of Production Sites, Facilities or Warehouse</p>
                                            {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                        </div>
                                    </div>
                                    <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                        setViewDocument('Photos of Production Sites, Facilities or Warehouse')
                                        setFileToView(applicationInfo?.photo_of_production_site_facilities_or_warehouses?.media)
                                    }}/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="font-[600] text-primary-color text-[22px] border-b border-[#F2F2F2] pb-3 md:md:pl-[20px]">Supplier Invoices</p>
                            <div className="md:px-[20px] mt-5 grid gap-7">
                                {
                                    applicationInfo?.invoices?.map((invoice, index) => (
                                        <div className="flex items-center justify-between bg-secondary-color rounded-[8px] px-4 py-4 text-[14px]">
                                            <div className="flex items-start gap-3">
                                                <img src="./file-text.svg" alt="" />
                                                <div>
                                                    <p className="text-[#344054]">Supplier Invoice ({index+1})</p>
                                                    {/* <p className="text-[#475467] mt-[4px]">200 KB</p> */}
                                                </div>
                                            </div>
                                            <img src="./eye.svg" alt="" className="cursor-pointer" onClick={() => {
                                                setViewDocument(`Supplier Invoice ${index+1}`)
                                                setFileToView(invoice?.media)
                                            }}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
          </div>
        </div>
      </>
      {
        viewDocument && <DocumentsView setViewDocument={setViewDocument} fileName={viewDocument} fileToView={fileToView}/>
      }
    </div>
  );
}

export default ApplicationView;
