import Card from '@/common/card';
import { orbitron, poppins } from '@/fonts/fonts';
import Image from 'next/image';
import React from 'react';
import TopNavigation from '@/common/navs/top/TopNavigation';
import profile from '@/assets/images/profile.png';

const Profile: React.FC = () => {
    return (
        <>
            <TopNavigation />
            <div className={`${orbitron.className} px-10`}>
                <div className='flex flex-col' style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(10, 4, 9, 1) 100%)',
                }}>
                    <Image
                        src={profile}
                        alt="user img_profile"
                        className='rounded-full mb-4'
                        height={150}
                        width={150} />
                    <div className={`${poppins.className} flex justify-between items-center`}>
                        <p className='text-2xl font-light'>Username</p>
                        <div className='flex flex-row gap-2'>
                            <Image
                                src='/pen-edit.svg'
                                alt='edit-profile'
                                height={20}
                                width={20} />
                            <span className='text-primary'>Edit Profile</span>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-5'>
                        {['/discord.svg', '/twitter.svg'].map(item => (
                            <Image
                                key={item}
                                src={`${item}`}
                                alt='social icon'
                                height={30}
                                width={30}
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                </div>
                <div className='mt-8 w-3/4'>
                    <h2 className='text-2xl mb-4'>My Collections</h2>
                    <div className='grid grid-cols-3 gap-6'>
                        <Card source={`/rectangle.png`} title={'Cake Shop NFTs'} price={'0.05 ETH'} />
                        {[
                            'Pie NFTs',
                            'Sweet slice NFTs',
                            'Burger Fac NFTs',
                            'Pasteries NFTs',
                            'Cake Fac NFTs'
                        ].map((title, index) => (
                            <Card
                                key={index}
                                source={`/rectangle.png`}
                                title={title}
                                price={'0.05 ETH'} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile; 