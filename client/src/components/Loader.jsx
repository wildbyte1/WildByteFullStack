import React from 'react'
import { assets } from '../assets/assets.js';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-bounce rounded-full h-70 w-90 border-4 border-t-white border-gray-700'>
        <img src={assets.loading_error} alt='Loading...' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Loader
