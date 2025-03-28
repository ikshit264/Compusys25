import React from 'react'
import Links from './Links';
import { FaEnvelope, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';
import ImageSlider from './ImageSlider';

const Footer = () => {
  const linksData = [
    { label: 'Instagram', url: 'https://www.instagram.com/cse.rbu/', icon: <FaSquareInstagram />, target: '_blank' },
    { label: 'Email', url: 'mailto:csecompusys@rbunagpur.in', icon: <FaEnvelope /> },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/cse_rbu', icon: <FaLinkedin />, target: '_blank' },
    { label: 'YouTube', url: 'https://youtube.com/@cse_rbu', icon: <FaYoutube />, target: '_blank' },
  ];

  const images = [
    '/assets/images/i01.jpg',
    '/assets/images/i02.jpg',
    '/assets/images/i03.jpg',
    '/assets/images/i04.jpg',
  ];

  return (
    <footer className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-32 py-12 gap-4'>
        <div className='bg-[#2f4230] p-4 sm:p-6 md:p-8 lg:p-12  lg:col-span-2 text-[#b2d99a] rounded-3xl flex flex-col gap-4 sm:gap-6 md:gap-8 order-2 md:order-1'>
            <div className="w-full space-y-4 sm:space-y-6 md:space-y-0 md:flex md:flex-row md:gap-6 lg:gap-12 md:items-center">
                <div className="max-w-lg space-y-2 sm:space-y-3 md:space-y-4 ">
                    <h3 className='font-fontbo text-xl text-start  md:text-3xl'>Shri Ramdeobaba College of Engineering and Management</h3>
                    <h2 className='font-fontfo text-start text-sm sm:text-base md:text-lg text-[#f0e7ce]'>Department of Computer Science Engineering and Emerging Technologies</h2>
                </div>
                <Links links={linksData} />
            </div>
            <div className='w-full h-24 sm:h-28 md:h-32 lg:h-36 mt-4 md:mt-0'>
              <svg className="w-full h-full" width="1165" height="148" viewBox="0 0 1165 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M104 34.8L89.2 41.8C86.8 28 74.4 18 58.6 18C40 18 22 31.8 22 53C22 73 37.8 86 61.4 86C76.2 86 90 81 97.6 72.6L111.6 84.8C99.2 96.2 81 104 59.2 104C24.6 104 0 84.2 0 51.8C0 19.4 24.6 0 57 0C87.2 0 104 17.2 104 34.8Z" fill="#40573D"/>
                <path d="M148 52.4C148 73 164.4 86 189.6 86C216 86 233 71.8 233 52.4C233 33 216 18 189.6 18C164.4 18 148 31.8 148 52.4ZM255 50.2C255 80.4 230.6 104 189 104C151 104 126 84.2 126 51.8C126 19.4 151 0 190.4 0C230.4 0 255 19.8 255 50.2Z" fill="#40573D"/>
                <path d="M304 84V102H284V2.00001H304L303.6 34L304.4 34.2C311.4 14 325.2 0 349 0C366.2 0 384 8.4 390.6 29.2H391.4C398.2 11 412.4 0 438.2 0C460.8 0 484 13.8 484 50V102H464V50C464 28.8 451.2 18 434.6 18C408.2 18 394.2 32.4 394.2 71V102H373.8V50C373.8 28.8 361 18 344.2 18C318 18 304 45.4 304 84Z" fill="#40573D"/>
                <path d="M541 86V148H521V2.00001H541L540.6 40L541.4 40.2C550.6 14.8 569 0 593.2 0C622.8 0 644.2 20.2 644.2 50.6C644.2 81.4 624.4 104 595 104C569.8 104 549 88.4 549 69.2L562.2 64C564.4 76.6 577.4 86 591.6 86C609.4 86 622.2 69.6 622.2 49C622.2 29.6 608.8 17.8 589.8 17.8C562.2 17.8 541 47.4 541 86Z" fill="#40573D"/>
                <path d="M766 10V2.00001H786V102H766L766.4 63.8H765.6C758.2 86.8 743.4 104 717 104C695.2 104 672 92.2 672 56V2.00001H692V56C692 77.2 705.6 86 720.4 86C751.2 86 766 48.6 766 10Z" fill="#40573D"/>
                <path d="M819.2 24V2.00001H906.8V18L836.2 16.6V17.4C867.4 26.8 913 40.4 913 70.6C913 95.4 882 104 858.8 104C830.8 104 811 91.6 811 74.4C811 59.8 825.2 48.8 843.8 48.8C846.4 48.8 848.6 49 850.6 49.2L849 61.6C839.2 61.6 833 67 833 73.4C833 82.2 844.6 86 859.2 86C873.6 86 891 82.2 891 68C891 43.2 838.4 34.6 819.2 24Z" fill="#40573D"/>
                <path d="M1028.8 2H1054.6L974 125.4L974.4 126.2L1020 124V142H944.8V128.8L976.4 88.6L976 87.8L965.4 88.2L922 2H946.2L981.8 78.4H982.6L1028.8 2Z" fill="#40573D"/>
                <path d="M1071.2 24V2.00001H1158.8V18L1088.2 16.6V17.4C1119.4 26.8 1165 40.4 1165 70.6C1165 95.4 1134 104 1110.8 104C1082.8 104 1063 91.6 1063 74.4C1063 59.8 1077.2 48.8 1095.8 48.8C1098.4 48.8 1100.6 49 1102.6 49.2L1101 61.6C1091.2 61.6 1085 67 1085 73.4C1085 82.2 1096.6 86 1111.2 86C1125.6 86 1143 82.2 1143 68C1143 43.2 1090.4 34.6 1071.2 24Z" fill="#40573D"/>
              </svg>
            </div>
        </div>
        <div className="w-full lg:col-span-1 rounded-3xl overflow-hidden h-64 sm:h-80 md:h-full order-1 md:order-2">
          <ImageSlider images={images} interval={3000} />
        </div>
    </footer>
  )
}

export default Footer