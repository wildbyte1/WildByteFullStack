import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data } from '../assets/assets.js';
import Navbar from '../components/Navbar';
import Moment from 'moment';

const Blog = () => {

  const {id} = useParams()

  const [data, setData] = useState(null)

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id)
    setData(data) 

  }

  useEffect(()=>{
    fetchBlogData()
  },[])

  return data ? (
    <div className='relative'>
      <img
        src={assets.gradient}
        alt=''
        className='absolute top-0 left-1/2 -translate-x-1/2 -z-10 opacity-50 w-full max-w-6xl'
      />

      <Navbar />

      <div className='text-center mt-20 text-gray-600'>
        <p className='text-text py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-accent'>{data.title}</h1>
        <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-accent bg-primary font-medium text-text'>Vesey Victoria</p>
      </div>

      <div></div>
    </div>
  ) : (
    <div>Loading... </div>
  );
}

export default Blog
