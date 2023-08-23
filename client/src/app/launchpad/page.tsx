import Button from '@/common/Button';
import SideBar from '@/common/navs/side/SideNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Apply from './apply/page';
import NavTools from '@/common/navs/NavTools';

const LaunchPad = () => {
  return (
    <div className='flex min-h-screen'>
      <SideBar />
      <div className='flex-1 flex-col px-4 py-10'>
        <div className='mx-5'>
          <NavTools title='Launchpad' isMenu={true} />
        </div>
        <Apply />
      </div>
    </div>
  );
};

export default LaunchPad;
