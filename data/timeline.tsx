import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const EventDate = ({ date }: { date: string }) => (
  <p className="text-neutral-700 dark:text-neutral-400 text-lg text-center italic mb-4">
    {date}
  </p>
);

const CustomImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={400} height={10} className="shadow shadow-black " />
);

export const timelineData: TimelineEntry[] = [
  {
    title: "Inauguration",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 15, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
          <strong>Polaris</strong> is Central India’s biggest event, celebrating innovation, creativity, and inspiration. It brings together bright minds, bold ideas, and cutting-edge technologies under one roof. Join us as we kickstart this grand event with an inspiring opening ceremony.
        </p>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <CustomImage src="/assets/polaris/Inogration.JPG" alt="Polaris" />
          <CustomImage src="/assets/polaris/Inogration1.JPG" alt="Polaris" />
        </div>
      </div>
    ),
  },
  {
    title: "Chapters Event",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 16, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
          <strong>GeeksForGeeks (GFG)</strong> will host a coding marathon under the banner of <strong>Polaris</strong>. Dive into challenging problems, showcase your skills, and stand a chance to win exciting prizes. Don&apos;t miss the action-packed day dedicated to programming enthusiasts!
        </p>
      </div>
    ),
  },
  {
    title: "E-Sports",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
        The <strong>Esports</strong> segment of Polaris is a hub for gaming enthusiasts, featuring adrenaline-pumping competitions in <strong>FIFA and BGMI</strong>. It offers participants an exciting platform to display their gaming expertise, strategic planning, and teamwork while competing in a dynamic and high-energy environment.
        </p>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <CustomImage src="/assets/polaris/Esport.svg" alt="Polaris" />
        </div>
      </div>
    ),
  },
  {
    title: "Mystery trail",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
        The <strong>Mystery Trail</strong> is a thrilling event where teams solve puzzles and decipher clues to uncover a hidden mystery. It tests problem-solving, teamwork, and quick thinking as participants race to finish. The first team to crack the mystery wins the challenge.
        </p>
      </div>
    ),
  },
  {
    title: "Cultural Night",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 18, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
        <strong>Talent Tides</strong>, the <strong>cultural night</strong> at Polaris, is a vibrant celebration of music, dance, and performances, where students showcase their creative talents in an unforgettable evening of entertainment and cultural expression.
        </p>
        <div className="flex justify-around flex-wrap w-full items-center gap-4">
          <CustomImage src="/assets/polaris/Event.jpg" alt="Polaris" />
          <CustomImage src="/assets/polaris/Event1.jpg" alt="Polaris" />
        </div>
      </div>
    ),
  },
];
