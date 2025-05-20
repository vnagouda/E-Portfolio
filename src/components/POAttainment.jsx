import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Raw PO scores from report card
const poScores = [
  { code: 'PLO1', score: 1.0 },
  { code: 'PLO2', score: 0.5 },
  { code: 'PLO3', score: 0.86 },
  { code: 'PLO4', score: 1.0 },
  { code: 'PLO5', score: 0.75 },
  { code: 'PLO6', score: 1.0 },
  { code: 'PLO7', score: 1.0 },
  { code: 'PLO8', score: 1.0 },
  { code: 'PLO9', score: 0.60 },
  { code: 'PLO10', score: 1.0 },
  { code: 'PLO11', score: 1.0 },
  { code: 'PLO12', score: 1.0 }
];

// Full PLO definitions
const ploDefinitions = {
  PLO1:
    'Ability to gain and apply principles of Mathematics, Science and Engineering to the solutions of complex engineering problems.',
  PLO2:
    'Ability to undertake complex engineering problem analysis and apply engineering principles to solve them.',
  PLO3:
    'Ability to design innovative solutions for complex engineering problems.',
  PLO4:
    'Ability to investigate complex engineering problems using research techniques.',
  PLO5:
    'Ability to select and use suitable tools and techniques for complex engineering problems.',
  PLO6:
    'Ability to engage in professional engineering practice for safety, health, social, cultural and legal responsibilities in developing solutions for complex engineering problems.',
  PLO7:
    'Ability to comprehend and demonstrate good practices of engineering in sustainable development and environmental considerations for the solutions of complex engineering problems.',
  PLO8:
    'Ability to execute the responsibilities of an Engineer professionally and ethically.',
  PLO9:
    'Ability to function effectively as a team leader or a member in a team within multi-disciplinary settings.',
  PLO10:
    'Ability to communicate effectively and professionally on complex engineering activities.',
  PLO11:
    'Ability to demonstrate entrepreneurship skills, engineering project management and economic decision making in multidisciplinary environments.',
  PLO12:
    'Ability to recognise the need for, and be able to engage in independent and life-long learning towards continuous professional development.'
};

const POAttainment = () => {
  const [active, setActive] = useState('PLO1');

  return (
    <motion.section
      id="poattainment"
      className="min-h-screen p-8 text-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 border-b-2 border-pink-600 inline-block">
          Program Outcome Attainment
        </h2>

        {/* Radar Chart */}
        <div className="w-full h-80">
          <ResponsiveContainer>
            <RadarChart data={poScores} outerRadius="70%">
              <PolarGrid />
              <PolarAngleAxis dataKey="code" tick={{ fill: '#ddd', fontSize: 12 }} />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 1]}
                tickCount={5}
                tick={{ fill: '#aaa', fontSize: 10 }}
              />
              <Radar
                name="Score"
                dataKey="score"
                stroke="#ec4899"
                fill="#ec4899"
                fillOpacity={0.5}
                isAnimationActive
                animationDuration={1200}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Interactive PLO Selector */}
        <motion.div className="mt-8 flex flex-wrap gap-4">
          {poScores.map(({ code }) => (
            <motion.button
              key={code}
              onHoverStart={() => setActive(code)}
              onClick={() => setActive(code)}
              whileHover={{ scale: 1.1 }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200 focus:outline-none
                ${active === code
                  ? 'bg-pink-600 border-pink-500 text-white'
                  : 'bg-transparent border-pink-400 text-pink-300 hover:bg-pink-700 hover:text-white'} `}
            >
              {code}
            </motion.button>
          ))}
        </motion.div>

        {/* Definition Panel */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-6 bg-[#112240] rounded-lg border border-pink-500 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-pink-300 mb-2">{active}</h3>
            <p className="text-gray-300 leading-relaxed">
              {ploDefinitions[active]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default POAttainment;
