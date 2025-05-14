import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';

import skillAWS from '../assets/Skills/aws.png';
import skillAzure from '../assets/Skills/azure.jpg';
import skillFirebase from '../assets/Skills/firebase.png';
import skillGenAI from '../assets/Skills/genai.png';
import skillHTML from '../assets/Skills/html.webp';
import skillIoT from '../assets/Skills/iot.jpg';
import skillMongo from '../assets/Skills/mongo.png';
import skillMySQL from '../assets/Skills/mysql.png';
import skillNode from '../assets/Skills/node.png';
import skillOpenCV from '../assets/Skills/opencv.png';
import skillPython from '../assets/Skills/python.png';
import skillReact from '../assets/Skills/react.png';
import skillTailwind from '../assets/Skills/tailwind.png';
import skillTensorflow from '../assets/Skills/tensorflow.jpg';
import skillYOLO from '../assets/Skills/yolo.jpeg';
import skillRasPi from '../assets/Skills/raspberrypi.png';

const skills = [
  {
    name: 'React.js',
    icon: skillReact,
    level: 90,
    usedIn: 'Portfolio, Cafe Website, Vite.js, Framer Motion, Three.js',
  },
  {
    name: 'Tailwind CSS',
    icon: skillTailwind,
    level: 85,
    usedIn: 'All projects, responsive layouts, theme styling',
  },
  {
    name: 'HTML/CSS/JS',
    icon: skillHTML,
    level: 90,
    usedIn: 'All frontend structure + static UI layouts',
  },
  {
    name: 'Node.js',
    icon: skillNode,
    level: 70,
    usedIn: 'Cafe backend APIs, auth logic, deployment',
  },
  {
    name: 'Python',
    icon: skillPython,
    level: 95,
    usedIn: 'YOLOv8 training, OpenCV processing, AI tools',
  },
  {
    name: 'TensorFlow',
    icon: skillTensorflow,
    level: 80,
    usedIn: 'Segmentation/classification models in FYP',
  },
  {
    name: 'OpenCV',
    icon: skillOpenCV,
    level: 85,
    usedIn: 'Computer vision, preprocessing, motion detection',
  },
  {
    name: 'YOLOv5 / YOLOv8',
    icon: skillYOLO,
    level: 85,
    usedIn: 'Fish detection, weight estimation, object filtering',
  },
  {
    name: 'Generative AI',
    icon: skillGenAI,
    level: 75,
    usedIn: 'Gemini PDF QA, GPT-4 tools, GenAI apps',
  },
  {
    name: 'AWS',
    icon: skillAWS,
    level: 85,
    usedIn: 'EC2, S3, Cognito, RDS in Cafe/FYP cloud setup',
  },
  {
    name: 'Azure',
    icon: skillAzure,
    level: 80,
    usedIn: 'SQL database for FYP, VM-based video relay',
  },
  {
    name: 'IoT (RPi)',
    icon: skillIoT,
    level: 80,
    usedIn: 'Camera feed, USB integration, edge computing',
  },
  {
    name: 'Firebase',
    icon: skillFirebase,
    level: 60,
    usedIn: 'Auth POCs, realtime Firestore demo',
  },
  {
    name: 'MongoDB',
    icon: skillMongo,
    level: 65,
    usedIn: 'Full stack data projects, MERN stack POC',
  },
  {
    name: 'MySQL',
    icon: skillMySQL,
    level: 85,
    usedIn: 'Cafe DB, login/register, feed tracking',
  },
  {
    name: 'Raspberry Pi',
    icon: skillRasPi,
    level: 80,
    usedIn: 'Fish pond AI prototype, local stream inference',
  },
];

const SkillRow = ({ skill, delay, onHover, selected }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className={`flex items-center gap-4 w-full group cursor-pointer p-4 rounded-lg transition-all duration-300 ${
      selected?.name === skill.name
        ? 'bg-white/10 border border-[#F9B17A]'
        : 'hover:bg-white/5'
    }`}
    onMouseEnter={() => onHover(skill)}
  >
    <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
    <div className="flex-1">
      <div className="flex justify-between text-sm font-semibold text-[#F9B17A] mb-1">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-600 rounded overflow-hidden">
        <div
          className="h-full bg-[#F9B17A] rounded"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  </motion.div>
);

const SkillDetails = ({ skill }) => (
  <AnimatePresence mode="wait">
    {skill && (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
        className="w-full p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
          <h3 className="text-xl font-bold text-[#F9B17A]">{skill.name}</h3>
        </div>
        <p className="text-sm text-white/80 mb-2"><strong>Expertise:</strong> {skill.level}%</p>
        <p className="text-sm text-white/80"><strong>Used In:</strong> {skill.usedIn}</p>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Skills() {
  const [selected, setSelected] = useState(skills[0]);

  const mid = Math.ceil(skills.length / 2);
  const left = skills.slice(0, mid);
  const right = skills.slice(mid);

  const skillGrid = (
    <div className="w-full max-w-6xl p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-[#F9B17A] mb-8 text-center">Skill Set</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-4">{left.map((s, i) => <SkillRow key={i} skill={s} delay={i * 0.05} onHover={setSelected} selected={selected} />)}</div>
        <div className="space-y-4">{right.map((s, i) => <SkillRow key={i + mid} skill={s} delay={i * 0.05} onHover={setSelected} selected={selected} />)}</div>
      </div>
    </div>
  );

  return (
    <SectionWrapper id="skills" leftContent={skillGrid} rightContent={<SkillDetails skill={selected} />} />
  );
}
