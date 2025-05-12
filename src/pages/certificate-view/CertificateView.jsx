import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useParams } from "react-router-dom";
import { get } from "../../utils/axiosHelpers";
import Alert from "../../components/alert/Alert";

const CertificateView = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [certificateInfo, setCertificateInfo] = useState(null);
  const [isExpired, setIsExpired] = useState(false);
  const [msg, setMsg] = useState('')
  const [alertType, setAlertType] = useState('')
  const { id } = useParams();

  const getCertificateInfo = async () => {
    try {
      const res = await get(`/certificate/${id}`);
      console.log(res);
      setCertificateInfo(res.data);
      
      // Check if certificate is expired
      checkExpiryStatus(res.data.expiry_date);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to check if certificate is expired
  const checkExpiryStatus = (expiryDateStr) => {
    const today = new Date();
    const expiryDate = new Date(expiryDateStr);
    
    // Reset time components to compare dates only
    today.setHours(0, 0, 0, 0);
    expiryDate.setHours(0, 0, 0, 0);
    
    setIsExpired(today > expiryDate);
  };

  useEffect(() => {
    getCertificateInfo();
  }, []);

  // Formats the date to a more readable format (optional)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Copy verification link to clipboard
  const copyToClipboard = () => {
    const verificationLink = `${certificateInfo?.file_path}`;
    navigator.clipboard.writeText(verificationLink);
    setMsg("Verification link copied to clipboard");
    setAlertType('success')
  };

  return (
    <div>
      <>
      {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-text-color font-[600] text-[30px] mt-[6px]">
                  Value Addition Certificate
                </p>
                <p className="text-[#666666]">
                  AfCFTA Compliant Value Addition Certification
                </p>
              </div>
              <div className={`flex items-center gap-2 rounded-full py-[6px] px-[10px] ${
                isExpired ? "bg-[#FEF3F2]" : "bg-[#ECFDF3]"
              }`}>
                <img 
                  src={isExpired ? "./x-circle.svg" : "./check-circle.svg"} 
                  alt="" 
                  className="w-[16px]" 
                />
                <p className={`text-[14px] font-[500] ${
                  isExpired ? "text-[#B42318]" : "text-[#027A48]"
                }`}>
                  {isExpired ? "Expired" : "Active"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-between">
              <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
                <p className="text-text-color font-[500]">
                  Certificate: {certificateInfo?.cert_no}
                </p>
                <div className="text-[#666666] flex items-center gap-5 mb-5 mt-2 text-[14px]">
                  <p>Issued: {formatDate(certificateInfo?.issued_date)}</p>
                  <div className="p-1 bg-[#D0D5DD] rounded-full"></div>
                  <p className={isExpired ? "text-[#B42318] font-medium" : ""}>
                    Expires: {formatDate(certificateInfo?.expiry_date)}
                    {isExpired && " (Expired)"}
                  </p>
                </div>
                <img
                  src={certificateInfo?.file_path}
                  alt=""
                  className={`w-full h-[300px] object-contain ${
                    isExpired ? "opacity-50" : ""
                  }`}
                />
                <p className="text-[#666666] text-[15px] text-center mt-3">
                  Value Addition: 46%
                </p>
                <button className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full">
                  <img src="./download.svg" alt="" />
                  <p>Download</p>
                </button>
              </div>

              <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
                <div className="flex items-center gap-4 mb-4 justify-center">
                  <img src="./bell.svg" alt="" />
                  <p className="text-text-color font-[500]">QR Code</p>
                </div>
                <p className="text-[14px] text-center text-[#666666]">
                  Scan this code to instantly verify the certificate's authenticity
                </p>
                <img src="./QR-Code.svg" alt="" className="mx-auto my-7" />
                <button className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full">
                  <img src="./download.svg" alt="" />
                  <p>Download QR Code</p>
                </button>
              </div>
            </div>

            <div className="mt-7 border border-[#F2F4F7] py-4 px-3 rounded-[4px] w-full">
              <div className="flex items-center gap-4">
                <img src="./arrow-up-right.svg" alt="" />
                <p className="text-[#333333] font-[500] text-[18px]">
                  Public Verification
                </p>
              </div>
              <p className="text-[#666666] mt-2 text-[15px]">
                Anyone can verify this certificate using the secure link below or by scanning the QR code.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <p className="text-[#667085] border border-[#D0D5DD] w-full py-[6px] px-3 rounded-[4px]">
                  {certificateInfo?.file_path}
                </p>
                <button
                  onClick={copyToClipboard}
                  className="bg-primary-color text-white py-[6px] text-[14px] px-8 rounded-[4px] font-[500] flex items-center justify-center gap-2"
                >
                  <img src="./copy.svg" alt="" />
                  <p>Copy</p>
                </button>
              </div>
              
              {isExpired && (
                <div className="mt-4 bg-[#FEF3F2] p-3 rounded-md border border-[#FDA29B]">
                  <p className="text-[#B42318] text-[14px] font-medium">
                    This certificate has expired. It was valid until {formatDate(certificateInfo?.expiry_date)}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CertificateView;