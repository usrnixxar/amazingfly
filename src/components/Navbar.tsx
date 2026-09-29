import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { 
  ChevronDown, 
  ArrowUpRight, 
  Menu, 
  X, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Radar, 
  ExternalLink 
} from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setActiveMenu(null);

  return (
    <header
      ref={navRef}
      onMouseLeave={closeMenu}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 glass-nav shadow-2xl backdrop-blur-xl'
          : 'py-6 bg-gradient-to-b from-[#0B0D0E]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <a href="#" className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#B7FF45] rounded-md">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Center: Desktop Navigation Links with Mega Menus */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('products')}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeMenu === 'products' ? 'text-[#B7FF45]' : 'text-[#F1F0EA]/80 hover:text-white'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180 text-[#B7FF45]' : ''}`} />
              </button>

              {activeMenu === 'products' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] animate-fadeIn"
                  onMouseEnter={() => setActiveMenu('products')}
                >
                  <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-2xl">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                      <span className="tech-label text-[#B7FF45]">AMAZINGFLY HARDWARE & SOFTWARE</span>
                      <span className="text-xs text-[#A6AAA9]">Autonomous Tier 1 Systems</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <a href="#aircraft-reveal" onClick={closeMenu} className="p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#B7FF45]/10 text-[#B7FF45] group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                            <Cpu className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#B7FF45] transition-colors flex items-center gap-1">
                              AmazingFly One
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-[#A6AAA9] mt-0.5">Enterprise autonomous quadcopter with multi-sensor payload</p>
                          </div>
                        </div>
                      </a>

                      <a href="#dock-station" onClick={closeMenu} className="p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#B7FF45]/10 text-[#B7FF45] group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#B7FF45] transition-colors flex items-center gap-1">
                              AmazingFly Station
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-[#A6AAA9] mt-0.5">Automated charging & weatherproof all-climate dock</p>
                          </div>
                        </div>
                      </a>

                      <a href="#camera-specs" onClick={closeMenu} className="p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#B7FF45]/10 text-[#B7FF45] group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                            <Radar className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#B7FF45] transition-colors flex items-center gap-1">
                              AmazingVision Camera
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-[#A6AAA9] mt-0.5">Dual optical & radiometric infrared thermal gimbal</p>
                          </div>
                        </div>
                      </a>

                      <a href="#live-command" onClick={closeMenu} className="p-3 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#B7FF45]/10 text-[#B7FF45] group-hover:bg-[#B7FF45] group-hover:text-black transition-colors">
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-[#B7FF45] transition-colors flex items-center gap-1">
                              AmazingCommand
                              <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-[#A6AAA9] mt-0.5">Centralized operational mission control software</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('solutions')}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeMenu === 'solutions' ? 'text-[#B7FF45]' : 'text-[#F1F0EA]/80 hover:text-white'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'solutions' ? null : 'solutions')}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'solutions' ? 'rotate-180 text-[#B7FF45]' : ''}`} />
              </button>

              {activeMenu === 'solutions' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[520px] animate-fadeIn"
                  onMouseEnter={() => setActiveMenu('solutions')}
                >
                  <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-2xl">
                    <div className="pb-3 mb-4 border-b border-white/5 flex items-center justify-between">
                      <span className="tech-label text-[#B7FF45]">MISSION USE CASES</span>
                      <span className="text-xs text-[#A6AAA9]">Autonomous Readiness</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { title: 'Emergency Response', desc: 'Instant aerial support & situational awareness' },
                        { title: 'Industrial Inspection', desc: 'Solar, roofing & tall utility infrastructure' },
                        { title: 'Site Security', desc: 'Automated perimeter patrol & incident check' },
                        { title: 'Infrastructure Monitoring', desc: 'Powerlines, substations & pipelines' },
                        { title: 'Search & Rescue', desc: 'Thermal beacon tracking & wilderness coverage' },
                        { title: 'Remote Operations', desc: 'Zero-touch launch from remote locations' }
                      ].map((item, i) => (
                        <a 
                          key={i} 
                          href="#applications" 
                          onClick={closeMenu}
                          className="p-2.5 rounded-lg hover:bg-white/5 transition-all group"
                        >
                          <div className="text-sm font-medium text-white group-hover:text-[#B7FF45] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#A6AAA9] mt-0.5 leading-snug">{item.desc}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Technology */}
            <a 
              href="#engineered-system" 
              className="px-3 py-2 text-sm font-medium text-[#F1F0EA]/80 hover:text-white transition-colors"
            >
              Technology
            </a>

            {/* Industries */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('industries')}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeMenu === 'industries' ? 'text-[#B7FF45]' : 'text-[#F1F0EA]/80 hover:text-white'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'industries' ? null : 'industries')}
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180 text-[#B7FF45]' : ''}`} />
              </button>

              {activeMenu === 'industries' && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[540px] animate-fadeIn"
                  onMouseEnter={() => setActiveMenu('industries')}
                >
                  <div className="glass-panel p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-2xl">
                    <div className="pb-3 mb-4 border-b border-white/5 flex items-center justify-between">
                      <span className="tech-label text-[#B7FF45]">SECTOR DEPLOYMENT</span>
                      <span className="text-xs text-[#A6AAA9]">Enterprise Sectors</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {[
                        'Public Safety', 'Industrial Operations',
                        'Mining & Resources', 'Construction Sites',
                        'Agriculture & Forestry', 'Energy & Utilities',
                        'Logistics Hubs', 'Commercial Security'
                      ].map((ind, idx) => (
                        <a 
                          key={idx} 
                          href="#applications" 
                          onClick={closeMenu}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-[#B7FF45] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF45]"></span>
                          <span>{ind}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources */}
            <a 
              href="#resources" 
              className="px-3 py-2 text-sm font-medium text-[#F1F0EA]/80 hover:text-white transition-colors"
            >
              Resources
            </a>

            {/* Company */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('company')}
            >
              <button 
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  activeMenu === 'company' ? 'text-[#B7FF45]' : 'text-[#F1F0EA]/80 hover:text-white'
                }`}
                onClick={() => setActiveMenu(activeMenu === 'company' ? null : 'company')}
              >
                <span>Company</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === 'company' ? 'rotate-180 text-[#B7FF45]' : ''}`} />
              </button>

              {activeMenu === 'company' && (
                <div 
                  className="absolute top-full right-0 pt-4 w-[340px] animate-fadeIn"
                  onMouseEnter={() => setActiveMenu('company')}
                >
                  <div className="glass-panel p-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-2xl">
                    <div className="space-y-1">
                      <a href="#about" onClick={closeMenu} className="block p-2 rounded-lg hover:bg-white/5 text-white hover:text-[#B7FF45] text-sm">
                        About AmazingFly
                      </a>
                      <a 
                        href="https://amazingorganics.co/" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 text-white hover:text-[#B7FF45] text-sm group"
                      >
                        <span>Amazing Organics Lineage</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#A6AAA9] group-hover:text-[#B7FF45]" />
                      </a>
                      <button 
                        onClick={() => { closeMenu(); onContactClick(); }}
                        className="w-full text-left p-2 rounded-lg hover:bg-white/5 text-white hover:text-[#B7FF45] text-sm"
                      >
                        Contact Operations
                      </button>
                      <a href="#faq" onClick={closeMenu} className="block p-2 rounded-lg hover:bg-white/5 text-white hover:text-[#B7FF45] text-sm">
                        FAQ & Compliance
                      </a>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#A6AAA9]">
                      L.B NAGAR, HYDERABAD • TELANGANA
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onContactClick}
              className="text-sm font-medium text-white/90 hover:text-white px-3 py-2 transition-colors duration-200"
            >
              Contact
            </button>
            <button
              onClick={onRequestDemo}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7FF45] text-[#0B0D0E] font-medium text-sm transition-all duration-300 hover:bg-[#CEFF70] hover:shadow-[0_0_24px_rgba(183,255,69,0.35)] active:scale-95"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onRequestDemo}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-[#B7FF45] text-[#0B0D0E]"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-[#B7FF45] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-[#0B0D0E]/95 backdrop-blur-2xl p-6 border-t border-white/10 overflow-y-auto animate-fadeIn">
          <div className="space-y-6">
            <div>
              <div className="tech-label text-[#B7FF45] mb-2">SYSTEMS</div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                <a href="#aircraft-reveal" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white py-1">AmazingFly One</a>
                <a href="#dock-station" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white py-1">AmazingFly Station</a>
                <a href="#camera-specs" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white py-1">AmazingVision Gimbal</a>
                <a href="#live-command" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white py-1">AmazingCommand UI</a>
              </div>
            </div>

            <div>
              <div className="tech-label text-[#B7FF45] mb-2">SOLUTIONS & INDUSTRIES</div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                <a href="#applications" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-300 py-1">Emergency Response</a>
                <a href="#applications" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-300 py-1">Industrial & Energy Inspection</a>
                <a href="#applications" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-300 py-1">Perimeter & Site Security</a>
                <a href="#applications" onClick={() => setMobileMenuOpen(false)} className="text-base text-gray-300 py-1">Precision Agriculture</a>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onRequestDemo(); }}
                className="w-full py-3.5 rounded-xl bg-[#B7FF45] text-black font-semibold text-center flex items-center justify-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
                className="w-full py-3 rounded-xl border border-white/20 text-white font-medium text-center"
              >
                Contact Operations
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
