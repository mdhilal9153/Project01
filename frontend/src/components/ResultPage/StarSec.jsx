import React from 'react'
import {Award} from 'lucide-react'
import CircularProgress from './CircularProgress'

const StarSec = () => {
  return (
    <div className='flex justify-between w-full h-fit rounded-lg p-4'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-[#00e5ff] flex gap-2'><Award/> RESULTS SUMMARY</h3>

        <h1 className='text-2xl font-bold text-white'>Interview<br/> Complete</h1>

        <h3 className='text-white font-semibold'>Alex Johnson - <span>Frontend Engineer</span></h3>
      </div>

      <div className='flex flex-col gap-2'>
        <CircularProgress/>

        <div className='border border-[#00e676]/60 bg-[#00e676]'>
            <h2 className='text-[#00e676]/50 font-semibold '>Ready for junior roles</h2>
        </div>
      </div>
    </div>
  )
}

export default StarSec
