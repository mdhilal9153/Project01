import React from 'react'

const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full flex justify-between mt-4 px-6 py-5'>

        <h3 className='text-[#91949d]'>MockMate AI</h3>

        <div className='text-[#91949d]'>
            <p className='inline mr-4 transition-all hover:text-white cursor-pointer'>Privacy</p>
            <p className='inline mr-4 transition-all hover:text-white cursor-pointer'>Terms</p>
            <p className='inline mr-4 transition-all hover:text-white cursor-pointer'>Contact</p>
        </div>

        <p className='text-[#91949d]'>© 2026 MockMate AI. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
