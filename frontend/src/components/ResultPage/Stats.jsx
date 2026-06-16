import React from 'react'

const Stats = ({icon,head,data}) => {
  return (
    <div className='flex justify-center items-center gap-4 px-4 py-1 bg-[#151822] rounded-2xl border border-white/20'> 

        <div className='text-[#00e5ff] text-xs'>{icon}</div>

        <div className='flex flex-col justify-center items-start gap-2 text-sm mr-10'>

            <p className='text-white/50'>{head}</p>

            <p className='text-white'>{data}</p>

        </div>
      
    </div>
  )
}

export default Stats
