import React from 'react';
import Banner from './components/homepage/Banner';
import Books from '@/app/components/homepage/Books';

const page = () => {
  return (
    <div>
      <Banner/>
      <Books/>
    </div>
  );
};

export default page;