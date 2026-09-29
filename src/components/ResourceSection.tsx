import React from 'react';
import { BookOpen, Newspaper, Cpu, Video, ArrowUpRight } from 'lucide-react';

export const ResourceSection: React.FC = () => {
  const resources = [
    {
      category: 'GUIDE',
      title: 'Building an Autonomous Drone Program',
      desc: 'Operational considerations, site feasibility, and flight safety workflows for enterprise teams.',
      icon: BookOpen,
      readTime: '8 min read'
    },
    {
      category: 'ARTICLE',
      title: 'How Aerial Intelligence Supports Industrial Operations',
      desc: 'Enhancing site safety, situational clarity, and rapid response through scheduled aerial surveys.',
      icon: Newspaper,
      readTime: '6 min read'
    },
    {
      category: 'TECHNOLOGY',
      title: 'Understanding Autonomous Drone Stations',
      desc: 'A technical deep-dive into motorized all-weather docks, automated contact charging, and climate control.',
      icon: Cpu,
      readTime: '10 min read'
    },
    {
      category: 'VIDEO',
      title: 'Meet AmazingFly One',
      desc: 'A comprehensive visual overview of airframe engineering, gyro-stabilized gimbal, and command controls.',
      icon: Video,
      readTime: '4 min watch'
    },
  ];

  return (
    <section id="resources" className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">KNOWLEDGE & INSIGHTS</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            EXPLORE <br />
            <span className="text-[#F1F0EA]">AMAZINGFLY</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Insights, architecture papers, and practical operational guides for autonomous airspace deployment.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-[#151819]/60 hover:bg-[#151819] border border-white/5 hover:border-[#B7FF45]/30 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-white/5 text-[#B7FF45]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="tech-label px-2.5 py-1 rounded bg-white/5 text-[#B7FF45] font-mono-tech">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xs text-[#A6AAA9] font-mono-tech">{item.readTime}</span>
                  </div>

                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#B7FF45] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#F1F0EA]/70 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#A6AAA9] group-hover:text-white transition-colors">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B7FF45] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
