'use client';
import React, { useState } from 'react';
import { orbitron } from '@/fonts/fonts';
import EditableSection from '@/common/EditableSection';
import TextArea from '@/common/TextArea';

const TeamInformationForm: React.FC = () => {
  const [members, setMembers] = useState<string>('');
  const [twitterUrl, setTwitterUrl] = useState<string>('');
  const [linkedUrl, setLinkedinUrl] = useState<string>('');

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Team Information
      </h2>
      <TextArea
        title={'Members & their Roles'}
        placeholder={'Start Typing'}
        onChangeHandler={(value: string): void => {
          setMembers(value);
        }}
        subTitle='Please provide the names each team member and their roles'
      />
      <TextArea
        title={'Twitter'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setTwitterUrl(value);
        }}
        subTitle='Please provide the twitter link for each team member'
      />
      <TextArea
        title={'LinkedIn'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setLinkedinUrl(value);
        }}
        subTitle='Please provide the Linkedin link for each team member'
      />
    </div>
  );
};

export default TeamInformationForm;
