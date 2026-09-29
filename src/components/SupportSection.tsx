import React from 'react';
import { Compass, Wrench, GraduationCap, CheckCircle } from 'lucide-react';

export const SupportSection: React.FC = () => {
  const pillars = [
    {
      title: 'SITE PLANNING',
      desc: 'Help customers evaluate locations, power access, line-of-sight conditions, and physical operational requirements.',
      icon: Compass,
      highlights: ['RF spectrum & coverage evaluation', 'Rooftop & ground mount feasibility', 'Weather exposure assessment']
    },
    {
      title: 'DEPLOYMENT SUPPORT',
      desc: 'Structured onboarding, hardware installation assistance, docking station anchoring, and network integration.',
      icon: Wrench,
      highlights: ['Professional installation guidance', 'Station power & network hookup', 'Pre-commissioning validation tests']
    },
    {
      title: 'OPERATOR TRAINING',
      desc: 'Comprehensive training curricula and operational documentation for supported organizational workflows.',
      icon: GraduationCap,
      highlights: ['Console operator onboarding', 'Standard operating procedures (SOP)', 'Safety fail-safe protocols']
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#151819] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">SERVICES & ONBOARDING</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            FROM SETUP <br />
            <span className="text-[#F1F0EA]">TO EVERY FLIGHT</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Dedicated enterprise technical support ensuring seamless integration into your organizational operations from initial survey to daily missions.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-[#0B0D0E]/80 border border-white/5 hover:border-[#B7FF45]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 text-[#B7FF45] flex items-center justify-center mb-6 group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#B7FF45] transition-colors">
                    {col.title}
                  </h3>

                  <p className="text-sm text-[#F1F0EA]/75 leading-relaxed font-light mb-8">
                    {col.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  {col.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#A6AAA9] font-mono-tech">
                      <CheckCircle className="w-3.5 h-3.5 text-[#B7FF45] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
