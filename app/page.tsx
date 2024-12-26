import Accordian from "@/components/accordian/Accordian";
import Hero from "@/components/home/Hero";
import ShortIntro from "@/components/shortIntro/ShortIntro";

export default function Home () {
  return (
    <main className="">
      <Hero />
      <ShortIntro/>
      <Accordian />
    </main>
  )
}