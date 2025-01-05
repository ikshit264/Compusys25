"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnimatedText = () => {
  const techNames = [
    { name: "Team", color: "#2f4230" },
    { name: "COMPUSYS", color: "#ffce70" },
  ];

  const { scrollYProgress } = useScroll();

  // Precompute transforms directly in the body
  const xTransforms = [
    useTransform(scrollYProgress, [0, 1], [1500, 0]),
    useTransform(scrollYProgress, [0, 1], [-1500, 0]),
  ];

  const opacityTransforms = [
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    useTransform(scrollYProgress, [0, 1], [0, 1]),
  ];

  return (
    <section className="m-10">
      {techNames.map((tech, index) => (
        <motion.div
          key={index}
          className="mb-8 flex items-center justify-center gap-4 text-slate-700"
          aria-label={`Animated text for ${tech.name}`}
          style={{
            x: xTransforms[index],
            opacity: opacityTransforms[index],
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            ease: "easeInOut",
          }}
        >
          <span
            style={{ color: tech.color }}
            className="text-8xl max-sm:text-7xl font-extrabold uppercase tracking-tighter"
          >
            {tech.name}
          </span>
        </motion.div>
      ))}
    </section>
  );
};

export default AnimatedText;
