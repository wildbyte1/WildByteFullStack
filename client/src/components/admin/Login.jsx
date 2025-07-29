import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';

const Login = () => {

  const {axios, setToken} = useAppContext();

  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const {data} = await axios.post('/api/admin/login', {email, password})

      if(data.success){
        setToken(data.token)
        localStorage.setItem('token', data.token)
        axios.defaults.headers.common['Authorization'] = data.token;
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }
    }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary shadow-xl shadow-accent rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-3xl font-bold'>
              <span className='text-text'>Admin</span> Login
            </h1>
            <p className='font-light'>
              Enter your credentials to access the admin panel
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className='mt-6 w-full sm:max-w-md text-gray-600'
          >
            <div className='flex flex-col'>
              <label> Email </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type='email'
                required
                placeholder='Enter email'
                className='border-b-2 border-gray-300 p02 outline-none mb-6'
              />
            </div>

            <div className='flex flex-col'>
              <label> Password </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
                required
                placeholder='Enter password'
                className='border-b-2 border-gray-300 p02 outline-none mb-6'
              />
            </div>
            <button
              type='submit'
              className='w-full py-3 font-medium bg-secondary text-accent rounded cursor-pointer hover:bg-primary transition-all'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
