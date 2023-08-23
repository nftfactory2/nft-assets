'use client';
import Button from '@/common/Button';
import ArtworkDetailsForm from '@/components/Forms/ArtworkDetails';
import GetStarted from '@/components/Forms/GetStarted';
import {
  SecondSectionForm,
  SectionOneForm,
} from '@/components/Forms/ProjectDetails';
import SalesPlanForm from '@/components/Forms/SalesPlan';
import TeamInformationForm from '@/components/Forms/TeamInformation';
import React, { useState } from 'react';

const Apply: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 6) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const isLastPage = currentPage === 6;

  const previewCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <GetStarted nextPage={handleNextPage} />;
      case 2:
        return <SectionOneForm />;
      case 3:
        return <SecondSectionForm />;
      case 4:
        return <TeamInformationForm />;
      case 5:
        return <ArtworkDetailsForm />;
      case 6:
        return <SalesPlanForm />;
      default:
        return;
    }
  };
  return (
    <div className='flex flex-col justify-start h-screen mt-10 mb-10'>
      <div className='w-4/5'>{previewCurrentPage()}</div>
      {currentPage > 1 && (
        <div className='flex justify-end w-4/5 mt-5'>
          <Button
            handleClick={handleNextPage}
            className='bg-gradient-linear px-6 py-3'
          >
            {isLastPage ? <p>Submit</p> : <p> Proceed</p>}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Apply;
