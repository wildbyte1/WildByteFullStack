import React from 'react'
import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
      <img
        onClick={() => navigate('/')}
        src={assets.Original_Logo}
        alt='WildByte Logo'
        className='w-32 sm:w-44 cursor-pointer'
      />
      <button
        onClick={() => navigate('/admin')}
        className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-text px-10 py-2.5'
      >
        Login
        <img src={assets.arrow} className='w-3 bg-text' alt='arrow' />
      </button>
    </div>
  );
}

export default Navbar
