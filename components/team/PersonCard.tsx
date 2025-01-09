"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsPhone } from "@/hooks/IsPhone";

interface PersonCardProps {
  imageSrc: string;
  name?: string;
  role?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
imageSrc , name , role
}: PersonCardProps) => {
  
  const isMobileView = useIsPhone();

  return (
    <div className="flex items-center justify-center p-4 ">
      <motion.div
        initial={{ scale: 1 }}
        className="z-10 relative flex flex-col items-center justify-center m-auto
          h-[200px] w-[180px] scale-100 p-[5px]
          sm:h-[330px] sm:w-[250px] sm:scale-110
          md:h-[370px] md:w-[270px] md:scale-120
          lg:h-[370px] lg:w-[270px] lg:scale-150 group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
      >
        <div className="absolute top-0 flex h-full w-[90%] flex-col items-center gap-[10px] overflow-hidden  border-none bg-[#b2d99a] shadow-lg  hover:shadow-gray-400">
          <div className={`relative ${isMobileView ?  'h-full' : 'h-[80%]'} w-full transform transition-transform duration-500 ease-in-out group-hover:scale-105`}>
            <Image
              src={imageSrc}
              alt={`${name}'s profile`}
              fill
              className=" absolute object-cover mt-2 mx-auto"
              // sizes={}
              // sizes="(max-width: 640px) 10px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 230px "
              priority
            />
          </div>
          <div className="absolute bottom-0 z-[3] flex w-full flex-col items-center justify-center  backdrop-blur-sm p-2 bg-[#2f4230]">
            <h2 className="text-sm font-bold text-slate-100 max-sm:text-[1.8vh] sm:text-base md:text-lg">
              {name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-teal-300">
              {role}
            </p>
          </div>
        </div>

        {/* Gradient Background with Dynamic Animation */}
        <div className="absolute -bottom-[30px] z-[-1] flex h-[60%] w-full items-center justify-center overflow-hidden rounded-[2px] transition-transform duration-500">


          <div
            className={`absolute h-[200%] w-[150%] m-auto animate-[spin_5s_linear_infinite] bg-gradient-to-r 
              from-[rgb(12,117,56)] 
              via-[rgb(25,180,89)_35%,rgb(255,255,255)_3%,rgb(255,255,255)_60%,rgb(255,255,255)] 
              to-[rgb(255,255,255)]`}
          />

          <div
            className="absolute h-[98%] w-[98.5%] backdrop-blur bg-[#ffffff] transition-transform duration-500 
            hover:shadow-[0_0_5px_1px_rgba(35,222,219,0.587)]
            sm:hover:shadow-[0_0_8px_1px_rgba(35,222,219,0.587)]
            md:hover:shadow-[0_0_10px_1px_rgba(35,222,219,0.587)]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PersonCard;