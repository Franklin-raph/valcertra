import React from 'react'

const WhyCretivaCard = ({item}) => {
  return (
    <div className='p-4 border border-[#99C2FF] rounded-[8px]'>
        <p className='text-primary-color mb-5 text-[18px]'>{item.title}</p>
        <p className='text-text-color text-[14px]'>{item.desc}</p>
    </div>
  )
}

export default WhyCretivaCard