import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is AmazingFly?',
      a: 'AmazingFly is an autonomous aerial systems initiative that combines robotic aircraft, automated docking stations, and centralized command software to provide real-time aerial situational awareness for commercial and industrial operations.',
    },
    {
      q: 'How can autonomous drone systems be used?',
      a: 'Autonomous drone systems can be deployed to provide immediate overhead visibility during incident response, conduct routine facility and perimeter patrols, survey tall or hazardous infrastructure, and monitor expansive agricultural or utility assets without requiring on-site manual pilots for every flight.',
    },
    {
      q: 'What industries can AmazingFly support?',
      a: 'The system is architected to assist authorized operations across public safety, industrial manufacturing, mining, construction, precision agriculture, energy and utilities, logistics distribution centers, and commercial property security.',
    },
    {
      q: 'Can AmazingFly provide live aerial video?',
      a: 'Yes. When deployed within supported network coverage areas, AmazingFly streams stabilized optical and infrared video directly to authorized dispatch consoles, command screens, and mobile operator interfaces.',
    },
    {
      q: 'What is AmazingFly Station?',
      a: 'AmazingFly Station is an all-weather automated ground enclosure that houses, protects, and charges the aircraft between operations. It includes motorized opening doors, internal environmental controls, and contact charging to maintain mission readiness.',
    },
    {
      q: 'What is AmazingCommand?',
      a: 'AmazingCommand is our unified software platform used to coordinate flight planning, monitor aircraft telemetry and battery health, visualize live camera feeds, and organize historical flight records.',
    },
    {
      q: 'Can AmazingFly operate at night?',
      a: 'The aircraft is engineered with low-light optical sensitivity and optional radiometric thermal infrared imaging payloads, allowing authorized operators to gather aerial perspective during twilight and nighttime operations where permitted by local regulations.',
    },
    {
      q: 'Can AmazingFly integrate with existing systems?',
      a: 'AmazingFly is designed to interface with standard operational dispatch feeds, event alerting systems, and enterprise security platforms through supported API webhooks and data connectors.',
    },
    {
      q: 'How is mission information stored?',
      a: 'Mission logs, telemetry records, and authorized imagery are archived with encryption protocols and structured audit trails to support organizational compliance and reporting requirements.',
    },
    {
      q: 'How can I request a demonstration?',
      a: 'You can submit a demonstration request using our online inquiry form or reach out directly to our operations team at support@amazingorganics.co. Our engineers will consult with you on your specific site requirements and operational goals.',
    },
  ];

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">QUESTIONS & ANSWERS</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            FREQUENTLY <br />
            <span className="text-[#F1F0EA]">ASKED QUESTIONS</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Clear, grounded answers regarding AmazingFly hardware, software, and deployment workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#151819]/50 border border-white/5 overflow-hidden transition-colors hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-white">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#B7FF45]' : 'text-[#A6AAA9]'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#F1F0EA]/80 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
