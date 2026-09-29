import React from 'react';
import { Rocket, Video, Layers, CheckCircle2 } from 'lucide-react';

export const ImpactStatistics: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'AUTONOMOUS LAUNCH',
      desc: 'Aircraft can be integrated with approved operational workflows for fast deployment.',
      detail: 'Zero manual piloting required for departure. Weatherized precision launch sequencing.',
      icon: Rocket,
      tag: 'INSTANT DISPATCH'
    },
    {
      num: '02',
      title: 'LIVE AERIAL VIDEO',
      desc: 'Stream stabilized aerial imagery to authorised operators and connected teams.',
      detail: 'Multi-stream secure distribution to dispatch, command centers, and field personnel.',
      icon: Video,
      tag: 'REAL-TIME TELEMETRY'
    },
    {
      num: '03',
      title: 'CENTRALIZED OPERATIONS',
      desc: 'Manage aircraft, missions, media and operational information from one platform.',
      detail: 'Unified flight logging, audit records, and automated compliance archival.',
      icon: Layers,
      tag: 'ENTERPRISE CONTROL'
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0D0E] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="tech-label text-[#B7FF45] mb-3">SYSTEM CAPABILITIES</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            ENGINEERED FOR <br />
            <span className="text-[#F1F0EA]">REAL-WORLD OPERATIONS</span>
          </h2>
        </div>

        {/* Three Giant Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {pillars.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#151819]/60 hover:bg-[#151819] border border-white/5 hover:border-[#B7FF45]/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow highlight on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B7FF45]/5 rounded-bl-full pointer-events-none group-hover:bg-[#B7FF45]/10 transition-colors" />

                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl sm:text-6xl font-mono-tech font-light text-[#B7FF45]">
                      {col.num}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-white/5 text-[#B7FF45]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="tech-label px-2.5 py-1 rounded bg-white/5 text-[#A6AAA9] group-hover:text-white transition-colors">
                        {col.tag}
                      </span>
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl font-medium text-white tracking-tight mb-4 group-hover:text-[#B7FF45] transition-colors">
                    {col.title}
                  </h3>

                  {/* Main capability text */}
                  <p className="text-base text-[#F1F0EA]/80 leading-relaxed mb-6 font-light">
                    {col.desc}
                  </p>
                </div>

                {/* Additional Detail Box */}
                <div className="pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-[#A6AAA9] font-mono-tech">
                  <CheckCircle2 className="w-4 h-4 text-[#B7FF45] flex-shrink-0 mt-0.5" />
                  <span>{col.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
