import React, { useState } from 'react';
import { 
  Rocket, 
  Eye, 
  Sliders, 
  FileCheck2, 
  Radio
} from 'lucide-react';

export const AmazingFlyInAction: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      num: 'FEATURE 01',
      title: 'AUTONOMOUS DEPLOYMENT',
      desc: 'Deploy aircraft through structured workflows and predefined mission locations.',
      specs: 'Pre-flight self-diagnostics • Automated canopy release • Route clearance validation',
      image: '/assets/drone/hero_drone.jpg',
      icon: Rocket,
      hud: {
        status: 'DEPLOYED — IN FLIGHT',
        alt: '124m AGL',
        speed: '52 km/h',
        target: 'Sector 4B Perimeter',
        mode: 'AUTONOMOUS WAYPOINT'
      }
    },
    {
      num: 'FEATURE 02',
      title: 'LIVE VISUAL INTELLIGENCE',
      desc: 'View stabilized HD aerial imagery in real time from supported operations.',
      specs: 'Dual-sensor EO/IR • 3-axis gyro stabilization • Low-latency stream replication',
      image: '/assets/drone/gimbal_camera.jpg',
      icon: Eye,
      hud: {
        status: 'STREAM ACTIVE [4K HDR]',
        alt: '98m AGL',
        speed: 'Stationary Hover',
        target: 'Tactical Area Alpha',
        mode: 'GIMBAL TRACKING'
      }
    },
    {
      num: 'FEATURE 03',
      title: 'INTELLIGENT FLIGHT CONTROL',
      desc: 'Mission planning, geofencing, flight data and operational controls in one interface.',
      specs: 'Dynamic 3D terrain awareness • Safe-landing zones • Weather telemetry sync',
      image: '/assets/dock/docking_station.jpg',
      icon: Sliders,
      hud: {
        status: 'ROUTE SYNCHRONIZED',
        alt: '110m AGL',
        speed: '44 km/h',
        target: 'Corridor Echo-9',
        mode: 'GEOFENCE LOCKED'
      }
    },
    {
      num: 'FEATURE 04',
      title: 'MISSION REPORTING',
      desc: 'Organize flight history, mission notes, imagery and operational records.',
      specs: 'Automated chain-of-custody • Exportable flight telemetry • Searchable tags',
      image: '/assets/applications/site_security.jpg',
      icon: FileCheck2,
      hud: {
        status: 'MISSION ARCHIVING',
        alt: '0m DOCKED',
        speed: '0 km/h',
        target: 'Mission Complete',
        mode: 'AUDIT RECORD STORED'
      }
    },
  ];

  return (
    <section id="in-action" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">OPERATIONAL WORKFLOW</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            AMAZINGFLY <br />
            <span className="text-[#F1F0EA]">IN ACTION</span>
          </h2>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Dynamic Visual / Video Area with HUD */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#151819] shadow-2xl aspect-[16/10] group">
              {/* Feature Images with smooth crossfade */}
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeFeature === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E]/90 via-[#0B0D0E]/20 to-[#0B0D0E]/40" />
                </div>
              ))}

              {/* Real-time HUD UI Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between font-mono-tech">
                {/* HUD Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-pulse" />
                    <span className="text-[#B7FF45]">{features[activeFeature].hud.status}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-white/70 bg-black/50 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    <Radio className="w-3.5 h-3.5 text-[#B7FF45]" />
                    <span>LINK 5G 99%</span>
                  </div>
                </div>

                {/* HUD Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full flex items-center justify-center pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-[#B7FF45]/80" />
                  <div className="absolute top-0 w-[1px] h-3 bg-white/40" />
                  <div className="absolute bottom-0 w-[1px] h-3 bg-white/40" />
                  <div className="absolute left-0 h-[1px] w-3 bg-white/40" />
                  <div className="absolute right-0 h-[1px] w-3 bg-white/40" />
                </div>

                {/* HUD Bottom Telemetry Data */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] p-3 rounded-2xl bg-black/70 border border-white/10 backdrop-blur-md text-white/80">
                  <div>
                    <span className="text-white/40 block text-[9px]">ALTITUDE</span>
                    <span className="font-semibold text-[#B7FF45]">{features[activeFeature].hud.alt}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px]">GROUND SPEED</span>
                    <span className="font-semibold text-white">{features[activeFeature].hud.speed}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px]">TARGET SECTOR</span>
                    <span className="font-semibold text-white">{features[activeFeature].hud.target}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[9px]">FLIGHT MODE</span>
                    <span className="font-semibold text-white">{features[activeFeature].hud.mode}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: 4 Vertically Stacked Feature Items */}
          <div className="lg:col-span-5 space-y-4">
            {features.map((feature, idx) => {
              const isActive = activeFeature === idx;
              const Icon = feature.icon;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#151819] border-[#B7FF45]/50 shadow-lg shadow-[#B7FF45]/5 translate-x-1.5'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`tech-label font-mono-tech ${isActive ? 'text-[#B7FF45]' : 'text-[#A6AAA9]'}`}>
                      {feature.num}
                    </span>
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#B7FF45]' : 'text-white/30'}`} />
                  </div>

                  <h3 className={`text-xl font-medium mb-2 transition-colors ${isActive ? 'text-white' : 'text-white/70'}`}>
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#F1F0EA]/75 leading-relaxed font-light mb-3">
                    {feature.desc}
                  </p>

                  {/* Active highlight details */}
                  {isActive && (
                    <div className="pt-3 border-t border-white/10 text-xs text-[#A6AAA9] font-mono-tech">
                      {feature.specs}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
