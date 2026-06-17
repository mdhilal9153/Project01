import { Award, ChartColumn, CircleCheck, MessageSquare, Mic, TrendingUp, TriangleAlert } from 'lucide-react'
import React from 'react'

const Details = ({results,interviewData,totalWords,totalFillers,fillerPercent}) => {
  return (
    <div className='w-full flex grid grid-cols-5 gap-3 mt-2'>
      <div className='flex flex-col gap-4 col-span-3'>
        <h2 className='text-white font-bold text-xl'>Question Breakdown</h2>
        {interviewData.slice(1).map((qa,index)=>(
            <div className='flex flex-col items-center gap-3 border border-white/20 rounded-lg p-3 bg-[#131720]'>
                <p className='text-white'><span className='bg-[#11303b] text-[#00e5ff] p-1 border border-[#093341] rounded m-2'>Q{index+1}</span>  {qa.q}</p>
                <p className='text-white/50'>{qa.a}</p>

                <p className='text-white/50'><i>{results.questionBreakdown[index].feedback}</i></p>

                <h2 className='text-[#02d86a] bg-[#11302a] p-1 border border-[#0e4633] rounded'>{results.questionBreakdown[index].score}/10</h2>
            </div>
        ))}
      </div>

      <div className='col-span-2 flex flex-col gap-4 p-2'>
        <h2 className='text-white font-bold text-xl'>Performance Analysis</h2>
        
        <div className='bg-[#0a1a1e] border border-[#084330] rounded-lg flex flex-col p-2 gap-2'>
          <h2 className='text-[#00e268] flex gap-2 font-semibold mb-2'><TrendingUp/> Strengths</h2>
          {results.strengths.map((e,index)=>(
            <p className='flex gap-2 text-[#a0a9af] text-sm'><CircleCheck className='text-[#00e268] text-xs'/> {e}</p>
          ))}
        </div>

        <div className='bg-[#171118] border border-[#451913] rounded-lg flex flex-col p-2 gap-2'>
          <h2 className='text-[#f83702] flex gap-2 mb-2 font-semibold'><TriangleAlert/> Areas to improve</h2>
          {results.improvements.map((e,index)=>(
            <p className='flex gap-2 text-[#a0a9af] text-sm'><TriangleAlert className='text-[#b93007] text-xs'/> {e}</p>
          ))}
        </div>
        
        <div className='flex flex-col items-start gap-3 border border-white/20 rounded-lg p-4 bg-[#131720]'>
          <h2 className='flex gap-2 text-white font-semibold'><Mic className='text-[#00e5ff]'/> Speech Stats</h2>

          <div className='flex justify-around p-2 w-full'>
            <div className='flex flex-col justify-center items-center gap-1'>
              <MessageSquare className='text-[#00e5ff]'/>
              <h2 className='text-white font-bold'>{totalWords}</h2>
              <h3 className='text-white/50 text-xs'>TOTAL WORDS</h3>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
              <Mic className='text-[#00e5ff]'/>
              <h2 className='text-white font-bold'>{totalFillers}</h2>
              <h3 className='text-white/50 text-xs'>FILLER WORDS</h3>
            </div>
            <div className='flex flex-col justify-center items-center gap-1'>
              <ChartColumn className='text-[#00e5ff]'/>
              <h2 className='text-white font-bold'>{fillerPercent}</h2>
              <h3 className='text-white/50 text-xs'>FILLER %</h3>
            </div>
          </div>
        </div>


        {/* //Verdict */}

        <div className='bg-[#0b1722] flex flex-col gap-4 p-4 rounded-lg border border-[#093341]'>
          <h2 className='flex gap-2 text-white font-semibold'><Award className='text-[#00e5ff]'/> Overall Verdict</h2>

          <p className='text-sm text-[#858d96]'>{results.verdict}</p>

        </div>

      </div>
    </div>
  )
}

export default Details
