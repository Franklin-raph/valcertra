import React, { useState } from 'react'
import PersonalInfo from '../../components/personal-information/Personalnfo'
import CompanyInfo from '../../components/company-information/CompanyInfo'
import CompanyLocation from '../../components/companny-location/CompanyLocation'
import CreatePassword from '../../components/create-password/CreatePassword'
import VerifyEmail from '../../components/verify-email/VerifyEmail'

const SignUp = () => {

    const [personalInfo, setPersonalInfo] = useState(true)
    const [companyInfo, setCompanyInfo] = useState(false)
    const [companyLocation, setCompanyLocation] = useState(false)
    const [createPassword, setCreatePassword] = useState(false)
    const [verifyEmail, setVerifyEmail] = useState(false)
     
  return (
    <div>
        {
            personalInfo &&
            <PersonalInfo setCompanyInfo={setCompanyInfo} setPersonalInfo={setPersonalInfo}/>
        }

        {
            companyInfo &&
            <CompanyInfo setCompanyInfo={setCompanyInfo} setPersonalInfo={setPersonalInfo} setCompanyLocation={setCompanyLocation}/>
        }

        {
            companyLocation &&
            <CompanyLocation setCreatePassword={setCreatePassword} setCompanyInfo={setCompanyInfo} setCompanyLocation={setCompanyLocation}/>
        }

        {
            createPassword &&
            <CreatePassword setCreatePassword={setCreatePassword} setCompanyLocation={setCompanyLocation} setVerifyEmail={setVerifyEmail}/>
        }

        {
            verifyEmail &&
            <VerifyEmail />
        }
    </div>
  )
}

export default SignUp