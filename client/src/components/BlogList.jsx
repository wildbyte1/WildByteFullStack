import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'

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
                <div className='absolute left-0 right-0 top-0 h-7 -z-1 bg-secondary rounded-full'></div>
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
