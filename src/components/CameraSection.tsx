import React, { useState } from 'react';
import { 
  Camera, 
  Moon, 
  Move3d, 
  ZoomIn, 
  Radio, 
  Crosshair 
} from 'lucide-react';

export const CameraSection: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<'1X' | '2X' | '5X' | '10X'>('2X');

  const cameraPillars = [
    {
      title: 'HD AERIAL IMAGING',
      desc: 'High-resolution optical sensor delivering sharp situational clarity across large operational areas.',
      icon: Camera,
    },
    {
      title: 'LOW-LIGHT READY',
      desc: 'Optimized aperture and sensor sensitivity for twilight, dusk, and nighttime incident monitoring.',
      icon: Moon,
    },
    {
      title: 'STABILIZED GIMBAL',
      desc: '3-axis continuous brushless stabilization counteracting wind gusts and aggressive aircraft banking.',
      icon: Move3d,
    },
    {
      title: 'DIGITAL ZOOM',
      desc: 'Inspect structural anomalies and ground details from safe stand-off flight altitudes.',
      icon: ZoomIn,
    },
    {
      title: 'REAL-TIME STREAMING',
      desc: 'Direct encrypted video stream distribution to command dispatch, field tablets, and operational centers.',
      icon: Radio,
    },
  ];

  return (
    <section id="camera-specs" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">AMAZINGVISION OPTICAL PAYLOAD</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            SEE THE DETAILS <br />
            <span className="text-[#F1F0EA]">THAT MATTER</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Engineered to turn high-altitude aerial perspective into actionable intelligence for mission commanders and ground personnel.
          </p>
        </div>

        {/* Big Gimbal & Live Simulated HUD Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left: Large Gimbal Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-[#151819] border border-white/10 p-4 shadow-2xl group">
              <img
                src="/assets/drone/gimbal_camera.jpg"
                alt="AmazingVision Multi-Sensor Gimbal Camera System"
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md text-xs font-mono-tech text-[#B7FF45] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-ping" />
                <span>AMAZINGVISION MK-II PAYLOAD</span>
              </div>
            </div>
          </div>

          {/* Right: Simulated Operational Aerial Viewfinder HUD */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-[#151819] border border-white/10 shadow-2xl aspect-[16/11] flex flex-col justify-between p-6">
              {/* Simulated Daylight Inspection Aerial Background */}
              <img
                src="/assets/applications/solar_visible.jpg"
                alt="Simulated Aerial Viewfinder"
                className="absolute inset-0 w-full h-full object-cover opacity-85 transition-transform duration-700 ease-out"
                style={{
                  transform: zoomLevel === '1X' ? 'scale(1.0)' : zoomLevel === '2X' ? 'scale(1.3)' : zoomLevel === '5X' ? 'scale(1.8)' : 'scale(2.5)',
                }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

              {/* Viewfinder Top Bar */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono-tech text-white">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span>REC [4K 60FPS HDR]</span>
                </div>

                <div className="flex items-center gap-2 bg-black/70 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md text-[#B7FF45]">
                  <Crosshair className="w-3.5 h-3.5" />
                  <span>GIMBAL LOCK: PITCH -42° YAW +14°</span>
                </div>
              </div>

              {/* Viewfinder Center Reticle */}
              <div className="relative z-10 my-auto self-center pointer-events-none flex flex-col items-center justify-center">
                <div className="w-32 h-32 border border-[#B7FF45]/40 rounded-lg flex items-center justify-center relative">
                  <div className="w-3 h-3 border-t-2 border-l-2 border-[#B7FF45] absolute top-0 left-0" />
                  <div className="w-3 h-3 border-t-2 border-r-2 border-[#B7FF45] absolute top-0 right-0" />
                  <div className="w-3 h-3 border-b-2 border-l-2 border-[#B7FF45] absolute bottom-0 left-0" />
                  <div className="w-3 h-3 border-b-2 border-r-2 border-[#B7FF45] absolute bottom-0 right-0" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B7FF45]" />
                </div>
                <span className="font-mono-tech text-[10px] text-[#B7FF45] bg-black/80 px-2 py-0.5 rounded mt-2">
                  AUTO-TRACKING TARGET
                </span>
              </div>

              {/* Viewfinder Bottom Controls & Telemetry */}
              <div className="relative z-10 flex items-center justify-between font-mono-tech text-xs">
                {/* Zoom Selectors */}
                <div className="flex items-center gap-1 bg-black/80 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                  {(['1X', '2X', '5X', '10X'] as const).map((z) => (
                    <button
                      key={z}
                      onClick={() => setZoomLevel(z)}
                      className={`px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                        zoomLevel === z ? 'bg-[#B7FF45] text-black font-bold' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {z}
                    </button>
                  ))}
                </div>

                <div className="bg-black/80 px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-[#A6AAA9] backdrop-blur-md">
                  ALT: 104m • DIST: 420m • LATENCY: 38ms
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cameraPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#151819]/50 hover:bg-[#151819] border border-white/5 hover:border-[#B7FF45]/30 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-white/5 text-[#B7FF45] w-fit mb-4 group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#B7FF45] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A6AAA9] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
