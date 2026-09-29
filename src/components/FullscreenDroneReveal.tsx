import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Eye, Box, Share2 } from 'lucide-react';

export const FullscreenDroneReveal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.4);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 (entering) to 1 (leaving)
      const totalDist = rect.height + windowHeight;
      const current = windowHeight - rect.top;
      const progress = Math.min(Math.max(current / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute dynamic scale and rotation based on scroll
  const scale = 0.95 + scrollProgress * 0.25; // 0.95 -> 1.2
  const rotation = -6 + scrollProgress * 14;   // -6 deg -> +8 deg

  return (
    <section
      id="aircraft-reveal"
      ref={sectionRef}
      className="relative min-h-[140vh] w-full bg-[#0B0D0E] flex flex-col items-center justify-between py-24 sm:py-32 overflow-hidden border-b border-white/5"
    >
      {/* Subtle radial background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#B7FF45]/5 via-white/[0.02] to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45] animate-pulse" />
          <span className="tech-label text-[#B7FF45]">MEET THE AIRCRAFT</span>
        </div>

        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-[-0.04em] text-white leading-none mb-4">
          AMAZINGFLY ONE
        </h2>

        <p className="font-mono-tech text-sm sm:text-base tracking-[0.2em] text-[#A6AAA9] uppercase">
          BUILT TO SEE MORE
        </p>
      </div>

      {/* Center Drone Isolated Visual & Callouts */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 my-auto flex items-center justify-center">
        {/* Dynamic Transforming Container */}
        <div 
          className="relative transition-transform duration-300 ease-out will-change-transform max-w-4xl w-full"
          style={{
            transform: `scale(${scale}) rotate(${rotation}deg)`,
          }}
        >
          <img
            src="/assets/drone/drone_studio.jpg"
            alt="AmazingFly One Enterprise Drone Studio Isolated View"
            className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
            loading="lazy"
          />

          {/* Technical Hotspot 1: Autonomous Flight (Top Left) */}
          <div className="absolute top-[20%] left-[8%] hidden sm:flex items-center gap-3 animate-fadeIn">
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#B7FF45] animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF45] relative" />
            </div>
            <div className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B7FF45]">
                <Cpu className="w-3.5 h-3.5" />
                <span>AUTONOMOUS FLIGHT</span>
              </div>
              <div className="text-[10px] text-[#A6AAA9] font-mono-tech mt-0.5">Tri-redundant IMU & GPS</div>
            </div>
          </div>

          {/* Technical Hotspot 2: Stabilized Imaging (Bottom Center / Left) */}
          <div className="absolute bottom-[10%] left-[28%] hidden sm:flex items-center gap-3 animate-fadeIn">
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#B7FF45] animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF45] relative" />
            </div>
            <div className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#B7FF45]">
                <Eye className="w-3.5 h-3.5" />
                <span>STABILIZED IMAGING</span>
              </div>
              <div className="text-[10px] text-[#A6AAA9] font-mono-tech mt-0.5">Dual 4K Optical + LWIR</div>
            </div>
          </div>

          {/* Technical Hotspot 3: Modular Payload (Top Right) */}
          <div className="absolute top-[18%] right-[8%] hidden sm:flex items-center gap-3 animate-fadeIn">
            <div className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-right">
              <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-[#B7FF45]">
                <span>MODULAR PAYLOAD</span>
                <Box className="w-3.5 h-3.5" />
              </div>
              <div className="text-[10px] text-[#A6AAA9] font-mono-tech mt-0.5">Quick-swap battery & sensors</div>
            </div>
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#B7FF45] animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF45] relative" />
            </div>
          </div>

          {/* Technical Hotspot 4: Connected Operations (Bottom Right) */}
          <div className="absolute bottom-[12%] right-[18%] hidden sm:flex items-center gap-3 animate-fadeIn">
            <div className="p-3 rounded-xl bg-black/80 border border-white/15 backdrop-blur-md text-right">
              <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-[#B7FF45]">
                <span>CONNECTED OPERATIONS</span>
                <Share2 className="w-3.5 h-3.5" />
              </div>
              <div className="text-[10px] text-[#A6AAA9] font-mono-tech mt-0.5">Encrypted multi-bearer comms</div>
            </div>
            <div className="relative flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#B7FF45] animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF45] relative" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Spec Strip */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl text-center">
          <div>
            <div className="text-[10px] font-mono-tech text-[#A6AAA9] uppercase">AIRFRAME</div>
            <div className="text-sm font-semibold text-white mt-0.5">Carbon Composite</div>
          </div>
          <div>
            <div className="text-[10px] font-mono-tech text-[#A6AAA9] uppercase">GIMBAL DEVIATION</div>
            <div className="text-sm font-semibold text-white mt-0.5">&lt; 0.01° Stabilized</div>
          </div>
          <div>
            <div className="text-[10px] font-mono-tech text-[#A6AAA9] uppercase">ENCRYPTION</div>
            <div className="text-sm font-semibold text-white mt-0.5">AES-256 GCM</div>
          </div>
          <div>
            <div className="text-[10px] font-mono-tech text-[#A6AAA9] uppercase">FLIGHT READINESS</div>
            <div className="text-sm font-semibold text-[#B7FF45] mt-0.5">Automated Docked</div>
          </div>
        </div>
      </div>
    </section>
  );
};
