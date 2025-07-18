import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets.js';
import Navbar from '../components/Navbar';
import Moment from 'moment';

const Blog = () => {

  const {id} = useParams()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([]);

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id)
    setData(data) 

  }

  const fetchComments = async () => {
    setComments(comments_data)
  }

  useEffect(()=>{
    fetchBlogData()
    fetchComments()
  },[])

  return data ? (
    <div className='relative w-full'>
      <img
        src={assets.gradient}
        alt=''
        className='absolute top-0 left-0 -z-10 opacity-40 w-full h-55 object-cover'
      />

      <Navbar />

      <div className='text-center mt-20 text-gray-600'>
        <p className='text-text py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-text'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-accent bg-background font-medium text-text'>
          Vesey Victoria
        </p>
      </div>

      <div className='mx-5 max-w-3xl md:mx-auto my-10 mt-2'>
        <img src={data.image} alt='' className='rounded-3xl mb-5' />

        <div
          className='rich-text max-w-3xl mx-auto'
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        {/* comments section */}
    <div className='mt-14 mb-10 max-w-3xl mx-auto'>
      <p className='font-semibold mb-4'>Comments ({comments.length})</p>
      <div className='flex flex-col gap-4'>
        {comments.map((item, index)=>(
          <div key={index} className='relative bg-secondary-background border border-secondary max-w-xl p-4 rounded text-text'>
            <div className='flex items-center gap-2 mb-2 '>
              <img src={assets.user_icon} alt='user icon' className='w-6' />
              <p className='font-medium'>{item.name}</p>
            </div>
            <p className='text-sm max-w-md ml-8'>{item.content}</p>
            <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>
          </div>
        ))}
      </div>
    </div>

      </div>
    </div>
  ) : (
    <div>Loading... </div>
  );
}

export default Blog
