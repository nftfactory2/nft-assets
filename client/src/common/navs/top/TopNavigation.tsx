import app_logo from '@/assets/images/app_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavAside from '../NavTools';

const TopNavigation = () => {
  const navItems = [
    {
      name: 'Market Place',
      link: '/marketplace',
    },
    {
      name: 'Launchpad',
      link: '/launchpad',
    },
    {
      name: 'Collections',
      link: '/collections',
    },
  ];
  return (
    <div
      className='bg-header flex justify-between items-center px-14'
      style={{
        padding: '0.8rem 1.5rem',
        backgroundColor: '#1B0A1A',
      }}
    >
      <div className='flex items-center gap-4'>
        <div>
          <Image src={app_logo} alt={'app_logo'} height={40} width={40} />
        </div>
        {navItems.map(({ name, link }) => (
          <Link href={link} key={name}>
            <div>{name}</div>
          </Link>
        ))}
      </div>
      <div className='flex gap-4 items-center'>
        <NavAside />
      </div>
    </div>
  );
};

export default TopNavigation;
