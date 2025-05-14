import avatar from '../assets/Avatar2.png';
import SectionWrapper from './SectionWrapper';

const GlowText = ({ text, className = '', size = 'text-xl', weight = 'font-normal', color = 'text-[#F4EDE4]' }) => (
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

const LeftContent = () => (
  <div className="w-full max-w-xl pointer-events-auto break-words overflow-hidden flex flex-col justify-center min-h-[70vh]">
    <h1 className="text-[clamp(2.8rem,5.0vw,5.5rem)] font-extrabold leading-tight tracking-tight">
      <span className="whitespace-nowrap">
        <GlowText text="Hi, I’m" size="inherit" weight="inherit" />
        {' '}
        <GlowText text="Viresh" size="inherit" weight="inherit" color="text-[#F9B17A]" />
      </span>
    </h1>
    <p className="mt-4">
      <GlowText text="I build AI, IoT, and Cloud-powered systems that scale." size="text-2xl" weight="font-medium" />
    </p>
    <p className="mt-2">
      <GlowText text="Computer Engineer | Cloud-Native Dev | AI Researcher" size="text-lg" />
      <br />
      <GlowText text="FYP: Aquaculture Intelligence" size="text-lg" />
    </p>
    <div className="mt-6 flex gap-4 flex-wrap">
      <a href="#projects" className="px-6 py-3 rounded-xl font-semibold bg-[#F9B17A] text-[#1a1a1a] shadow-lg hover:bg-[#fba96c] transition-all">
        View Projects
      </a>
      <a href="/Viresh_Resume.pdf" download className="px-6 py-3 border border-[#F4EDE4] text-[#F4EDE4] rounded-xl font-semibold hover:bg-[#F4EDE4] hover:text-black transition-all">
        Download Resume
      </a>
    </div>
    <div className="mt-6 flex gap-6 text-[#F4EDE4] text-3xl">
      <a href="https://github.com/vnagouda" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9B17A] transition">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/viresh" target="_blank" rel="noopener noreferrer" className="hover:text-[#F9B17A] transition">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="mailto:vnagouda@gmail.com" className="hover:text-[#F9B17A] transition">
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  </div>
);

const RightContent = () => (
  <div className="flex justify-center">
    <img src={avatar} alt="Viresh Avatar" className="w-[320px] h-auto drop-shadow-xl rounded-xl" />
  </div>
);

export default function Hero() {
  return (
    <SectionWrapper id="hero" leftContent={<LeftContent />} rightContent={<RightContent />} />
  );
}
