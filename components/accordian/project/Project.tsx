'use client';
import React from 'react';
import styles from './style.module.css';

interface ProjectProps {
  index: number;
  title: string;
  tag: string;
  date: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}

const formatDate = (date: string) => {
  const [day, month, year] = date.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export default function Project({ index, title, tag, date, setModal }: ProjectProps) {

  // const isMobileView = useIsPhone();

  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className={`${styles.project}`}
    >
      <div className="w-full grid md:grid-cols-3 gap-4 items-center">
        {/* Title */}
        <div className="text-left">
          <h2 className="text-2xl font-fontbo text-[#2f4230]">{title}</h2>
        </div>

        {/* Tag */}
        <div className="text-left">
          <div
            className={`${styles.tag} px-3 w-fit py-1 rounded-full font-medium font-kalam text-sm outline outline-2 outline-[#2f4230]/30`}
          >
            {tag}
          </div>
        </div>

        {/* Date */}
        <div className="text-left">
          <div className={`${styles.date} text-base text-[#2f4230] font-fontbo`}>{formatDate(date)}</div>
        </div>
      </div>
   
      <div className={`${styles.arrow} p-2 rounded-full flex justify-center`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2f4230"
          className="size-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </div>
    </div>
  );
}
