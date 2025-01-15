"use client"

import { useEffect, useState } from 'react';
import Member from '@/data/members.json';
import PersonCard from '@/components/team/PersonCard';
import Skeleton from '@/components/skeleton';
import AnimatedText from '@/components/animatedText';
import MemberHero from '@/components/team/MemberHero';


const Members = () => {
  const [loading, setLoading] = useState(true);
  const [client, setclient] = useState(false);

  const First = Member.slice(0, 2);
  const Leads = Member.slice(2, 15);
  const second = Member.slice(15, 17);
  const coLeads = Member.slice(17, 38);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
    setclient(true)

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

  if(!client){
    return null;
  }

  return (
    <div className=' flex flex-col items-center justify-center gap-28 md:gap-20 sm:gap-10 overflow-hidden' >


      <MemberHero />

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