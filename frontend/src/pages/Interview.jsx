
import React, { useEffect, useRef, useState } from 'react'
import WebcamFeed from '../components/InterviewPage/WebcamFeed';
import StatsPanel from '../components/InterviewPage/StatsPanel';
import AIResponse from '../components/InterviewPage/AIResponse';
import useInterview from '../hooks/useInterview';

const Interview = () => {

  const webcamRef = useRef(null);

  const [cameraOn,setCameraOn] = useState(true);

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
  }

  const {transcript, listening, startListening, stopListening, aiReply, loading, wordCount, fillerCount, wpm, confidenceScore,stressMode, toggleMode, analyzeFace } = useInterview(webcamRef);
  return (
    <div className='flex m-3 p-4'>
      <div className='flex flex-col w-[70%] mr-5 mb-2 gap-4'>
        <WebcamFeed ref={webcamRef} cameraOn={cameraOn}/>

        <AIResponse startListening={startListening} stopListening={stopListening} listening={listening} aiReply={aiReply} loading={loading} toggleCamera={toggleCamera} analyzeFace={analyzeFace}/>
      </div>

      <StatsPanel transcript={transcript} listening={listening} confidenceScore={confidenceScore} wpm={wpm} fillerCount={fillerCount} wordCount={wordCount} stressMode={stressMode} toggleMode={toggleMode}/>
    </div>
  )
}

export default Interview
