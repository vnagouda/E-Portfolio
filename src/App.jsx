import './index.css';
import ParticleBackground from './components/ParticleBackground';
import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import SWOT from './components/SWOT';
import POAttainment from './components/POAttainment';
import Contact from './components/Contact';
import DotNavigation from './components/DotNavigation';

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#1a1a1a] overflow-x-hidden text-white">
      {/* Particle Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground scrollContainerRef={scrollRef} />
      </div>

      {/* Dot Navigation */}
      <DotNavigation containerRef={scrollRef} />

      {/* Scrollable snap container with fixed height */}
      <div
        ref={scrollRef}
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide"
      >
        {/* Each section can be min-h-screen (auto-growing) but works with snap */}
        <div className="snap-start" id="hero"><Hero /></div>
        <div className="snap-start" id="about"><About /></div>
        <div className="snap-start" id="skills"><Skills /></div>
        <div className="snap-start" id="projects"><Projects /></div>
        <div className="snap-start" id="experience"><Experience /></div>
        <div className="snap-start" id="swot"><SWOT /></div>
        <div className="snap-start" id="poattainment"><POAttainment /></div>
        <div className="snap-start" id="contact"><Contact /></div>
      </div>
    </div>
  );
}
export default App;
