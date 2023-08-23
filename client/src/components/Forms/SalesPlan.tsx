import { orbitron } from '@/fonts/fonts';
import EditableSection from '@/common/EditableSection';
import React, { useState } from 'react';

const SalesPlanForm: React.FC = () => {
  const [planText, setPlanText] = useState<string>('');
  const [preSaleText, setPreSaleText] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Sales plan
      </h2>
      <EditableSection
        title={'Marketing Plan'}
        placeholder={'Start typing'}
        onChangeHandler={(value: string): void => {
          setPlanText(value);
        }}
        subTitle='Please provide information on project marketing plan'
      />

      <EditableSection
        title={'Are you interested in presale'}
        placeholder={'Start typing'}
        onChangeHandler={(value: string): void => {
          setPreSaleText(value);
        }}
        subTitle='This is a tool that allows you to sell prior to mint to help the supporter get access to the project'
      />

      <h1>More Info</h1>
      <EditableSection
        title={''}
        placeholder={''}
        onChangeHandler={(value: string): void => {
          setAdditionalInfo(value);
        }}
        subTitle='Please provide any additional information'
      />
    </div>
  );
};

export default SalesPlanForm;
