"use client";

import React from "react";
import ImageFloat from "./ImageFloat";
import { useIsPhone } from "@/hooks/IsPhone";

const ShortIntro = () => {
  const isMobileView = useIsPhone();

  return (
    <div>
      <div className={`flex w-full items-center justify-around p-8 mt-12 ${!isMobileView ? 'flex-row' : 'flex-col'}`}>
        <div className={`flex ${!isMobileView ? "" : ""}`}>
          {(
            <ImageFloat
              image1Start={{ top: isMobileView ? "-10%" : "5%", left: isMobileView ? "20%" : "5%", duration: 15 }}
              image2Start={{ bottom: isMobileView ? "20%" : "5%", right: isMobileView ? "0%" : "5%", duration: 10 }}
            />
          )}
          {isMobileView && (
            <ImageFloat
              image1Start={{ top: isMobileView ? "30%" : "30%", left: isMobileView ? "40%" : "5%", duration: 9 }}
              image2Start={{ bottom: isMobileView ? "75%" : "5%", right: isMobileView ? "50%" : "5%", duration: 8 }}
            />
          )}
        </div>
        <div>
          <div className="flex justify-center flex-col items-center text-[#161111] text-center">
            <h2 className="text-4xl font-bold mb-2 ">
              Let&apos;s make our world cleaner and Greener!
            </h2>
            <p className="text-center text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, distinctio!
            </p>
          </div>
        </div>
        {!isMobileView && (
          <ImageFloat
            image1Start={{ top: isMobileView ? "30%" : "30%", left: isMobileView ? "50%" : "5%", duration: 9 }}
            image2Start={{ bottom: isMobileView ? "75%" : "5%", right: isMobileView ? "50%" : "5%", duration: 8 }}
          />
        )}
      </div>
    </div>
  );
};

export default ShortIntro;
