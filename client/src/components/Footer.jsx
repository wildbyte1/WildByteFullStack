import React from 'react'
import { assets, footer_data } from '../assets/assets.js'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
        <div>
          <img
            src={assets.Transparent_Logo}
            alt='Wild Byte logo'
            className='w-32 sm:w-44'
          />
          <p className='max-w-[410px] mt-6'>
            Wild Byte is an interactive, full-stack web platform that blends
            natural history, technology, and storytelling to help people of all
            ages connect with the natural world. Through immersive content,
            community-contributed stories, and educational tools, Wild Byte
            makes learning about nature engaging and accessible. Whether you're
            a curious child, an aspiring naturalist, or a lifelong explorer,
            Wild Byte invites you to experience the wild through shared voices
            and digital discovery.
          </p>
        </div>

        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
            {footer_data.map((section, index)=> (
                <div key={index}>
                    <h3>{section.title}</h3>
                    <ul>
                        {section.links.map((link, i)=>(
                            <li key={i}>
                                <a href='#'>{link}</a>
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
