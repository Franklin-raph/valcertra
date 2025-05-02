import React from 'react'

const ServicesCard = ({item}) => {
  return (
    <div className='border border-[#99C2FF] rounded-[8px]'>
        <div className='bg-primary-color text-white rounded-t-[8px] p-5'>
            <div className='mb-4 flex items-center gap-2'>
                <img src={item.image} alt="" className='w-[20px]' />
                <p>{item.title}</p>
            </div>
            <p className='text-[14px] text-[#E6E6E6] italic'>{item.desc}</p>
        </div>
        <div className='px-4 pt-5 pb-3'>
            <p className='text-ascent-color mb-4'>Key Benefits</p>
            <ul>
                {
                    item.benefits.map(benefit => (
                        <li className='flex items-center gap-2 text-[#4D4D4D] my-[8px] text-[14px]'>
                            <div className='w-[20px] h-[20px] bg-[#E5F0FF] rounded-full flex justify-center items-center'>
                                <img src="./service-check.svg" alt="" />
                            </div>
                            <p>{benefit}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ServicesCard