import React, { useRef } from 'react'
import { assets } from '../assets/assets.js';
import { useAppContext } from '../context/AppContext.jsx';

const Header = () => {

const {setInput, input} = useAppContext()
const inputRef = useRef()

const onSubmitHandler = async (e)=>{
  e.preventDefault();
  setInput(inputRef.current.value)
}

const onClear = ()=>{
  setInput('')
  inputRef.current.value = ''
}
  return (
    <div className='relative mx-8 sm:mx-16 xl:mx-24'>
      {/* Background Gradient Image */}
      <img
        src={assets.gradient}
        alt=''
        className='absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-20 w-full max-w-6xl pointer-events-none'
      />

      <div className='items-center justify-center text-center pt-1 pb-10 relative z-10'>
        {/* Banner */}
        <div className='inline-flex items-center justify-center gap-4 px-3 py-1.5 mb-4 border border-primary/40 bg-primary/50 rounded-full text-sm text-text'>
          <p>New: AI feature integrated</p>
          <img src={assets.star_solid} className='w-2.5' alt='' />
        </div>

        {/* Main Heading */}
        <h1 className='text-3xl sm:text-5xl font-semibold sm:leading-16 text-accent'>
          Welcome to <span className='text-secondary'>Wild Byte</span>
        </h1>

        {/* Description */}
        <p className='my-6 sm:my-8 max-w-2xl mx-auto text-xs sm:text-base text-gray-500'>
          Wild Byte is an interactive platform that combines natural history,
          technology, and storytelling to help people of all ages connect with
          nature. Through stories of wildlife, it fosters curiosity and respect
          for the natural world, making learning about the wild both engaging
          and accessible.
        </p>

        {/* Search Form */}
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-secondary bg-white rounded overflow-hidden'>
          <input ref={inputRef}
            type='text'
            placeholder='Search for blogs'
            required
            className='w-full pl-4 outline-none'
          />
          <button
            type='submit'
            className='bg-text text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer'
          >
            Search
          </button>
        </form>
        <div className='text-center'>
          {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>}
        </div>
      </div>
    </div>
  );
};

export default Header;
