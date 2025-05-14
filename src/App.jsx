import './index.css';
import ParticleBackground from './components/ParticleBackground';
import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DotNavigation from './components/DotNavigation';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-screen min-h-screen bg-[#1a1a1a] overflow-x-hidden text-white">
      {/* Particle Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground scrollContainerRef={scrollRef} />
      </div>

      {/* Dot Navigation */}
      <DotNavigation containerRef={scrollRef} />

      {/* Foreground Scrollable Content */}
      <div
        ref={scrollRef}
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide"
      >
        <div className="snap-start" id="hero"><Hero /></div>
        <div className="snap-start" id="about"><About /></div>
        <div className="snap-start" id="skills"><Skills /></div>
        <div className="snap-start" id="projects"><Projects /></div>
      </div>
    </div>
  );
}

export default App;
