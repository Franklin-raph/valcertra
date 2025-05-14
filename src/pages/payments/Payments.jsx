import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { get, post } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";

const Payments = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [applications, setApplications] = useState([]);
  const [pendingPayments, setPendingPayments] = useState([]);
  const [paidApplications, setPaidApplications] = useState([]);
  const [applicationIds, setApplicationIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getAllApplications = async () => {
    try {
      setLoading(true);
      const res = await get('/application/my_applications/');
      setApplications(res);

      // Filter the applications based on payment status
      setPendingPayments(res.data.filter(app => !app.paid));
      setPaidApplications(res.data.filter(app => app.paid));
      console.log(res);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getAllApplications();
  }, []);

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
  
  const payForSelectedApplications = async () => {
          // console.log({application_ids: [id]});
          
    try {
        // Ensure id is converted to an array of strings
        const res = await post('/application/pay_application/', {
            application_ids: applicationIds,
            success_url: 'http://localhost:5173/#/paymment-verification'
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
  
  return (
    <div>
      {loading && <FullPageLoader page="Payments"/>}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            <p className="text-[#333333] font-[500] text-[20px]">Payment</p>
            
            <div className="border border-[#EAECF0] mt-7 rounded-[10px]">
                <div className="flex items-center gap-4 mt-8 justify-between md:px-6 px-2 pb-4">
                    <p className="text-[#101828] md:text-[18px] text-[14px]">Pending Payment Applications</p>
                    <p className="text-primary-color text-[14px] py-[5px] px-[12px] bg-secondary-color rounded-full cursor-pointer" onClick={() => navigate('/payments/pending-payments')}>View All</p>
                </div>
                <div className="relative overflow-x-auto">
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
                            {pendingPayments.length > 0 ? (
                              pendingPayments.map((application, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-[12px] md:text-[16px] text-[#475467] flex gap-1 items-center">
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
            </div>
            {
                applicationIds.length > 0 &&
                <div className="flex items-end justify-end">
                    <button onClick={payForSelectedApplications} className="bg-primary-color text-white py-2 px-5 rounded-[8px] mt-3">Pay for selected applications ({applicationIds.length})</button>
                </div>
            }

            <div className="border border-[#EAECF0] rounded-[10px] mt-[3rem]">
                <div className="flex items-center gap-4 mt-8 justify-between md:px-6 px-2 pb-4">
                    <p className="text-[#101828] md:text-[18px]">Paid Applications</p>
                    <p className="text-primary-color text-[14px] py-[5px] px-[12px] bg-secondary-color rounded-full cursor-pointer" onClick={() => navigate('/payments/paid')}>View All</p>
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-left">
                        <thead className="text-[12px] md:text-[14px] bg-[#F9FAFB] text-[#475467]">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-[600]">Application ID</th>
                                <th scope="col" className="px-6 py-3 font-[600]">Product Name</th>
                                <th scope="col" className="px-6 py-3 font-[600]">Saved Date</th>
                                <th scope="col" className="px-6 py-3 font-[600]">Amount(#)</th>
                                <th scope="col" className="px-2 py-3 font-[600]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paidApplications.length > 0 ? (
                              paidApplications.map((application, index) => (
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
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Payments;