import React from 'react';
import Image from 'next/image';
import { orbitron } from '@/fonts/fonts';

interface NotificationTileProps {
  title: string;
  message: string;
  time: string;
  source: string;
}

const NotificationTile: React.FC<NotificationTileProps> = (props) => {
  const { title, message, time, source } = props;
  return (
    <div className='flex justify-between items-center mb-10 cursor-pointer'>
      <div className='flex gap-4'>
        <Image src={source} height={50} width={50} alt={'profile-image'} />
        <div className='flex flex-col'>
          <h4 className={`${orbitron.className} text-xl`}>{title}</h4>
          <p className='text-md'>{message}</p>
        </div>
      </div>

      <p className='text-gray-400'>{time}</p>
    </div>
  );
};

export default NotificationTile;
