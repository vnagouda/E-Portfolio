import React from 'react';
import { motion } from 'framer-motion';

const swotData = {
  Strengths: [
    'Hands-on AI, IoT, and Cloud project experience',
    'Strong full-stack development and deployment skills',
    'Exposure to real-world industrial projects (Aqufish)'
  ],
  Weaknesses: [
    'Limited hands-on experience with Kubernetes and advanced DevOps tools',
    'Public speaking and on-stage confidence needs improvement'
  ],
  Opportunities: [
    'Pursuing Master’s in the UK with global exposure',
    'Freelance and startup potential in AI/IoT sector',
    'Growing demand for generative AI expertise'
  ],
  Threats: [
    'Fast-paced tech evolution requires constant upskilling',
    'High competition in AI/cloud job markets',
    'Economic uncertainties affecting global job markets'
  ]
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotate: -5 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 90 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const SWOT = () => {
  return (
    <motion.section
      id="swot"
      className="min-h-screen p-8 text-white relative"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* Decorative Gradient Background Overlay */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 border-b-2 border-pink-600 inline-block">
          SWOT Analysis
        </h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8" variants={containerVariants}>
          {Object.entries(swotData).map(([category, items], idx) => (
            <motion.div
              key={category}
              className="p-6 rounded-xl shadow-xl bg-gradient-to-br from-[#112240] to-[#1e2a3a] border border-pink-500 hover:shadow-pink-500/50"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 className="text-2xl font-semibold text-pink-300 mb-4">
                {category}
              </h3>
              <motion.ul className="list-disc list-inside space-y-2" variants={containerVariants}>
                {items.map((point, i) => (
                  <motion.li
                    key={i}
                    className="text-base text-gray-200"
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SWOT;
