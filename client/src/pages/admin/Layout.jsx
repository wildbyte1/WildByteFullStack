import React from 'react'
import { assets } from '../../assets/assets.js'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-secondary'>
        <img
          src={assets.Transparent_Logo}
          alt='Wild Byte Logo'
          className='h-20 sm:h-23 cursor-pointer object-contain '
          onClick={() => navigate('/')}
        />
        <button
          onClick={logout}
          className='text-sm px-8 py-2 bg-accent text-white rounded-full cursor-pointer'
        >
          Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
         <div>sidebar</div>
         <Outlet />
      </div>
    </>
  );
}

export default Layout
