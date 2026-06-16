import React from 'react'
import Stats from './Stats'
import { ChartColumn, MessageSquare, Mic, Target } from 'lucide-react'


const StatsSec = ({totalWords,totalFiller,fillerPercent,role}) => {
  return (
    <div className='flex p-3 mt-3 w-full gap-5 justify-around'>
      <Stats icon={<MessageSquare/>} head={"Total words"} data={totalWords}/>

      <Stats icon={<Mic/>} head={"Filler words"} data={totalFiller}/>

      <Stats icon={<ChartColumn/>} head={"Filler word %"} data={fillerPercent}/>

      <Stats icon={<Target/>} head={"Interview Goal"} data={role}/>
    </div>

)
}

export default StatsSec
