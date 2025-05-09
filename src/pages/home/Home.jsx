import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HomeServicesCard from '../../components/home-services-card/HomeServicesCard'
import HowItWorksCard from '../../components/how-it-works-card/HowItWorksCard'
import WhyCretivaCard from '../../components/why-cretiva-card/WhyCretivaCard'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const servicesContent = [
    {
      image:'./award.svg',
      title:'Verified Certification',
      desc:'Secure blockchain-backed certificates recognized across AfCFTA member states, giving your products the credibility they deserve in the global marketplace.'
    },
    {
      image:'./file.svg',
      title:'Trade Advisory',
      desc:'Expert consulting on meeting value addition and export compliance standards.'
    },
    {
      image:'./device.svg',
      title:'Self Assessment Tool',
      desc:'Use our Value Addition Calculator to evaluate your readiness instantly.'
    },
    {
      image:'./server.svg',
      title:'Digital Certificate Insurance',
      desc:'Secure, blockchain-backed certificates downloadable from your dashboard.'
    },
    {
      image:'./check.svg',
      title:'Document Verification and Anti Fraud Screening',
      desc:'Our AI-powered system reviews and validates all uploads to ensure authenticity.'
    },
  ]

  const howItWorksContent = [
    {
      number:'1',
      title:'Register on portal',
      desc:'Create your secure exporter profile'
    },
    {
      number:'2',
      title:'Apply and Upload document',
      desc:'Submit evidence of local processing and value addition.'
    },
    {
      number:'3',
      title:'Get Verified',
      desc:'Our experts assess and verify your application against clear criteria.'
    },
    {
      number:'4',
      title:'Download Your Certificate',
      desc:'Upon approval, receive a digitally verifiable certification badge.'
    }
  ]

  const whyCretivaContent = [
    {
      title:'Trusted across ',
      desc:'Endorsed by national and regional trade bodies.'
    },
    {
      title:'Backed by Technology',
      desc:'Blockchain verification and AI fraud protection.'
    },
    {
      title:'Aligned with AfCFTA',
      desc:'Designed to facilitate intra-African and global market access.'
    },
    {
      title:'Transparent and Scalable',
      desc:'Country-segmented dashboards for compliance, reporting, and analytics.'
    }
  ]

  const navigate = useNavigate()

  return (
    <div>

      <section className='md:h-[70vh] pb-[2.5rem] pt-[2rem] header-bg'>
          <Navbar />
          <div className='text-center mt-[6rem] md:w-[65%] w-[95%] mx-auto  text-white'>
              <p className='lg:text-[45px] md:text-[30px] text-[28px] font-bold mb-2'>  Africa's Seal of <span className='text-ascent-color'>Value</span> - Certified for Trade, Trusted Worldwide.</p>
              <p className='text-[18px]'>Empowering African exporters and manufacturers with trusted value addition certification to compete and thrive under AfCFTA and global trade rules.</p>
              <div className='mt-10 flex flex-col md:flex-row gap-4 justify-center items-center'>
                  <button onClick={() => navigate('/sign-up')} className='bg-primary-color py-[12px] px-[20px] rounded-[4px]'>Get Certified Now</button>
                  <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Explore Our Platform</button>
              </div>
          </div>
      </section>

      <section className='mt-[3rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px]'>Certifying Africa's Industrial Leap</p>
        <div className='flex flex-col md:flex-row gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem]'>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
          <div className='md:w-[50%] text-[#4D4D4D] font-[300]'>
            <p className='mb-[3rem]'>
              Valcertra LIMITED, through its flagship AVA CERTIFY platform, is Africa's premier value addition certification authority. We provide a standardized, transparent, and digitally verifiable system to evaluate and certify the value-added status of products and services across the continent.
            </p>
            <p>
              Our mission is to <span className='text-primary-color'>build trust in African-made goods</span> , enhance trade credibility, and ensure compliance with AfCFTA, RMRDC and global value chain requirements.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px]'>Our Services</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] lg:px-[8rem] md:px-[5rem] px-[1rem] justify-center'>
          {
            servicesContent.map(item => (
              <HomeServicesCard item={item}/>
            ))
          }
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center mb-[0.3rem] md:text-[26px] text-[20px]'>How it Works</p>
        <p className='text-center mb-[1.5rem] text-text-color px-2'>Our streamlined process makes certification simple and efficient for businesses across Africa</p>
        <div className='flex flex-col md:flex-row gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem] mt-[3rem]'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[50px] gap-[40px] w-[90%]'>
            {
              howItWorksContent.map(item => (
                <HowItWorksCard item={item}/>
              ))
            }
          </div>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px] font-[500]'>Why Valcertra</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] lg:px-[9rem] md:px-[5rem] px-[1rem] justify-center'>
          {
            whyCretivaContent.map(item => (
              <WhyCretivaCard item={item}/>
            ))
          }
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px] font-[500]'>Our Partners</p>
        <div className='grid lg:grid-cols-5 grid-cols-2 gap-[20px] lg:px-[9rem] md:px-[5rem] px-[1rem] justify-center'>
          {
            [1,1,1,1,1].map(item => (
              <div className='bg-[#D9D9D9] h-[100px]'></div>
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

export default Home