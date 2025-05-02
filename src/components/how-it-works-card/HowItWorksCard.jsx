import React from 'react'

const HowItWorksCard = ({item}) => {
  return (
    <div>
        <p className='text-[#002E72] p-3 rounded-full border border-[#3385FF] inline-block w-[50px] text-center font-bold'>{item.number}</p>
        <p className='text-[#002E72] my-3'>{item.title}</p>
        <p className='text-[#333333]'>{item.desc}</p>
    </div>
  )
}

export default HowItWorksCard