import React from 'react';

export const IntroTransition: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0D0E] overflow-hidden border-b border-white/5">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B7FF45]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Tiny pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45]" />
          <span className="tech-label text-white/80">AIRSPACE OPERATIONAL OVERVIEW</span>
        </div>

        {/* Huge Centered Typography */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] text-white leading-[1.02] mb-8">
          AUTONOMOUS AIR <br />
          <span className="text-[#B7FF45]">INTELLIGENCE</span>
        </h2>

        {/* Supporting statement */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#F1F0EA]/80 font-light max-w-4xl mx-auto leading-relaxed">
          Designed to give teams immediate aerial awareness without waiting for traditional deployment.
        </p>

        {/* Subtle decorative aerospace vector marks */}
        <div className="flex items-center justify-center gap-6 mt-14 text-white/30 text-xs font-mono-tech">
          <span>[LAT. 34.0522° S]</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>[AUTONOMOUS WORKFLOW READY]</span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span>[LONG. 150.8431° E]</span>
        </div>
      </div>
    </section>
  );
};
