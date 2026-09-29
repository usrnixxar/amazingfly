import React, { useState, useRef, useCallback } from 'react';
import { Eye, Flame, SlidersHorizontal, Info } from 'lucide-react';

export const ThermalViewEffect: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="tech-label text-[#B7FF45] mb-2">DUAL-SPECTRUM PAYLOAD</div>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white">
              VISIBLE VS THERMAL
            </h2>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0 font-mono-tech text-xs">
            <span className="flex items-center gap-1.5 text-white/80">
              <Eye className="w-4 h-4 text-white" />
              VISIBLE SPECTRUM
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-[#B7FF45]">
              <Flame className="w-4 h-4 text-[#B7FF45]" />
              RADIOMETRIC LWIR
            </span>
          </div>
        </div>

        {/* Interactive Split Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="relative w-full h-[450px] sm:h-[600px] rounded-3xl overflow-hidden select-none border border-white/10 shadow-2xl cursor-ew-resize group"
        >
          {/* Base: Visible Image (Underneath) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/applications/solar_visible.jpg"
              alt="Normal Visible Aerial View"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Visible Mode Badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-xs font-mono-tech text-white flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-white" />
              <span>VISIBLE (OPTICAL 4K)</span>
            </div>
          </div>

          {/* Clip Layer: Thermal Image (On Top, clipped to slider position) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img
              src="/assets/applications/solar_thermal.jpg"
              alt="Thermal Infrared Aerial View"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Thermal Mode Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-black/85 border border-[#B7FF45]/30 backdrop-blur-md text-xs font-mono-tech text-[#B7FF45] flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#B7FF45]" />
              <span>THERMAL (IRONBOW RADIOMETRIC)</span>
            </div>

            {/* Custom Thermal HUD Telemetry Overlay in corners */}
            <div className="absolute bottom-6 right-6 p-3 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md text-[11px] font-mono-tech text-white/80">
              <div className="text-[#B7FF45] font-semibold">AMAZINGVISION LWIR</div>
              <div>SPAN: 18°C — 94°C</div>
              <div>DELTA-T: 0.04K NETD</div>
            </div>
          </div>

          {/* Slider Divider Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#B7FF45] shadow-[0_0_15px_#B7FF45]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Center Drag Handle Button */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0B0D0E] border-2 border-[#B7FF45] shadow-xl flex items-center justify-center text-[#B7FF45] transition-transform duration-200 group-hover:scale-110">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#A6AAA9] mt-6 text-center">
          <Info className="w-4 h-4 text-[#B7FF45] flex-shrink-0" />
          <span>
            Visualization is illustrative. Available imaging capabilities depend on configured hardware.
          </span>
        </div>
      </div>
    </section>
  );
};
