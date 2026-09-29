import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Battery, 
  Clock, 
  Compass, 
  Crosshair, 
  Sliders, 
  FileText, 
  Activity, 
  ShieldCheck, 
  Video 
} from 'lucide-react';

export const LiveOperationsCommand: React.FC = () => {
  const [timerSeconds, setTimerSeconds] = useState(258); // 04:18
  const [alt, setAlt] = useState(84);
  const [dronePos, setDronePos] = useState({ x: 42, y: 38 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerSeconds((prev) => prev + 1);
      setAlt(82 + Math.floor(Math.sin(Date.now() / 2000) * 4));
      const t = (Date.now() / 8000) % 1;
      const x = 30 + Math.sin(t * Math.PI * 2) * 22;
      const y = 45 - Math.cos(t * Math.PI * 2) * 18;
      setDronePos({ x, y });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const softwarePillars = [
    {
      title: 'FLIGHT CONTROL',
      desc: 'Plan and supervise supported missions with autonomous waypoint routing.',
      icon: Sliders
    },
    {
      title: 'LIVE VIDEO',
      desc: 'View and distribute authorized aerial imagery across connected teams in real time.',
      icon: Video
    },
    {
      title: 'MISSION HISTORY',
      desc: 'Review previous flights, flight paths, sensor telemetry, and pilot notes.',
      icon: FileText
    },
    {
      title: 'FLEET HEALTH',
      desc: 'Monitor connected aircraft battery health, station status, and maintenance schedules.',
      icon: Activity
    },
    {
      title: 'REPORTING',
      desc: 'Organize mission records and operational data for regulatory audit compliance.',
      icon: ShieldCheck
    },
  ];

  return (
    <section id="live-command" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">MISSION OPERATING SYSTEM</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            ONE PLATFORM. <br />
            <span className="text-[#F1F0EA]">EVERY MISSION.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            <strong className="text-white font-medium">AmazingCommand</strong> delivers a unified control environment for planning flights, viewing live aerial intelligence, and organizing mission information.
          </p>
        </div>

        {/* Full-Screen Computer Interface Mockup */}
        <div className="relative rounded-3xl bg-[#151819] border border-white/10 shadow-2xl overflow-hidden mb-16">
          {/* Interface Window Titlebar */}
          <div className="px-6 py-4 bg-[#0B0D0E] border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white font-semibold ml-2">AMAZINGCOMMAND OS v3.8</span>
              <span className="text-white/40">|</span>
              <span className="text-[#A6AAA9]">MISSION ID:</span>
              <span className="text-[#B7FF45] font-semibold">AUS-0248</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-pulse" />
                <span className="text-white">STATUS: <strong className="text-[#B7FF45]">ACTIVE</strong></span>
              </div>
              <div className="text-[#A6AAA9] hidden sm:block">
                AIRCRAFT: <span className="text-white">AMAZINGFLY ONE [AF-092]</span>
              </div>
              <div className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-[#A6AAA9] border border-white/10">
                ILLUSTRATIVE MISSION
              </div>
            </div>
          </div>

          {/* Interface Main Canvas: Stylized Australian Tactical Map with HUD */}
          <div className="relative w-full h-[520px] sm:h-[640px] bg-[#0E1214] overflow-hidden">
            {/* Dark Stylized Tactical Map Graphic */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="tacticalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#tacticalGrid)" />

              {/* Stylized Coastal Terrain Contour & Sector Lines */}
              <path
                d="M -50 200 Q 150 180 320 280 T 650 360 T 950 280 T 1400 400"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 120 80 Q 280 140 450 160 T 800 240 T 1200 200"
                fill="none"
                stroke="rgba(183,255,69,0.12)"
                strokeWidth="2"
              />

              {/* Safe Geofence Boundary Polygon */}
              <polygon
                points="220,140 680,100 820,380 360,440"
                fill="rgba(183,255,69,0.03)"
                stroke="#B7FF45"
                strokeWidth="1.2"
                strokeDasharray="6 4"
                opacity="0.6"
              />

              {/* Mission Route Polyline */}
              <path
                d="M 280 340 L 360 220 L 520 180 L 640 260 L 580 360 Z"
                fill="none"
                stroke="#B7FF45"
                strokeWidth="2.5"
                strokeDasharray="8 4"
                className="animate-pulse"
              />

              {/* Waypoint Markers */}
              {[[280, 340, 'WP-01 (STATION DOCK)'], [360, 220, 'WP-02 (CORRIDOR A)'], [520, 180, 'WP-03 (PERIMETER CHECK)'], [640, 260, 'WP-04 (SOLAR ARRAY)']].map(([x, y, label], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="5" fill="#B7FF45" />
                  <circle cx={x} cy={y} r="12" fill="none" stroke="#B7FF45" strokeWidth="1" opacity="0.4" />
                  <text x={Number(x) + 10} y={Number(y) + 4} fill="#A6AAA9" fontSize="10" fontFamily="JetBrains Mono">
                    {label}
                  </text>
                </g>
              ))}
            </svg>

            {/* Moving Aircraft Node along Path */}
            <div
              className="absolute z-20 transition-all duration-1000 ease-linear pointer-events-none -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${dronePos.x}%`, top: `${dronePos.y}%` }}
            >
              <div className="relative flex items-center justify-center">
                <span className="w-8 h-8 rounded-full bg-[#B7FF45]/30 animate-ping absolute" />
                <div className="w-7 h-7 rounded-full bg-[#0B0D0E] border-2 border-[#B7FF45] shadow-[0_0_15px_#B7FF45] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B7FF45]" />
                </div>
                {/* Floating Aircraft Label */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 border border-white/15 text-[10px] font-mono-tech text-white whitespace-nowrap">
                  AF-092 • {alt}m AGL
                </div>
              </div>
            </div>

            {/* Embedded Live Camera Feed Tile (Upper Right Overlay) */}
            <div className="absolute top-6 right-6 z-20 w-64 sm:w-80 rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl">
              <div className="relative aspect-video">
                <img
                  src="/assets/applications/solar_visible.jpg"
                  alt="Live Camera Feed Tile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                {/* Camera Feed Top HUD */}
                <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono-tech text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>LIVE STREAM</span>
                  </div>
                  <span className="text-[#B7FF45]">4K UHD 60P</span>
                </div>

                {/* Camera Center Crosshair */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Crosshair className="w-6 h-6 text-[#B7FF45]/80" />
                </div>

                {/* Camera Feed Bottom HUD */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono-tech text-white/70">
                  <span>FOV: 84° • ZOOM: 2.4X</span>
                  <span>GIMBAL: STABILIZED</span>
                </div>
              </div>
            </div>

            {/* Lower HUD Telemetry Strip */}
            <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono-tech text-xs">
              <div className="p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] text-[#A6AAA9] uppercase flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-[#B7FF45]" />
                  <span>ALTITUDE</span>
                </div>
                <div className="text-base font-semibold text-white mt-0.5">{alt} METERS</div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] text-[#A6AAA9] uppercase flex items-center gap-1">
                  <Battery className="w-3.5 h-3.5 text-[#B7FF45]" />
                  <span>BATTERY</span>
                </div>
                <div className="text-base font-semibold text-[#B7FF45] mt-0.5">88% (32 MIN)</div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] text-[#A6AAA9] uppercase flex items-center gap-1">
                  <Radio className="w-3.5 h-3.5 text-[#B7FF45]" />
                  <span>SIGNAL STRENGTH</span>
                </div>
                <div className="text-base font-semibold text-white mt-0.5">99% (LTE + RF)</div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md">
                <div className="text-[10px] text-[#A6AAA9] uppercase flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B7FF45]" />
                  <span>FLIGHT TIMER</span>
                </div>
                <div className="text-base font-semibold text-white mt-0.5">{formatTimer(timerSeconds)}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="text-[10px] text-[#A6AAA9] uppercase flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#B7FF45]" />
                  <span>HEADING</span>
                </div>
                <div className="text-base font-semibold text-white mt-0.5">214° SOUTH-WEST</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Software Capabilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {softwarePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#151819]/50 hover:bg-[#151819] border border-white/5 hover:border-[#B7FF45]/30 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-[#B7FF45] w-fit mb-4 group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-[#B7FF45] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#A6AAA9] leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
