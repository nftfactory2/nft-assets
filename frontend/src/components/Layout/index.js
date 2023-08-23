import './index.scss';

import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <div className='layout'>
        <Header />
        <div className='page'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
