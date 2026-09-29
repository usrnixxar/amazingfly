import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

interface ContactDemoSectionProps {
  onRequestDemo: () => void;
  onContactUs: () => void;
}

export const ContactDemoSection: React.FC<ContactDemoSectionProps> = ({
  onRequestDemo,
  onContactUs,
}) => {
  return (
    <section className="relative py-28 sm:py-40 bg-[#F1F0EA] text-[#0B0D0E] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtle Top Label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#0B0D0E]" />
            <span className="tech-label text-[#0B0D0E] font-medium tracking-[0.16em]">
              COMMISSION AN ENTERPRISE TRIAL
            </span>
          </div>

          {/* Huge Dark Typography Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] text-[#0B0D0E] leading-[0.98] mb-8">
            BRING AERIAL <br />
            INTELLIGENCE <br />
            <span className="text-[#0B0D0E]/60">TO YOUR OPERATIONS</span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#0B0D0E]/75 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Speak with an AmazingFly systems engineer to evaluate site suitability, operational workflows, and autonomous deployment schedules.
          </p>

          {/* Two Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#0B0D0E] text-white font-medium text-base hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>REQUEST A DEMO</span>
              <ArrowUpRight className="w-4 h-4 text-[#B7FF45] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={onContactUs}
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full bg-transparent hover:bg-black/5 text-[#0B0D0E] font-medium text-base border-2 border-[#0B0D0E] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>CONTACT US</span>
            </button>
          </div>

          {/* Direct Support Details */}
          <div className="mt-16 pt-8 border-t border-black/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono-tech text-[#0B0D0E]/70">
            <a 
              href="mailto:support@amazingorganics.co" 
              className="flex items-center gap-2 hover:text-[#0B0D0E] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#0B0D0E]" />
              <span>support@amazingorganics.co</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0B0D0E]" />
              <span>Leumeah NSW 2560, Australia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
