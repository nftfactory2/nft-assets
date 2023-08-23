import React from 'react';
import SideBar from '@/common/navs/side/SideNavigation';
import NavTools from '@/common/navs/NavTools';

const Analytics: React.FC = () => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='flex-1 flex-col px-4 py-10'>
        <div className='mx-5'>
          <NavTools title='Analytics' isMenu={true} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
