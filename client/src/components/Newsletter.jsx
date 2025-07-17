import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold text-accent'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-text pb-8'>Subscribe to get the latest stories from the wild and exclusive content. </p>
      <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
        <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type='text' placeholder='Enter your email' required/>
        <button type='submit' className='md:px-12 px-8 h-full text-white bg-text hover:bg-secondary transition-all cursor-pointer rounded-md'>Subscribe</button>
      </form>
    </div>
  )
}

export default Newsletter
