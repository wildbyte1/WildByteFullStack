import React from 'react'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='items-center justify-center text-center pt-20 pb-10'>

        <div className='inline-flex items-center justify-center gap-4 px-3 py-1.5 mb-4 border border-primary/40 bg-primary/50 rounded-full text-sm text-text'>
          <p>New: AI feature integrated </p>
          <img src={assets.star_solid} className='w-2.5' alt='' />
        </div>
      </div>
      <img
        src={assets.gradient}
        alt=''
        className='absolute -top-20 -z-1 opacity-15'
      />
    </div>
  );
}

export default Header
