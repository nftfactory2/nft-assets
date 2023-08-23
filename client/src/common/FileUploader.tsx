import React, { forwardRef, Ref, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface FileUploaderProps {}

const FileUploader = forwardRef(
  (props: FileUploaderProps, ref: Ref<HTMLInputElement>) => {
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      console.log(file);
    };

    return (
      <div
        className='flex flex-col items-center justify-center mb-5'
        style={{
          background: 'rgba(255, 255, 255, 0.04)',
          height: '7.5rem',
          borderRadius: '0.75rem',
          boxShadow: '-2px 0px 4px 0px rgba(255, 199, 44, 0.08)',
          backdropFilter: 'blur(4px)',
          cursor: 'pointer',
        }}
        // onClick={() => ref?.current.click()}
      >
        <input
          type='file'
          className='hidden'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          ref={ref}
        />

        <div className='mb-2'>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ fontSize: '4rem', fontWeight: 300 }}
          />
        </div>
        <p className='text-opacity-25'>Upload Image</p>
      </div>
    );
  },
);

FileUploader.displayName = 'FileUploader';
export default FileUploader;
