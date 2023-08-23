'use client';
import React, { useState, useEffect } from 'react';
import { poppins } from '@/fonts/fonts';

interface DropdownList {
  item: string[];
  title: string;
  subTitle?: string;
  onChangeHandler: (value: string | number) => void;
}

const DropdownSelect: React.FC<DropdownList> = ({
  item,
  title,
  subTitle,
  onChangeHandler,
}) => {
  const [value, setValue] = useState<string | number>('');
  useEffect(() => {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
  }, [value]);

  return (
    <div className={`${poppins.className} mb-5 flex flex-col`}>
      <h2 className='text-lg block text-white text-sm font-bold mb-2'>
        {title}
      </h2>
      {subTitle && <p className='text-sm text-gray-700'>{subTitle}</p>}
      <div className='mt-2'>
        <select
          value={value}
          placeholder='Select'
          name={title}
          className='p-3 border rounded-md w-full text-black'
          style={{ background: '#000' }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {item.length > 0 &&
            item.map((x, index) => (
              <option key={index} value={x} className='bg-black'>
                {x}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownSelect;
