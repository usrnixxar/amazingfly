import React from 'react';
import { Logo } from './Logo';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onRequestDemo: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestDemo, onContactClick }) => {
  return (
    <footer className="relative bg-[#0B0D0E] text-[#F1F0EA] pt-20 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <a href="#" className="inline-block mb-6">
              <Logo size="md" />
            </a>
            <p className="text-sm text-[#A6AAA9] font-light leading-relaxed max-w-sm mb-6">
              Autonomous drone systems, aerial imaging payloads, and intelligent flight software engineered for serious enterprise operations.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tech text-[#B7FF45]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45]" />
              <span>AUSTRALIAN AEROSPACE SYSTEMS</span>
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <div className="tech-label text-[#B7FF45] mb-4">PRODUCTS</div>
            <ul className="space-y-2.5 text-sm text-[#A6AAA9]">
              <li>
                <a href="#aircraft-reveal" className="hover:text-white transition-colors">AmazingFly One</a>
              </li>
              <li>
                <a href="#dock-station" className="hover:text-white transition-colors">AmazingFly Station</a>
              </li>
              <li>
                <a href="#live-command" className="hover:text-white transition-colors">AmazingCommand</a>
              </li>
              <li>
                <a href="#camera-specs" className="hover:text-white transition-colors">AmazingVision</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <div className="tech-label text-[#B7FF45] mb-4">SOLUTIONS</div>
            <ul className="space-y-2.5 text-sm text-[#A6AAA9]">
              <li>
                <a href="#applications" className="hover:text-white transition-colors">Public Safety</a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">Industrial</a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">Security</a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">Energy</a>
              </li>
              <li>
                <a href="#applications" className="hover:text-white transition-colors">Agriculture</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Business Entity Details */}
          <div>
            <div className="tech-label text-[#B7FF45] mb-4">CONTACT & ENTITY</div>
            <div className="space-y-3 text-sm text-[#A6AAA9] font-light">
              <a 
                href="mailto:support@amazingorganics.co" 
                className="flex items-center gap-2 text-white hover:text-[#B7FF45] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#B7FF45] flex-shrink-0" />
                <span className="break-all font-mono-tech text-xs">support@amazingorganics.co</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#A6AAA9] flex-shrink-0 mt-0.5" />
                <div className="text-xs font-mono-tech leading-relaxed">
                  P.O. Box 222<br />
                  Leumeah NSW 2560<br />
                  Australia
                </div>
              </div>

              <div className="pt-2 text-xs font-mono-tech text-white/50">
                ABN: 77 680 690 993
              </div>

              <div className="pt-3 space-y-2">
                <button
                  onClick={onRequestDemo}
                  className="px-4 py-2 rounded-xl bg-[#B7FF45] text-black font-semibold text-xs font-mono-tech transition-colors w-full text-center hover:bg-[#CEFF70]"
                >
                  REQUEST A DEMO
                </button>
                <button
                  onClick={onContactClick}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono-tech text-white border border-white/10 transition-colors w-full text-center"
                >
                  CONTACT OPERATIONS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Brand Lineage */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#A6AAA9]">
          <div className="flex items-center gap-2">
            <span>© 2026 AmazingFly. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white/80">An Amazing Organics initiative.</span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://amazingorganics.co/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Amazing Organics</span>
              <ExternalLink className="w-3 h-3 text-[#B7FF45]" />
            </a>
            <a href="#faq" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#faq" className="hover:text-white transition-colors">Terms of Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
