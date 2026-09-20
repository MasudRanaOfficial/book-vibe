import React from 'react';
import Banner from './components/homepage/Banner';
import Books from '@/app/books/page';

const page = () => {
  return (
    <div>
      <Banner/>
      <Books/>
    </div>
  );
};

export default page;