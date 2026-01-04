import React from 'react';

interface HeroSectionProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ containerRef }) => {
  return (
    <div ref={containerRef} className="relative w-full h-full origin-right-top">
      <section className="relative w-full h-screen px-10 py-10 flex items-end overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <img
            src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1920&h=1080&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="w-full lg:w-4/5 text-white text-5xl lg:text-8xl font-light tracking-tight leading-none">
          Digital architecture that rises from the void.
        </h1>
      </section>
    </div>
  );
};