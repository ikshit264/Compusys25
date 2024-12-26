import Image from 'next/image'

// export default function Hero() {
//     return (
//       <div className="min-h-screen text-center">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
//           {/* Left Column */}
//           <div className="bg-[#fe4a22] rounded-3xl p-12 flex flex-col justify-center text-[#161111]">
//             <div className='flex flex-col gap-6 items-center '>
//               <div className="flex items-center justify-center gap-2">
//                 <div className="size-5 bg-black rounded-full" />
//                 <span className="text-2xl font-semibold">COMPUSYS <span className='font-bold'>में आपका स्वागत हैं।</span></span>
//                 {/* <span className="font-bold text-2xl">
//                   COMPUSYS{' '}
//                   <span className="font-extrabold bg-gradient-to-r to-[--background] from-[#1b1a1f] bg-clip-text text-transparent">
//                     में आपका स्वागत है।
//                   </span>
//                 </span> */}
//               </div>
//               <h1 className="text-5xl font-bold leading-tighter">
//                 Experience the fusion of Technology and Culture
//               </h1>
//               <p className='text-lg leading-tight'>
//                 At Compusys, experience the perfect fusion of the latest technologies and timeless cultural influences, driving new possibilities for tomorrow.
//               </p>
//             </div>
//           </div>
  
//           {/* Right Column */}
//           <div className="relative rounded-3xl overflow-hidden">
//             <Image
//               src="/assets/images/manzar.jpg?height=600&width=800"
//               alt="Desert landscape"
//               width={800}
//               height={600}
//               className="w-full h-full object-cover"
//             />

//             {/* Bottom Section */}
//             {/* <div className="absolute bottom-0 right-0 flex justify-between items-end">
//               <div className="bg-[#0a0a0a] backdrop-blur-sm px-4 py-2 rounded">
//                 Join us in fighting environmental problems
//               </div>
//             </div> */}
//           </div>
//         </div>
  
//         {/* White Rectangle */}
//         {/* <div
//           className="h-20 w-28 rounded-t-3xl bg-[#0a0a0a] absolute left-1/2 top-[70%] transform -translate-x-1/2 -bottom-10 z-10"
//         ></div> */}
//       </div>
//     );
//   }
export default function Hero() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 h-screen gap-6 p-6 text-center">
      {/* Left Column */}
      <div className="bg-[#fe4a22] rounded-3xl p-12 flex flex-col justify-center text-[#161111] h-full">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center justify-center gap-2">
            <div className="size-5 bg-black rounded-full" />
            <span className="text-2xl font-semibold">
              COMPUSYS <span className="font-bold font-kalam">में आपका स्वागत है।</span>
            </span>
          </div>
          <h1 className="text-5xl font-bold leading-tighter">
            Experience the fusion of Technology and Culture
          </h1>
          <p className="text-lg leading-tight">
            At Compusys, experience the perfect fusion of the latest technologies and timeless cultural influences, driving new possibilities for tomorrow.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="relative rounded-3xl overflow-hidden h-full">
        <Image
          src="/assets/images/manzar.jpg?height=600&width=800"
          alt="Desert landscape"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
