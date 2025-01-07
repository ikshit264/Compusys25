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
          <strong>Polaris</strong> proudly presents <strong>BGMI Battle Royale</strong> — an exhilarating E-Sports tournament open to students of all years. Showcase your gaming skills, strategize with your squad, and compete for glory in this action-packed event!
        </p>
          <div className="flex flex-wrap items-center justify-around gap-4">
            <CustomImage src="/assets/polaris/Esport.svg" alt="Polaris" />
          </div>
      </div>
    ),
  },
  {
    title: "Escape Room 3.0",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-lg">
          <strong>Polaris</strong> proudly presents <strong>Escape Room 3.0</strong> — a thrilling and interactive challenge open to students of all years. Test your problem-solving skills and teamwork as you race against time to crack the puzzles and escape the room!
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
          The grand finale of <strong>Polaris</strong>, <strong>Cultural Night</strong>, will feature mesmerizing performances by students from all years and classes. Enjoy an evening filled with music, dance, and entertainment, followed by a delicious dinner. Let&apos;s end the event with a celebration to remember!
        </p>
        <div className="flex justify-around flex-wrap w-full items-center">
          <CustomImage src="/assets/polaris/Event.jpg" alt="Polaris" />
          <CustomImage src="/assets/polaris/Event1.jpg" alt="Polaris" />
        </div>
      </div>
    ),
  },
];
