import React from 'react'

const WhoWeScoreCard = ({item}) => {
  return (
    <div className='flex items-start gap-5 border border-[#99C2FF] rounded-[10px] py-5 pl-3 '>
        {/* <p className='text-[#002E72] p-3 rounded-full border border-[#3385FF] inline-block w-[50px] text-center font-bold'>{item.number}</p> */}
        <img src="./check-who-we-score.svg" alt="" />
        <div>
          <p className='text-[#002E72]'>{item.title}</p>
          <p className='text-[#333333]'>{item.desc}</p>
        </div>
    </div>
  )
}

export default WhoWeScoreCard