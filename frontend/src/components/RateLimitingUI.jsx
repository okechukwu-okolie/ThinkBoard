import { ZapIcon } from 'lucide-react'
import React from 'react'

const RateLimitingUI = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 py8'>
        <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className='flex flex-col md:flex-row items-center p-6'>
           <div className='flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6'>
            <ZapIcon className='text-primary size-10'  />
           </div>
           <div  className='flex-1 text-center md:text-left'>
            <h3 className='text-xl font-extrabold mb-2'>Rate Limit Reached</h3>
            <p className='text-base-content mb-1 font-semibold'> You've made too many requests in a short period. Please wait a moment before making more requests. </p>
           </div>
        </div>
        </div>

      
    </div>
  )
}

export default RateLimitingUI
