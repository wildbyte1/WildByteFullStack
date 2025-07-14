import React from 'react'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div>
        <div>
            <p>New: AI feature integrated</p>
        </div>
      </div>
      <img src={assets.gradient} alt='' className='absolute -top-50 -z-1 opacity-50' />
    </div>
  )
}

export default Header
