import React from 'react'
import { Camera, Volume2 } from 'lucide-react'

const AIResponse = ({startListening,stopListening,listening,aiReply,loading}) => {
  return (
    <div className='flex flex-col gap-5 p-4 border border-white/20 rounded-lg bg-[#10141e]'>
        <div className='flex gap-3'>
            <span className='border border-[#00e5ff] rounded-full p-1.5'><Volume2 className=' text-[#00e5ff]'/></span>
            <p className='text-white'>AI Interviewer</p>
        </div>

        <p className='text-white'>
          {loading? "AI is thinking...": aiReply || "Press start to begin"}
        </p>

        <div className='flex gap-4 w-full'>
            
            {
              listening ? <button onClick={() => stopListening()} className='transition duration-300 ease-in-out bg-red-600 text-black font-semibold py-2 w-2/5 rounded-lg hover:scale-98'>Stop and send</button>
              : <button onClick={() => startListening()} className='transition duration-300 ease-in-out bg-[#00e5ff] font-semibold py-2 w-2/5 rounded-lg hover:scale-98'>Start Answer</button>
            }
            
            <button className='text-white border font-semibold py-2 border-white/20 w-2/5 rounded-lg'>Analyze Face only</button>
            <button className='p-2 rounded-lg border border-[#00e5ff]'><Camera className='text-[#00e5ff]'/></button>
        </div>

    </div>
  )
}

export default AIResponse
