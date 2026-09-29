import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Wifi, 
  BatteryCharging, 
  Compass, 
  Eye, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

export const ExplodedView: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState(0);

  const modules = [
    {
      id: 'propulsion',
      title: 'Propulsion System',
      tag: 'MOTORS & ROTORS',
      icon: Zap,
      desc: 'High-torque direct-drive brushless motors paired with balanced carbon-composite low-acoustic propellers for steady high-altitude and wind-resistant flight.',
      specs: ['High-efficiency brushless ESC', 'Dynamic braking response', 'Low noise acoustic signature']
    },
    {
      id: 'flight-controller',
      title: 'Flight Controller',
      tag: 'AUTOPILOT CORE',
      icon: Cpu,
      desc: 'Dual-core real-time flight computer running deterministic autonomous control algorithms with fail-safe geofencing and automatic return-to-dock protocols.',
      specs: ['Tri-redundant IMU sensors', 'Automated return-to-dock logic', 'Sub-millisecond loop rate']
    },
    {
      id: 'communication',
      title: 'Communication System',
      tag: 'MULTI-BEARER LINK',
      icon: Wifi,
      desc: 'Encrypted multi-carrier cellular modem combined with direct line-of-sight RF data links for continuous low-latency command, control, and telemetry streaming.',
      specs: ['AES-256 encrypted payload', 'Multi-band cellular support', 'Seamless link failover']
    },
    {
      id: 'battery',
      title: 'Battery Module',
      tag: 'POWER ARCHITECTURE',
      icon: BatteryCharging,
      desc: 'Smart high-density lithium power pack with integrated battery management system (BMS), cell temperature monitoring, and rapid automated docking contacts.',
      specs: ['Integrated BMS monitoring', 'Fast-charging docking interface', 'Cold-weather thermal conditioning']
    },
    {
      id: 'navigation',
      title: 'Navigation Sensors',
      tag: 'POSITIONING SUITE',
      icon: Compass,
      desc: 'Multi-constellation GNSS with RTK differential positioning support and downward-facing optical flow sensors for accurate hover stability.',
      specs: ['Multi-constellation GNSS', 'Optical precision positioning', 'Precision landing alignment']
    },
    {
      id: 'imaging',
      title: 'Imaging Payload',
      tag: 'AMAZINGVISION GIMBAL',
      icon: Eye,
      desc: 'Three-axis stabilized sensor pod housing a 4K high-resolution optical sensor alongside a high-sensitivity radiometric thermal detector.',
      specs: ['Continuous 360° pan rotation', 'Thermal & visible fusion view', 'Gyro stabilized <0.01°']
    },
    {
      id: 'landing',
      title: 'Landing Structure',
      tag: 'CARBON REINFORCED',
      icon: ShieldCheck,
      desc: 'Rigid carbon-fiber composite landing skids designed to withstand high-impact landings and securely guide the airframe into the AmazingFly Station docking lock.',
      specs: ['Shock-absorptive composite', 'Station alignment guides', 'Corrosion-resistant fittings']
    },
  ];

  return (
    <section id="engineered-system" className="relative py-28 sm:py-36 bg-[#151819] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">SYSTEM ARCHITECTURE</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            ENGINEERED AS <br />
            <span className="text-[#F1F0EA]">A COMPLETE SYSTEM</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Each subsystem is modularly designed and integrated to deliver dependable autonomous flight, consistent sensor stabilization, and unified fleet telemetry.
          </p>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Layer Selectors */}
          <div className="lg:col-span-5 space-y-2">
            {modules.map((mod, idx) => {
              const isSelected = selectedModule === idx;
              const Icon = mod.icon;

              return (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModule(idx)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B0D0E] border-[#B7FF45] shadow-md shadow-[#B7FF45]/10 translate-x-2'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-[#B7FF45] text-[#0B0D0E]' : 'bg-white/5 text-[#A6AAA9]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {mod.title}
                      </div>
                      <div className="tech-label text-[10px] text-[#A6AAA9]">{mod.tag}</div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#B7FF45] translate-x-1' : 'text-white/20'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Module Spotlight Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#0B0D0E] border border-white/10 p-8 sm:p-10 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#B7FF45]/5 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF45]" />
                    <span className="tech-label text-[#B7FF45]">{modules[selectedModule].tag}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#A6AAA9]">SUB-ASSEMBLY 0{selectedModule + 1}</span>
                </div>

                {/* Module Title */}
                <h3 className="text-3xl sm:text-4xl font-medium text-white mb-4">
                  {modules[selectedModule].title}
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#F1F0EA]/80 font-light leading-relaxed mb-8">
                  {modules[selectedModule].desc}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="pt-6 border-t border-white/10">
                <div className="tech-label text-xs text-[#A6AAA9] mb-3">KEY ENGINEERING HIGHLIGHTS</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {modules[selectedModule].specs.map((spec, i) => (
                    <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white font-mono-tech flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45] flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
