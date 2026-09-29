import React, { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronDown, Compass, Shield, Wifi, Radio } from 'lucide-react';

interface HeroProps {
  onRequestDemo: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onExploreClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#0B0D0E]">
      {/* Background Image / Cinematic Visual with Slow Scale 1.04 -> 1.0 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/drone/hero_drone.jpg"
          alt="AmazingFly Autonomous Drone System in Flight"
          className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out will-change-transform ${
            loaded ? 'scale-100 opacity-90' : 'scale-[1.05] opacity-0'
          }`}
          loading="eager"
        />
        {/* Subtle Dark Vignette & Edge Gradients for Apple/Aerospace feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/60 to-[#0B0D0E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0E]/90 via-[#0B0D0E]/40 to-transparent" />
        
        {/* Technical HUD Grid Overlay lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Small Technical Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-ping" />
            <span className="tech-label text-[#B7FF45] font-medium">AMAZINGFLY AUTONOMOUS AIR SYSTEMS</span>
            <span className="text-[#A6AAA9] text-xs font-mono-tech">• AUS SECTOR ACTIVE</span>
          </div>

          {/* Hero Huge Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-medium text-white tracking-[-0.04em] leading-[0.95] mb-6">
            SEE MORE.<br />
            <span className="text-[#F1F0EA]">REACH FASTER.</span>
          </h1>

          {/* Desktop Sub-heading tag */}
          <div className="font-mono-tech text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B7FF45] mb-4">
            INTELLIGENCE FROM ABOVE.
          </div>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#F1F0EA]/85 font-light leading-relaxed max-w-2xl mb-10">
            AmazingFly combines autonomous aircraft, intelligent flight software and real-time aerial imaging to help teams understand what is happening on the ground faster.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onRequestDemo}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#B7FF45] text-[#0B0D0E] font-medium text-base hover:bg-[#CEFF70] transition-all duration-300 hover:shadow-[0_0_30px_rgba(183,255,69,0.4)] active:scale-95 cursor-pointer"
            >
              <span>REQUEST A DEMO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={onExploreClick}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-white/30 cursor-pointer"
            >
              <span>EXPLORE AMAZINGFLY</span>
              <ChevronDown className="w-4 h-4 text-[#A6AAA9] group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Telemetry Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono-tech text-[#A6AAA9]">
          <div className="flex items-center gap-2.5">
            <Radio className="w-4 h-4 text-[#B7FF45]" />
            <div>
              <div className="text-[10px] uppercase text-white/50">SYSTEM LINK</div>
              <div className="text-white font-medium">ENCRYPTED TELEMETRY 5G</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Compass className="w-4 h-4 text-[#B7FF45]" />
            <div>
              <div className="text-[10px] uppercase text-white/50">DEPLOYMENT LATENCY</div>
              <div className="text-white font-medium">RAPID AUTONOMOUS CLOUD</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Wifi className="w-4 h-4 text-[#B7FF45]" />
            <div>
              <div className="text-[10px] uppercase text-white/50">VIDEO STREAM</div>
              <div className="text-white font-medium">ULTRA LOW LATENCY HD</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-[#B7FF45]" />
            <div>
              <div className="text-[10px] uppercase text-white/50">AUSTRALIAN ENTERPRISE</div>
              <div className="text-white font-medium">AMAZING ORGANICS TECH</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
