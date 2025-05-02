import React from 'react'

const HomeServicesCard = ({item}) => {
  return (
    <div className='p-4 border border-[#99C2FF] rounded-[8px]'>
      <div className='p-4 bg-secondary-color rounded-full inline-block'>
        <img src={item.image} alt="" className='h-[20px] w-[20px]'/>
      </div>
      <p className='text-primary-color my-5'>{item.title}</p>
      <p className='text-text-color text-[14px]'>{item.desc}</p>
    </div>
  )
}

export default HomeServicesCard