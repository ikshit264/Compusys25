"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PersonCardProps {
  imageSrc?: string;
  name?: string;
  role?: string;
  index?: number;
}

const PersonCard: React.FC<PersonCardProps> = ({
  imageSrc = "/assets/images/Manzar.jpg",
  name = "John Doe",
  role = "Software Engineer",
  index = 1,
}) => {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 1 }}
        className="relative flex flex-col items-center justify-center m-auto
          h-[200px] w-[180px] scale-100 p-[5px]
          sm:h-[250px] sm:w-[200px] sm:scale-110
          md:h-[280px] md:w-[220px] md:scale-120
          lg:h-[300px] lg:w-[230px] lg:scale-150 group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        <div className="absolute top-0 flex h-full w-[90%] flex-col items-center gap-[10px] overflow-hidden rounded-lg border-none bg-green-400 shadow-lg">
          <div className="relative h-[80%] w-full transform transition-transform duration-500 ease-in-out group-hover:scale-110">
            <Image
              src={imageSrc}
              alt={`${name}'s profile`}
              fill
              className="absolute object-cover border-2 border-white"
              sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 230px"
              priority
            />
          </div>
          <div className="absolute bottom-0 z-[3] flex w-full flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-2">
            <h2 className="text-sm font-bold text-black sm:text-base md:text-lg">
              {name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-800">
              {role}
            </p>
          </div>
        </div>

        {/* Gradient Background with Dynamic Animation */}
        <div className="absolute -bottom-[30px] z-[-2] flex h-[60%] w-full items-center justify-center overflow-hidden rounded-[2px] transition-transform duration-500">
          <div
            className={`absolute h-[200%] w-[150%] m-auto bg-gradient-to-r 
            from-[rgb(12,117,56)] 
            via-[rgb(25,180,89)_35%,rgb(255,255,255)_36%,rgb(255,255,255)_60%,rgb(255,255,255)] 
            to-[rgb(255,255,255)]`}
            style={{ animation: `spin ${index % 3 + 2}s linear infinite`, }} // Apply 2-second delay here
          />
          <div
            className="absolute h-[98%] w-[98.5%] backdrop-blur bg-[#fefaef] transition-transform duration-500 
            hover:shadow-[0_0_5px_1px_rgba(35,222,219,0.587)_inset]
            sm:hover:shadow-[0_0_8px_1px_rgba(35,222,219,0.587)_inset]
            md:hover:shadow-[0_0_10px_1px_rgba(35,222,219,0.587)_inset]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PersonCard;
