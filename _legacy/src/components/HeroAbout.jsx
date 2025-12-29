import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import avatar from '../assets/Avatar2.png';

const imageMap = import.meta.glob('../assets/About/*.jpg', { eager: true });
const images = Object.values(imageMap).map((mod) => mod.default);
const IMAGE_DURATION = 4;

const GlowText = ({
  text,
  className = '',
  size = 'text-xl',
  weight = 'font-normal',
  color = 'text-[#F4EDE4]',
}) => (
  <span
    className={`relative z-10 ${size} ${weight} ${color} ${className}`}
    style={{
      textShadow: '0 0 6px rgba(255, 222, 173, 0.2), 0 0 20px rgba(255, 222, 173, 0.08)',
      whiteSpace: 'normal',
    }}
  >
    {text}
  </span>
);

export default function HeroAbout() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_DURATION * 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen text-white overflow-hidden flex flex-col"
    >
      {/* === Blended Avatar Background === */}
      <div className="absolute inset-0 z-0">
        <img
          src={avatar}
          alt="Viresh Avatar"
          className="w-full h-full object-cover"
          style={{
            maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          }}
        />
      </div>

      {/* === Hero Section (GlowText + Carousel) === */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-10 px-6 sm:px-10 py-20 max-w-7xl w-full mx-auto items-center justify-center">
        {/* Left: Text Block */}
        <div className="w-full max-w-md sm:max-w-2xl pointer-events-auto flex flex-col justify-center px-4 sm:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold leading-tight tracking-tight"
          >
            <span className="whitespace-nowrap">
              <GlowText text="Hi, I'm" size="inherit" weight="inherit" />{' '}
              <GlowText text="Viresh" size="inherit" weight="inherit" color="text-[#F9B17A]" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4"
          >
            <GlowText
              text="I build AI, IoT, and Cloud–powered systems that scale."
              size="text-base sm:text-xl"
              weight="font-medium"
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-2 space-y-1"
          >
            <GlowText text="Computer Engineer • Cloud‑Native Dev • AI Researcher" size="text-sm sm:text-base" />
            <br />
            <GlowText text="FYP: Aquaculture Intelligence" size="text-sm sm:text-base" />
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#projects"
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold bg-[#F9B17A] text-[#1a1a1a] shadow-lg hover:bg-[#fba96c] transition-all"
            >
              View Projects
            </a>
            <a
              href="/E-Portfolio/Viresh_Resume.pdf"
              download
              className="px-5 py-2 sm:px-6 sm:py-3 border border-[#F4EDE4] text-[#F4EDE4] rounded-xl font-semibold hover:bg-[#F4EDE4] hover:text-black transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="mt-4 flex gap-5 text-xl sm:text-2xl text-[#F4EDE4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://github.com/vnagouda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F9B17A] transition"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/viresh-nagouda-607a7b175"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F9B17A] transition"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:vnagouda@gmail.com" className="hover:text-[#F9B17A] transition">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>
        </div>

        {/* Right: Carousel */}
        <div className="relative w-full max-w-sm aspect-[4/4] overflow-hidden rounded-xl border border-[#f9b17a33] backdrop-blur-md bg-[#F9B17A22] shadow-lg">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`carousel-${index}`}
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* === More About Me (stacked below hero row) === */}
      <div className="relative z-10 w-full max-w-5xl px-6 sm:px-10 pt-10 pb-24 mx-auto text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-[#F9B17A] mb-6"
        >
          More About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-base sm:text-lg text-white/80 leading-relaxed"
        >
          Beyond my academic background in Computer Engineering, I’ve led projects that span full-stack development,
          AI-powered monitoring systems, and IoT-driven edge deployments. I'm passionate about blending intelligence
          with usability — building systems that not only solve problems but do so beautifully.
          <br />
          <br />
          Whether it’s deploying on the cloud, designing seamless UIs, or training custom ML models, I love exploring
          the space where innovation meets impact.
        </motion.p>
      </div>
    </section>
  );
}
