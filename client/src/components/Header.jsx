import React from 'react'
import { assets } from '../assets/assets.js'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='items-center justify-center text-center pt-1 pb-10'>
        <div className='inline-flex items-center justify-center gap-4 px-3 py-1.5 mb-4 border border-primary/40 bg-primary/50 rounded-full text-sm text-text'>
          <p>New: AI feature integrated </p>
          <img src={assets.star_solid} className='w-2.5' alt='' />
        </div>
        <h1 className='text-3xl sm:text-5xl font-semibold sm:leading-16 text-accent'>
          Welcome to <span className='text-secondary'>Wild Byte</span>
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text -xs text-gray-500'>
          Wild Byte is a full-stack platform that combines natural history,
          technology, and storytelling to help people of all ages connect with
          nature. Through interactive content and community-driven stories, it
          makes learning about the wild both engaging and accessible.
        </p>

        <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-secondary bg-white rounded overflow-hidden'>
            <input type="text" placeholder='Search for blogs' required className='w-full pl-4 outline-none' />
            <button type='submit' className='bg-text text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'>Search</button>
            
        </form>

      </div>
      <img
        src={assets.gradient}
        alt=''
        className='absolute -top-10 left-1/2 -translate-x-1/2 -z-10 opacity-15'
      />
    </div>
  );
}

export default Header
