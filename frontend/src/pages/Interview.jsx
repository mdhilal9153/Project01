
import React, { useEffect, useRef } from 'react'
import WebcamFeed from '../components/InterviewPage/WebcamFeed';
import StatsPanel from '../components/InterviewPage/StatsPanel';
import AIResponse from '../components/InterviewPage/AIResponse';
import useInterview from '../hooks/useInterview';

const Interview = () => {

  const webcamRef = useRef(null);

  const {transcript, listening, startListening, stopListening, aiReply, loading, wordCount, fillerCount, wpm, confidenceScore } = useInterview(webcamRef);
  return (
    <div className='flex m-3 p-4'>
      <div className='flex flex-col w-[70%] mr-5 mb-2 gap-4'>
        <WebcamFeed ref={webcamRef}/>

        <AIResponse startListening={startListening} stopListening={stopListening} listening={listening} aiReply={aiReply} loading={loading}/>
      </div>

      <StatsPanel transcript={transcript} listening={listening} confidenceScore={confidenceScore} wpm={wpm} fillerCount={fillerCount} wordCount={wordCount}/>
    </div>
  )
}

export default Interview
