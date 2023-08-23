import { orbitron, poppins } from '@/fonts/fonts';
import Button from '@/common/Button';
import React from 'react';

interface GetStartedProps {
  nextPage: () => void;
}

const GetStarted: React.FC<GetStartedProps> = ({ nextPage }) => {
  return (
    <div
      className={`flex justify-center items-center flex-col w-3/4 ml-5 h-screen text-center ${poppins.className} `}
    >
      <h3 className={`${orbitron.className} text-primary text-4xl mb-3`}>
        Mint Your NFTs
      </h3>
      <p className='mb-10'>
        Turn your digital products/services into unique NFTs with just a few
        clicks. Choose your preferred blockchain, set the supply, and define
        rarity to create captivating digital assets.
      </p>
      <div className='flex justify-around items-center w-full'>
        <Button
          className='bg-gradient-linear px-6 py-3 rounded-md'
          handleClick={nextPage}
        >
          Apply
        </Button>
        <Button
          className='px-6 py-3'
          as='link'
          href='/guide'
          style={{
            border: '2px solid transparent',
            borderImage: 'linear-gradient(to right, #702D6C, #FFC72C) 1',
          }}
        >
          Guide
        </Button>
      </div>
    </div>
  );
};

export default GetStarted;
