"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedText = (): JSX.Element => {
  const componentRef = useRef(null);

  const techNames = [
    { name: "Team", color: "#2f4230" },
    { name: "COMPUSYS", color: "#ffce70" },
  ];

  const { scrollYProgress } = useScroll();

  // Apply scroll animation with a scrub-like effect by controlling transition
  const xTransforms = techNames.map((_, index) =>
    useTransform(
      scrollYProgress,
      [0, 1],
      [
        index % 2 === 0 ? 1500 : -1500,
        index % 2 === 0 ? -100 : 100,
      ]
    )
  );

  const opacityTransforms = techNames.map(() =>
    useTransform(scrollYProgress, [0, 1], [0, 1])
  );

  return (
    <section className="m-10" ref={componentRef}>
      {techNames.map((tech, index) => {
        const x = xTransforms[index];
        const opacity = opacityTransforms[index];

        return (
          <motion.div
            key={index}
            className={`mb-8 flex items-center justify-center gap-4 text-slate-700`}
            aria-label={tech.name}
            style={{
              x: x,
              opacity: opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              // Scrub-like behavior to ensure smooth transitions based on scroll
              ease: "easeInOut",
            }}
          >
            <span
              style={{ color: tech.color }}
              className="text-8xl  max-sm:text-7xl font-extrabold uppercase tracking-tighter"
            >
              {tech.name}
            </span>
          </motion.div>
        );
      })}
    </section>
  );
};

export default AnimatedText;
