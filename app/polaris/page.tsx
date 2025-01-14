"use client"

import { Timeline } from '@/components/polaris/Timeline'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Polaris from "../../public/PolarisLogo.svg"
import { motion } from "framer-motion";
import { timelineData } from '@/data/timeline';
import { ChaptersCard } from '@/components/polaris/ChaptersCard';
import { Chapters } from '@/data/chapters';
import Sponsores from '@/components/polaris/Sponsores';
import bird from "../../public/assets/polaris/video3.gif";
import { useIsPhone } from '@/hooks/IsPhone';

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
    const isMobileView = useIsPhone();

  const circularKeyframes = {
    x: [isMobileView ? -50 : -100, 1800], // Circular motion
    y: [isMobileView ? 10 : 100, -800],  // Circular motion
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !timelineData) {
    return null;
  }

  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 '>
      <div className="w-full max-w-4xl mb-8 md:mb-16">
        <Image
          src={Polaris}
          className='w-full h-auto max-h-[85vh] object-contain'
          alt='Polaris'
          width={700}
          height={700}
        />
        {!animationComplete && (
          <motion.div
            className="h-[2vh] w-full absolute bottom-0 -left-[25vh] max-md:-left-[25vh] max-sm:-left-[10vh] max-sm:bottom-[40vh]"
            initial={{
              scale: 1, // Start small
              opacity: 0,
            }}
            animate={{
              x: circularKeyframes.x, // Circular motion
              y: circularKeyframes.y, // Circular motion
              opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
              scale: [2, 2.5, 3, 5, 5, 4, 3],
              rotate: [0, -10, -5], // Fade in and fade out
            }}
            transition={{
              duration: 10, // Animation duration
              ease: "easeInOut", // Smooth easing
            }}
            onAnimationComplete={() => setAnimationComplete(true)} // Callback when animation is done
            style={{
              position: "absolute",
              width: 100,
              height: 100,
            }}
          >
            <Image
              src={bird}
              className="py-4"
              alt="Bird"
              width={300}
              height={300}
            />
          </motion.div>
        )}
      </div>
      <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-center pt-3'>TIMELINE</h1>
      <div className='flex flex-col gap-8 md:gap-16 w-full'>
        <Timeline data={timelineData} />
        <div className='space-y-16'>
          <div className='flex flex-col gap-10 items-center'>
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
