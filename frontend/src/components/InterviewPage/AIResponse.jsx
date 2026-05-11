import React from 'react'
import { Camera, Volume2 } from 'lucide-react'

const AIResponse = () => {
  return (
    <div className='flex flex-col gap-5 p-4 border border-white/20 rounded-lg bg-[#10141e]'>
        <div className='flex gap-3'>
            <span className='border border-[#00e5ff] rounded-full p-1.5'><Volume2 className=' text-[#00e5ff]'/></span>
            <p className='text-white'>AI Interviewer</p>
        </div>

        <p className='text-white'>Tell me about a time when you had to work with a difficult team member. How did you handle the situation, and what was the outcome?</p>

        <div className='flex gap-4 w-full'>
            <button className='bg-[#00e5ff] font-semibold py-2 w-2/5 rounded-lg'>Start Answer</button>
            <button className='text-white border font-semibold py-2 border-white/20 w-2/5 rounded-lg'>Analyze Face only</button>
            <button className='p-2 rounded-lg border border-[#00e5ff]'><Camera className='text-[#00e5ff]'/></button>
        </div>

    </div>
  )
}

export default AIResponse
