import React from 'react';

export const LargeMarquee: React.FC = () => {
  const items = [
    'AUTONOMOUS FLIGHT',
    'REAL-TIME VISION',
    'CONNECTED OPERATIONS',
    'INDUSTRIAL INTELLIGENCE',
    'AMAZINGFLY',
  ];

  return (
    <div className="relative py-10 bg-[#0B0D0E] border-y border-white/5 overflow-hidden select-none">
      {/* Edge gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#0B0D0E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#0B0D0E] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {/* Render sequence multiple times for seamless infinite loop */}
        {[...Array(4)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-12 shrink-0 pr-12">
            {items.map((text, i) => (
              <div key={i} className="flex items-center space-x-12">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white/30 uppercase font-sans hover:text-[#B7FF45] transition-colors duration-300">
                  {text}
                </span>
                <span className="text-2xl sm:text-4xl text-[#B7FF45] font-light">—</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
