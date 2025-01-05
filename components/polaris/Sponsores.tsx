import Image from 'next/image'
import React from 'react'

const Sponsores = () => {

  const CustomImage = ({ src, alt }: { src: string; alt: string }) => (
    <Image src={src} alt={alt} width={200} height={10} />
  );

  return (
    <div>
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <CustomImage src="/assets/polaris/Sponsor_haldiram.jpg" alt="Haldiram" />
        <CustomImage src="/assets/polaris/Sponsor_cristos.svg" alt="Cristos" />
        <CustomImage src="/assets/polaris/Sponsor_revolt.svg" alt="Revolt" />
      </div>
    </div>
  )
}

export default Sponsores
