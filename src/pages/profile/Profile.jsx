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
import { get, put, remove } from "../../utils/axiosHelpers";
import FullPageLoader from "../../components/full-page-loader/FullPageLoader";
import Alert from "../../components/alert/Alert";
import BtnLoader from "../../components/btnLoader/BtnLoader";
import Cookies from 'js-cookie';


const Profile = () => {

    const [toggleNav, setToggleNav] = useState(false)
    const navigate = useNavigate()
    const profileNav = ["Overview", "Company", "Profiles"]
    const [selectedNav, setSelectedNav] = useState(profileNav[0])
    const [modal, setModal] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const [userDetails, setUserDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState('')
    const [alertType, setAlertType] = useState('')

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const savePassword = async () => {
        if(!oldPassword || !newPassword || !confirmPassword){
            setAlertType('error')
            setMsg("Please fill in all fields")
        }else if(newPassword !== confirmPassword){
            setAlertType('error')
            setMsg('New password and confirm password do not match')
        }else{
            try {
                setLoading(true)
                const res = await put('/dashboard/change-password', {new_password:newPassword, current_password:oldPassword})
                setAlertType('success')
                setMsg(res.message)
            } catch (error) {
                console.log(error);
                
                setAlertType('error')
                setMsg(error.response.data.message)
            }finally{
                setLoading(false)
            }

        }
    }

    const deleteAccount = async () => {
        try {
            setLoading(true)
            await remove('/profile/delete-my-account')
            localStorage.clear()
            Cookies.remove('token')
            navigate('/')
        } catch (error) {
            console.log(error);
            setAlertType('error')
            setMsg(error.response.data.message)
        }finally{
            setLoading(false)
        }
    }

    const getUser = async () => {
        try {
            setIsLoading(true)
            const res = await get(`/profile/user/${user.id}`)
            setUserDetails(res.data)
            console.log(res);
        } catch (error) {
            console.error("Error fetching summary:", error);
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    },[])

  return (
    <div>
      {isLoading && <FullPageLoader page="Profile"/>}
      {msg && <Alert alertType={alertType} msg={msg} setMsg={setMsg} />}
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] pb-[1rem] mt-[100px]">
            
            <div className="border border-[#EAECF0] mt-7 rounded-[10px]">
                <p className="text-[#333333] font-[500] text-[20px] pt-[20px] pl-[20px]">Profile</p>
                <div className="flex flex-col items-center gap-3 mt-8 justify-between px-6 pb-4">
                    <div className="p-1 bg-white shadow-md rounded-full">
                        <p className="text-[#101828] text-[34px] bg-[#F9F5FF] rounded-full h-[100px] flex items-center justify-center w-[100px]">{userDetails?.first_name[0]}{userDetails?.last_name[0]}</p>
                    </div>
                    <p className="text-[#333333] text-[22px] pt-[5px] font-[500]">{userDetails?.first_name} {userDetails?.last_name}</p>
                    <p className="text-[#333333] text-[17px]">{userDetails?.role}</p>
                    {/* <div className="flex items-center gap-3 cursor-pointer text-[#344054] border rounded-[4px] border-[#D0D5DD] py-[4px] px-3 ">
                        <PiNotePencil className="text-[17px]"/>
                        <p>Edit Profile</p>
                    </div> */}
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
                                            <div className="flex items-center gap-2">
                                                <p className="font-[500] text-[18px] mt-1">{userDetails?.first_name}</p>
                                                <p className="font-[500] text-[18px] mt-1">{userDetails?.last_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMail className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Email</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiPhone className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Mobile Number</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.phone}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Designation/Title</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.designation_job_title ? userDetails?.designation_job_title : 'N/A' }</p>
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
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.head_office_address}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <CiLocationOn className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">City</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.head_office_city}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMap className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">State/Province/Region</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.head_office_state_province_region}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Country</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.head_office_country}</p>
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
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.company_name}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMail className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Company Size</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.company_size}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiPhone className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Contact Person</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.contact_person}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Contact Email</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.contact_email}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Start of Operation</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.start_of_operation_year}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Tax ID (TIN)</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.tax_identification_number}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiUser className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Country of Registration</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.reg_country}</p>
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
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.company_number}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <CiLocationOn className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Registration Number</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.rc_number}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <FiMap className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Industry/Sector</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.sector}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Entity Type</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.type_entity}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Ownership Type</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.ownership_type}</p>
                                        </div>
                                    </div>
                                    <div className="text-[#667085] flex items-center gap-4">
                                        <BiGlobe className="text-[24px]"/>
                                        <div>
                                            <p className="text-[15px]">Website</p>
                                            <p className="font-[500] text-[18px] mt-1">{userDetails?.company_data?.website}</p>
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
                        <div className="pl-5 mx-3 mt-[2.5rem] pt-[1.6rem] flex flex-col items-start w-full justify-between">
                            <div className="w-full">
                                <p className="text-[18px] text-ascent-color mb-4 font-[600]">Password</p>
                                <div className='mt-3 w-[30%] text-[#667085]'>
                                    <div className='w-full'>
                                        <p>Current Password</p>
                                        <input onChange={e => setOldPassword(e.target.value)} type="password" placeholder='****' className='px-3 bg-transparent w-full border outline-none py-[6px] rounded mt-1'/>
                                    </div>
                                    <div className='w-full my-5'>
                                        <p>New Password</p>
                                        <input onChange={e => setNewPassword(e.target.value)} type="password" placeholder='****' className='px-3 bg-transparent w-full border outline-none py-[6px] rounded mt-1'/>
                                    </div>
                                    <div className='w-full'>
                                        <p>Confirm Password</p>
                                        <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='****' className='px-3 bg-transparent w-full border outline-none py-[6px] rounded mt-1'/>
                                    </div>
                                    {/* <button onClick={savePassword} className='bg-primary-color py-2 mt-3 w-full text-white rounded'>Save Changes</button> */}
                                </div>
                                {
                                    loading ?
                                    <BtnLoader />
                                    :
                                    <button onClick={savePassword} className="bg-primary-color text-white py-[6px] w-[30%] mt-3 px-[15px] rounded-[4px]">Change Password</button>
                                }
                            </div>
                            <div className="mt-[2.6rem] w-full">
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
                    {
                        loading ?
                        <BtnLoader />
                        :
                        <div className="flex items-center justify-between gap-5 mt-6">
                            <button className="text-[#344054] border border-[#D0D5DD] py-[7px] rounded-[4px] w-full" onClick={() => setModal('')}>Cancel</button>
                            <button onClick={deleteAccount} className="text-[#fff] border border-[#D92D20] bg-[#D92D20] py-[7px] rounded-[4px] w-full">Delete</button>
                        </div>
                    }
                </div>
            </div>
        }
    </div>
  );
}

export default Profile;
