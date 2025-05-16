import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";

const Certificates = () => {
    const [toggleNav, setToggleNav] = useState(false);
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('')
    const [certificateSummary, setCertificateSummary] = useState({
        total: 0,
        active: 0,
        pending: 0,
        requiresAction: 0,
        expired: 0
    });

    const navigate = useNavigate();

    // Function to check if a certificate is expired
    const checkExpiryStatus = (expiryDateStr) => {
        const today = new Date();
        const expiryDate = new Date(expiryDateStr);
        
        // Reset time components to compare dates only
        today.setHours(0, 0, 0, 0);
        expiryDate.setHours(0, 0, 0, 0);
        
        return today > expiryDate;
    };

    // Format date to make it more readable
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const getCertificates = async () => {
        try {
            const res = await get('/certificate/get_all_certs/');
            
            // Process certificates to add expiry status
            const processedCertificates = res.data.map(cert => ({
                ...cert,
                isExpired: checkExpiryStatus(cert.expiry_date)
            }));

            setCertifications(processedCertificates);

            // Calculate certificate summary
            const summary = {
                total: processedCertificates.length,
                active: processedCertificates.filter(cert => !cert.isExpired).length,
                expired: processedCertificates.filter(cert => cert.isExpired).length,
                // You might need to adjust these based on your actual data structure
                pending: 2, // Hardcoded for now, replace with actual logic
                requiresAction: 1 // Hardcoded for now, replace with actual logic
            };

            setCertificateSummary(summary);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        getCertificates();
    }, []);

    // Filter applications based on search text
    const filteredCertificates = certifications?.filter(certificate => 
        // console.log(certificate);
        
        certificate?.application?.product_name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    // Check if there are no matching applications
    const noMatchingCertificates = searchText && filteredCertificates?.length === 0;

    return (
        <div>
            {loading && <FullPageLoader page="Certificates"/>}
            <>
                <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
                <div className="w-full lg:w-[82%] ml-auto">
                    <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
                    <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
                        <div className="flex items-center justify-between">
                            <p className="text-[#333333] font-[500] text-[20px]">Certificates</p>
                        </div>

                        <div className="w-full overflow-hidden">
                            <div className="md:grid md:grid-cols-4 flex overflow-x-auto pb-3 gap-4 mt-7 scrollbar-hide">
                                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-secondary-color p-3 rounded-md">
                                    <img src="./award.svg" alt="" />
                                    <div>
                                        <p className="text-text-color">Total Certificates</p>
                                        <p className="text-primary-color font-[500] text-[20px] mt-3">
                                            {certificateSummary.total}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 p-3 rounded-md bg-[#D1FADF]">
                                    <img src="./check-circle.svg" alt="" />
                                    <div>
                                        <p className="text-text-color">Active Certificates</p>
                                        <p className="text-[#12B76A] font-[500] text-[20px] mt-3">
                                            {certificateSummary.active}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-[#FEF0C7] p-3 rounded-md">
                                    <img src="./file-dashboard.svg" alt="" />
                                    <div>
                                        <p className="text-text-color">Expired Certificates</p>
                                        <p className="text-[#F79009] font-[500] text-[20px] mt-3">
                                            {certificateSummary.expired}
                                        </p>
                                    </div>
                                </div>
                                <div className=" flex-shrink-0 w-64 md:w-auto flex items-start gap-5 bg-[#FEE4E2] p-3 rounded-md">
                                    <img src="./info.svg" alt="" />
                                    <div>
                                        <p className="text-text-color">Requires Action</p>
                                        <p className="text-[#D92D20] font-[500] text-[20px] mt-3">
                                            {certificateSummary.requiresAction}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div className="mt-12">
                            <div className="flex items-center justify-between">
                                <p className="text-[#333333]">Certificates</p>
                                <input className="outline-none border py-[4px] px-3 w-[300px]" placeholder="Search by application name" type="text" onChange={e => setSearchText(e.target.value)}/>
                            </div>

                            {
                                noMatchingCertificates &&
                                <div className="flex items-center justify-center mt-[5rem]">
                                    <p>No applications match the name "{searchText}"</p>
                                </div>
                            }

                            {!noMatchingCertificates && filteredCertificates?.map(certificate => (
                                <div 
                                    key={certificate.id}
                                    onClick={() => navigate(`/certificates/${certificate.cert_no}`)} 
                                    className={`border border-[#F2F4F7] px-4 py-[10px] mt-4 rounded-[4px] cursor-pointer 
                                        ${certificate.isExpired ? 'opacity-60 bg-gray-50' : ''}`}
                                >
                                    <div className="flex items-center justify-between mb-4 rounded-[4px]">
                                        <p className="text-[#333333] font-[600]">
                                            {certificate?.application?.product_name}
                                        </p>
                                        <div className={`flex items-center gap-2 rounded-full py-[6px] px-[10px] ${
                                            certificate.isExpired 
                                            ? "bg-[#FEF3F2]" 
                                            : "bg-[#ECFDF3]"
                                        }`}>
                                            <img 
                                                src={
                                                    certificate.isExpired 
                                                    ? "./x-circle.svg" 
                                                    : "./check-circle.svg"
                                                } 
                                                alt="" 
                                                className="w-[16px]" 
                                            />
                                            <p className={`text-[14px] font-[500] ${
                                                certificate.isExpired 
                                                ? "text-[#B42318]" 
                                                : "text-[#027A48]"
                                            }`}>
                                                {certificate.isExpired ? "Expired" : "Active"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-end justify-between text-[15px] text-[#666666]">
                                        <div>
                                            <p className="text-text-color mb-2">
                                                Issued: {formatDate(certificate.issued_date)}
                                            </p>
                                            <p className={`text-text-color ${
                                                certificate.isExpired ? 'text-[#B42318] font-medium' : ''
                                            }`}>
                                                Expires: {formatDate(certificate.expiry_date)}
                                                {certificate.isExpired && " (Expired)"}
                                            </p>
                                        </div>
                                        <p className="text-text-color">Value Addition: Nill%</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Certificates;