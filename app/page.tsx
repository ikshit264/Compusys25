"use client"

import { useState } from "react";
import Accordian from "@/components/accordian/Accordian";
import Hero from "@/components/home/Hero";
// import ShortIntro from "@/components/shortIntro/ShortIntro";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <main className="overflow-hidden">
      <Hero onAnimationComplete={() => setIsAnimationComplete(true)} />
      {isAnimationComplete && (
        <>
          {/* <ShortIntro /> */}
          <Accordian />
          <Footer />
        </>
      )}
    </main>
  );
}
