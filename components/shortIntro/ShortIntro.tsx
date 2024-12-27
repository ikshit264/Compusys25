"use client";

import React from "react";
import ImageFloat from "./ImageFloat";
import { useIsPhone } from "@/hooks/IsPhone";

const ShortIntro = () => {
  const isMobileView = useIsPhone();

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-around p-8 mt-12">
        {!isMobileView && (
          <ImageFloat
            image1Start={{ top: "5%", left: "5%" }}
            image2Start={{ bottom: "30%", right: "10%" }}
          />
        )}
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
            image1Start={{ top: "10%", left: "50%" }}
            image2Start={{ bottom: "30%", right: "70%" }}
          />
        )}
      </div>
    </div>
  );
};

export default ShortIntro;
