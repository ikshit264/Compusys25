import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedGridProps {
  images: string[];
  finalImage: string;
}

const AnimatedGrid = ({ images, finalImage }: AnimatedGridProps) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isGapClosed, setIsGapClosed] = useState(false);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsGapClosed(true);
      setTimeout(() => {
        setIsAnimationComplete(true);
      }, 1000);
    }, 1000); // Add a delay to allow the gap-closing animation
  };

  return (
    <div className="">
      {!isAnimationComplete ? (
        <motion.div
          className={`h-full w-full ${isGapClosed ? 'gap-0' : 'gap-1'}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            transition: 'gap 0.4s ease-in-out',
          }}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={handleAnimationComplete}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full"
              variants={itemVariants}
            >
              <Image
                src={src}
                alt={`Grid part ${index + 1}`}
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          <Image
            src={finalImage}
            alt="Desert landscape"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}

      </div>
  );
};

export default AnimatedGrid;
