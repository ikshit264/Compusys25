"use client"

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import LetterAnimation from './LetterAnimation'
import AnimatedGrid from './AnimatedGrid'
import { useIsPhone } from '@/hooks/IsPhone'

interface HeroProps {
  onAnimationComplete?: () => void;
}

export default function Hero({ onAnimationComplete }: HeroProps) {
  const isMobileView = useIsPhone();

  const parentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [isExpanded, setIsExpanded] = useState(true);
  // State to store heights of each div
  const [parentHeight, setParentHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [progress, setProgress] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);
  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewportHeight(window.innerHeight);
  //   };
  
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const parentHeight1 = parentRef.current ? parentRef.current.clientHeight : 0;
  // const imageHeight1 = imageRef.current ? imageRef.current.clientHeight : 0;

  // // Use vh for mobile responsiveness
  // const mobileImageHeight = isExpanded ? '0vh' : `${Math.max(parentHeight1 - imageHeight1, 0)}px`;

  // Get the heights of the divs once they have been rendered
  useEffect(() => {
    if (parentRef.current) {
      setParentHeight(parentRef.current.offsetHeight);
    }
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
    if (contentRef.current) {
      setContentHeight(contentRef.current.offsetHeight);
    }

  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
      if (onAnimationComplete) {
        onAnimationComplete(); // Notify parent when animation is complete
      }
    }, 8000);
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 75);
    
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onAnimationComplete]);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering until `isClient` is true
  }

  return (
    !isMobileView ? (
      <motion.div
        initial={{ padding: 200 }}
        animate={{ padding: isExpanded ? 200 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className='min-h-screen h-screen flex items-center relative'
      >
        {/* Progress animation */}
        <motion.div
          className="absolute z-10 right-0 bottom-2 flex items-center justify-center rounded-xl w-[250px] bg-transperant text-[#ffce70] text-7xl font-bold font-fontfo"
          initial={{ opacity: 1 }}
          animate={progress === 100 ? { opacity: 0 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.span
            key="progress"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {progress}%
          </motion.span>
        </motion.div>

        <div className={`grid grid-cols-2 gap-6 p-6 text-center items-center  rounded-2xl ${isExpanded ? "bg-[#f5f0e1]" : ""}`}>
          {/* Left Column */}
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 0.1,
              delay: 0.7,
            }}
            className="bg-[#2f4230] rounded-3xl p-12 flex flex-col justify-center text-[#161111] h-full"
          >
            <div className="flex flex-col gap-6 items-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-semibold flex gap-2">
                  <span className='flex items-center gap-2 justify-center font-kalam text-[#91c085]'>
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="size-[1.12rem] bg-[#f0e7ce] mb-2 rounded-full"
                    />
                    <LetterAnimation
                      text={`COMPUSYS`}
                      delay={2}
                      duration={0.8}
                      effect="slideRight"
                      staggerChildren={0.05}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    />
                  </span>
                  <motion.span
                    className="font-bold text-[#91c085] font-kalam"
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 8 }}
                  >
                    में आपका स्वागत है।
                  </motion.span>
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-tighter text-[#b2d99a] font-fontbo">
                <LetterAnimation
                  text={`Experience the fusion of Technology and Culture`}
                  delay={3}
                  duration={0.8}
                  effect="slideUp"
                  staggerChildren={0.05}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                />
              </h1>
              <p className="text-lg leading-tight font-fontfo text-[#f0e7ce]">
                <LetterAnimation
                  delay={4}
                  duration={0.8}
                  effect="slideUp"
                  staggerChildren={0.02}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  text='At Compusys, experience the perfect fusion of the latest technologies and timeless cultural influences, driving new possibilities for tomorrow.'
                />
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="relative flex items-center rounded-3xl overflow-hidden h-full">
            <AnimatedGrid
              finalImage="/assets/images/manzar.jpg"
              images={[
                "/assets/images/part_1.png",
                "/assets/images/part_2.png",
                "/assets/images/part_3.png",
                "/assets/images/part_4.png",
                "/assets/images/part_5.png",
                "/assets/images/part_6.png",
                "/assets/images/part_7.png",
                "/assets/images/part_8.png",
                "/assets/images/part_9.png"
              ]}
            />
          </div>
        </div>
      </motion.div>
    ) : (
      <div ref={parentRef} className='p-4'>
        <motion.div
          initial={{ padding: 20 }}
          animate={{ padding: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`min-h-screen relative flex flex-col items-center`}
        >
          {/* Image animation */}
          <div ref={imageRef}>  
            <motion.div
              className="w-full rounded-3xl overflow-hidden"
              initial={{ y: 0 }}
              animate={{
                // y: mobileImageHeight,
                // y: isExpanded ? 0 : `${parentHeight - imageHeight}px`, // Use viewport height
                y : isExpanded ? 0 : 325,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <AnimatedGrid
                finalImage="/assets/images/manzar.jpg"
                images={[
                  "/assets/images/part_1.png",
                  "/assets/images/part_2.png",
                  "/assets/images/part_3.png",
                  "/assets/images/part_4.png",
                  "/assets/images/part_5.png",
                  "/assets/images/part_6.png",
                  "/assets/images/part_7.png",
                  "/assets/images/part_8.png",
                  "/assets/images/part_9.png",
                ]}
              />
            </motion.div>
          </div>

          {/* Content div slides in while image slides down */}
          <div ref={contentRef}>
            <motion.div
              className="w-full bg-[#2f4230] rounded-3xl p-6 flex flex-col justify-center text-[#161111]"
              initial={{ x: "2000px", y: "-100%" }}
              animate={{ x: isExpanded ? "2000px" : 0, y: `${-imageHeight}px` }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <div className="flex flex-col gap-4 items-center text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xl font-semibold flex gap-2">
                    <span className="flex items-center gap-2 justify-center font-kalam text-[#91c085]">
                      <span className="size-4 mb-[0.30rem] bg-[#f0e7ce] rounded-full" />
                      COMPUSYS
                    </span>
                    <span className="font-bold font-kalam text-[#91c085]">में आपका स्वागत है।</span>
                  </span>
                </div>
                <h1 className="text-3xl font-bold leading-tight text-[#b2d99a] font-fontbo">
                  Experience the fusion of Technology and Culture
                </h1>
                <p className="text-base leading-tight text-[#f0e7ce] font-fontfo">
                  At Compusys, experience the perfect fusion of the latest technologies
                  and timeless cultural influences, driving new possibilities for
                  tomorrow.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  );
}
