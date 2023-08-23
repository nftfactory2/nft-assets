import React from 'react';
import Head from 'next/head';

const AppStrings = {
  APP_NAME: 'Stickerkeen',
};

interface MetaDescriptionProps {
  title: string;
}

const MetaDescription: React.FC<MetaDescriptionProps> = ({ title }) => {
  return (
    <Head>
      <title>
        {title} - {AppStrings.APP_NAME}
      </title>
      <meta name='description' content={`${title} - ` + AppStrings.APP_NAME} />
      <meta
        name='twitter:description'
        content={`${title} - ${AppStrings.APP_NAME}`}
      />
      <meta
        property='og:description'
        content={`${title} - ${AppStrings.APP_NAME}`}
      />
      <meta property='og:title' content={`${title}`} />
    </Head>
  );
};

export default MetaDescription;
