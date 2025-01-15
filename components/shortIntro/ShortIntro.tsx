"use client";

import React from "react";
import ImageFloat from "./ImageFloat";
import { useIsPhone } from "@/hooks/IsPhone";

const imagePaths = [
  "CSPL.jpg",
  "Gate_polaris.jpg",
  "Manzar_boys.jpg",
  "Oat.jpg",
  "Orphinage.JPG",
];

const ShortIntro = () => {
  const isMobileView = useIsPhone();

  return (
    <div>
      <div
        className={`flex w-full items-center justify-around p-8 mt-12 ${
          !isMobileView ? "flex-row" : "flex-col"
        }`}
      >
        <div className={`flex`}>
          {/* Render the first pair of images */}
          <ImageFloat
            image1Start={{
              top: isMobileView ? "-10%" : "5%",
              left: isMobileView ? "20%" : "5%",
              duration: 15,
              src: `${imagePaths[0]}`,
            }}
            image2Start={{
              bottom: isMobileView ? "20%" : "5%",
              right: isMobileView ? "0%" : "5%",
              duration: 10,
              src: `${imagePaths[1]}`,
            }}
          />
          {/* Conditionally render additional images for mobile */}
          {isMobileView && (
            <ImageFloat
              image1Start={{
                top: "30%",
                left: "40%",
                duration: 9,
                src: `${imagePaths[2]}`,
              }}
              image2Start={{
                bottom: "75%",
                right: "50%",
                duration: 8,
                src: `${imagePaths[3]}`,
              }}
            />
          )}
        </div>
        {/* Center text content */}
        <div>
          <div className="flex justify-center flex-col items-center text-[#161111] text-center">
            <h2 className="text-4xl font-bold mb-2">
              Let&apos;s make our world cleaner and Greener!
            </h2>
            <p className="text-center text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, distinctio!
            </p>
          </div>
        </div>
        {/* Render another pair of images for non-mobile */}
        {!isMobileView && (
          <ImageFloat
            image1Start={{
              top: "30%",
              left: "50%",
              duration: 9,
              src: `${imagePaths[4]}`,
            }}
            image2Start={{
              bottom: "75%",
              right: "50%",
              duration: 8,
              src: `${imagePaths[3]}`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ShortIntro;
