'use client';
import { orbitron } from '@/fonts/fonts';
import EditableSection from '@/common/EditableSection';
import { useState } from 'react';

export const SectionOneForm = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [whitePaperText, setWhitePaperText] = useState<string>('');
  const [goalText, setGoalText] = useState<string>('');

  return (
    <div className='my-10'>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Project Details
      </h2>
      <EditableSection
        title={'Project Title'}
        placeholder={'Title'}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = ' ';
          }
          setTitle(value);
        }}
      />
      <EditableSection
        title={'Project Description'}
        placeholder={'Description'}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = ' ';
          }
          setDescription(value);
        }}
        subTitle="Share your project's Pitch, Concept, Utility & Major partners involved."
      />
      <EditableSection
        title={'Whitepaper'}
        placeholder={'Start typing'}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = ' ';
          }
          setWhitePaperText(value);
        }}
        subTitle='Will be attached to launchpad'
      />
      <EditableSection
        title={'Goal'}
        placeholder={'Start typing'}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = ' ';
          }
          setGoalText(value);
        }}
      />
    </div>
  );
};

export const SecondSectionForm = () => {
  const [discordLink, setDiscordLink] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [discordID, setDiscordID] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Project Details
      </h2>
      <EditableSection
        title={'Discord Link'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setDiscordLink(value);
        }}
        subTitle='Will be linked with launchpad'
      />
      <EditableSection
        title={'Project Website'}
        placeholder={'https:###'}
        onChangeHandler={(value: string): void => {
          setWebsite(value);
        }}
        subTitle='Will be linked with launchpad'
      />
      <EditableSection
        title={'Discord ID'}
        placeholder={'UserID:###'}
        onChangeHandler={(value: string): void => {
          setDiscordID(value);
        }}
        subTitle='Please provide discord ID of main contact'
      />

      <EditableSection
        title={'Email Address'}
        placeholder={'launchpad@mail.com'}
        onChangeHandler={(value: string): void => {
          setEmail(value);
        }}
        subTitle='Please provide Email address of main contact'
      />
    </div>
  );
};
