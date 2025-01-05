"use client"

import { useEffect, useState } from 'react';
import Member from '@/data/members.json';
import PersonCard from '@/components/team/PersonCard';
import Skeleton from '@/components/skeleton';
import AnimatedText from '@/components/animatedText';
import LetterAnimation from '@/components/home/LetterAnimation';

const Members = () => {
  const [loading, setLoading] = useState(true);

  const First = Member.slice(0, 2);
  const Leads = Member.slice(2, 15);
  const second = Member.slice(15, 17);
  const coLeads = Member.slice(17, 38);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(loadingTimeout);
  }, []);

  const renderMembers = (members: typeof Member) => {
    return members.map((member, index) => (
      <div key={index}>
        {loading ? (
          <Skeleton />
        ) : (
          <PersonCard
            name={member.name}
            imageSrc={member.imageSrc}
            role={member.role}
          />
        )}
      </div>
    ));
  };

  return (
    <div className=' flex flex-col items-center justify-center gap-28 md:gap-20 sm:gap-10 overflow-hidden' >


      <h1 className="text-center text-slate-700 m-20 font-mono">
        <span className="whitespace-nowrap text-9xl font-bold uppercase max-md:text-8xl max-sm:text-7xl text-teal-600">
          <LetterAnimation
            text={`SUCCESS`}
            delay={0.5}
            duration={0.8}
            effect="slideRight"
            staggerChildren={0.02}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
        <span className="whitespace-nowrap flex items-center text-6xl md:text-5xl max-md:text-4xl max-sm:text-4xl font-light mt-2 text-lime-500">
          <LetterAnimation
            text='is&nbsp;built'
            delay={1}
            duration={0.1}
            effect="slideRight"
            staggerChildren={0.02}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />

          <LetterAnimation
            text='&nbsp;around'
            delay={1.7}
            duration={0.1}
            effect="slideRight"
            staggerChildren={0.06}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
        <span className="ml-[.6em] block text-9xl max-md:text-8xl max-sm:text-7xl font-extrabold uppercase mt-4 text-teal-600">
          <LetterAnimation
            text='TEAMS'
            delay={2.4}
            duration={0.2}
            effect="slideRight"
            staggerChildren={0.2}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
      </h1>

      <h1 className='mt-9 font-bold text-5xl text-center text-lime-500'>
        Our <span className=' text-teal-600'>Leads</span>
      </h1>
      <div className='flex flex-row flex-wrap justify-center pb-10 scale-[1.05] gap-36 max-md:gap-12 max-sm:gap-4'>
        {renderMembers(First)}
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {renderMembers(Leads)}
      </div>
      <h1 className='mt-9 font-bold text-5xl text-center text-lime-500'>
        Our <span className=' text-teal-600'>Co-Leads</span>
      </h1>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {renderMembers(second)}
      </div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {renderMembers(coLeads)}
      </div>

      <AnimatedText />

    </div>
  );
};

export default Members;
