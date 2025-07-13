import React from 'react'
import { assets } from '../assets/assets.js'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img src={assets.Original_Logo} alt='WildByte Logo' className='w-32 sm:w-44'/>
        <button>Login 
          <img src={assets.arrow} className='w-3' alt='arrow' />
        </button>
      
    </div>
  )
}

export default Navbar
