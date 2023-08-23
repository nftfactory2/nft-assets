import Button from '@/common/Button';
import Image from 'next/image';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { orbitron } from '@/fonts/fonts';

const ConfirmationModal = () => {
  return (
    <div className='flex justify-center relative'>
      <div
        className='w-3/5 flex justify-center flex-col items-center pt-14 pb-5'
        style={{
          background:
            'linear-gradient(150deg, rgba(255, 199, 44, 0.16) 0%, rgba(19, 7, 18, 1) 100%)',
        }}
      >
        {/* <div className='absolute top-5 right-10'>
          <FontAwesomeIcon icon={faClose} className='text-primary text-xl' />
        </div> */}
        <h2 className={`${orbitron.className} text-2xl`}>
          Congralutaions It&apos;s Yours!
        </h2>
        <p>Your mint is confirmed-you officialy own a Burger fac Nft</p>

        <div>
          <Link
            href={'/'}
            className='flex justify-center items-center gap-2 p-3 text-primary'
          >
            <p>View-On Explorer</p>
            <FontAwesomeIcon icon={faExternalLink} />
          </Link>
        </div>

        <Button className='flex justify-center items-center gap-2 bg-gradient-linear px-5 py-2'>
          <span>Share on Twitter</span>
          <Image
            src='/twitter.svg'
            alt='Twitter Logo'
            className='light:invert'
            width={20}
            height={20}
            priority
          />
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
