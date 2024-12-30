"use client";

import { useState, useEffect } from "react";
import Accordian from "@/components/accordian/Accordian";
import Hero from "@/components/home/Hero";
import ShortIntro from "@/components/shortIntro/ShortIntro";
import InvitationCard from "@/components/footer/invitationCard";

export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Check if animation has been completed previously and set state accordingly
    const animationStatus = localStorage.getItem("animationComplete");

    if (animationStatus === "true") {
      setIsAnimationComplete(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
    localStorage.setItem("animationComplete", "true");
  };

  return (
    <main className="overflow-hidden">
      <Hero
        showAnimations={!isAnimationComplete}  // Only show animation if not complete
        onAnimationComplete={handleAnimationComplete}
      />
      {isAnimationComplete && (
        <>
          <ShortIntro />
          <Accordian />
          <InvitationCard/>
        </>
      )}
    </main>
  );
}
