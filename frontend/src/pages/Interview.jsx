
import React from 'react'
import WebcamFeed from '../components/InterviewPage/WebcamFeed';
import StatsPanel from '../components/InterviewPage/StatsPanel';
import AIResponse from '../components/InterviewPage/AIResponse';

const Interview = () => {
  return (
    <div className='flex m-3 p-4'>
      <div className='flex flex-col w-[70%] mr-5 mb-2 gap-4'>
        <WebcamFeed/>

        <AIResponse/>
      </div>

      <StatsPanel/>
    </div>
  )
}

export default Interview
