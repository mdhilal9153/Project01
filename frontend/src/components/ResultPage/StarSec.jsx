import React from 'react'
import {Award} from 'lucide-react'
import CircularProgress from './CircularProgress'
import { useInterviewContext } from '../../context/InterviewContext'

const StarSec = ({results}) => {

  const {interviewData} = useInterviewContext();

  if (!results) return null;

  return (
    <div className='flex justify-between w-full h-fit rounded-lg p-7 mr-3 ml-2' 
    style={{ 
      boxShadow: 'inset 0 0 60px rgba(0, 229, 255, 0.07)',
      border: '1px solid rgba(0, 229, 255, 0.15)'
    }}>
      <div className='flex flex-col gap-5'>
        <h3 className='text-[#00e5ff] flex gap-2'><Award/> RESULTS SUMMARY</h3>

        <h1 className='text-5xl font-bold text-white'>Interview<br/> Complete</h1>

        <h3 className='text-white'>{interviewData[0].name} - <span className='text-white/50 font-normal'>{interviewData[0].role}</span></h3>
      </div>

      <div className='flex flex-col items-center gap-2 w-fit'>
        <CircularProgress score={results.overallScore}/>

        <div className='border border-[#07623d] bg-[#0a2924] rounded-2xl py-1 px-2 text-center'>
            <h2 className='text-[#03e676] font-semibold text-sm m-1 '>{results.verdict}</h2>
        </div>
      </div>
    </div>
  )
}

export default StarSec
