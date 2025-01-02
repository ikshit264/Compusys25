import PersonCard from '@/components/team/PersonCard';
import React from 'react';

const page = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="">
          <PersonCard/>
        </div>
      ))}
    </div>
  );
};

export default page;
