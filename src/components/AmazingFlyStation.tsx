import React, { useState, useEffect } from 'react';
import { CheckCircle2, Play } from 'lucide-react';

export const AmazingFlyStation: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const capabilities = [
    { title: 'Protected Docking', desc: 'Secure motorized enclosure shielding airframe and optical gimbal against debris and vandalism.' },
    { title: 'Automated Charging', desc: 'High-current contact interface restoring full mission readiness without manual intervention.' },
    { title: 'Remote Health Monitoring', desc: 'Continuous telemetry logging internal climate, power grid status, and component diagnostics.' },
    { title: 'Environmental Protection', desc: 'Internal climate control with active HVAC preventing moisture, condensation, and temperature extremes.' },
    { title: 'Aircraft Readiness Monitoring', desc: 'Automated pre-flight sensor calibration and rotor checks ensuring instant emergency availability.' },
  ];

  const steps = [
    { step: '01', title: 'Dock Closed', status: 'STANDBY & CHARGING', desc: 'Canopy sealed, HVAC maintaining optimal battery core temperature.' },
    { step: '02', title: 'Doors Open', status: 'CANOPY RETRACTING', desc: 'High-speed motorized doors open in under 4 seconds upon mission alert.' },
    { step: '03', title: 'Drone Rises', status: 'PAD ELEVATED & MOTORS ARMED', desc: 'Internal landing platform elevates drone to unobstructed launch position.' },
    { step: '04', title: 'Drone Launches', status: 'DEPARTURE VECTOR ACTIVE', desc: 'Airframe ascends into approved operational corridor towards GPS target.' },
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev < 4 ? prev + 1 : 1));
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="dock-station" className="relative py-28 sm:py-36 bg-[#151819] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">AUTONOMOUS GROUND INFRASTRUCTURE</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            READY WHEN <br />
            <span className="text-[#F1F0EA]">THE MISSION IS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            <strong className="text-white font-medium">AmazingFly Station</strong> serves as the continuous operational base, providing automated charging, climate conditioning, and instant launch readiness.
          </p>
        </div>

        {/* Large Docking Station Visual & Sequence Viewer */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0B0D0E] border border-white/10 shadow-2xl mb-16">
          <div className="relative aspect-[16/9] lg:aspect-[21/9]">
            <img
              src="/assets/dock/docking_station.jpg"
              alt="AmazingFly Station Automated Weatherproof Drone Dock"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-black/50" />

            {/* Sequence Status HUD Tag */}
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md text-xs font-mono-tech flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-ping" />
                <span className="text-white">STAGE: {steps[activeStep - 1].title.toUpperCase()}</span>
                <span className="text-[#B7FF45]">• {steps[activeStep - 1].status}</span>
              </div>
            </div>

            {/* Floating Telemetry Box */}
            <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md font-mono-tech text-xs">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[#A6AAA9] block text-[10px]">STATION ENCLOSURE</span>
                  <span className="text-white font-semibold">IP66 ALL-WEATHER</span>
                </div>
                <div>
                  <span className="text-[#A6AAA9] block text-[10px]">POWER SOURCE</span>
                  <span className="text-white font-semibold">GRID + SOLAR BACKUP</span>
                </div>
                <div>
                  <span className="text-[#A6AAA9] block text-[10px]">CANOPY DURATION</span>
                  <span className="text-[#B7FF45] font-semibold">&lt; 4 SEC RAPID CYCLE</span>
                </div>
              </div>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#B7FF45] text-black font-semibold text-xs hover:bg-[#CEFF70] transition-colors cursor-pointer"
              >
                <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-black' : ''}`} />
                <span>{isPlaying ? 'PAUSE SEQUENCE' : 'PLAY LAUNCH SEQUENCE'}</span>
              </button>
            </div>
          </div>

          {/* Interactive 4-Stage Step Bar */}
          <div className="p-6 bg-[#0B0D0E] border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, idx) => {
              const isCurrent = activeStep === idx + 1;
              return (
                <button
                  key={idx}
                  onClick={() => { setActiveStep(idx + 1); setIsPlaying(false); }}
                  className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white/10 border-[#B7FF45] shadow-lg'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono-tech text-xs ${isCurrent ? 'text-[#B7FF45]' : 'text-[#A6AAA9]'}`}>
                      SEQUENCE {s.step}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#B7FF45]' : 'bg-white/20'}`} />
                  </div>
                  <div className="text-base font-medium text-white mb-1">{s.title}</div>
                  <div className="text-xs text-[#A6AAA9] leading-relaxed line-clamp-2">{s.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5 Core Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0B0D0E]/60 border border-white/5 hover:border-[#B7FF45]/30 transition-all group"
            >
              <CheckCircle2 className="w-5 h-5 text-[#B7FF45] mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-semibold text-white mb-1.5 group-hover:text-[#B7FF45] transition-colors">
                {cap.title}
              </h4>
              <p className="text-xs text-[#A6AAA9] leading-relaxed font-light">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
