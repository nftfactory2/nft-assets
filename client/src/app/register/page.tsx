'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { orbitron, poppins } from '../../fonts/fonts';
import TopNavigation from '@/common/navs/top/TopNavigation';
import Footer from '@/components/Footer';

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    router.push('/launchpad', { scroll: false });
  };

  return (
    <>
      <TopNavigation />
      <div className='flex justify-center items-center h-screen md:mx-5'>
        <div>
          <h3
            className={`${orbitron.className} text-center text-primary font-orbitron text-4xl`}
          >
            Register
          </h3>
          <form onSubmit={handleSubmit} className={`${poppins.className} mt-5`}>
            <label className='text-md'>Brand name:</label>
            <input
              className='shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
              name='name'
              type='text'
              placeholder='Enter Brand name'
              value={formData.name}
              onChange={handleFieldChange}
            />

            <label className='text-md'>Email Address:</label>
            <input
              className='shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
              name='email'
              type='email'
              placeholder='Enter Email address'
              value={formData.email}
              onChange={handleFieldChange}
            />

            <button
              type='submit'
              className='bg-gradient-linear outline-none w-full p-3 mt-5 rounded-md'
              style={orbitron.style}
            >
              Connect Wallet
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
