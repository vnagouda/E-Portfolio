import avatar from '../assets/Avatar2.png';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';

const GlowText = ({
  text,
  className = '',
  size = 'text-xl',
  weight = 'font-normal',
  color = 'text-[#F4EDE4]'
}) => (
  <span
    className={`relative z-10 ${size} ${weight} ${color} ${className}`}
    style={{
      textShadow: '0 0 6px rgba(255, 222, 173, 0.2), 0 0 20px rgba(255, 222, 173, 0.08)',
      whiteSpace: 'normal'
    }}
  >
    {text}
  </span>
);

/* ---------------- Left Content ---------------- */
const LeftContent = () => (
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
      <GlowText text="I build AI, IoT, and Cloud–powered systems that scale." size="text-base sm:text-xl" weight="font-medium" />
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
        href="/Viresh_Resume.pdf"
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
        href="https://linkedin.com/in/viresh"
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
);

/* ---------------- Right Content ---------------- */
const RightContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="w-full flex justify-center md:justify-end mt-10 md:mt-0"
  >
    <img
      src={avatar}
      alt="Viresh Avatar"
      className="w-32 sm:w-48 md:w-72 lg:w-[320px] h-auto drop-shadow-xl rounded-xl"
    />
  </motion.div>
);

export default function Hero() {
  return <SectionWrapper id="hero" leftContent={<LeftContent />} rightContent={<RightContent />} />;
}