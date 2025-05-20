import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';

// Dynamically import all images from /assets/About
const imageMap = import.meta.glob('../assets/About/*.jpg', { eager: true });
const images = Object.values(imageMap).map((mod) => mod.default);

const IMAGE_DURATION = 4; // seconds per image

const LeftContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_DURATION * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[480px] h-[480px] flex items-bottom justify-center overflow-hidden rounded-xl border border-[#f9b17a33] backdrop-blur-md bg-[#F9B17A22] shadow-md">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt={`about-image-${index}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

const RightContent = () => (
  <div className="w-full max-w-xl text-left backdrop-blur-md bg-white/10 border border-white/10 shadow-xl rounded-xl p-8">
    <h2 className="text-4xl font-bold text-[#F9B17A] mb-4">About Me</h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      I’m Viresh, a Computer Engineer with a passion for building intelligent, scalable systems.
      From AI and IoT to real-time cloud applications, I love integrating smart technologies to solve real-world problems.
      My current focus is on aquaculture tech, where I’m developing automated tools to assist farmers with data-driven insights.
    </p>
  </div>
);

export default function About() {
  return (
    <SectionWrapper id="about" leftContent={<LeftContent />} rightContent={<RightContent />} />
  );
}
