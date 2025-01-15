import React from 'react'
import LetterAnimation from '../home/LetterAnimation'

const MemberHero = () => {
  return (
    <section className='h-[90vh] flex items-center justify-center'>
        <div className=''>
        <h1 className="font-kalam text-center text-slate-700 m-20 flex flex-col justify-center items-center">
        <span className="whitespace-nowrap text-9xl font-bold uppercase max-md:text-8xl max-sm:text-7xl text-teal-600">
          <LetterAnimation
            text={`SUCCESS`}
            delay={0.5}
            duration={0.8}
            effect="slideRight"
            staggerChildren={0.02}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
        <span className="whitespace-nowrap flex items-center text-6xl md:text-5xl max-md:text-4xl max-sm:text-4xl font-light mt-2 text-lime-500">
          <LetterAnimation
            text='is&nbsp;built'
            delay={1}
            duration={0.1}
            effect="slideRight"
            staggerChildren={0.02}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />

          <LetterAnimation
            text='&nbsp;around'
            delay={1.7}
            duration={0.1}
            effect="slideRight"
            staggerChildren={0.06}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
        <span className="ml-[.6em] block text-9xl max-md:text-8xl max-sm:text-7xl font-extrabold uppercase mt-4 text-teal-600">
          <LetterAnimation
            text='TEAMS'
            delay={2.4}
            duration={0.2}
            effect="slideRight"
            staggerChildren={0.2}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </span>
      </h1>
        </div>
    </section>
  )
}

export default MemberHero