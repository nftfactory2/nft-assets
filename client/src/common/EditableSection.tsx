'use client';
import { poppins } from '@/fonts/fonts';
import React, { useEffect, useState } from 'react';
interface Props {
  title: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  style?: object;
  type?: string;
  subTitle?: string;
  inputBackgroundColor?: string;
}

const EditableSection: React.FC<Props> = (props) => {
  const {
    title,
    placeholder,
    onChangeHandler,
    style,
    type = 'text',
    subTitle,
    inputBackgroundColor,
  } = props;
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (onChangeHandler) {
        onChangeHandler(value);
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  return (
    <div
      className={`${poppins.className} mb-4 flex flex-col`}
      style={{
        ...style,
      }}
    >
      <h3 className={`block text-white text-sm font-bold mb-2`}>{title}</h3>
      {subTitle && <p className='text-sm text-gray-700'>{subTitle}</p>}
      <input
        className='shadow appearance-none rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3'
        id={type}
        type={type ?? 'text'}
        placeholder={placeholder}
        value={value}
        style={{
          background: inputBackgroundColor,
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default EditableSection;
