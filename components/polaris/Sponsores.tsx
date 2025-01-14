import Image from 'next/image'
import React from 'react'

const Sponsores = () => {

  const CustomImage = ({ src, alt }: { src: string; alt: string }) => (
    <Image src={src} alt={alt} width={400} height={10} className='rounded-md' />
  );

  return (
    <div>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <CustomImage src="/assets/polaris/Sponsor_haldiram.jpg" alt="Haldiram" />
      </div>
    </div>
  )
}

export default Sponsores
