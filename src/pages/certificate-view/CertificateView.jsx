import React, { useState, useEffect, useRef } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useParams } from "react-router-dom";
import { get } from "../../utils/axiosHelpers";
import Alert from "../../components/alert/Alert";
import QRCode from "react-qr-code";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";

const CertificateView = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [certificateInfo, setCertificateInfo] = useState(null);
  const [isExpired, setIsExpired] = useState(false);
  const [msg, setMsg] = useState('');
  const [alertType, setAlertType] = useState('');
  const { id } = useParams();
  const qrCodeRef = useRef(null);
  const [loading, setLoading] = useState(false)

  const getCertificateInfo = async () => {
    try {
      setLoading(true)
      const res = await get(`/certificate/${id}`);
      console.log(res);
      setCertificateInfo(res.data);
      
      // Check if certificate is expired
      checkExpiryStatus(res.data.expiry_date);
    } catch (error) {
      console.log(error);
      setMsg("Failed to fetch certificate information");
      setAlertType('error');
    }finally{
      setLoading(false)
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

  // Formats the date to a more readable format
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
    const verificationLink = `https://verification.valcertra.com/#/${certificateInfo?.cert_no}`;
    navigator.clipboard.writeText(verificationLink);
    setMsg("Verification link copied to clipboard");
    setAlertType('success');
  };

  // Download the certificate
  const downloadCertificate = async () => {
    if (!certificateInfo?.file_path) {
      setMsg("Certificate file path not available");
      setAlertType('error');
      return;
    }

    try {
      console.log("Attempting to download from:", certificateInfo.file_path);
      
      // Check if the file path is a valid URL
      if (!certificateInfo.file_path.startsWith('http') && !certificateInfo.file_path.startsWith('/')) {
        throw new Error("Invalid file path format");
      }

      // Fetch the image with appropriate CORS headers
      const response = await fetch(certificateInfo.file_path, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/*',
        },
        mode: 'cors', // Try with cors mode
      });
      
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      
      // Make sure we got a valid blob
      if (blob.size === 0) {
        throw new Error("Downloaded file is empty");
      }
      
      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);
      
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = blobUrl;
      
      // Set the file name - extract from path or use certificate number
      const fileName = `certificate-${certificateInfo.cert_no || 'download'}.pdf`;
      
      link.download = fileName;
      
      // Append to the document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the blob URL
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 100);

      setMsg("Certificate downloaded successfully");
      setAlertType('success');
    } catch (error) {
      console.error("Error downloading certificate:", error);
      setMsg(`Failed to download certificate: ${error.message || "Unknown error"}`);
      setAlertType('error');
      
      // Alternative approach if fetch failed
      if (error.message && error.message.includes("Failed to fetch")) {
        try {
          // Try opening in a new tab as fallback
          window.open(certificateInfo.file_path, '_blank');
          setMsg("Certificate downloaded successfully");
          // setMsg("Certificate opened in new tab instead");
          setAlertType('info');
        } catch (e) {
          console.error("Fallback also failed:", e);
        }
      }
    }
  };

  // Download QR code
  const downloadQRCode = () => {
    if (!qrCodeRef.current) {
      setMsg("QR Code not available");
      setAlertType('error');
      return;
    }

    try {
      // Convert SVG to a data URL
      const svgData = new XMLSerializer().serializeToString(qrCodeRef.current);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      
      // Create a canvas to draw the SVG on
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Set canvas dimensions
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0);
        
        // Convert canvas to blob
        canvas.toBlob(blob => {
          // Create download link
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `certificate-${certificateInfo.cert_no}-qrcode.png`;
          
          // Append, click and remove
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);

          setMsg("QR Code downloaded successfully");
          setAlertType('success');
        }, 'image/png');
      };
      
      // Set the src of the image
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    } catch (error) {
      console.error("Error downloading QR code:", error);
      setMsg("Failed to download QR code");
      setAlertType('error');
    }
  };

  return (
    <div>
        {loading && <FullPageLoader page="Certificate"/>}
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

            <div className="flex flex-col md:flex-row items-center gap-4 mt-8 justify-between">
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
                  Value Addition: {certificateInfo?.data?.application?.cva} %
                </p>
                <button 
                  onClick={downloadCertificate}
                  className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full"
                >
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
                <div className="w-full h-[325px]">
                  <QRCode
                    size={256}
                    value={`https://verification.valcertra.com/${certificateInfo?.cert_no}`}
                    viewBox={`0 0 256 256`}
                    className="w-[90%] mx-auto mt-5 h-[90%]"
                    ref={qrCodeRef}
                  />
                </div>
                <button 
                  onClick={downloadQRCode}
                  className="bg-primary-color text-white py-[6px] text-[14px] px-5 rounded-[4px] font-[500] flex items-center justify-center gap-2 mt-4 w-full"
                >
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
                  https://verification.valcertra.com/#/{certificateInfo?.cert_no}
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