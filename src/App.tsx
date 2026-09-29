import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroTransition } from './components/IntroTransition';
import { ImpactStatistics } from './components/ImpactStatistics';
import { AmazingFlyInAction } from './components/AmazingFlyInAction';
import { FullscreenDroneReveal } from './components/FullscreenDroneReveal';
import { InteractiveDrone3D } from './components/InteractiveDrone3D';
import { ExplodedView } from './components/ExplodedView';
import { CameraSection } from './components/CameraSection';
import { ThermalViewEffect } from './components/ThermalViewEffect';
import { AmazingFlyStation } from './components/AmazingFlyStation';
import { MissionFlow } from './components/MissionFlow';
import { LiveOperationsCommand } from './components/LiveOperationsCommand';
import { ApplicationsSection } from './components/ApplicationsSection';
import { ConnectedEcosystem } from './components/ConnectedEcosystem';
import { SupportSection } from './components/SupportSection';
import { LargeMarquee } from './components/LargeMarquee';
import { DroneVideoShowcase } from './components/DroneVideoShowcase';
import { ResourceSection } from './components/ResourceSection';
import { ContactDemoSection } from './components/ContactDemoSection';
import { FAQAccordion } from './components/FAQAccordion';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'demo' | 'contact';
  }>({
    isOpen: false,
    mode: 'demo',
  });

  const handleOpenDemo = () => setModalState({ isOpen: true, mode: 'demo' });
  const handleOpenContact = () => setModalState({ isOpen: true, mode: 'contact' });
  const handleCloseModal = () => setModalState({ isOpen: false, mode: 'demo' });

  const handleScrollToExplore = () => {
    const el = document.getElementById('in-action');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F1F0EA] relative selection:bg-[#B7FF45] selection:text-[#0B0D0E]">
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* Sticky Translucent Blur Navigation */}
      <Navbar 
        onRequestDemo={handleOpenDemo}
        onContactClick={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 6. Cinematic Hero */}
        <Hero
          onRequestDemo={handleOpenDemo}
          onExploreClick={handleScrollToExplore}
        />

        {/* 8. Intro Transition: AUTONOMOUS AIR INTELLIGENCE */}
        <IntroTransition />

        {/* 9. Impact Statistics (01 Launch, 02 Live Video, 03 Centralized Operations) */}
        <ImpactStatistics />

        {/* 10. AmazingFly in Action (Sticky HUD Telemetry Viewer & 4 Features) */}
        <AmazingFlyInAction />

        {/* 12. Fullscreen Drone Reveal (AmazingFly One - Built to See More) */}
        <FullscreenDroneReveal />

        {/* 13. Interactive 3D WebGL Drone Model */}
        <InteractiveDrone3D />

        {/* 14. Engineered as a System (Exploded Modular Subsystems) */}
        <ExplodedView />

        {/* 15. Camera Section (See The Details That Matter) */}
        <CameraSection />

        {/* 16. Thermal View Effect (Visible vs FLIR LWIR Split Slider) */}
        <ThermalViewEffect />

        {/* 17. AmazingFly Station (Docking Station & 4-Stage Launch Timeline) */}
        <AmazingFlyStation />

        {/* 18. How the System Works: From Signal to Aerial View */}
        <MissionFlow />

        {/* 19, 20, 21. Live Operations Interface (AmazingCommand OS & Australian Map) */}
        <LiveOperationsCommand />

        {/* 22, 23, 24. Applications & Industrial / Security Spotlights */}
        <ApplicationsSection onRequestDemo={handleOpenDemo} />

        {/* 25. Connected Ecosystem */}
        <ConnectedEcosystem />

        {/* 26. Support & Deployment Services */}
        <SupportSection />

        {/* 27. Large Marquee Banner */}
        <LargeMarquee />

        {/* 28. Drone Video Showcase with Fullscreen Modal */}
        <DroneVideoShowcase />

        {/* 30. Resources & Insights */}
        <ResourceSection />

        {/* 31. Contact & Demonstration (Warm Off-white Section) */}
        <ContactDemoSection
          onRequestDemo={handleOpenDemo}
          onContactUs={handleOpenContact}
        />

        {/* 34. Frequently Asked Questions Accordion */}
        <FAQAccordion />
      </main>

      {/* 35. Enterprise Australian Lineage Footer */}
      <Footer 
        onRequestDemo={handleOpenDemo}
        onContactClick={handleOpenContact}
      />

      {/* 31. Request a Demo / Contact Modal */}
      <DemoModal
        isOpen={modalState.isOpen}
        initialMode={modalState.mode}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
