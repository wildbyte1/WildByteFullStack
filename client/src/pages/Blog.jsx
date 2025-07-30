import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, blog_data, comments_data } from '../assets/assets.js';
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer.jsx';
import Loader from '../components/Loader.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import toast from 'react-hot-toast';

const Blog = () => {

  const {id} = useParams()

  const {axios} = useAppContext()

  const [data, setData] = useState(null)
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogData = async () => {
    try {
      const {data} = await axios.get(`/api/blog/${id}`)
      data.success ? setData(data.blog) : toast.error(data.message)
    } catch (error) {
      toast.error(data.message);
    }
  }
    

  const fetchComments = async () => {
    try {
      const {data} = await axios.post('/api/blog/comments', {blogId: id})
      if (data.success){
        setComments(data.comments)
      }else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
  }}

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });
      if (data.success) {
        toast.success(data.message)
        setName('')
        setContent('')
    }else{
        toast.error(data.message)
    } 
  }catch (error) {
      toast.error(error.message)
    }
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
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-accent bg-secondary-background font-medium text-accent'>
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
            {comments.map((item, index) => (
              <div
                key={index}
                className='relative bg-white border border-secondary max-w-xl p-4 rounded text-accent'
              >
                <div className='flex items-center gap-2 mb-2 '>
                  <img src={assets.user_icon} alt='user icon' className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Comment Section */}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your comment</p>
          <form
            onSubmit={addComment}
            className='flex flex-col items-start gap-4 max-w-lg'
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
              placeholder='Name'
              required
              className='w-full p-2 border border-gray-300 rounded outline-none'
            />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder='Comment'
              className='w-full p-2 border border-gray-300 rounded outline-none h-48'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-accent text-white rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'
            >
              Submit
            </button>
          </form>
        </div>

        {/* Share Buttons */}
        <div className='my-24 max-w-3xl mx-auto'>
  <p className='font-semibold my-4 text-accent'>Share this article on social media</p>
  <div className='flex gap-4'>
    {[assets.facebook_icon, assets.instagram_icon, assets.x_twitter, assets.tiktok_icon, assets.email_icon].map((icon, index) => (
      <div
        key={index}
        className='w-12 h-12 flex items-center justify-center rounded-full bg-secondary-background shadow-md hover:scale-105 transition'
      >
        <img src={icon} alt='social icon' className='w-6 h-6 object-contain' />
      </div>
    ))}
  </div>
</div>
          </div>
          <Footer />
        </div>
  ) : (
    <Loader />
  );
}

export default Blog
