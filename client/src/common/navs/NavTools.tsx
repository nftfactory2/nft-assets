"use client"
import Image from 'next/image';
import Button from '../Button';
import { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/react'
import { getAccount } from '@wagmi/core'
import { orbitron } from '@/fonts/fonts';

interface NavToolsProps {
  title?: string;
  isMenu?: boolean;
}

const NavTools: React.FC<NavToolsProps> = (props) => {
  const [buttonText, setButtonText] = useState('Wallet Connect');
  const { open } = useWeb3Modal();
  const { title, isMenu = false } = props;
  const { address, isConnected } = getAccount()


  useEffect(()=>{
    if (isConnected) {
      // @ts-ignore
      const short = `${address.slice(0, 5)}...${address.slice(-4)}`
      setButtonText(short)
    } else {
      setButtonText("Wallet Connect")
    }
    }, [isConnected, address])
 

  return (
    <>
      {isMenu ? (
        <div className='flex justify-between'>
          <h2 className={`${orbitron.className} text-2xl`}>{title}</h2>
          <div className='flex flex-row gap-4 items-center'>
            <button className='bg-gradient-linear rounded-md px-3 py-2 text-sm'
            onClick={async () => {  await open()  }}
            >
              {buttonText}
            </button>
            <Image
              height={25}
              width={25}
              src={'/profile.svg'}
              alt={'profile'}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      ) : (
        <>
            <button className='bg-gradient-linear rounded-md px-3 py-2 text-sm'
            onClick={async()=>{await open()}}
            >
            {buttonText}
          </button>
          <Image
            height={25}
            width={25}
            src={'/profile.svg'}
            alt={'profile'}
            style={{ cursor: 'pointer' }}
          />
        </>
      )}
    </>
  );
};

export default NavTools;
