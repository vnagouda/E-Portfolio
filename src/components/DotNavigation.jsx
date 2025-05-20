import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'swot', 'poattainment', 'contact'];

export default function DotNavigation({ containerRef }) {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const handleScroll = () => {
      const sectionOffsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, top: Math.abs(rect.top) };
      });

      const closest = sectionOffsets.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      );

      setActive(closest.id);
    };

    handleScroll(); // ✅ Trigger once on load
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      {sections.map((id) => {
        const isActive = active === id;
        return (
          <motion.div
            key={id}
            className="relative flex items-center justify-center"
            animate={isActive ? 'active' : 'inactive'}
            variants={{
              active: { scale: 1.6, x: -8 },
              inactive: { scale: 1, x: 0 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <button
              onClick={() =>
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                isActive ? 'bg-[#F9B17A] border-[#F9B17A]' : 'bg-white/20 border-white/30'
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
