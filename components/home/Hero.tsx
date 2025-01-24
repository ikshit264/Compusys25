/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import LetterAnimation from './LetterAnimation'
import AnimatedGrid from './AnimatedGrid'
import { useIsPhone } from '@/hooks/IsPhone'

export interface HeroProps {
  onAnimationComplete?: () => void;
  showAnimations: boolean;
}

export default function Hero({ onAnimationComplete, showAnimations }: HeroProps) {
  const isMobileView = useIsPhone();


  const [isExpanded, setIsExpanded] = useState(true);
  // State to store heights of each div
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
      if (onAnimationComplete) {
        onAnimationComplete(); // Notify parent when animation is complete
      }
    }, isMobileView ? 5000 : 6000);
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);


    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onAnimationComplete, isMobileView]);


  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Avoid rendering until `isClient` is true
  }

  return (
    !isMobileView ? (
      <motion.div
        initial={showAnimations ? { padding: 200 } : { padding: 0 }}
        animate={showAnimations ? { padding: isExpanded ? 200 : 0 } : { padding: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        className='min-h-screen h-screen flex items-center relative transition-transform'
      >
        {/* Progress animation */}
        {showAnimations && (
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
        )}

        <div className={`grid grid-cols-2 gap-6 p-6 text-center items-center  rounded-2xl ${isExpanded ? "bg-[#f5f0e1]" : ""}`}>
          {/* Left Column */}
          <motion.div
            initial={showAnimations ? { x: -1000 } : { x: 0 }}
            animate={showAnimations ? { x: 0 } : { x: 0 }}
            transition={showAnimations ? {
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 0.1,
              delay: 0.7,
            } : { duration: 0 }}
            className="bg-[#2f4230] rounded-3xl p-12 flex flex-col justify-center text-[#161111] h-full"
          >
            <div className="flex flex-col gap-6 items-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-semibold flex gap-2">
                  <span className='flex items-center gap-2 justify-center font-kalam text-[#91c085]'>
                    <motion.span
                      initial={showAnimations ? { scale: 0 } : { scale: 1 }}
                      animate={showAnimations ? { scale: 1 } : { scale: 1 }}
                      transition={showAnimations ? { duration: 1, delay: 1 } : { duration: 0 }}
                      className="size-[1.12rem] bg-[#f0e7ce] mb-2 rounded-full"
                    />
                    {showAnimations ? (
                      <LetterAnimation
                        text={`COMPUSYS`}
                        delay={2}
                        duration={0.8}
                        effect="slideRight"
                        staggerChildren={0.05}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      />
                    ) : (
                      <span>COMPUSYS</span>
                    )}
                  </span>
                  <motion.span
                    className="font-bold text-[#91c085] font-kalam"
                    initial={showAnimations ? { opacity: 0, x: 0 } : { opacity: 1, x: 0 }}
                    animate={showAnimations ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={showAnimations ? { duration: 1, delay: 6 } : { duration: 0 }}
                  >
                    में आपका स्वागत है।
                  </motion.span>
                </span>
              </div>
              <h1 className="text-5xl font-bold leading-tighter text-[#b2d99a] font-fontbo">
                {showAnimations ? (
                  <LetterAnimation
                    text={`Experience the fusion of Technology and Culture`}
                    delay={3}
                    duration={0.8}
                    effect="slideUp"
                    staggerChildren={0.05}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  />
                ) : (
                  <span>Experience the fusion of Technology and Culture</span>
                )}
              </h1>
              <p className="text-lg leading-tight font-fontfo text-[#f0e7ce]">
                {showAnimations ? (
                  <LetterAnimation
                    delay={4}
                    duration={0.7}
                    effect="slideUp"
                    staggerChildren={0.02}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    text='At Compusys, experience the perfect fusion of the latest technologies and timeless cultural influences, driving new possibilities for tomorrow.'
                  />
                ) : (
                  <span>At Compusys, experience the perfect fusion of the latest technologies and timeless cultural influences, driving new possibilities for tomorrow.</span>
                )}
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="relative flex items-center rounded-3xl overflow-hidden h-full">
            <AnimatedGrid
              AnimationCompleted={!showAnimations}
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
      <div className='p-4 max-h-[900px]'>
        {/* Progress animation */}
        {showAnimations && (
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
        )}
        <motion.div
          initial={showAnimations ? { padding: 20 } : { padding: 0 }}
          animate={showAnimations ? { padding: isExpanded ? 20 : 0 } : { padding: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={`min-h-screen relative flex flex-col items-center`}
        >
          {/* Image animation */}
          <motion.div
            initial={showAnimations ? { height: "100vh" } : { height: "auto" }}
            animate={showAnimations ? { height: isExpanded ? "100vh" : "50vh" } : { height: "auto" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full"
          >
            <motion.div
              className="w-full h-full rounded-3xl overflow-hidden"
              transition={showAnimations ? {
                duration: 1,
                ease: "easeInOut",
              } : { duration: 0 }}
            >
              <AnimatedGrid
                AnimationCompleted={!showAnimations}
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
          </motion.div>

          {/* Content div slides in while image slides up */}
          <motion.div
            className={`w-full bg-[#2f4230] rounded-3xl p-6 mt-3 flex flex-col justify-center text-[#161111] ${showAnimations ? 'hidden' : ''}`}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-4 items-center text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-semibold flex gap-2">
                  <span className="flex items-center gap-2 justify-center font-kalam text-[#91c085]">
                    <span className="flex size-4 mb-[0.30rem] bg-[#f0e7ce] rounded-full" />
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
        </motion.div>
      </div >
    )
  );
}

