import React, { useState, useEffect } from 'react';
import { Play, X, Radio } from 'lucide-react';

export const DroneVideoShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
    subtitle: string;
    poster: string;
    desc: string;
  } | null>(null);

  const videos = [
    {
      id: '01',
      title: 'AUTONOMOUS OPERATIONS',
      subtitle: 'Automated Launch & Departure',
      poster: '/assets/dock/docking_station.jpg',
      desc: 'Watch the AmazingFly One aircraft automatically execute pre-flight diagnostics, canopy opening, and rapid ascent.',
    },
    {
      id: '02',
      title: 'AERIAL INTELLIGENCE',
      subtitle: 'Live High-Altitude Situational Stream',
      poster: '/assets/drone/hero_drone.jpg',
      desc: 'Real-time stabilized video capture down over an expansive industrial corridor with live HUD telemetry sync.',
    },
    {
      id: '03',
      title: 'REMOTE INSPECTION',
      subtitle: 'Critical Infrastructure Survey',
      poster: '/assets/applications/solar_visible.jpg',
      desc: 'Close-range survey of solar arrays and electrical transmission lines using automated waypoint tracking.',
    },
  ];

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    if (selectedVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <section className="relative py-28 sm:py-36 bg-[#0B0D0E] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="tech-label text-[#B7FF45] mb-2">FIELD CAPTURE & DEMONSTRATION</div>
          <h2 className="text-4xl sm:text-6xl font-medium tracking-[-0.04em] text-white leading-tight">
            OPERATIONAL <br />
            <span className="text-[#F1F0EA]">VIDEO SHOWCASE</span>
          </h2>
          <p className="text-base sm:text-lg text-[#F1F0EA]/75 mt-4 font-light">
            Observe the AmazingFly autonomous flight ecosystem performing real-world departure, stabilization, and survey routines.
          </p>
        </div>

        {/* 3 Large Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedVideo(vid)}
              className="group relative rounded-3xl overflow-hidden aspect-[16/11] bg-[#151819] border border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Poster Image */}
              <img
                src={vid.poster}
                alt={vid.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 group-hover:from-black/95 transition-colors" />

              {/* Play Button Center Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#B7FF45] text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-black ml-1" />
                </div>
              </div>

              {/* Bottom Video Metadata */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="tech-label text-[#B7FF45] text-[10px] mb-1">VIDEO 0{idx + 1}</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-[#B7FF45] transition-colors mb-1">
                  {vid.title}
                </h3>
                <p className="text-xs text-[#A6AAA9] line-clamp-1">{vid.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Centered Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={() => setSelectedVideo(null)} />

          <div className="relative z-10 w-full max-w-5xl rounded-3xl overflow-hidden bg-[#151819] border border-white/20 shadow-2xl flex flex-col">
            {/* Modal Titlebar */}
            <div className="px-6 py-4 bg-[#0B0D0E] border-b border-white/10 flex items-center justify-between text-xs font-mono-tech">
              <div className="flex items-center gap-2 text-white">
                <Radio className="w-4 h-4 text-[#B7FF45]" />
                <span className="font-semibold">{selectedVideo.title}</span>
                <span className="text-[#A6AAA9] hidden sm:inline">• {selectedVideo.subtitle}</span>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedVideo.poster}
                alt={selectedVideo.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Simulated Operational HUD Playback Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between font-mono-tech pointer-events-none">
                <div className="flex items-center justify-between text-xs text-white">
                  <div className="px-3 py-1 rounded bg-black/70 border border-white/15 backdrop-blur-md flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF45] animate-ping" />
                    <span>RECORDED MISSION PLAYBACK [4K HDR]</span>
                  </div>
                  <div className="text-white/60">PRESS ESC TO CLOSE</div>
                </div>

                <div className="p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md max-w-xl text-left">
                  <div className="text-sm font-semibold text-white mb-1">{selectedVideo.title}</div>
                  <div className="text-xs text-[#F1F0EA]/80 font-sans font-light">{selectedVideo.desc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
