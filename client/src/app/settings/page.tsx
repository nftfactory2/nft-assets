'use client';

import profile from '@/assets/images/profile.png';
import Button from '@/common/Button';
import EditableSection from '@/common/EditableSection';
import TextArea from '@/common/TextArea';
import TopNavigation from '@/common/navs/top/TopNavigation';
import { orbitron } from '@/fonts/fonts';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [username, setUsername] = useState<string>();
  const [bio, setBio] = useState<string>();
  const [email, setEmail] = useState<string>();

  return (
    <>
      <TopNavigation />
      <div className='w-3/5 ml-10'>
        <div
          className='flex justify-between items-center flex-wrap'
          style={{
            background:
              'linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(10, 4, 9, 1) 100%)',
          }}
        >
          <h2 className={`${orbitron.className} text-2xl`}>Edit Profile</h2>
          <div className='flex flex-row items-center w-2/5 gap-2'>
            <Image
              src={profile}
              alt='user img_profile'
              className='rounded-full'
              height={150}
              width={150}
            />
            <div>
              <p className={`${orbitron.className} text-lg font-light`}>
                Edit profile picture
              </p>
              <Image src='/camera.svg' alt='camera' height={20} width={20} />
            </div>
          </div>
        </div>
        <EditableSection
          title={'Username'}
          placeholder={'Enter username'}
          onChangeHandler={(value: string): void => {
            setUsername(value);
          }}
        />
        <TextArea
          title={'Bio'}
          placeholder={'Give brief description'}
          onChangeHandler={(value: string): void => {
            setBio(value);
          }}
        />
        <EditableSection
          title={'E-mail Address'}
          placeholder={'Enter email address'}
          onChangeHandler={(value: string): void => {
            setEmail(value);
          }}
        />

        <h2 className={`${orbitron.className} text-primary mb-3 mt-2`}>
          Socials
        </h2>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <Image
              src={'/discord.svg'}
              alt='Discord Logo'
              className='light:invert'
              width={20}
              height={20}
              priority
            />
            <span>Discord</span>
            <FontAwesomeIcon icon={faLink} />
          </div>

          <div className='flex items-center gap-2'>
            <Image
              src='/twitter.svg'
              alt='Twitter logo'
              className='light:invert'
              width={20}
              height={20}
              priority
            />
            <span>Twitter</span>
            <FontAwesomeIcon icon={faLink} />
          </div>
        </div>

        <div className='flex justify-end mt-10'>
          <Button
            className='px-6 py-3'
            style={{
              border: '2px solid transparent',
              borderImage: 'linear-gradient(to right, #702D6C, #FFC72C) 1',
            }}
          >
            Done
          </Button>
        </div>
      </div>
    </>
  );
};

export default Settings;
