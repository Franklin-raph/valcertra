import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";
import { useNavigate } from "react-router-dom";
import { PiNotePencil } from "react-icons/pi";
import { FiMail, FiMap, FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BiGlobe, BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import ValueAdditionCalculator from "../../components/value-addition-calculator/ValueAdditionCalculator";


const Profile = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()
    const profileNav = ["Overview", "Company", "Profiles"]
    const [selectedNav, setSelectedNav] = useState(profileNav[0])
    const [modal, setModal] = useState('')
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            
            <div className="border border-[#EAECF0] mt-7 rounded-[10px]">
                <p className="text-[#333333] font-[500] text-[20px] pt-[20px] pl-[20px]">Profile</p>
                <div className="flex flex-col items-center gap-3 mt-8 justify-between px-6 pb-4">
                    <div className="p-1 bg-white shadow-md rounded-full">
                        <p className="text-[#101828] text-[34px] bg-[#F9F5FF] rounded-full h-[100px] flex items-center justify-center w-[100px]">GJ</p>
                    </div>
                    <p className="text-[#333333] text-[22px] pt-[5px] font-[500]">Grace Johnson</p>
                    <p className="text-[#333333] text-[17px]">Business Owner</p>
                    <div className="flex items-center gap-3 cursor-pointer text-[#344054] border rounded-[4px] border-[#D0D5DD] py-[4px] px-3 ">
                        <PiNotePencil className="text-[17px]"/>
                        <p>Edit Profile</p>
                    </div>
                </div>
            </div>

            <div className="border border-[#EAECF0] rounded-[10px] mt-[3rem] pb-5">
                <div className="flex items-center gap-4 mt-8 px-6 pb-4">
                    {
                        profileNav.map(profile => (
                            <p onClick={() => setSelectedNav(profile)} className={ selectedNav === profile ? `text-primary-color rounded-[4px] text-[15px] cursor-pointer bg-[#E5F0FF] font-[500] py-[6px] px-[10px]` : `text-[#98A2B3] text-[15px] cursor-pointer px-[10px]`}>{profile}</p>
                        ))
                    }
                </div>

                {
                    selectedNav === "Overview" &&
                    <div className="mt-4">
                        <p className="text-[#333333] text-[20px] pl-5 pb-2 mx-3 font-[500] border-b">Profile Overview</p>
                        <div className="mt-5 mx-7 flex items-center justify-between">
                            <div>
                                <p className="text-[18px] text-ascent-color mb-4">Personal Information</p>
                                <div className="grid gap-4">
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Fullname</p>
                                            <p className="font-[500] text-[18px] mt-1">Grace Johnson</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMail className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Email</p>
                                            <p className="font-[500] text-[18px] mt-1">gracejohnson@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiPhone className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Mobile Number</p>
                                            <p className="font-[500] text-[18px] mt-1">+234 90 000 0000</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Designation/Title</p>
                                            <p className="font-[500] text-[18px] mt-1">Business Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-[18px] text-ascent-color mb-4">Company Location</p>
                                <div className="grid gap-4">
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <HiOutlineBuildingOffice className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Head Office Address</p>
                                            <p className="font-[500] text-[18px] mt-1">Achina Street,Awada Layout 434108 Onitsha</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <CiLocationOn className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">City</p>
                                            <p className="font-[500] text-[18px] mt-1">Onitsha</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMap className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">State/Province/Rgion</p>
                                            <p className="font-[500] text-[18px] mt-1">Anambra</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Country</p>
                                            <p className="font-[500] text-[18px] mt-1">Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    selectedNav === "Company" &&
                    <div className="mt-4">
                        <p className="text-[#333333] text-[20px] pl-5 pb-2 mx-3 font-[500] border-b">Company Information</p>
                        <div className="mt-5 mx-7 flex items-start justify-between">
                            <div>
                                <div className="grid gap-4">
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Company Name</p>
                                            <p className="font-[500] text-[18px] mt-1">Granite Tiles</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMail className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Company Size</p>
                                            <p className="font-[500] text-[18px] mt-1">Micro/small</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiPhone className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Contact Person</p>
                                            <p className="font-[500] text-[18px] mt-1">CEO</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Contact Email</p>
                                            <p className="font-[500] text-[18px] mt-1">contactinfo@granitetiles.com</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Start of Operation</p>
                                            <p className="font-[500] text-[18px] mt-1">2021</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Tax ID (TIN)</p>
                                            <p className="font-[500] text-[18px] mt-1">10012345-00001</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Country of Registration</p>
                                            <p className="font-[500] text-[18px] mt-1">Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="grid gap-4">
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <HiOutlineBuildingOffice className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Company Number</p>
                                            <p className="font-[500] text-[18px] mt-1">+234 90 000 0000</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <CiLocationOn className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Registration Numeber</p>
                                            <p className="font-[500] text-[18px] mt-1">RC 123456</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMap className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Industry/Sector</p>
                                            <p className="font-[500] text-[18px] mt-1">Agriculture</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Entity Type</p>
                                            <p className="font-[500] text-[18px] mt-1">Manufacturer</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Ownership Type</p>
                                            <p className="font-[500] text-[18px] mt-1">Local</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Website</p>
                                            <p className="font-[500] text-[18px] mt-1">www.granitetiles.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    selectedNav === "Profiles" &&
                    <div className="mt-4">
                        <p className="text-[#333333] text-[20px] pl-5 pb-2 mx-3 font-[500] border-b">Account Settings</p>
                        <div className="mt-5 mx-7 flex items-center gap-[5rem]">
                            {/* <div className="w-[50%]">
                                <p className="text-[18px] text-ascent-color mb-4 font-[600]">Profile Settings</p>
                                <div className="grid gap-4 w-full">
                                    <div className="text-[#667085] flex flex-col items-center gap-4">
                                        <div className="w-full">
                                            <p>Email</p>
                                            <div className="flex items-center justify-between border border-[#D0D5DD] w-full p-[10px] mt-1 rounded-[4px]">
                                                <FiMail className="text-[24px]"/>
                                                <input type="text" className="w-full outline-none ml-2"/>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p>Mobile number</p>
                                            <div className="flex items-center justify-between border border-[#D0D5DD] w-full p-[10px] mt-1 rounded-[4px]">
                                                <BiPhone className="text-[24px]"/>
                                                <input type="text" className="w-full outline-none ml-2"/>
                                                <PiNotePencil className="text-[18px]"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="w-[100%]">
                                <p className="text-[18px] text-ascent-color mb-4 font-[600]">Notification Profiles</p>
                                <div className="grid gap-4">
                                    <div className="text-[#667085] flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-[500] text-[18px] mt-1">Email Notification</p>
                                            <p className="text-[15px]">Receive updates about your certification status</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                    <div className="text-[#667085] flex items-center justify-between gap-4">
                                        <div>
                                            <p className="font-[500] text-[18px] mt-1">SMS Notification</p>
                                            <p className="text-[15px]">Receive text messages for important updates</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pl-5 border-t mx-3 mt-[2.5rem] pt-[1.6rem] flex items-center justify-between">
                            <div>
                                <p className="text-[18px] text-ascent-color mb-4 font-[600]">Password</p>
                                <button className="bg-primary-color text-white py-[6px] px-[15px] rounded-[4px]">Change Password</button>
                            </div>
                            <div>
                                <p className="text-[18px] text-[#D92D20] mb-4 font-[600]">Danger Zone</p>
                                <button onClick={() => setModal('delete')} className="border border-[#FDA29B] text-[#B42318] py-[6px] px-[15px] rounded-[4px]">Delete Account</button>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
          </div>
        </div>
      </>
        {
            modal === 'delete' &&
            <div>
                <div className="h-full w-full fixed top-0 left-0 z-[99] bg-opacity-70 backdrop-blur-sm" style={{ background:"rgba(14, 14, 14, 0.58)" }} ></div>
                <div className="bg-white fixed top-[50%] left-[50%] p-[20px] z-[100] rounded-[8px] w-[400px]" style={{ transform: "translate(-50%, -50%)" }}>
                    <img src="./delete.svg" alt="" />
                    <p className="text-[#101828] font-[600] tex-[22px] my-3 text-left">Delete Account</p>
                    <p className="text-[#475467] text-[15px]">Are you sure you want to delete this account? This action cannot be undone.</p>
                    <div className="flex items-center justify-between gap-5 mt-6">
                        <button className="text-[#344054] border border-[#D0D5DD] py-[7px] rounded-[4px] w-full" onClick={() => setModal('')}>Cancel</button>
                        <button className="text-[#fff] border border-[#D92D20] bg-[#D92D20] py-[7px] rounded-[4px] w-full">Delete</button>
                    </div>
                </div>
            </div>
        }
    </div>
  );
}

export default Profile;
