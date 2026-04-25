import Image from "next/image";

interface PageHeroProps {
  tagline: string;
  firstCaption: string;
  secondCaption: string;
  description: string;
  imageUrl?: string;
}

export default function PageHero({
  tagline,
  firstCaption,
  secondCaption,
  description,
  imageUrl,
}: PageHeroProps) {
  return (
    <section className="bg-primary relative overflow-hidden px-6 md:px-24 py-24 w-full">
      <div className="absolute inset-0 bg-grid-ink pointer-events-none" />
      <div className="absolute -top-24 right-0 w-125 h-125 rounded-full bg-[#0474C4]/8 blur-[100px] pointer-events-none" />
      <div
        className={`relative z-10 flex w-full lg:max-w-7xl mx-auto ${
          imageUrl
            ? "flex-col md:flex-row items-start md:items-center gap-12"
            : "flex-col items-start gap-4"
        }`}
      >
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-body text-[0.75rem] tracking-[0.07em] uppercase font-medium text-[#EBF3FC] inline-flex items-center gap-2">
            <span className="block w-8 h-px bg-[#EBF3FC]" />
            {tagline}
          </p>
          <h1 className="font-display text-[2.25rem] md:text-[3rem] tracking-[-0.015em] md:tracking-[-0.02em] leading-[1.2] md:leading-[1.1] font-bold text-white max-w-lg">
            {firstCaption}
            <em className="italic text-[#8ed4b8] ml-2">{secondCaption}</em>
          </h1>
          <p className="font-body text-base lg:text-lg tracking-[-0.01em] leading-[1.65] font-light text-[#EBF3FC] max-w-lg">
            {description}
          </p>
        </div>

        {imageUrl && (
          <div className="relative w-full md:w-105 h-70 md:h-80 shrink-0 overflow-hidden rounded-sm">
            <Image
              src={imageUrl}
              alt={`${firstCaption} ${secondCaption}`}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
