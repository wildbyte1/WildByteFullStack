import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from 'motion/react';

const BlogList = () => {

    const [menu, setMenu] = useState('All');

  return (
    <div>
      <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer text-text px-3 ${
                menu === item && 'text-white px-5 pt-0.5'
              }`}>
              {item}
              {menu === item && (
                <motion.div 
               layoutId='underline'
               transition={{type: 'spring', stiffness: 500, damping: 30}}
               className='absolute left-0 right-0 top-0 h-7 -z-1 bg-secondary rounded-full'></motion.div>
              )}
              
            </button>
          </div>
        ))}
      </div>
      <div>{/* Blog cards will be rendered here */}</div>
    </div>
  );
}

export default BlogList
