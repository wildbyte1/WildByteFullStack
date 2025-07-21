import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import Quill from 'quill';

const AddBlog = () => {

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async ()=>{

  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }

  useEffect(()=>{
    //Initiate Quill only once
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  },[])


  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'
    >
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded '>
        <p>Upload thumbnail</p>
        <label htmlFor='image'>
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt='Upload Area'
            className='mt-2 h-16 rounded cursor-pointer'
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            hidden
            required
          />
        </label>

        <p className='mt-4'>Blog title</p>
        <input
          type='text'
          placeholder='Type here'
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <p className='mt-4'>Subtitle</p>
        <input
          type='text'
          placeholder='Type here'
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

      <p className='mt-4'>Blog Description</p>
      <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
        <div ref={editorRef}></div>
        <button type='button' onClick={generateContent} className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-accent/70 px-4 py-1.5 rounded hover:underline cursor-pointer'>Generate with AI</button>

      </div>

      </div>
    </form>
  );
}

export default AddBlog
