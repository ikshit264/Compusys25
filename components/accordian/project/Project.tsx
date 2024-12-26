'use client';
import React from 'react'
import styles from './style.module.css';

interface ProjectProps {
    index: number;
    title: string;
    setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
  }

export default function Project({ index, title, setModal }: ProjectProps) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2 className='text-lg'>{title}</h2>
            <div className="border-2 border-dashed border-gray-800 p-2   rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
        </div>
    )
}

// 'use client';
// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import styles from './style.module.css';

// export default function Index({ index, title, setModal }) {
//   const arrowRef = useRef(null); // Reference for the arrow
//   const divRef = useRef(null); // Reference for the dashed border div

//   useEffect(() => {
//     // Set the initial state of the div and arrow
//     gsap.set(arrowRef.current, { rotation: 0 }); // Arrow starts with no rotation
//     gsap.set(divRef.current, {
//       rotation: 0, // Div starts with no rotation
//       backgroundColor: 'transparent', // Default background color
//     });
    
//   }, []);

//   const handleMouseEnter = () => {
//     setModal({ active: true, index });

//     // Animate arrow (clockwise rotation)
//     gsap.to(arrowRef.current, {
//       rotation: 360, // Rotate the arrow fully clockwise
//       duration: 1,
//       ease: 'power1.inOut',
//     });

//     // Animate dashed border div (counter-clockwise rotation and glowing bg color change)
//     gsap.to(divRef.current, {
//       rotation: -200, // Rotate the div counter-clockwise
//       duration: 1,
//       backgroundColor: '#00BFFF', // Bright glowing blue
//       ease: 'power1.inOut',
//     });
//     // setModal({ active: false, index });
//   };

//   const handleMouseLeave = () => {
//     setModal({ active: false, index });

//     // Reset arrow rotation
//     gsap.to(arrowRef.current, {
//       rotation: 0, // Reset arrow rotation
//       duration: 0.5,
//       ease: 'power1.inOut',
//     });

//     // Reset dashed border div rotation and background color
//     gsap.to(divRef.current, {
//       rotation: 0, // Reset div rotation
//       duration: 0.5,
//       backgroundColor: 'transparent', // Reset to transparent
//       ease: 'power1.inOut',
//     });
//   };

//   return (
//     <div
//       className={styles.project}
//     >
//       <h2>{title}</h2>
//       <div
//         ref={divRef}
//         className="border-2 border-dashed border-gray-500 p-5 rounded-full flex items-center justify-center"
//       >
//         <svg
//           ref={arrowRef}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }
