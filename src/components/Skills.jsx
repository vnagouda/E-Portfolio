import { useState } from 'react';
import { motion } from 'framer-motion';

import skillReact from '../assets/Skills/react.png';
import skillTailwind from '../assets/Skills/tailwind.png';
import skillPython from '../assets/Skills/python.png';
import skillYOLO from '../assets/Skills/yolo.jpeg';
import skillAWS from '../assets/Skills/aws.png';
import skillAzure from '../assets/Skills/azure.jpg';
import skillFirebase from '../assets/Skills/firebase.png';
import skillNode from '../assets/Skills/node.png';
import skillOpenCV from '../assets/Skills/opencv.png';
import skillTensorflow from '../assets/Skills/tensorflow.jpg';
import skillGenAI from '../assets/Skills/genai.png';
import skillMySQL from '../assets/Skills/mysql.png';
import skillMongo from '../assets/Skills/mongo.png';
import skillIoT from '../assets/Skills/iot.jpg';
import skillRasPi from '../assets/Skills/raspberrypi.png';
import skillHTML from '../assets/Skills/html.webp';


// Circular progress component
function CircularProgress({ percentage, size = 64, stroke = 6 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        stroke="#2d3748"
        fill="transparent"
        strokeWidth={stroke}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#F9B17A"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
}

const skills = [
  {
    name: 'React.js',
    icon: skillReact,
    level: 90,
    usedIn: 'Developed multiple interactive UIs including personal portfolio, a university café system, and real-time dashboards using React with Vite.js and Framer Motion for smooth animations.',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: skillTailwind,
    level: 85,
    usedIn: 'Implemented fully responsive, mobile-first layouts across all projects using Tailwind. Customized themes, animations, and dark mode for enhanced UI/UX consistency.',
    category: 'Frontend',
  },
  {
    name: 'HTML/CSS/JS',
    icon: skillHTML,
    level: 90,
    usedIn: 'Structured and styled static and dynamic web pages using HTML5, modern CSS3, and vanilla JavaScript, ensuring accessibility, responsiveness, and semantic markup.',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    icon: skillNode,
    level: 70,
    usedIn: 'Built backend APIs and authentication logic for the café web system, including role-based routing and real-time order updates using Express and JWTs.',
    category: 'Backend',
  },
  {
    name: 'Python',
    icon: skillPython,
    level: 95,
    usedIn: 'Core language for AI projects including YOLOv8 training, OpenCV preprocessing, data analysis, automation scripts, and ML pipelines for aquaculture intelligence.',
    category: 'AI/ML',
  },
  {
    name: 'TensorFlow',
    icon: skillTensorflow,
    level: 80,
    usedIn: 'Built and trained custom deep learning models for segmentation and classification in the final year project, deployed using TensorFlow on cloud and edge devices.',
    category: 'AI/ML',
  },
  {
    name: 'YOLOv8',
    icon: skillYOLO,
    level: 85,
    usedIn: 'Performed object detection and segmentation tasks, especially fish detection in dynamic water environments. Trained on custom datasets using Roboflow and OpenCV.',
    category: 'AI/ML',
  },
  {
    name: 'OpenCV',
    icon: skillOpenCV,
    level: 85,
    usedIn: 'Handled real-time video frame analysis, motion detection, and background subtraction for AI preprocessing pipelines and fish detection optimization.',
    category: 'AI/ML',
  },
  {
    name: 'Generative AI',
    icon: skillGenAI,
    level: 75,
    usedIn: 'Developed Gemini-based GenAI assistant for document QA. Experience with prompt engineering, RAG, GPT-4 tools, and building contextual AI interfaces.',
    category: 'AI/ML',
  },
  {
    name: 'AWS',
    icon: skillAWS,
    level: 85,
    usedIn: 'Utilized EC2, S3, RDS, Cognito, and IAM for deploying scalable full-stack systems like the café web app and aquaculture AI models. Set up secure, cost-optimized infra.',
    category: 'Cloud',
  },
  {
    name: 'Azure',
    icon: skillAzure,
    level: 80,
    usedIn: 'Configured Azure SQL and VM instances for real-time video relay and backend processing. Hosted Python-based AI services and integrated with React frontend.',
    category: 'Cloud',
  },
  {
    name: 'Firebase',
    icon: skillFirebase,
    level: 60,
    usedIn: 'Implemented Firebase Auth and Realtime Database for login systems, analytics dashboards, and dynamic order tracking in cloud-hosted apps.',
    category: 'Cloud',
  },
  {
    name: 'MySQL',
    icon: skillMySQL,
    level: 85,
    usedIn: 'Designed and managed normalized relational schemas for login systems, transaction logs, and data analytics. Used extensively in both local and cloud-based projects.',
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    icon: skillMongo,
    level: 65,
    usedIn: 'Built prototype MERN-stack apps with flexible schema designs for dynamic data use cases such as feedback forms, real-time logs, and test analytics.',
    category: 'Backend',
  },
  {
    name: 'IoT (Raspberry Pi)',
    icon: skillIoT,
    level: 80,
    usedIn: 'Integrated camera streams, USB sensors, and wireless connectivity on Raspberry Pi for aquaculture systems. Used GPIO, serial protocols, and real-time inference.',
    category: 'IoT',
  },
  {
    name: 'Raspberry Pi',
    icon: skillRasPi,
    level: 80,
    usedIn: 'Deployed AI models to RPi for edge monitoring. Set up bootstrapped Linux systems for continuous video analysis, internet fallback control, and remote syncing.',
    category: 'IoT',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Cloud', 'IoT'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="min-h-screen px-4 py-20 max-w-7xl mx-auto text-white">
      <h2 className="text-4xl font-bold text-center text-[#F9B17A] mb-8">Skill Set</h2>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              activeCategory === cat
                ? 'bg-[#F9B17A] text-black border-[#F9B17A]'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="group w-40 sm:w-48 h-48 perspective"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flip-card">
                <div className="flip-inner group-hover:flip-rotate">
                  {/* Front */}
                  <div className="flip-front">
                    <div className="relative w-16 h-16 mb-2">
                      <CircularProgress percentage={skill.level} />
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="absolute inset-0 w-8 h-8 m-auto object-contain z-10"
                      />
                    </div>
                    <h3 className="font-semibold text-[#F9B17A] text-sm text-center">{skill.name}</h3>
                  </div>

                  {/* Back */}
                  <div className="flip-back">
                    <h4 className="text-pink-300 text-sm font-semibold mb-2">{skill.name}</h4>
                    <p className="text-xs text-gray-300 text-center px-2">{skill.usedIn}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}