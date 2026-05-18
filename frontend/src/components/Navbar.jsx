import React from 'react'
import useInterview from '../hooks/useInterview';

const Navbar = () => {

  const {questionCount} = useInterview();
  return (
    <div className='top-0 left-0 w-full bg-[#0B0F19] flex justify-between px-10 py-5'>
      <h1 className='text-white text-3xl'>MockMate <span className='text-[#00E5FF]'>AI</span></h1>

      <button className='bg-[#0B0F19] text-[#00E5FF] rounded-lg border border-[#00E5FF] py-2 px-3.5'>Que count: {questionCount}</button>
    </div>
  )
}

export default Navbar
