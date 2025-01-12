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
    <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16'>
      <div className="w-full max-w-4xl mb-8 md:mb-16">
        <Image
          src={Polaris}
          className='w-full h-auto max-h-[85vh] object-contain'
          alt='Polaris'
          width={700}
          height={700}
        />
      </div>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-center pt-3'>TIMELINE</h1>
      <div className='flex flex-col gap-8 md:gap-16 w-full'>
        <Timeline data={timelineData} />
        <div className='space-y-16'>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-center'>CHAPTERS EVENTS</h1>
            <ChaptersCard testimonials={Chapters} />
          </div>
          <div className='flex flex-col gap-4 items-center'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-center'>SPONSORS</h1>
            <Sponsores />
          </div>
        </div>
      </div>
    </div>
  )
}

