import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import ServicesCard from '../../components/services-card/ServicesCard'
import Footer from '../../components/footer/Footer'

const About = () => {

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
          <div className='text-center mt-[6rem] md:w-[65%] w-[95%] mx-auto  text-white'>
              <p className='lg:text-[55px] text-[30px] font-bold mb-2'> Who We <span className='text-ascent-color'>are</span> .</p>
              <p className='md:text-[17px] mb-7'>
                Valcertra LIMITED is Africa's premier value addition certification company. Through our flagship platform, we empower exporters, manufacturers, and SMEs to validate, verify, and showcase the value they add to raw materials and products — enabling them to trade competitively under AfCFTA and global market standards.
              </p>
              <p className='text-[17px]'>
                We are driven by a mission to transform Africa's raw material economy into a value-added, export-ready ecosystem. Our certification system is secure, scalable, and trusted by regulatory bodies, trade partners, and governments.
              </p>
          </div>
      </section>

      <section className='mt-[3rem]'>
        <p className='text-[#333333] text-center mb-[3rem] text-[26px]'>Vision & Misson</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] w-[90%] mx-auto'>
          <div className='p-4 border border-[#99C2FF] rounded-[8px]'>
            <div className='p-4 bg-secondary-color rounded-full inline-block'>
              <img src='./award.svg' alt="" className='h-[20px] w-[20px]'/>
            </div>
            <p className='text-primary-color my-3'>Our Vision</p>
            <p className='text-text-color text-[14px]'>To be the most trusted certification authority powering Africa's industrial transformation and global trade participation.</p>
          </div>
          <div className='p-4 border border-[#99C2FF] rounded-[8px]'>
            <div className='p-4 bg-secondary-color rounded-full inline-block'>
              <img src='./file.svg' alt="" className='h-[20px] w-[20px]'/>
            </div>
            <p className='text-primary-color my-3'>Our Mission</p>
            <p className='text-text-color text-[14px]'>To certify, promote, and protect value addition across Africa by offering transparent, digital, and credible certification services.</p>
          </div>
        </div>
      </section>
      {/* <div className='bg-[#D9D9D9] w-[90%] h-[200px] mx-auto rounded-[4px] mt-[2rem]'></div> */}
      <img src="./mission-vision.svg" className='w-[90%] mx-auto rounded-[4px] mt-[2rem]' alt="" />

      <section className='mt-[8rem]'>
        <p className='text-[#333333] text-center mb-[2rem] text-[26px]'>Value & Stratergy</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem] w-[90%] mx-auto'>
          <div className='border border-[#99C2FF] rounded-[8px]'>
              <div className='bg-primary-color text-white rounded-t-[8px] px-5 py-3'>
                  <div className='flex items-center gap-2'>
                      <img src='./trade.svg' alt="" className='w-[20px]' />
                      <p>Our Values</p>
                  </div>
              </div>
              <div className='px-4 pt-5 pb-3'>
                  <ul>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Integrity: We uphold trust, accuracy, and accountability in every certification.</p>
                      </li>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Innovation: We harness technology to enhance verification, compliance, and trade facilitation.</p>
                      </li>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Impact: We accelerate industrial development and economic value across Africa's production sectors.</p>
                      </li>
                  </ul>
              </div>
          </div>
          <div className='border border-[#99C2FF] rounded-[8px]'>
              <div className='bg-primary-color text-white rounded-t-[8px] px-5 py-3'>
                  <div className='flex items-center gap-2'>
                      <img src='./globe.svg' alt="" className='w-[20px]' />
                      <p>Strategic Focus</p>
                  </div>
              </div>
              <div className='px-4 pt-5 pb-3'>
                  <ul>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Enabling countries to meet AfCFTA value addition criteria.</p>
                      </li>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Supporting SMEs to transition from raw material traders to certified producers.</p>
                      </li>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Creating data-driven insights for government, donors, and trade agencies.</p>
                      </li>
                      <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                          <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                              <img src="./service-check.svg" alt="" />
                          </div>
                          <p>Driving continental competitiveness through industrial certification.</p>
                      </li>
                  </ul>
              </div>
          </div>
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

export default About