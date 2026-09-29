import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Camera, 
  Cloud, 
  Monitor, 
  Sparkles 
} from 'lucide-react';

export const ConnectedEcosystem: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { title: 'AmazingFly One', subtitle: 'Autonomous Aircraft', icon: Cpu, angle: 0 },
    { title: 'AmazingFly Station', subtitle: 'Weatherproof Dock', icon: ShieldCheck, angle: 60 },
    { title: 'AmazingCommand', subtitle: 'Mission Software', icon: Sliders, angle: 120 },
    { title: 'AmazingVision', subtitle: 'Dual EO/IR Gimbal', icon: Camera, angle: 180 },
    { title: 'Mission Cloud', subtitle: 'Compliance & Archive', icon: Cloud, angle: 240 },
    { title: 'Operator Console', subtitle: 'Tactical Control', icon: Monitor, angle: 300 },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="tech-label text-[#B7FF45] mb-2">INTEGRATED ARCHITECTURE</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            MORE THAN <br />
            <span className="text-[#F1F0EA]">AN AIRCRAFT</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            A cohesive hardware and software ecosystem connecting flight, charging, telemetry, and operations into a single seamless loop.
          </p>
        </div>

        {/* Dynamic Connected Ecosystem Map Visual */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square sm:aspect-[16/11] flex items-center justify-center p-6">
          {/* Animated Connecting SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#B7FF45" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#B7FF45" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Connecting rays from center to 6 outer positions */}
            <circle cx="50%" cy="50%" r="35%" fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="4 4" />
            <circle cx="50%" cy="50%" r="22%" fill="none" stroke="rgba(183,255,69,0.15)" />

            {[0, 60, 120, 180, 240, 300].map((deg, i) => {
              const rad = (deg * Math.PI) / 180;
              const x2 = 50 + 35 * Math.cos(rad);
              const y2 = 50 + 35 * Math.sin(rad);
              return (
                <g key={i}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(183,255,69,0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />
                  <circle cx={`${x2}%`} cy={`${y2}%`} r="3" fill="#B7FF45" />
                </g>
              );
            })}
          </svg>

          {/* Central AMAZINGFLY Hub */}
          <div className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#151819] border-2 border-[#B7FF45] shadow-[0_0_50px_rgba(183,255,69,0.25)] flex flex-col items-center justify-center p-4 text-center">
            <div className="w-8 h-8 rounded-full bg-[#B7FF45]/15 flex items-center justify-center text-[#B7FF45] mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-sm sm:text-base font-semibold text-white tracking-widest uppercase">
              AMAZING<span className="text-[#B7FF45]">FLY</span>
            </div>
            <div className="tech-label text-[9px] text-[#A6AAA9] mt-0.5">CORE ECOSYSTEM</div>
          </div>

          {/* 6 Peripheral Component Nodes */}
          {nodes.map((node, idx) => {
            const rad = (node.angle * Math.PI) / 180;
            // Radius in percentage
            const rx = 35 * Math.cos(rad);
            const ry = 35 * Math.sin(rad);
            const Icon = node.icon;
            const isHovered = activeNode === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveNode(idx)}
                onMouseLeave={() => setActiveNode(null)}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110 cursor-pointer"
                style={{
                  left: `calc(50% + ${rx}%)`,
                  top: `calc(50% + ${ry}%)`,
                }}
              >
                <div className={`p-4 rounded-2xl bg-[#0B0D0E]/90 border backdrop-blur-md transition-all shadow-xl text-center min-w-[130px] sm:min-w-[160px] ${
                  isHovered
                    ? 'border-[#B7FF45] shadow-[0_0_20px_rgba(183,255,69,0.3)] bg-[#151819]'
                    : 'border-white/10 hover:border-white/30'
                }`}>
                  <div className="w-8 h-8 rounded-xl bg-white/5 text-[#B7FF45] mx-auto flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{node.title}</div>
                  <div className="tech-label text-[9px] text-[#A6AAA9] mt-0.5">{node.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
