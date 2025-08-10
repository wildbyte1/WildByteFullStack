import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// ✅ Automatically choose backend URL based on environment
const API_BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3000'
    : 'https://wild-byte-server.vercel.app';

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.withCredentials = true; // ✅ Send cookies / credentials

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('');

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get('/api/blog/all');
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common['Authorization'] = `${storedToken}`;
    }
  }, []);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
