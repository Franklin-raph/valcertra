import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";


const PendingPayments = () => {

  const [toggleNav, setToggleNav] = useState(false);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [applicationIds, setApplicationIds] = useState([]);
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

    const payForSelectedApplications = async () => {
            // console.log({application_ids: [id]});
            
        try {
            // Ensure id is converted to an array of strings
            const res = await post('/application/pay_application/', {
                application_ids: applicationIds,
                success_url: 'https://valcertra.com/#/paymment-verification'
            });
            
            // Handle successful payment response
            console.log('Payment response:', res);
            window.location.assign(res.data.data.link)
            
        } catch (error) {
            // Handle payment error
            console.error('Payment error:', error);
        }
            console.log("Selected Application IDs:", applicationIds);
    }

      // Function to handle checkbox changes
    const handleCheckboxChange = (applicationId) => {
        setApplicationIds(prevIds => {
        // Check if the ID is already in the array
        if (prevIds.includes(applicationId)) {
            // If it is, remove it (checkbox was unchecked)
            return prevIds.filter(id => id !== applicationId);
        } else {
            // If it's not, add it (checkbox was checked)
            return [...prevIds, applicationId];
        }
        });
    };

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
      {loading && <FullPageLoader page="Payments"/>}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            {/* <p className="text-[#333333] font-[500] text-[20px]">Payment</p> */}
            
            <div className="border border-[#EAECF0] mt-[8rem] rounded-[10px]">
                <div className="flex items-center gap-4 mt-4 justify-between md:px-6 px-2 py-4">
                    <p className="text-[#101828] text-[18px]">Pending Payment Applications</p>
                    {
                        applicationIds.length > 0 &&
                        <div className="flex items-end justify-end">
                            <button onClick={payForSelectedApplications} className="bg-primary-color text-white py-[6px] px-5 rounded-[8px]">Pay for selected applications ({applicationIds.length})</button>
                        </div>
                    }
                </div>
                <div class="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-left">
                        <thead className="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-[600] flex gap-1 items-center">
                                    <div className="p-[6px] border border-[#D0D5DD] rounded-[3px]"></div>
                                    <p>Application ID</p>
                                </th>
                                <th scope="col" className="px-6 py-3 font-[600]">Product Name</th>
                                <th scope="col" className="px-6 py-3 font-[600]">Saved Date</th>
                                <th scope="col" className="px-6 py-3 font-[600]">Amount</th>
                                <th scope="col" className="px-2 py-3 font-[600]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.data?.length > 0 ? (
                              applications?.data?.map((application, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467] flex gap-1">
                                    <input 
                                      type="checkbox" 
                                      checked={applicationIds.includes(application.id)}
                                      onChange={() => handleCheckboxChange(application.id)}
                                      className="h-4 w-4 cursor-pointer"
                                    />
                                    <p>{application.application_number}</p>
                                  </td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{application.product_name}</td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467]">{ new Date(application.created_at).toDateString() }</td>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#101828]">{application.product_category.product_amount}</td>
                                  <td className="py-4 text-[12px] md:text-[16px]">
                                    <div className="inline-flex items-center gap-2 bg-[#FFFAEB] rounded-full py-[6px] px-[10px]">
                                        <img src="./clock.svg" alt="" className="w-[16px]" />
                                        <p className="text-[14px] text-[#B54708] font-[500]">Saved</p>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <EmptyState text="No pending payment applications found." />
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

export default PendingPayments;
