import React from 'react'
import StarSec from '../components/ResultPage/StarSec'
import StatsSec from '../components/ResultPage/StatsSec'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useInterviewContext } from '../context/InterviewContext'
import Details from '../components/ResultPage/Details'

const Result = () => {

  const { interviewData } = useInterviewContext();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  const allAnswers = interviewData.slice(1).map(qa => qa.a).join(' ');
  const totalWords = allAnswers.split(' ').filter(Boolean).length;
  const totalFillers = (allAnswers.match(/\b(um|uh|like|so|actually)\b/gi) || []).length;
  const fillerPercent = totalWords > 0 ? ((totalFillers / totalWords) * 100).toFixed(1) : 0;

  useEffect(() => {
    if (interviewData.length === 0) {
      navigate('/');  // redirect back to landing if no data
      return;
    }
    
    const fetchResults = async () => {
      const { data } = await axios.post("http://localhost:5000/api/result", {
        updatedData: interviewData
      });
      setResults(data);
      setLoading(false);
    }

    fetchResults();
  }, [])

  if (loading) return <p className='text-white p-4'>Generating your results...</p>


  return (
    <div className='p-4'>
        <StarSec results={results}/>

        <StatsSec results={results} totalWords={totalWords} totalFillers={totalFillers} fillerPercent={fillerPercent} role={interviewData[0].role}/>

        <Details results={results} interviewData={interviewData} totalWords={totalWords} totalFillers={totalFillers} fillerPercent={fillerPercent}/>
    </div>
  )
}

export default Result
