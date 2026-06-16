import React from 'react'

const Details = ({results,interviewData}) => {
  return (
    <div>
      <div>
        {interviewData.slice(1).map((qa,index)=>(
            <div className='flex flex-col items-center gap-3 border border-white rounded-lg p-3'>
                <p className='text-white'>Q  {qa.q}</p>
                <p className='text-white/50'>{qa.a}</p>

                <p className='text-white/50'><i>{results.questionBreakdown[index].feedback}</i></p>

                <h2 className='text-green-400'>{results.questionBreakdown[index].score}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Details
