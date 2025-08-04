import React, { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/assets.js';
import BlogTableItem from '../../components/admin/BlogTableItem.jsx';
import { useAppContext } from '../../context/AppContext.jsx';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  })

  const { axios } = useAppContext()

  const fetchDashboardData = async () => {
    try {
      const {data} = await axios.get('/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    } catch (error) {
     toast.error(error.message) 
    }
  }

  useEffect(() => {
    fetchDashboardData()
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 bg-primary'>
      <div className='flex flex-wrap gap-4'>
  {/* Blog Card */}
  <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
    <img src={assets.list_icon} alt="" className='w-6 h-6 object-contain' />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
      <p className='text-gray-400 font-light'>Blogs</p>
    </div>
  </div>

  {/* Comments Card */}
  <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
    <img src={assets.comments_icon} alt="" className='w-6 h-6 object-contain' />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
      <p className='text-gray-400 font-light'>Comments</p>
    </div>
  </div>

  {/* Drafts Card */}
  <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
    <img src={assets.dashboard_icon} alt="" className='w-6 h-6 object-contain' />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
      <p className='text-gray-400 font-light'>Drafts</p>
    </div>
  </div>

  {/* Latest Blogs (on new line) */}
  <div className='w-full mt-6 mb-4'>
    <div className='flex items-center gap-3 text-gray-600'>
      <img src={assets.latest_blogs} alt="" className='w-5 h-5 object-contain' />
      <p>Latest Blogs</p>
    </div>
  </div>
</div>


        <div className='relative max-w-4xl overflow-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='text-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>
                  {' '}
                  #
                </th>
                <th scope='col' className='px-2 py-4'>
                  {' '}
                  Blog Title{' '}
                </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>
                  {' '}
                  Date{' '}
                </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>
                  {' '}
                  Status{' '}
                </th>
                <th scope='col' className='px-2 py-4'>
                  {' '}
                  Actions{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => {
                return (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboardData}
                    index={index + 1}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default Dashboard;
