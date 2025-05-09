import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ServicesCard from '../../components/services-card/ServicesCard'
import Footer from '../../components/Footer/Footer'

const Services = () => {

  const servicesContent = [
    {
      image:'./white-award.svg',
      title:'Value Addition Certification ',
      desc:'We evaluate and certify your products based on how much processing, transformation, or local input has been added — issuing credible, blockchain-backed certificates that prove your products meet AfCFTA and global thresholds.',
      benefits: [
        'Enhanced credibility in international markets',
        'Blockchain-backed verification that cannot be tampered with',
        'Compliance with AfCFTA and global trade requirements'
      ]
    },
    {
      image:'./white-award.svg',
      title:'Self-Assessment & Advisory Tools',
      desc:'Use our Value Addition Calculator to estimate your score before applying. For those needing help to improve compliance, we offer expert advisory on value addition, local sourcing, and regulatory standards.',
      benefits: [
        'Pre-assessment before formal application saves time',
        'Expert guidance to improve compliance scores',
        'Tailored advice for your specific industry and products'
      ]
    },
    {
      image:'./upload.svg',
      title:'Document Upload & Anti-Fraud Validation',
      desc:'All submitted supporting documents (e.g., invoices, raw material sourcing, processing chain) are verified using AI-powered anti-fraud systems and manual expert reviews. We protect the certification space from forgery and manipulation.',
      benefits: [
        'AI-powered fraud detection ensures certification integrity',
        'Multiple verification layers with expert human review',
        'Protection against counterfeit certifications in the market'
      ]
    },
    {
      image:'./white-server.svg',
      title:'Digital Certificate Issuance',
      desc:'Once approved, your certificate is generated instantly — secure, traceable, and downloadable. Each certificate includes a unique QR code and blockchain seal for international credibility.',
      benefits: [
        'Instant digital certificate generation once approved',
        'QR code verification accessible to all trade partners',
        'Blockchain technology ensures certificate authenticity'
      ]
    },
    {
      image:'./trade.svg',
      title:'Trade Intelligence & Analytics',
      desc:'Our system supports government and partner agencies with real-time dashboards on value addition across sectors, companies, and countries — unlocking insights for policymaking, export planning, and incentives.',
      benefits: [
        'Real-time dashboards for government and policy makers',
        'Cross-sector insights for strategic planning',
        'Data-driven approach to export and trade development'
      ]
    },
    {
      image:'./globe.svg',
      title:'Multi-Country Certification',
      desc:'We segment applications by country and sector, enabling tailored guidance and reporting in line with local policies and continental standards.',
      benefits: [
        'Country-specific certification meeting local requirements',
        'Harmonized reporting across different African regions',
        'Simplified multi-market compliance through a single platform'
      ]
    }
  ]


  return (
    <div>

      <section className='md:h-[70vh] pb-[2.5rem] pt-[2rem] header-bg'>
          <Navbar />
          <div className='text-center mt-[6rem] md:w-[60%] w-[95%] mx-auto  text-white'>
              <p className='lg:text-[55px] md:text-[30px] text-[28px] font-bold md:mb-2 mb-5'>  What We <span className='text-ascent-color'>Offer</span> .</p>
              <p className='text-[18px]'>Valcertra LIMITED offers a suite of services through its AVA CERTIFY platform, targeted at improving <span className='text-ascent-color'>industrial credibility, trade access, and compliance readiness</span> for African businesses.</p>
              <div className='mt-10 flex flex-col md:flex-row gap-4 justify-center items-center'>
                  <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px]'>Get Certified Now</button>
                  <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
              </div>
          </div>
      </section>

      <section className='mt-[3rem]'>
        <p className='text-[#333333] text-center mb-[3rem] text-[26px]'>Our Services</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] w-[90%] mx-auto'>
          {
            servicesContent.map(item => (
              <ServicesCard item={item}/>
            ))
          }
        </div>
      </section>

      <section className='bg-secondary-color py-[3.5rem] text-center mt-[4rem]'>
        <p className='md:text-[26px] text-[23px] mb-5 font-[500]'>Ready to <span className='text-ascent-color'>Certify</span> Your Products?</p>
        <p className='md:w-[48%] w-[80%] mx-auto text-text-color'>Join Africa's leading exporters on the continental trade highway and access new markets with confidence.</p>
        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px] text-white'>Get Certified Now</button>
            <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Services