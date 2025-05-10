import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Contact = () => {

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
          <div className='text-center mt-[6rem] md:w-[60%] w-[95%]  mx-auto  text-white'>
              <p className='md:text-[55px] text-[35px] font-bold mb-2'> Contact <span className='text-ascent-color'>us</span></p>
              <p className='md:text-[17px] mb-7'>
                Have questions about our certification services or how AVA CERTIFY can help your business meet AfCFTA requirements? Our team is ready to provide the guidance you need. Reach out today for expert support tailored to your industry.
              </p>
          </div>
      </section>

      <section className='mt-[3rem]'>
        <p className='text-[#333333] text-center mb-[1rem] text-[26px]'>Get In Touch</p>
        <div className='flex justify-center flex-col sm:flex-row md:gap-[70px] lg:px-[12rem] md:px-[5rem] px-[1rem]'>
            <div className='sm:w-[50%] w-full mx-auto sm:p-5 px-1 py-5'>
                <div className='flex items-center gap-4 justify-center'>
                    <div className='w-full'>
                        <label className='block mb-1 text-[15px] text-[#344054]'>First name</label>
                        <input type="text" placeholder='First name' className='border border-[#D0D5DD] py-2 px-2 w-full rounded-[8px] outline-none'/>
                    </div>
                    <div className='w-full'>
                        <label className='block mb-1 text-[15px] text-[#344054]'>Last Name</label>
                        <input type="text" placeholder='Last name' className='w-full border border-[#D0D5DD] py-2 px-2 rounded-[8px] outline-none'/>
                    </div>
                </div>
                <div className='mt-4'>
                    <label className='block mb-1 text-[15px] text-[#344054]'>Email</label>
                    <input type="email"  placeholder='you@company.com' className='border border-[#D0D5DD] py-2 px-2 rounded-[8px] outline-none w-full' />
                </div>
                <div className='mt-4'>
                    <label className='block mb-1 text-[15px] text-[#344054]'>Phone number</label>
                    <input type="email"  placeholder='+234 80 000-0000' className='border border-[#D0D5DD] py-2 px-2 rounded-[8px] outline-none w-full' />
                </div>
                <div className='mt-4'>
                    <label className='block mb-1 text-[15px] text-[#344054]'>Message</label>
                    <textarea name="" className='border border-[#D0D5DD] py-2 px-2 rounded-[8px] outline-none w-full resize-none h-[150px]'></textarea>
                </div>
                <button className='bg-primary-color w-full py-[12px] rounded-[4px] text-white mt-5'>Send Message</button>
            </div>
            <div className='mt-4 sm:w-[50%] w-full mx-auto sm:p-5 px-1 py-5'>
                <p className='text-[#333333] font-[600] md:text-[30px] text-[22px]'>Contact us on</p>
                <p className='text-text-color mb-7'>For any legal inquiries, contact us at:</p>
                <div className='flex flex-col gap-5'>
                    <p className='text-text-color'> <span className='text-[#666666] mr-[2px]'>Email:</span>legal@Valcertra.org</p>
                    <p className='text-text-color'> <span className='text-[#666666] mr-[2px]'>Phone:</span>+234 8068179570</p>
                    <p className='text-text-color'> <span className='text-[#666666] mr-[2px]'>Address:</span>Plot 1010 Paul Muotolum Crescent, Old Gwarinpa Roa, Lifecamp, FCT, Abuja, Nigeria</p>
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

export default Contact