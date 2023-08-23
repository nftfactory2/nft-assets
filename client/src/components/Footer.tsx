import Logo from '@/common/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '3rem 5rem',
        background:
          'linear-gradient(134deg, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.00) 100%)',
      }}
    >
      <div className='md:mb-5'>
        <Logo height={50} />
      </div>
      <div className='mt-2'>
        <h5 className='text-md text-primary'>Socials</h5>
        <p>nftfactory2@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
