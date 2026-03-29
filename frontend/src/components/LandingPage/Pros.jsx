import { MessageSquare,Mic,Zap } from 'lucide-react'
import React from 'react'

const Pros = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl text-white font-bold mt-10'>Why MockMate AI?</h1>

        <div className='mt-7 flex gap-7 w-7/10 justify-center'>
          <div className='flex flex-col justify-start items-center w-1/4 gap-3 bg-[#10141e] px-4 py-10 rounded-2xl border border-[#808080] transition-all hover:border-[#00FFFF]'>
            <MessageSquare className='text-[#00FFFF]'/>

            <h2 className='text-white font-semibold'>Real-time AI feedback</h2>

            <p className='text-[#808080]'>Get instant, actionable feedback on your technical answers and problem-solving approach.</p>
          </div>

          <div className='flex flex-col justify-start items-center w-1/4 gap-3 bg-[#10141e] px-4 py-10 rounded-2xl border border-[#808080] transition-all hover:border-[#00FFFF]'>
            <Mic className='text-[#00FFFF]'/>

            <h2 className='text-white font-semibold'>Speech & Confidence Analysis</h2>

            <p className='text-[#808080]'>Track your speaking pace, filler words, and body language to improve your delivery.</p>
          </div>

          <div className='flex flex-col justify-start items-center w-1/4 gap-3 bg-[#10141e] px-4 py-10 rounded-2xl border border-[#808080] transition-all hover:border-[#00FFFF]'>
            <Zap className='text-[#00FFFF]'/>

            <h2 className='text-white font-semibold'>Stress Mode Simulation</h2>

            <p className='text-[#808080]'>Train under pressure with time constraints and challenging follow-up questions.</p>
          </div>
        </div>
    </div>
  )
}

export default Pros
