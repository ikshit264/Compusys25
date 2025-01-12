"use client";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {


  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
    >
      <div className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 w-full"
          >
            
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28  self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 shadow-black shadow-sm" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-semibold text-neutral-700 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-700 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
