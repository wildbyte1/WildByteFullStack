import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div>
      <NavLink>
        <img src={assets.home_icon} className='min-w-4 w-5' alt='' />
        <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>
    </div>
  )
}

export default Sidebar
