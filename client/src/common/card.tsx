import React from 'react';
import Image from 'next/image';

interface CardProps {
    source: string,
    title: string,
    price: string,
}

const Card: React.FC<CardProps> = (props) => {
    const { source, title, price } = props;
    return (
        <div
            style={{
                background: '#130712',
                borderRadius: "0.5rem",
                border: '1px solid #FFC72C'
            }}>
            <div>
                <Image
                    src={source}
                    alt={'collection'}
                    layout='responsive'
                    width={200}
                    height={200}
                    priority />
            </div>
            <div className='flex gap-2 tracking-wide p-3'>
                <h5>{title}</h5>
                <Image
                    src='/outline-badge.svg'
                    alt='outline-badge'
                    height={20}
                    width={20}
                    priority />
            </div>
            <div className='px-3 tracking-wide'>
                <p className='font-light text-sm'>Floor</p>
                <h6 className='mb-3'>{price}</h6>
            </div>
        </div>
    )
}

export default Card; 