"use client"

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import LetterAnimation from './LetterAnimation'
import AnimatedGrid from './AnimatedGrid'

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 9000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 80);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ padding: 200 }}
      animate={{ padding: isExpanded ? 200 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className='min-h-screen h-screen flex items-center relative'
    >
      <motion.div
        className="absolute z-10 right-0 bottom-0 flex items-center justify-center rounded-xl w-[250px] bg-black/70 text-white text-7xl font-bold"
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

      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 text-center bg-white rounded-2xl ${isExpanded ? "border-2 border-black" : ""}`}>
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
          className="bg-[#fe4a22] rounded-3xl p-12 flex flex-col justify-center text-[#161111] h-full"
        >
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-semibold flex gap-2">
                <span className='flex items-center gap-1 justify-center'>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="size-5 bg-black rounded-full"
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
                  className="font-bold"
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 8 }}
                >
                  में आपका स्वागत है।
                </motion.span>
              </span>
            </div>
            <h1 className="text-5xl font-bold leading-tighter">
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
            <p className="text-lg leading-tight">
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
        <div className="relative rounded-3xl overflow-hidden h-full">
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
  );
}