import Accordion from "@/components/accordian/page";
import Hero from "@/components/home/Hero";
import ShortIntro from "@/components/shortIntro/ShortIntro";

export default function Home () {
  return (
    <main className="">
      <Hero />
      <ShortIntro/>
      <Accordion />
    </main>
  )
}