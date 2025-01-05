"use client"

import { Timeline } from '@/components/polaris/Timeline'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Polaris from "../../public/PolarisLogo.svg"
import { timelineData } from '@/data/timeline';
import { ChaptersCard } from '@/components/polaris/ChaptersCard';
import { Chapters } from '@/data/chapters';
import Sponsores from '@/components/polaris/Sponsores';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !timelineData) {
    return null;
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <Image
          src={Polaris}
          className='py-4'
          alt='Polaris'
          width={500}
        />
      </div>
      <div className='flex flex-col gap-4'>
      <Timeline data={timelineData} />
        <div>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-6xl font-semibold'>CHAPTERS EVENTS</h1>
            <ChaptersCard testimonials={Chapters} />
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-6xl font-semibold'>SPONSORS</h1>
            <Sponsores />
          </div>
        </div>
      </div>
    </div>
  )
}

// export default page
