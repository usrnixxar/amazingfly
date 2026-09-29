import React from 'react';
import { 
  ArrowUpRight, 
  ShieldAlert, 
  Sun, 
  Warehouse, 
  Zap, 
  Sprout, 
  LifeBuoy 
} from 'lucide-react';

interface ApplicationsSectionProps {
  onRequestDemo: () => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ onRequestDemo }) => {
  const cards = [
    {
      title: 'PUBLIC SAFETY',
      desc: 'Rapid aerial visibility for authorized emergency response and incident assessment before ground arrival.',
      image: '/assets/applications/emergency_response.jpg',
      icon: ShieldAlert,
      tag: 'INCIDENT RESPONSE'
    },
    {
      title: 'INDUSTRIAL INSPECTION',
      desc: 'High-altitude asset monitoring across expansive solar arrays, manufacturing complexes, and rooftop infrastructure.',
      image: '/assets/applications/solar_visible.jpg',
      icon: Sun,
      tag: 'FACILITY SURVEY'
    },
    {
      title: 'SITE SECURITY',
      desc: 'Structured automated patrols providing broad site visibility for authorized security teams across large logistics yards.',
      image: '/assets/applications/site_security.jpg',
      icon: Warehouse,
      tag: 'PERIMETER VISIBILITY'
    },
    {
      title: 'ENERGY & UTILITIES',
      desc: 'Survey high-voltage transmission lines, substations, and remote rights-of-way without hazardous manual climbs.',
      image: '/assets/applications/energy_grid.jpg',
      icon: Zap,
      tag: 'GRID RELIABILITY'
    },
    {
      title: 'AGRICULTURE',
      desc: 'Multi-spectral aerial mapping to assess crop vitality, drainage channels, and vast rural property boundaries.',
      image: '/assets/applications/agriculture.jpg',
      icon: Sprout,
      tag: 'LAND MANAGEMENT'
    },
    {
      title: 'SEARCH & RESCUE',
      desc: 'Cover extensive terrain swiftly with radiometric thermal sensors to assist emergency crews in wilderness locations.',
      image: '/assets/applications/search_rescue.png',
      icon: LifeBuoy,
      tag: 'TACTICAL SUPPORT'
    },
  ];

  return (
    <section id="applications" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">SECTORS & USE CASES</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            BUILT FOR <br />
            <span className="text-[#F1F0EA]">THE REAL WORLD</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Engineered to support professionals across diverse industries requiring immediate, reliable aerial awareness.
          </p>
        </div>

        {/* 6 Large Cinematic Full-Bleed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#151819] border border-white/10 shadow-2xl cursor-pointer"
                onClick={onRequestDemo}
              >
                {/* Background Image with hover scale 1.03 */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay with hover darkening */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-[#0B0D0E]/40 to-black/30 transition-colors duration-300 group-hover:from-[#0B0D0E]/95 group-hover:via-[#0B0D0E]/60" />

                {/* Top Tag & Icon */}
                <div className="relative z-10 p-8 flex items-center justify-between">
                  <span className="tech-label px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[#B7FF45]">
                    {card.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:text-[#B7FF45] group-hover:border-[#B7FF45]/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Bottom Content with Slide Up Description */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#B7FF45] transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>

                  <div className="overflow-hidden">
                    <p className="text-sm text-[#F1F0EA]/80 font-light leading-relaxed transform translate-y-2 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 23. INDUSTRIAL INSPECTION SPOTLIGHT */}
        <div className="relative rounded-3xl overflow-hidden bg-[#151819] border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="tech-label text-[#B7FF45] mb-3">INFRASTRUCTURE SPOTLIGHT</div>
              <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
                INSPECT FROM <br />
                <span className="text-[#F1F0EA]">A NEW PERSPECTIVE</span>
              </h3>
              <p className="text-base sm:text-lg text-[#F1F0EA]/80 font-light leading-relaxed mb-8">
                Use aerial imaging to inspect difficult-to-access assets and understand large sites without relying solely on ground-level views.
              </p>
              <button
                onClick={onRequestDemo}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#B7FF45] text-black font-semibold text-sm hover:bg-[#CEFF70] transition-all cursor-pointer"
              >
                <span>EXPLORE INDUSTRIAL SOLUTIONS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] shadow-xl">
                <img
                  src="/assets/applications/solar_visible.jpg"
                  alt="Industrial Aerial Inspection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/80 text-[11px] font-mono-tech text-[#B7FF45] border border-white/10">
                  SECTOR SURVEY 400FT AGL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 24. SECURITY SPOTLIGHT */}
        <div className="relative rounded-3xl overflow-hidden bg-[#151819] border border-white/10 p-8 sm:p-14 lg:p-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/10] shadow-xl">
                <img
                  src="/assets/applications/site_security.jpg"
                  alt="Logistics Perimeter Security"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/80 text-[11px] font-mono-tech text-white border border-white/10">
                  SECURE DISTRIBUTION CORRIDOR
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="tech-label text-[#B7FF45] mb-3">SITE SECURITY & VISIBILITY</div>
              <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
                AERIAL AWARENESS <br />
                <span className="text-[#F1F0EA]">WHEN IT MATTERS</span>
              </h3>
              <p className="text-base sm:text-lg text-[#F1F0EA]/80 font-light leading-relaxed mb-8">
                Combine aerial visibility with structured operational workflows to give authorised teams a broader view of large sites.
              </p>
              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs text-[#A6AAA9] font-mono-tech">
                NOTICE: Operates strictly within organizational boundaries and authorized private commercial perimeters.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
