import React from 'react'
import { assets, footer_data } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary'>
      <div className='flex flex-col md:flex-row items-stretch justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div className='flex flex-col justify-between h-full max-w-[410px]'>
          <img
            src={assets.Transparent_Logo}
            alt='Wild Byte logo'
            className='w-32 sm:w-36'
          />
          <p className='mt-1'>
            Wild Byte is an interactive platform that blends natural history,
            technology, and storytelling to help people of all ages connect
            with—and grow respect for—the natural world. Through
            community-driven stories and engaging educational tools, Wild Byte
            invites learners to explore the wild through shared voices and
            digital discovery.
          </p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5 self-stretch'>
          {footer_data.map((section, index) => (
            <div key={index} className='min-w-[140px]'>
              <h3 className='font-semibold text-base text-text md:mb-5 mb-2'>
                {section.title}
              </h3>
              <ul className='text-sm space-y-1'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href='#' className='hover:underline transition'>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>
        Copyright 2025 © Wild Byte - All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer
