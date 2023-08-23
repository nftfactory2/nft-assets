import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import app_logo from '@/assets/images/app_logo.png';
import app_name from '@/assets/images/app_name.png';

interface Props {
  height: number;
  only?: boolean;
}

const Logo: React.FC<Props> = (props) => {
  const { height } = props;
  return (
    <Link href='/'>
      <div className='flex justify-content-between align-items-center gap-2'>
        {[app_logo, app_name].map((img) => {
          let imageName = `${img}`;
          return (
            <Image
              key={imageName}
              alt={imageName}
              src={img}
              sizes='100vw'
              style={{
                width: 'auto',
                height: height + 'px' ?? 'auto',
              }}
            />
          );
        })}
      </div>
    </Link>
  );
};

export default Logo;
