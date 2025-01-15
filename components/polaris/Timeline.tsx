"use client";
import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {


  return (
    <div
      className="w-full bg-background font-sans md:px-10"
    >
      <div className="relative mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-32 w-full items-center"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28  self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 absolute left-3 md:left-3 rounded-full bg-slate-600/30 dark:bg-black flex items-center justify-center shadow-sm shadow-black">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 shadow-sm shadow-[#000000]/40" />
              </div>

              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-semibold text-black ">
                {item.title}
              </h3>
            </div>

            <div className="relative flex flex-col pl-20 pr-4 md:pl-4 w-full text-slate-900 items-center">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-black">
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
