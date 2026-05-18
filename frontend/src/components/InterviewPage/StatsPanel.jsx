import React from 'react'

const StatsPanel = ({transcript,listening, confidenceScore, wpm, fillerCount, wordCount,stressMode, toggleMode}) => {
  return (
    <div className='flex flex-col p-3 w-[30%] gap-3'>
        <h1 className='text-white font-bold text-xl'>Live Stats</h1>

        <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg transition duration-300 ease-in-out'>
          {
            stressMode? <p className='text-red-600 font-semibold'>Stress Mode</p>:<p className='text-green-400 font-semibold'>Normal Mode</p>
          }

          <div className={`${stressMode? 'bg-[#401c18] justify-end':'bg-[#0d3e30] justify-start'} rounded-3xl h-fit w-full p-1.5 flex items-center transition duration-300 ease-in-out`}>
            <div onClick={toggleMode} className={`${stressMode? 'bg-[#ff3d00]':'bg-[#00e676]'} rounded-full w-[25px] h-[25px]`}></div>
          </div>
        </div>

        <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg'>
          <div className='flex justify-between w-full'>
            <p className='text-white/40 font-semibold'>Speech Pace</p>
            <span className='text-blue-400 text-sm'>{wpm} wpm</span>
          </div>

          <div className='bg-[#1c2029] rounded-3xl w-full flex items-center'>
            <div className='bg-blue-400 rounded-full h-[10px]' style={{ width: `${Math.min(wpm / 200 * 100, 100)}%` }}></div>
          </div>
        </div>

        {/* <div className='border border-white/20 bg-[#10141e] flex flex-col px-3 py-4 gap-4 justify-start rounded-lg'>
          <div className='flex justify-between w-full'>
            <p className='text-white/40 font-semibold'>Confidence score</p>
            <span className='text-green-300 text-sm'>{confidenceScore}/10</span>
          </div>

          <div className='bg-[#1c2029] rounded-3xl w-full flex items-center'>
            <div className='bg-green-300 rounded-full h-[10px]' style={{ width: `${confidenceScore * 10}%` }}></div>
          </div>
        </div> */}

        <div className='flex flex-col p-4 gap-2 border border-white/20 rounded-lg'>
          <h1 className='text-white/50 text-sm'>Session stats</h1>

          <div className='grid grid-cols-2 w-full gap-3'>
              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>Filler Words</p>
                <span className='text-white'>{fillerCount}</span>
              </div>

              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>Word Count</p>
                <span className='text-white'>{wordCount}</span>
              </div>

              <div className='flex flex-col justify-start gap-2 p-2 border border-white/20 rounded-lg bg-[#151822]'>
                <p className='text-white/50 text-sm'>WPM</p>
                <span className='text-blue-400'>{wpm}</span>
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
