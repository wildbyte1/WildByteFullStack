import React, { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/assets.js';
import BlogTableItem from '../../components/admin/BlogTableItem.jsx';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className='flex-1 p-4 md:p-10 bg-primary'>
      <div className='flex flex-wrap gap-4'>
        {[
          { icon: assets.list_icon, label: 'Blogs' },
          { icon: assets.blog_icon, label: 'Drafts' },
          { icon: assets.comment_icon, label: 'Comments' },
        ].map((item, index) => (
          <div
            key={index}
            className='flex items-center gap-4 bg-white p-4 min-w-[14rem] rounded shadow cursor-pointer hover:scale-105 transition-all'
          >
            <img
              src={item.icon}
              alt={item.label}
              className='w-6 h-6 object-contain'
            />
            <div>
              <p className='text-xl font-semibold text-gray-600'>
                {dashboardData.blogs}
              </p>
              <p className='text-text font-light'>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
        <img
          className='w-6 h-5 object-contain'
          src={assets.latest_blogs}
          alt=''
        />
        <p>Latest Blogs</p>
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
              return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index + 1}/>
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
