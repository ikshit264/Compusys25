import { getCdnUrl } from "@/utils/CdnWrapper";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const EventDate = ({ date }: { date: string }) => (
  <p className="text-neutral-700 dark:text-neutral-400 text-lg sm:text-base text-center italic mb-1">
    {date}
  </p>
);

const CustomImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={getCdnUrl(src)} alt={alt} width={400} height={10} className="shadow-lg shadow-black rounded-sm" />
);

export const timelineData: TimelineEntry[] = [
  {
    title: "Chapters Event",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 16-17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-base md:text-lg">
          🎉 <strong>Polaris Coding Marathon 2025</strong> 🎉

          Join an action-packed programming event hosted by <strong>Polaris</strong>. Featuring unique challenges from <strong>GeeksForGeeks</strong>, <strong>Google Developer Group</strong>, <strong>Blockchain RCOEM</strong>, and <strong>ACM RCOEM</strong> chapters, this marathon is the ultimate test of your coding skills along with your social skills. Compete, collaborate, and win exciting prizes alongside fellow programming enthusiasts.
          Don’t miss the excitement—stay tuned for updates!
        </p>
      </div>
    ),
  },
  {
    title: "E-Sports",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 16, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-base md:text-lg">
          The <strong>Esports</strong> segment of Polaris is a hub for gaming enthusiasts, featuring adrenaline-pumping competitions in <strong>FIFA and BGMI</strong>. It offers participants an exciting platform to display their gaming expertise, strategic planning, and teamwork while competing in a dynamic and high-energy environment.
        </p>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <CustomImage src="/assets/polaris/E-sports.png" alt="Polaris" />
        </div>
      </div>
    ),
  },
  {
    title: "Inauguration",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-base md:text-lg">
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
    title: "Mystery trail",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 17, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-base md:text-lg">
          The <strong>Mystery Trail</strong> is a thrilling event where teams solve puzzles and decipher clues to uncover a hidden mystery. It tests problem-solving, teamwork, and quick thinking as participants race to finish. The first team to crack the mystery wins the challenge.
        </p>
        <div className="flex flex-wrap items-center justify-around gap-4">
          <CustomImage src="/assets/polaris/EscapeRoom.png" alt="Polaris" />
        </div>
      </div>
    ),
  },
  {
    title: "Cultural Night",
    content: (
      <div className="flex flex-col items-center gap-10">
        <EventDate date="January 18, 2025" />
        <p className="text-neutral-600 dark:text-neutral-400 text-center text-base md:text-lg">
          <strong>Talent Tides</strong>, the <strong>cultural night</strong> at Polaris, is a vibrant celebration of music, dance, and performances, where students showcase their creative talents in an unforgettable evening of entertainment and cultural expression.
        </p>
          <CustomImage src="/assets/polaris/Cultural_Night.png" alt="Polaris" />
        <div className="flex justify-around flex-wrap w-full items-center gap-4">
          <CustomImage src="/assets/polaris/Event.jpg" alt="Polaris" />
          <CustomImage src="/assets/polaris/Event1.jpg" alt="Polaris" />
        </div>
      </div>
    ),
  },
];
