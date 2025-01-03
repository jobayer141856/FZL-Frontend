import React from 'react';
import PageTitle from '@/components/page-title';
import PageContainer from '@/components/page-container';
import Content from './_components/content';

const Page = () => {
  return (
    <div>
      <PageTitle title='Products' />
      <PageContainer>
        <Content />
      </PageContainer>
    </div>
  );
};

export default Page;
