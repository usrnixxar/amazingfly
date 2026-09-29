import React, { useState } from 'react';
import { 
  BellRing, 
  MapPin, 
  Send, 
  Video, 
  Users, 
  FileCheck, 
  ArrowRight 
} from 'lucide-react';

export const MissionFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      num: '01',
      title: 'EVENT',
      desc: 'Operational alert received via integrated workflow, perimeter tripwire, or operator trigger.',
      icon: BellRing,
      tag: 'ALERT INTAKE'
    },
    {
      num: '02',
      title: 'MISSION CREATED',
      desc: 'Flight corridor calculated, airspace clearance verified, and target coordinates synchronized.',
      icon: MapPin,
      tag: 'FLIGHT ROUTE'
    },
    {
      num: '03',
      title: 'AIRCRAFT DEPLOYS',
      desc: 'Dock opens and AmazingFly One launches autonomously into assigned flight envelope.',
      icon: Send,
      tag: 'LAUNCH'
    },
    {
      num: '04',
      title: 'LIVE VIDEO',
      desc: 'High-definition stabilized optical and thermal imagery streams directly to authorized teams.',
      icon: Video,
      tag: 'AERIAL STREAM'
    },
    {
      num: '05',
      title: 'TEAM RESPONSE',
      desc: 'Coordinated field action based on real-time visual situational awareness before arrival.',
      icon: Users,
      tag: 'COORDINATION'
    },
    {
      num: '06',
      title: 'MISSION RECORD',
      desc: 'Comprehensive flight logs, telemetry records, and archived imagery stored securely.',
      icon: FileCheck,
      tag: 'AUDIT & COMPLIANCE'
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="tech-label text-[#B7FF45] mb-2">END-TO-END OPERATIONAL LIFECYCLE</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            FROM SIGNAL <br />
            <span className="text-[#F1F0EA]">TO AERIAL VIEW</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Every flight is governed by deterministic steps—from automated trigger through real-time situational streaming to permanent compliance logging.
          </p>
        </div>

        {/* Horizontal Flow Container */}
        <div className="relative">
          {/* Animated Connecting SVG Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-white/10 z-0">
            <div 
              className="h-full bg-[#B7FF45] shadow-[0_0_12px_#B7FF45] transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              const isPast = activeStep >= idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-6 rounded-2xl transition-all duration-300 border cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#151819] border-[#B7FF45] shadow-xl shadow-[#B7FF45]/10 -translate-y-1'
                      : 'bg-[#151819]/40 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div>
                    {/* Top Circle Node with Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#B7FF45] text-black shadow-lg shadow-[#B7FF45]/30'
                          : isPast
                          ? 'bg-white/10 text-[#B7FF45]'
                          : 'bg-white/5 text-[#A6AAA9]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-mono-tech text-xs ${isActive ? 'text-[#B7FF45]' : 'text-white/30'}`}>
                        {st.num}
                      </span>
                    </div>

                    {/* Step Tag */}
                    <div className="tech-label text-[10px] text-[#A6AAA9] mb-1.5">{st.tag}</div>

                    {/* Step Title */}
                    <h3 className={`text-base font-semibold mb-2.5 transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {st.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs text-[#F1F0EA]/70 leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech text-[#A6AAA9]">
                      {isActive ? 'CURRENT STEP' : `PHASE 0${idx + 1}`}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'text-[#B7FF45] translate-x-1' : 'text-white/20'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
