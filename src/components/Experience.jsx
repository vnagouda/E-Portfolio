import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Intern – Tata Consultancy Services (TCS)',
    duration: 'Feb 2024 – Nov 2025 (10 Months)',
    details: [
      'Co-developed AquFish, an IoT-powered aquaculture monitoring system with real-time AI analytics.',
      'Integrated Raspberry Pi with AWS Amplify, Cognito, and DynamoDB for secure edge-to-cloud communication.',
      'Designed and deployed TensorFlow-based AI models on EC2 for fish health and growth prediction.',
      'Built a Jetpack Compose mobile app to visualize sensor metrics and camera feeds.',
      'Performed EDA and developed ML pipelines for Feed Conversion Ratio (FCR) prediction and anomaly detection.',
      'Optimized cloud costs by restructuring idle compute services (30% reduction).'
    ]
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen p-8 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 border-b-2 border-pink-600 inline-block">
          Experience
        </h2>

        <motion.div
          className="relative ml-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-pink-600"></div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative mb-12 pl-8 hover:scale-105 transform-gpu transition-transform duration-300"
              whileHover={{ rotateY: 5 }}
            >
              <div className="absolute -left-4 top-1">
                <div className="w-4 h-4 bg-pink-600 rounded-full animate-pulse"></div>
              </div>

              <h3 className="text-2xl font-semibold text-pink-400">{exp.title}</h3>
              <p className="mt-1 text-gray-300 italic">{exp.duration}</p>

              <ul className="mt-3 list-disc list-inside space-y-2 text-base text-gray-200">
                {exp.details.map((detail, dIdx) => (
                  <motion.li key={dIdx} whileHover={{ x: 5 }}>
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
