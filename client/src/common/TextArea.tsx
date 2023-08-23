'use client';

import React, { useState, useEffect } from 'react';
import { poppins } from '@/fonts/fonts';

type Props = {
  title: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  style?: object;
  subTitle?: string;
  inputBackgroundColor?: string;
};

const TextArea: React.FC<Props> = (props) => {
  const { title, subTitle, placeholder, style } = props;

  const [value, setValue] = useState<string>('');

  return (
    <div
      className={`${poppins.className} mb-4 flex flex-col`}
      style={{
        ...style,
      }}
    >
      <h3 className={`block text-white text-sm font-bold mb-2`}>{title}</h3>
      {subTitle && <p className='text-sm text-gray-700'>{subTitle}</p>}
      <textarea
        className='shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
        rows={4}
        cols={50}
        maxLength={500}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextArea;
