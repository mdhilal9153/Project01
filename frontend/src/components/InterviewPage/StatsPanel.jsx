import React from 'react'

const StatsPanel = ({transcript,listening}) => {
  return (
    <div className='flex flex-col p-3 w-[30%] gap-3'>
        <h1 className='text-white font-bold text-xl'>Live Stats</h1>

        <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg'>
          <p className='text-green-400 font-semibold'>Normal Mode</p>

          <div className='bg-[#0d3e30] rounded-3xl h-fit w-full p-1.5 flex items-center'>
            <div className='bg-[#00e676] rounded-full w-[25px] h-[25px]'></div>
          </div>
        </div>

        <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg'>
          <div className='flex justify-between w-full'>
            <p className='text-white/40 font-semibold'>Speech Pace</p>
            <span className='text-blue-400 text-sm'>145wpm</span>
          </div>

          <div className='bg-[#1c2029] rounded-3xl w-full flex items-center'>
            <div className='bg-blue-400 rounded-full w-[70%] h-[10px]'></div>
          </div>
        </div>

        <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg'>
          <div className='flex justify-between w-full'>
            <p className='text-white/40 font-semibold'>Confidence score</p>
            <span className='text-green-300 text-sm'>9.2/10</span>
          </div>

          <div className='bg-[#1c2029] rounded-3xl w-full flex items-center'>
            <div className='bg-green-300 rounded-full w-[92%] h-[10px]'></div>
          </div>
        </div>

        <div className='flex flex-col p-4 gap-2 border border-white/20 rounded-lg'>
          <h1 className='text-white/50 text-sm'>Session stats</h1>

          <div className='grid grid-cols-2 w-full gap-3'>
              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>Filler Words</p>
                <span className='text-white'>3</span>
              </div>

              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>Word Count</p>
                <span className='text-white'>247</span>
              </div>

              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>WPM</p>
                <span className='text-blue-400'>145</span>
              </div>

              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>Duration</p>
                <span className='text-white'>2:40</span>
              </div>
          </div>

        </div>
        <div className=' flex flex-col justify-start gap-4 border border-white/20 rounded-lg bg-[#151822] p-3'>
          <p className='text-white font-semibold'>Transcript</p>
          <p className='text-white/50 text-sm'>{transcript}</p>
        </div>

    </div>
  )
}

export default StatsPanel
