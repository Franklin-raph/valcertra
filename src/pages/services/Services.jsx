import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Services = () => {

  const servicesContent = [
    {
      image:'./award.svg',
      title:'Value Addition Certification ',
      desc:'We evaluate and certify your products based on how much processing, transformation, or local input has been added — issuing credible, blockchain-backed certificates that prove your products meet AfCFTA and global thresholds.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./file.svg',
      title:'Self-Assessment & Advisory Tools',
      desc:'Use our Value Addition Calculator to estimate your score before applying. For those needing help to improve compliance, we offer expert advisory on value addition, local sourcing, and regulatory standards.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./device.svg',
      title:'Document Upload & Anti-Fraud Validation',
      desc:'All submitted supporting documents (e.g., invoices, raw material sourcing, processing chain) are verified using AI-powered anti-fraud systems and manual expert reviews. We protect the certification space from forgery and manipulation.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./server.svg',
      title:'Digital Certificate Issuance',
      desc:'Once approved, your certificate is generated instantly — secure, traceable, and downloadable. Each certificate includes a unique QR code and blockchain seal for international credibility.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./check.svg',
      title:'Trade Intelligence & Analytics',
      desc:'Our system supports government and partner agencies with real-time dashboards on value addition across sectors, companies, and countries — unlocking insights for policymaking, export planning, and incentives.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./check.svg',
      title:'Multi-Country Certification',
      desc:'We segment applications by country and sector, enabling tailored guidance and reporting in line with local policies and continental standards.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    }
  ]


  return (
    <div>

      <section className='h-[70vh] pt-[2rem] header-bg'>
          <Navbar />
          <div className='text-center mt-[6rem] w-[65%] mx-auto  text-white'>
              <p className='text-[55px] font-bold mb-2'>Africa's Seal of Value. <span className='text-ascent-color'>Certified</span> .</p>
              <p className='text-[18px]'>Empowering African exporters and manufacturers with trusted value addition certification to compete and thrive under AfCFTA and global trade rules.</p>
              <div className='mt-10 flex gap-4 justify-center items-center'>
                  <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px]'>Get Certified Now</button>
                  <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
              </div>
          </div>
      </section>

      <section className='mt-[3rem]'>
        <p className='text-[#333333] text-center mb-[3rem] text-[26px]'>Our Services</p>
        
      </section>

      <section className='bg-secondary-color py-[3.5rem] text-center mt-[4rem]'>
        <p className='text-[25px] mb-5 font-[500]'>Ready to <span className='text-ascent-color'>Certify</span> Your Products?</p>
        <p className='w-[48%] mx-auto'>Join Africa's leading exporters on the continental trade highway and access new markets with confidence.</p>
        <div className='mt-10 flex gap-4 justify-center items-center'>
            <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px] text-white'>Get Certified Now</button>
            <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
        </div>
      </section>
    </div>
  )
}

export default Services