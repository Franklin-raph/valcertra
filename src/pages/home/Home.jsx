import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HomeServicesCard from '../../components/home-services-card/HomeServicesCard'
import HowItWorksCard from '../../components/how-it-works-card/HowItWorksCard'
import WhyCretivaCard from '../../components/why-cretiva-card/WhyCretivaCard'
import Footer from '../../components/footer/Footer'
import { useNavigate } from 'react-router-dom'
import WhoWeScoreCard from '../../components/who-we-score-card/WhoWeScoreCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Home = () => {

  const servicesContent = [
    {
      image:'./award.svg',
      title:'Value Addition Certification',
      desc:'Verified by automated calculation, site audits, and digital workflows'
    },
    {
      image:'./server.svg',
      title:'Blockchain-anchored Certification Issuance',
      desc:'QR-enabled, tamper-proof, verifiable globally'
    },
    {
      image:'./map-pin.svg',
      title:'Geospatial Mapping & Field Verification',
      desc:'GPS-based audit trail for credible local sourcing'
    },
    {
      image:'./pie-chart.svg',
      title:'Compliance Intelligence for Governments & Customs',
      desc:'Real-time dashboards, analytics, and risk alerts'
    },
    {
      image:'./file.svg',
      title:'Exporter Onboarding & Trade Readiness Programs',
      desc:'Targeted at SMEs, women- and youth-led enterprises'
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

  const whoWeScore = [
    {
      title:"Exporters & Manufacturers:",
      desc:"Meet compliance. Unlock AfCFTA market access."
    },
    {
      title:"Governments & Trade Agencies:",
      desc:"Enforce RoO. Plan with data. Monitor transformation."
    },
    {
      title:"Financial Institutions:",
      desc:"Verify product eligibility. De-risk industrial lending"
    },
    {
      title:"Customs Authorities:",
      desc:"Speed clearance with digital, traceable certification."
    },
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

      <section className='md:h-[92vh] pb-[2.5rem] pt-[2rem] header-bg'>
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
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px]'>Africa's Official Mark of Certified Value Addition</p>
        <div className='flex flex-col md:flex-row gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem]'>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
          <div className='md:w-[50%] text-[#4D4D4D] font-[300]'>
            <p className='mb-[3rem]'>
              VALCERTRA (Value Certification for Trade in Africa) is the continent's leading standard for verifying local content, transformation processes, and trade eligibility under the African Continental Free Trade Area (AfCFTA).
            </p>
            <p>
              Like ISO for systems, Fairtrade for ethics, and UL for product safety, VALCERTRA is Africa's trusted certification authority for industrial value creation—ensuring that raw and semi-processed goods meet the minimum 30% value addition threshold required for preferential trade across the continent.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-[9rem]'>
        {/* <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px]'>Modeled on Global Best Practices. Built for Africa.</p> */}
        <div className='flex flex-col md:flex-row-reverse gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem]'>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
          <div className='md:w-[50%] text-[#4D4D4D] font-[300]'>
            <p className='mb-6 text-[#333333] font-[500]'>
              The VALCERTRA Seal: What It Stands For
            </p>
            <div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Conformity with AfCFTA Rules of Origin</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Proven transformation of raw materials</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Traceable, fraud-resistant local content verification</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Recognition across customs and trade facilitation zones</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Confidence for buyers, regulators, DFIs, and partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px]'>Our Core Services</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[20px] lg:px-[8rem] md:px-[5rem] px-[1rem] justify-center'>
          {
            servicesContent.map(item => (
              <HomeServicesCard item={item}/>
            ))
          }
        </div>
      </section>

      <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center mb-[0.3rem] md:text-[26px] text-[20px]'>Who We Serve</p>
        {/* <p className='text-center mb-[1.5rem] text-text-color px-2'>Our streamlined process makes certification simple and efficient for businesses across Africa</p> */}
        <div className='flex flex-col-reverse md:flex-row-reverse gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem] mt-5 md:mt-[3rem]'>
          <div className='grid md:grid-cols-2 grid-cols-1 md:gap-[20px] gap-[30px] md:w-[60%]'>
            {
              whoWeScore.map(item => (
                <WhoWeScoreCard item={item}/>
              ))
            }
          </div>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
        </div>
      </section>

      <section className='mt-[7.5rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px] px-1'>Modeled on Global Best Practices. Built for Africa.</p>
        <div className='flex flex-col md:flex-row-reverse gap-[40px] justify-center lg:px-[8rem] md:px-[5rem] px-[1rem]'>
          <div className='bg-[#D9D9D9] md:w-[50%] md:h-auto h-[250px]'></div>
          <div className='md:w-[50%] text-[#4D4D4D] font-[300]'>
            <p className='mb-[1.3rem]'>
              VALCERTRA applies international-grade certification rigor—while addressing Africa's unique challenges in trade verification, informal processing, and fragmented local value chains.
            </p>
            <div>
              <p className='mb-3 text-[#333333] font-[500]'>Our technology stack includes:</p>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>AI-powered Value Addition Calculator</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>Mobile Geo-verification App</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>AI-powered Value Addition Calculator</p>
              </div>
              <div className='flex items-center gap-3 mb-[14px]'>
                <img src="./check-who-we-score.svg" alt="" />
                <p className='text-text-color'>AI-powered Value Addition Calculator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='mt-[9rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px] font-[500]'>Why Valcertra</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[20px] lg:px-[9rem] md:px-[5rem] px-[1rem] justify-center'>
          {
            whyCretivaContent.map(item => (
              <WhyCretivaCard item={item}/>
            ))
          }
        </div>
      </section> */}


      <section className='bg-secondary-color py-[3.5rem] text-center mt-[9rem]'>
        <p className='md:text-[26px] text-[23px] mb-5 font-[500] px-1'>Africa's Industrial Future Now Has a Seal of Integrity</p>
        <p className='md:w-[50%] sm:w-[90%] w-[97%] mx-auto text-text-color'>At a time when Africa is pushing to industrialize, VALCERTRA is not just a tool—it is an infrastructure of trust, enabling countries and companies to comply, compete, and grow within AfCFTA and beyond.</p>
        <p className='text-text-color font-[500] text-[20px] mt-5 sm:px-5 px-2'>Certify with Confidence. Trade with Authority.</p>
        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='bg-primary-color py-[12px] px-[20px] rounded-[4px] text-white' onClick={() => navigate('/sign-up')}>Apply for Certification</button>
            <button className='text-[#344054] bg-white py-[12px] px-[20px] rounded-[4px]'>Request Partnership</button>
        </div>
      </section>

      <section className='mt-[7.5rem] mb-[5rem]'>
        <p className='text-[#333333] text-center md:mb-[3rem] mb-[1.5rem] md:text-[26px] text-[20px] font-[500]'>Our Partners</p>
        <div className='w-[90%] mx-auto lg:px-[9rem] md:px-[5rem] px-[1rem] justify-center'>
          {/* {
            [1,1,1,1,1].map(item => (
              <div className='bg-[#D9D9D9] h-[100px]'></div>
            ))
          } */}
          <div className="overflow-hidden relative">
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              600: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            loop={true}
            style={{
              '--swiper-pagination-color': '#22AC00', // Active bullet color
              '--swiper-pagination-bullet-inactive-color': '#999999', // Inactive bullet color
              '--swiper-pagination-bullet-inactive-opacity': '0.5', // Inactive bullet opacity
              '--swiper-pagination-bullet-size': '0px', // Bullet size
              '--swiper-pagination-bullet-horizontal-gap': '6px', // Space between bullets
              // '--swiper-pagination-top': '353px', // Move pagination down
            }}
          >
            <SwiperSlide>
              <img src="./wemabank-logo.webp" className='md:w-[150px] w-[100px] mx-auto' alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
              <img src="./boi.png" className='w-[150px] mx-auto object-cover' alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
              <img src="./African_Continental_Free_Trade_Area_logo.svg.png" className='md:w-[150px] w-[100px] mx-auto' alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
              <img src="./ifc-logo.webp" className='md:w-[150px] w-[100px] mx-auto' alt="" />
            </SwiperSlide>
            
            <SwiperSlide>
              <img src="./rmrdc.png" className='md:w-[150px] w-[100px] mx-auto' alt="" />
            </SwiperSlide>
            
          </Swiper>
        </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home